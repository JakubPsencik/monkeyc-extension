// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRErrorListener, ANTLRInputStream, CommonTokenStream, ConsoleErrorListener, IntStream, LexerInterpreter, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, ExpressionContext, FieldDeclarationContext, FunctionDeclarationContext, InstanceOfExpressionContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';

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

	/*
	* vytvoreni nove kolekce s diagnostikou
	* pokud dochazi, k uprave textu, spusti se metoda updateDiagnostics
	*/
	let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
	let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
	
	let errorListener = new MyErrorListener();
	/*document.onDidChangeContent((change : any) => {
		let diagnostics: vscode.Diagnostic[] = [];
		let lines = change.document.getText().split(/\r?\n/g);
		lines.forEach((line : any, i : any) => {
			let index = line.indexOf('typescript');
			if (index >= 0) {
				diagnostics.push({
					severity: vscode.DiagnosticSeverity.Warning,
					range: {
						start: { line: i, character: index},
						end: { line: i, character: index + 10 }
					},
					message: `${line.substr(index, 10)} should be spelled TypeScript`,
					source: 'ex'
				});
			}
		});
		// Send the computed diagnostics to VS Code.
		//connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
	});*/

	if (vscode.window.activeTextEditor) {
	//activeTextEditor.document - dokument, ktery mam prave otevreny, a ktery edituji...

	vscode.workspace.onDidChangeTextDocument((event) => {
		console.log('\n\n change: ', event.contentChanges);
		context.subscriptions.push(collection);
	});
	}

	let testFunc = vscode.commands.registerCommand('monkeyc-extension.testFunc', () => {
		var editor = vscode.window.activeTextEditor;
		
		let file = editor?.document.uri.fsPath;
		console.log('currently edited file: ' + file?.substring(file?.lastIndexOf("\\")+1));
	});

	//let ScanCode = vscode.commands.registerCommand('monkeyc-extension.ScanCode', () => 
	//{
	collection.clear();
	diagnosticMap.clear();
	let f = "";
	if (vscode.window.activeTextEditor) {
		f = vscode.window.activeTextEditor.document.uri.fsPath;
		f = readFileSync(f, 'utf-8');
	}	
	let inputStream = new ANTLRInputStream(f);
	let lexer = new MonkeyCLexer(inputStream);
	lexer.removeErrorListeners();
	lexer.addErrorListener(errorListener);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new MonkeyCParser(tokenStream);
	parser.buildParseTree = true;
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);

	// Parse the input, where `compilationUnit` is whatever entry point you defined
	let tree = parser.program();

	const listener: MonkeyCListener = new EnterFunctionListener();

	ParseTreeWalker.DEFAULT.walk(listener,tree);
	let errors = errorListener.getSyntaxErrors();

	errors.forEach(err => {
		//console.log('offendingSymbol: ' + err.offendingSymbol + '\n' + 'line: ' + err.line + '\n' + 'msg: ' + err.msg + '\n' + 'exc: ' + err.e + '\n');
		let data = (err.offendingSymbol).toString();
		let offSymbol = data.substring(data.indexOf("'")+1,data.lastIndexOf("'"));

		if (vscode.window.activeTextEditor) {
			let diagnostics = diagnosticMap.get(vscode.window.activeTextEditor.document.uri.toString());
			if (!diagnostics) { diagnostics = []; }
				diagnostics.push(new vscode.Diagnostic(			
					new vscode.Range(new vscode.Position(err.line-1, err.charPositionInLine), new vscode.Position(err.line-1,((err.charPositionInLine)+offSymbol.length))),
						err.msg,
						vscode.DiagnosticSeverity.Error)		
					);
			  	diagnosticMap.set(vscode.window.activeTextEditor.document.uri.toString(), diagnostics);		
		}
	});

	diagnosticMap.forEach((diags, file) => {
		collection.set(vscode.Uri.parse(file), diags);
	  });

	//});

	context.subscriptions.push(testFunc,/*ScanCode*/);

}

// this method is called when your extension is deactivated
export function deactivate() {}