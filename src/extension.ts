// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, ExpressionContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

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

	clear() {
		//console.log('\u001b[' + 91 + 'm' + 'hello stack' + '\u001b[0m');
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

	// Assuming a parser rule with name: `Program`
	enterProgram(context: ProgramContext) {
		//console.log(`Program start line number ${context._start.line}`);
		
		// ...
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

	enterBlock(context: BlockContext) {
		//console.log(`Block start line number ${context._start.line}`);		
	}

	enterExpression(context: ExpressionContext) {
		//console.log(`Expression start line number ${context._start.line}`);		
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		//console.log(`CompilationUnit start line number ${context._start.line}`);		
	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		//console.log(`Variable start line number ${context._start.line}`);
		// ...
	}

	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {
		//console.log(`Variable or field start line number ${context._start.line}`);
		// ...
	}

	enterClassDeclaration(context: ClassDeclarationContext) {
		//console.log(`Class start line number ${context._start.line}`);
		// ...
	}

	enterClassBody(context: ClassBodyContext) {
		//console.log(`Stepping into class on line ${context._start.line}`);
	}

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		//console.log(`Function start line number ${context._start.line}`);		
		// ..		
	}
}

	/*
	* vytvoreni nove kolekce s diagnostikou
	*/
	let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
	let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
	let errorListener = new MyErrorListener();
	let started = true;


export function activate(context: vscode.ExtensionContext) {
	//highlighting provider
	
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
	
	if (started) {
		vscode.window.showInformationMessage('Extension started!');
		//parse the edited file after extension starts
		if (vscode.window.activeTextEditor) {		
			let document = vscode.window.activeTextEditor.document;
			document.save();

			ParseCode(document);
			UpdateCollection(document,errorListener.getSyntaxErrors());
			context.subscriptions.push(collection);
		}
		started = false;
	}
	
	vscode.workspace.onDidChangeTextDocument((change) => {
		if (vscode.window.activeTextEditor) {
			errorListener.clearSyntaxErrors();
			collection.clear();
			diagnosticMap.clear();
			
			let document = vscode.window.activeTextEditor.document;
			document.save();
				
			ParseCode(document);
			let errors = errorListener.getSyntaxErrors();
			UpdateCollection(document,errors );
			
			context.subscriptions.push(collection);
		}
	});

	context.subscriptions.push(testFunc,ScanCode);

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
	let parser = new MonkeyCParser(tokenStream);
	parser.buildParseTree = true;
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);

	let parseTree = parser.program();

	ParseTreeWalker.DEFAULT.walk(listener,parseTree);

	/*
	 *  inicialize ANTLR4 Code Completion Core
	*/
	let core = new c3.CodeCompletionCore(parser);
	core.showResult = true;
	//core.showDebugOutput = true;
	//core.showRuleStack = true;

	/*core.preferredRules = new Set([ 
		MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_varOrFieldDeclaration,
		MonkeyCParser.RULE_variableDeclaration,
		MonkeyCParser.RULE_variableDeclarationList]);*/

	core.ignoredTokens = new Set([
		/*			 ID*/
		MonkeyCLexer.IDENTIFIER,
		/*			 +                  - */
		MonkeyCLexer.PLUS, MonkeyCLexer.SUB,
		/*			 MULTIPLY			DIVIDE*/
		MonkeyCLexer.STAR, MonkeyCLexer.SLASH,
		/*           == */
		MonkeyCLexer.EQEQ,
		/*           (                    )*/
		MonkeyCLexer.LPAREN, MonkeyCLexer.RPAREN,
	  ]);

	let caretPosition = getCursorPosition();
	let symb : ScopedSymbol;
	//symb = new ScopedSymbol("PLUS");



	let	index = computeTokenIndex(parseTree,caretPosition);
	

	if (index !== undefined) {
		console.log('index: ',index);
		let candidates = core.collectCandidates(index);
		let candidateStrings: string[] = [];

		let completions : any = []; 
		candidates.tokens.forEach((_, k) => {
			completions.push(parser.vocabulary.getSymbolicName(k)?.toLowerCase());
		});
		//return completions;
		for(let i = 0; i < completions.length; i++) {
			console.log(completions[i].toString());
		}

		//candidateStrings = getCompletionStrings(parser, candidates, symb);

		/*console.log('candidate strings:\n');
		candidateStrings.forEach(str => {
			console.log(str);
		});
		console.log('----------------------------------------');*/
		//printCandidates(candidates);
	}		
	
	
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

			case MonkeyCParser.RULE_variableDeclarationList: {
				let variables = symbol.getSymbolsOfType(c3.FieldSymbol);				
				for (let variable of variables) {
					variableNames.push(variable.name);
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
	candidateStrings.push(...functionNames);
	candidateStrings.push(...variableNames);

	return candidateStrings;
}

function printCandidates(candidates : c3.CandidatesCollection) {

	console.log('candidate list');
	candidates.rules.forEach((rule) => {

		console.log(rule.values);
		

	});
	console.log('----------------------------EXIT CANDIDATES----------------------------');

	console.log('token list');
	candidates.tokens.forEach((token) => {

		console.log(token.values);
		

	});
	console.log('----------------------------EXIT TOKENS----------------------------');
}

function getCursorPosition() : CaretPosition {

	// current editor
	const editor = vscode.window.activeTextEditor;
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