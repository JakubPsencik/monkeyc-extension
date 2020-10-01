// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRErrorListener, ANTLRInputStream, CommonTokenStream, ConsoleErrorListener, IntStream, LexerInterpreter, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, ExpressionContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import { languages, Diagnostic } from 'vscode';
import { MonkeyCVisitor } from './MonkeyCVisitor';
import { Interval } from 'antlr4ts/misc/Interval';
import { parse } from 'path';
import { Override } from 'antlr4ts/Decorators';
import { throws } from 'assert';
import { Console } from 'console';
import { cpuUsage } from 'process';
import { EDQUOT } from 'constants';


class MyErrorListener extends ConsoleErrorListener {

	@Override
	syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		throw new Error("line " + line + ":" + charPositionInLine + " " + msg);
	}

}

class EnterFunctionListener implements MonkeyCListener {

	constructor(public collection: vscode.DiagnosticCollection) {
		collection.clear();
	}

	// Assuming a parser rule with name: `Program`
	enterProgram(context: ProgramContext) {
		console.log(`Program start line number ${context._start.line}`);
		
		// ...
	}

	enterUsingDeclaration(context: UsingDeclarationContext) {
		console.log(`Using start line number ${context._start.line}`);		
		// ...
	}

	enterFieldDeclaration(context: FieldDeclarationContext) {
		console.log(`Field start line number ${context._start.line}`);		
	}


	enterArguments(context: ArgumentsContext) {
		console.log(`Argument start line number ${context._start.line}`);		
	}

	enterBlock(context: BlockContext) {
		console.log(`Block start line number ${context._start.line}`);		
	}

	enterExpression(context: ExpressionContext) {
		console.log(`Expression start line number ${context._start.line}`);		
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		console.log(`CompilationUnit start line number ${context._start.line}`);		
	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		console.log(`Variable start line number ${context._start.line}`);
		// ...
	}

	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {
		console.log(`Variable or field start line number ${context._start.line}`);
		// ...
	}

	enterClassDeclaration(context: ClassDeclarationContext) {
		console.log(`Class start line number ${context._start.line}`);
		// ...
	}

	enterClassBody(context: ClassBodyContext) {
		console.log(`Stepping into class on line ${context._start.line}`);
	}

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		
		console.log(`Function start line number ${context._start.line}`);		
		// ..		
	}
  }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	/*
	* vytvoreni nove kolekce s diagnostikou
	* pokud dochazi, k uprave textu, spusti se metoda updateDiagnostics
	*/
	const collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
	

	if (vscode.window.activeTextEditor) {
	//activeTextEditor.document - dokument, ktery mam prave otevreny, a ktery edituji...
		updateDiagnostics(vscode.window.activeTextEditor.document, collection);
	}
	context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => 
		{
		if (editor) {
				collection.set(editor.document.uri, [{
					code: '',
					message: 'what a huge document this is',			
					range: new vscode.Range(new vscode.Position(0, 0), new vscode.Position(47, 1)),				
					severity: vscode.DiagnosticSeverity.Error,				
					source: '',
					relatedInformation: [
						new vscode.DiagnosticRelatedInformation(new vscode.Location(editor.document.uri, new vscode.Range(new vscode.Position(1, 8), new vscode.Position(1, 9))), 'first assignment to `x`')
					]
				}]);
			
			//updateDiagnostics(editor.document, collection);
		}
	}));
	
	let testFunc = vscode.commands.registerCommand('monkeyc-extension.testFunc', () => {
		var editor = vscode.window.activeTextEditor;
		
		let file = editor?.document.uri.fsPath;
		console.log('currently edited file: ' + file?.substring(file?.lastIndexOf("\\")+1));
	});

	const f = readFileSync('e:\\GitHub\\monkeyc-extension\\src\\code_snippets\\test0.txt', 'utf-8');

	let ScanCode = vscode.commands.registerCommand('monkeyc-extension.ScanCode', () => 
	{
	let inputStream = new ANTLRInputStream(f);
	let lexer = new MonkeyCLexer(inputStream);

	//*****/
	/*lexer.removeErrorListeners();
	lexer.addErrorListener(ConsoleErrorListener.INSTANCE);*/

	let tokenStream = new CommonTokenStream(lexer);

	let parser = new MonkeyCParser(tokenStream);
	parser.buildParseTree = true;

	//*****/
	/*parser.removeErrorListeners();
	parser.addErrorListener(ConsoleErrorListener.INSTANCE);*/

	// Parse the input, where `compilationUnit` is whatever entry point you defined
	let tree = parser.program();

	const listener: MonkeyCListener = new EnterFunctionListener(collection);

	ParseTreeWalker.DEFAULT.walk(listener,tree);	
	});

	context.subscriptions.push(testFunc,ScanCode);

}
// this method is called when your extension is deactivated
export function deactivate() {}

function updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection): void {
	if (document /*&& path.basename(document.uri.fsPath) === 'sample-demo.rs'*/) {
		collection.set(document.uri, [{
			//code: kod detekovane chyby
			code: '',
			message: 'cannot assign twice to immutable variable `x`',
			//range: vyvolava typicke cervene podtrzeni pod chybou
			range: new vscode.Range(new vscode.Position(3, 4), new vscode.Position(3, 10)),
			//severity: druh problemu (error, warning) nebo nejakeho doporuceni
			severity: vscode.DiagnosticSeverity.Error,
			//A human-readable string describing the source of this diagnostic, e.g. 'typescript' or 'super lint'.
			source: '',
			//An array of related diagnostic information, e.g. when symbol-names within a scope collide all definitions can be marked via this property.
			relatedInformation: [
				new vscode.DiagnosticRelatedInformation(new vscode.Location(document.uri, new vscode.Range(new vscode.Position(1, 8), new vscode.Position(1, 9))), 'first assignment to `x`')
			]
		}]);
	} else {
		collection.clear();	
	}
}	