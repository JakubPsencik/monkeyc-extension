import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonToken, CommonTokenStream, Lexer, ListTokenSource, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, BlockStatementContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, ComponentNameContext, FieldDeclarationContext, FunctionDeclarationContext, IdContext, LiteralContext, LiteralExpressionContext, MonkeyCParser, ProgramContext, StatementContext, TernaryExpressionContext, UsingDeclarationContext, VariableDeclarationContext, VariableDeclarationListContext, VariableInitializerContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AST } from './AST';
import { Node } from './Node';
import { throws } from 'assert';


var clang = require("clang-format");

interface ErrorDescription {
    offendingSymbol: any;
	line: number;
	charPositionInLine: number;
	msg : string
	e: RecognitionException | undefined
}

export interface Leaf {
	parent: Node,
	text: string
}

class MyErrorListener extends MonkeycErrorListener {

	syntaxErrors: ErrorDescription[] = [];

	getSyntaxErrors() {
		return this.syntaxErrors;
	}

	clearSyntaxErrors() {
		for (let i = (this.syntaxError.length); i >= 0; i--) {
			this.syntaxErrors.pop();
		}
	}

	printSyntaxErrors() {
		console.log('List of syntax errors: ');
		this.syntaxErrors.forEach(err => {
			console.log(err.offendingSymbol.toString(),' ',err.line.toString(),' ',err.charPositionInLine.toString(),' ',err.msg.toString());
		});
		console.log('-------------------------------------------------------------');
	}

	syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error(`line ${line}:${charPositionInLine} ${msg}`);

		let temp : ErrorDescription = { 
			offendingSymbol: offendingSymbol,
			line: line,
			charPositionInLine: charPositionInLine,
			msg: msg,
			e: e
		};

		this.syntaxErrors.push(temp);
	}
}

class EnterFunctionListener implements MonkeyCListener {
	completionStrings: vscode.CompletionItem[];
	completionList: vscode.CompletionList;
	AST : AST;

	/* index of current BlockContext in AST */
	currentScopeIndex: number;

	constructor() {
		this.completionStrings = [];
		this.completionList = new vscode.CompletionList(this.completionStrings,false);
		this.AST = new AST();
		this.currentScopeIndex = -1;
	}

	getList() { return this.completionList; }

	getAST() { return this.AST; }

	
	/* root */
	enterProgram(context: ProgramContext) {
		
		let node = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  undefined,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		this.AST.addNode(node);
		this.AST.root = node;
		this.AST.currentNode = node;
		
	}

	exitProgram(context: ProgramContext) {
		this.completionList = new vscode.CompletionList(this.completionStrings, false);
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		
		let compilationUnitNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(compilationUnitNode);

		this.AST.addNode(compilationUnitNode);
		this.AST.currentNode = compilationUnitNode;
		
	}

	
	exitCompilationUnit() {
		//console.log('exitCompilationUnit\n');
		this.AST.currentNode = this.AST.root;
	}

	enterStatement(context: StatementContext) {

		let statement = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(statement);

		this.AST.addNode(statement);
		this.AST.currentNode = statement;
	}

	exitStatement() {

	}
	
	/*
	* new scope detected
	*/
	enterBlock(context: BlockContext) {
		/*console.log(`Block start line number ${context._start.line}`);
		console.log(`Block end line number ${context._stop?.line}`);
		console.log(context.text);*/

		let block = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		
		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  block,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text
		
		);
		block.addChild(LBRACE);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(block);

		
		this.AST.addNode(block);
		this.currentScopeIndex = this.AST.getParseTree().length;
		this.AST.addNode(LBRACE);

		this.AST.currentNode = block;

	}

	exitBlock() {
		//console.log('exitBlock\n');
		let parent = this.AST.getParseTree()?.[this.currentScopeIndex-1];
		let RBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  parent,
			/*no children for leafs */  undefined,
			/*value of the context: */  "}"
		);

		parent.addChild(RBRACE);
		this.AST.addNode(RBRACE);
		this.AST.currentNode = parent;
	}

	enterBlockStatement(context: BlockStatementContext) {

		let blockStatement = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(blockStatement);
		this.AST.addNode(blockStatement);

		this.AST.currentNode = blockStatement;

	}

	exitBlockStatement() {
		this.AST.currentNode = this.AST.getParseTree()?.[this.currentScopeIndex-1];
	}


	enterVariableDeclarationList(context: VariableDeclarationListContext) {

		let variableDeclarationListNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let comma = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text
		
		);



		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(variableDeclarationListNode);
		this.AST.currentNode.addChild(comma);

		this.AST.addNode(variableDeclarationListNode);
		this.AST.addNode(comma);

		this.AST.currentNode = variableDeclarationListNode;
	}

	exitVariableDeclarationList() {

	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		//console.log(`Variable start line number ${context._start.line}`);
		// ...

		let variableDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		);

		let var_ = new Node(
			
			/* context of this node: */ /*"var"*/undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(var_);
		this.AST.currentNode.addChild(variableDeclarationNode);

		this.AST.addNode(var_);
		this.AST.addNode(variableDeclarationNode);
		this.AST.currentNode = variableDeclarationNode;
	}

	exitVariableDeclaration() { }

	/*
	* new variable detected
	*/
	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {
		//console.log(`Variable or field start line number ${context._start.line}`);
		// ...
		//const tmp = new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword);
		//console.log("variable context: ",context.text);
		/*this.completionStrings.push(new vscode.CompletionItem(
			context.getChild(0).text,
			vscode.CompletionItemKind.Variable
		));*/

		let varOrFieldDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(varOrFieldDeclarationNode);

		this.AST.addNode(varOrFieldDeclarationNode);
		this.AST.currentNode = varOrFieldDeclarationNode;
		
	}

	
	exitVarOrFieldDeclaration() {
		//pri exitu nastavit ten aktualni node na ten ktery sem prave exitnul
		//parent?
		//console.log('exitVarOrFieldDeclaration\n');
	}

	enterComponentName(context: ComponentNameContext) {

		let componentNameNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(componentNameNode);

		this.AST.addNode(componentNameNode);
		this.AST.currentNode = componentNameNode;
	}

	exitComponentName() { }


	enterId(context: IdContext) {

		let variableNameNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context.getChild(0).text
		
		);

		let children : Node[] = [];
		children.push(variableNameNode);

		let idNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         children,
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(idNode);

		this.AST.addNode(idNode);
		this.AST.addNode(variableNameNode);

		
		this.AST.currentNode = variableNameNode;
	}

	exitId() { }

	enterVariableInitializer(context: VariableInitializerContext) {
	
		let EQ_Node = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text
		
		);

		let variableInitializerNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(EQ_Node);
		this.AST.currentNode.addChild(variableInitializerNode);

		this.AST.addNode(EQ_Node);
		this.AST.addNode(variableInitializerNode);

		this.AST.currentNode = variableInitializerNode;

	}

	exitVariableInitializer() { }

	
	enterLiteralExpression(context: LiteralExpressionContext) {

		let literalExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalExpressionNode);

		this.AST.addNode(literalExpressionNode);
		this.AST.currentNode = literalExpressionNode;

	}

	exitLiteralExpression() { }


	enterLiteral(context: LiteralContext) {

		let literalValueNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */ context.getChild(0).text
			
		);
		
		let children : Node[] = [];
		children.push(literalValueNode);

		let literalNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         children,
			/* value of context:  */	context.text

		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalNode);

		this.AST.addNode(literalNode);
		this.AST.addNode(literalValueNode);

		this.AST.currentNode = literalValueNode;
		
	}

	exitLiteral() {

	}

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		//console.log(`Function start line number ${context._start.line}`);		
		// ..	
		this.completionStrings.push(new vscode.CompletionItem(
			context.getChild(2).text,
			vscode.CompletionItemKind.Function
		));
	}

	enterUsingDeclaration(context: UsingDeclarationContext) {
		//console.log(`Using start line number ${context._start.line}`);		
		// ...
	}

	enterFieldDeclaration(context: FieldDeclarationContext) {
		//console.log(`Field start line number ${context._start.line}`);		
	}


	enterArguments(context: ArgumentsContext) {
		//console.log(`Argument start line number ${context._start.line}`);		
	}

	enterClassDeclaration(context: ClassDeclarationContext) {
		//console.log(`Class start line number ${context._start.line}`);
		// ...
	}

	enterClassBody(context: ClassBodyContext) {
		//console.log(`Stepping into class on line ${context._start.line}`);
		//console.log("class body context: ",context.text);
	}
}

	/*
	* vytvoreni nove kolekce s diagnostikou
	*/
	let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
	let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
	let errorListener = new MyErrorListener();
	let parser : MonkeyCParser;
	let completionList : vscode.CompletionList;

export function activate(context: vscode.ExtensionContext) {	

	//highlight provider
	vscode.languages.registerDocumentFormattingEditProvider("monkeyc", {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			const exePackageLocation = path.dirname(clang.location);
			console.log(exePackageLocation);
			var exe;
			if (os.platform() === "win32") {
				exe = path.join(exePackageLocation, "/bin/win32/clang-format.exe");
			} else {
				exe = path.join(exePackageLocation, `/bin/${os.platform()}_${os.arch()}/clang-format`);				
			}
			var child = spawn(exe, [document.fileName, "-i", "--style=file", "--fallback-style=google"]);
			return [];
		}
	});
	
	vscode.workspace.onDidOpenTextDocument(() => {
		vscode.window.showInformationMessage('Extension started!');
		//parse the edited file after extension starts
		if (vscode.window.activeTextEditor) {		
			let document = vscode.window.activeTextEditor.document;
			document.save();

			ParseCode(document);
			UpdateCollection(document,errorListener.getSyntaxErrors());

			completionList.items.forEach(element => {
				console.log('suggestion: ', element.label);
			});

			context.subscriptions.push(collection);
		}
	});

	vscode.workspace.onDidChangeTextDocument(() => {
		if (vscode.window.activeTextEditor) {
			errorListener.clearSyntaxErrors();
			collection.clear();
			diagnosticMap.clear();
			
			//clear autocomplete suggestions
			while (completionList.items.length > 0) {
				completionList.items.pop();
			}
			
			let document = vscode.window.activeTextEditor.document;
			document.save();
				
			ParseCode(document);
			let errors = errorListener.getSyntaxErrors();
			UpdateCollection(document,errors);
			
			completionList.items.forEach(element => {
				console.log('suggestion: ', element.label);
			});
			context.subscriptions.push(collection);
		}
	});

	let provider = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {			
			return completionList;
			}
		});

		context.subscriptions.push(provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}

export type CaretPosition = { line: number, column: number };

export function computeTokenIndex(parseTree: ParseTree, caretPosition: CaretPosition): number | undefined {
	if (parseTree instanceof TerminalNode) {
		return computeTokenIndexOfTerminalNode(parseTree, caretPosition);
	} else {
		return computeTokenIndexOfChildNode(parseTree, caretPosition);
	}
}

function ParseCode(document: vscode.TextDocument) {

	let listener: MonkeyCListener = new EnterFunctionListener();
	let inputStream = new ANTLRInputStream(readFileSync(document.uri.fsPath, 'utf-8'));
	let lexer = new MonkeyCLexer(inputStream);
	lexer.removeErrorListeners();
	lexer.addErrorListener(errorListener);
	let tokenStream = new CommonTokenStream(lexer);
	parser = new MonkeyCParser(tokenStream);
	parser.buildParseTree = true;
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);

	let parseTree = parser.program();
	ParseTreeWalker.DEFAULT.walk(listener,parseTree);		

	ProvideAutocomplete(parser, listener, parseTree);
	
	let stream = parser.inputStream;
	stream.seek(0);
	let tokens = [];
	let offset = 1;
	while(true) {
		let token = stream.LT(offset++);
		tokens.push(token);
		if (token.type === -1) {
			break;
		}    
	}

	for(let i = 0; i < tokens.length; i++) {
		console.log('token ', i , ': ', 'type = ', tokens[i].type, ' | ', 'ctx: ', tokens[i].text,' | ', 'line: ', tokens[i].line, ' | ', 'start_index: ', tokens[i].startIndex, ' | ', 'stop_index: ', tokens[i].stopIndex, ' | ', 'charPos: ', tokens[i].charPositionInLine, '\n');
	}

}

function ProvideAutocomplete(parser : MonkeyCParser, listener: MonkeyCListener, parseTree: ProgramContext) {

	let core = new c3.CodeCompletionCore(parser);
	SetAutocompleteRules(core);

	let position = getCursorPosition();
	let pos : CaretPosition =  {
		line : position.line,
		column : position.column
	};
	//console.log(parseTree.childCount);
	let	index = computeTokenIndex(parseTree,pos);

//-------------------------------
	//get token from parser
	const tokens = getTokensFromParser(parser);
	const scopedSymbol : c3.ScopedSymbol = getScopedSymbol(tokens);
//-------------------------------

	let candidateStrings: string[] = [];
	if (index !== undefined) {
		console.log('index: ',index);
		let candidates = core.collectCandidates(index,parser.ruleContext);
		candidateStrings = getKeywords(parser, candidates, scopedSymbol);
	}
	
	const completionStrings : vscode.CompletionItem[] = [];
	candidateStrings.forEach(c => {
		let label = c.replace('\'','').replace('\'','');
		const tmp = new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword);
		if (!(tmp.label.includes("<end of keywords>") || tmp.label.includes("<end of functionNames>") || tmp.label.includes("<end of variableNames>") || tmp.label.includes("-2"))) {
			completionStrings.push(tmp);						
		}
	});

	let tree = listener.getAST().getParseTree();
	let localVariables = collectLocalVariables(tree,pos);

	localVariables.forEach(v => {
		completionStrings.push(v);
	});
	
	completionList = new vscode.CompletionList(completionStrings,false);


		
}

function collectLocalVariables(tree: Node[], position : CaretPosition) {

	let completionStrings : vscode.CompletionItem[] = [];

	for(let i = 0; i < tree.length; i++) {
		
		let ctx = tree[i].getContext();
		if (ctx) {
			//20 - BlockContext
			if (ctx.ruleIndex === 20) {	
				//check whether im in the right scope
				if(position.line > ctx._start.line && position.line < ctx._stop!.line) {
					let children = tree[i].getChildren();

					children!.forEach(child => {
						//20 - BlockStatementContext
						if(child.getContext()?.ruleIndex === 21) {

							let variableName = child.getChildren()?.[0].getChildren()?.[1].getChildren()?.[0].getChildren()?.[0].getValue();
							completionStrings.push(new vscode.CompletionItem(
								variableName!,
								vscode.CompletionItemKind.Variable
							));
							
						}
					});
					console.log('I FOUND IT');
				}

			}
		}	
	}
	return completionStrings;
}

function getTokensFromParser(parser: MonkeyCParser) : Token[] {

	let stream = parser.inputStream;
	stream.seek(0);
	let tokens : Token[] = [];
	let offset = 1;
	while(true) {
		let token = stream.LT(offset++);
		tokens.push(token);
		if (token.type === -1) {
			break;
		}    
	}

	return tokens;
}

function getScopedSymbol(tokens: Token[]) : c3.ScopedSymbol {

	let cursorPos = getCursorPosition();

	tokens.forEach(token => {

		let startInLine = token.charPositionInLine;
		let endInLine = startInLine + (token.text !== undefined ? token.text.length : 0);

		if(token.line === (cursorPos.line+1)) {
			if (startInLine <= (cursorPos.column+1) && endInLine >= (cursorPos.column+1)) {
				return new ScopedSymbol(token.text);
			}
		}
	});

	return new ScopedSymbol(" ");
}

function SetAutocompleteRules(core : c3.CodeCompletionCore) {

	core.preferredRules = new Set([ 
		MonkeyCParser.RULE_varOrFieldDeclaration,
		MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_id
		/*MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_variableDeclaration,
		MonkeyCParser.RULE_variableDeclarationList,*/
	]);

	core.ignoredTokens = new Set([
		MonkeyCLexer.DOT, MonkeyCLexer.SEMI, MonkeyCLexer.QUES, MonkeyCLexer.COLON, MonkeyCLexer.MULTI_LINE_COMMENT_START,
		MonkeyCLexer.MULTI_LINE_COMMENT_END, MonkeyCLexer.STRING_A, MonkeyCLexer.STRING_B, MonkeyCLexer.LBRACE, MonkeyCLexer.RBRACE, MonkeyCLexer.LBRACE, MonkeyCLexer.LBRACKET,
		MonkeyCLexer.RBRACKET, MonkeyCLexer.LPAREN, MonkeyCLexer.RPAREN, MonkeyCLexer.COMMA, MonkeyCLexer.STAR, MonkeyCLexer.BAR, MonkeyCLexer.LT,
		MonkeyCLexer.GT, MonkeyCLexer.EQGT, MonkeyCLexer.AMP, MonkeyCLexer.BARBAR, MonkeyCLexer.AMPAMP, MonkeyCLexer.PLUSPLUS, MonkeyCLexer.SUBSUB, MonkeyCLexer.EQ,
		MonkeyCLexer.EQEQ, MonkeyCLexer.BANGEQ, MonkeyCLexer.PLUSEQ, MonkeyCLexer.SUBEQ, MonkeyCLexer.STAREQ, MonkeyCLexer.SLASHEQ, MonkeyCLexer.AMPEQ,
		MonkeyCLexer.CARETEQ, MonkeyCLexer.PERCENTEQ, MonkeyCLexer.CARET, MonkeyCLexer.PERCENT, MonkeyCLexer.TILDE, MonkeyCLexer.BANG, MonkeyCLexer.PLUS,
		MonkeyCLexer.SUB, MonkeyCLexer.SLASH, MonkeyCLexer.WhiteSpaces, MonkeyCLexer.LineTerminator, MonkeyCLexer.SINGLE_LINE_COMMENT, MonkeyCLexer.SINGLE_LINE_DOC_COMMENT,
		MonkeyCLexer.BLOCK_COMMENT, MonkeyCLexer.LONGLITERAL, MonkeyCLexer.INTLITERAL, MonkeyCLexer.HEX_LITERAL, MonkeyCLexer.FLOATLITERAL, MonkeyCLexer.DOUBLELITERAL, 
		MonkeyCLexer.CHARLITERAL, MonkeyCLexer.STRING, MonkeyCLexer.IDENTIFIER
  	]);
}

function UpdateCollection(document: vscode.TextDocument, errors: ErrorDescription[]) {
	
	let diagnostics = diagnosticMap.get(document.uri.toString());
	errors.forEach(err => {
		let data = (err.offendingSymbol).toString();
		let offSymbol = data.substring(data.indexOf("'")+1,data.lastIndexOf("'"));
	
		if (!diagnostics) { diagnostics = []; }
			diagnostics.push(new vscode.Diagnostic(			
				new vscode.Range(new vscode.Position(err.line-1, err.charPositionInLine), new vscode.Position(err.line-1,((err.charPositionInLine)+offSymbol.length))),
					err.msg,
					vscode.DiagnosticSeverity.Error)		
				);
			diagnosticMap.set(document.uri.toString(), diagnostics);		
	});
	diagnosticMap.forEach((diags, file) => {
		collection.set(vscode.Uri.parse(file), diags);
	  });
}

function computeTokenIndexOfTerminalNode(parseTree: TerminalNode, caretPosition: CaretPosition) {
	let start = parseTree.symbol.charPositionInLine;
	let stop = parseTree.symbol.charPositionInLine + parseTree.text.length;

	if (parseTree.symbol.line === caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
		return parseTree.symbol.tokenIndex;
	} else {
		return undefined;
	}
}

function computeTokenIndexOfChildNode(parseTree: ParseTree, caretPosition: CaretPosition) {
    for (let i = 0; i < parseTree.childCount; i++) {
        let index = computeTokenIndex(parseTree.getChild(i), caretPosition);
        if (index !== undefined) {
            return index;
        }
    }
    return undefined;
}

function getKeywords(parser: MonkeyCParser, candidates: c3.CandidatesCollection, symbol: ScopedSymbol) {

	let keywords: string[] = [];
	
	for (let candidate of candidates.tokens) {
		keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
	}

	return keywords;
}

function getCursorPosition() : CaretPosition {

	// current editor
	const editor = vscode.window.activeTextEditor;
	//console.log(editor?.document.getText());
	let pos : CaretPosition;
	// check if there is no selection
	if (editor?.selection.isEmpty) {
	// the Position object gives you the line and character where the cursor is
	const position = editor.selection.active;
	pos = { line: position.line, column: position.character };

	return pos;

	} else {
		pos = { line: -1, column: -1};
		return pos;
	}
}