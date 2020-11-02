// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, Lexer, ListTokenSource, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { parse } from 'path';

var clang = require("clang-format");

interface ErrorDescription {
    offendingSymbol: any;
	line: number;
	charPositionInLine: number;
	msg : string
	e: RecognitionException | undefined
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

	constructor() {
		this.completionStrings = [];
		this.completionList = new vscode.CompletionList(this.completionStrings,false);
	}

	getList() {
		return this.completionList;
	}

	/*
	* root
	*/
	enterProgram(context: ProgramContext) {
		//console.log(`Program start line number ${context._start.line}`);
		// ...
	}

	
	/*
	* new scope detected
	*/
	enterBlock(context: BlockContext) {
		console.log(`Block start line number ${context._start.line}`);
		console.log(`Block end line number ${context._stop?.line}`);
		console.log(context.text);
	}

	/*
	* new variable detected
	*/
	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {
		//console.log(`Variable or field start line number ${context._start.line}`);
		// ...
		//const tmp = new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword);
		//console.log("variable context: ",context.text);
		this.completionStrings.push(new vscode.CompletionItem(
			context.getChild(0).text,
			vscode.CompletionItemKind.Variable
		));
		//return context.componentName;
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

	enterCompilationUnit(context: CompilationUnitContext) {
		//console.log(`CompilationUnit start line number ${context._start.line}`);		
	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		//console.log(`Variable start line number ${context._start.line}`);
		// ...
	}
	enterClassDeclaration(context: ClassDeclarationContext) {
		//console.log(`Class start line number ${context._start.line}`);
		// ...
	}

	enterClassBody(context: ClassBodyContext) {
		//console.log(`Stepping into class on line ${context._start.line}`);
		//console.log("class body context: ",context.text);
	}

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		//console.log(`Function start line number ${context._start.line}`);		
		// ..		
	}

	exitProgram(context: ProgramContext) {
		this.completionList = new vscode.CompletionList(this.completionStrings, false);
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
				console.log('el: ', element.label);
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
				console.log('el: ', element.label);
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

		context.subscriptions.push(testFunc,ScanCode,provider);
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
	console.log(parseTree.childCount);
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
		candidateStrings = getCompletionStrings(parser, candidates, scopedSymbol);
	}
	
	const completionStrings : vscode.CompletionItem[] = [];
	candidateStrings.forEach(c => {
		let label = c.replace('\'','').replace('\'','');
		const tmp = new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword);
		if (!(tmp.label.includes("<end of keywords>") || tmp.label.includes("<end of functionNames>") || tmp.label.includes("<end of variableNames>"))) {
			completionStrings.push(tmp);						
		}
	});
	// a simple completion item which inserts `Hello World!`
	/*completionStrings.forEach(string => {
		completionList.items.push(string);
	});*/
	completionList = new vscode.CompletionList(completionStrings,false);
	let l = listener.getList();
	l.items.forEach(element => {
		completionList.items.push(element);
	});
		
}


function getTokensFromParser(parser: MonkeyCParser) : Token[] {

	let stream = parser.inputStream;
	console.log(stream.getText());
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

function getCompletionStrings(parser: MonkeyCParser, candidates: c3.CandidatesCollection, symbol: ScopedSymbol) {

	let keywords: string[] = [];
	
	

	for (let candidate of candidates.tokens) {
		keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
	}

	let functionNames: string[] = [];
	let variableNames: string[] = [];

	for (let candidate of candidates.rules) {

		switch (candidate[0]) {
			
			case MonkeyCParser.RULE_functionDeclaration: {
				//symbol that covers the caret position.
				let functions = symbol.getSymbolsOfType(c3.MethodSymbol);
				for (let func of functions) {
					functionNames.push(func.name);
				}					
				break;
			}

			case MonkeyCParser.RULE_varOrFieldDeclaration: {
				if (MonkeyCParser.RULE_componentName) {
					if (MonkeyCParser.RULE_id) {
						let variables = symbol.getSymbolsOfType(c3.VariableSymbol);		
						let fields = symbol.getSymbolsOfType(c3.FieldSymbol);		
						for (let variable of variables) {
							variableNames.push(variable.name);
						}	
						for (let field of fields) {
							variableNames.push(field.name);
						}	
					}
				}
	
				break;
			}
		}			
	}

	// Finally combine all found lists into one for the UI.
	// We do that in separate steps so that you can apply some ordering to each of your sublists.
	// Then you also can order symbols groups as a whole depending their importance.
	let candidateStrings: string[] = [];
	candidateStrings.push(...keywords);
	candidateStrings.push("<end of keywords>");
	candidateStrings.push(...functionNames);
	candidateStrings.push("<end of functionNames>");
	candidateStrings.push(...variableNames);
	candidateStrings.push("<end of variableNames>");

	return candidateStrings;
}

function getCursorPosition() : CaretPosition {

	// current editor
	const editor = vscode.window.activeTextEditor;
	console.log(editor?.document.getText());
	let pos : CaretPosition;
	// check if there is no selection
	if (editor?.selection.isEmpty) {
	// the Position object gives you the line and character where the cursor is
	const position = editor.selection.active;
	pos = { line: position.line, column: position.character };

	//position.
	return pos;
	// move cursor to this new position?
	//var newPosition = position.with(position.line, 0);
	} else {
		pos = { line: -1, column: -1};
		return pos;
	}
}

let testFunc = vscode.commands.registerCommand('monkeyc-extension.testFunc', () => {
	var editor = vscode.window.activeTextEditor;
	
	let file = editor?.document.uri.fsPath;
	console.error('currently edited file: ' + file?.substring(file?.lastIndexOf("\\")+1));
});

let ScanCode = vscode.commands.registerCommand('monkeyc-extension.ScanCode', () => {

	if (vscode.window.activeTextEditor) {

		let doc = vscode.window.activeTextEditor.document;
		doc.save();
	
		ParseCode(doc);
		let errors = errorListener.getSyntaxErrors();
		if (errors.length === 0) {
			console.log('no errors detected, clean code!');
		} else {
			console.log(errors.length,' errors detected!');
		}

		UpdateCollection(doc,errors);
		errorListener.printSyntaxErrors();
		
	}
});