// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, ExpressionContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import { languages, Diagnostic, DiagnosticSeverity } from 'vscode';


/** String to detect in the text document. */
const PROGRAM = 'program';

/** Code that is used to associate diagnostic entries with code actions. */
export const PROGRAM_MENTION = 'program_mention';

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
		// ...
	  }
  }


  /*
  	-declare diagnostic collection
  */
  let diagnosticCollection: vscode.DiagnosticCollection;


  function onChange() {
	  
  }

  /**
 * Analyzes the text document for problems. 
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param programDiagnostics diagnostic collection
 */
export function refreshDiagnostics(doc: vscode.TextDocument, programDiagnostics: vscode.DiagnosticCollection): void {
	const diagnostics: vscode.Diagnostic[] = [];

	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const lineOfText = doc.lineAt(lineIndex);
		if (lineOfText.text.includes(PROGRAM)) {
			diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex));
		}
	}

	programDiagnostics.set(doc.uri, diagnostics);
}

  function createDiagnostic(doc: vscode.TextDocument, lineOfText: vscode.TextLine, lineIndex: number): vscode.Diagnostic {
	// find where in the line of thet the 'emoji' is mentioned
	const index = lineOfText.text.indexOf(PROGRAM);

	// create range that represents, where in the document the word is
	const range = new vscode.Range(lineIndex, index, lineIndex, index + PROGRAM.length);

	const diagnostic = new vscode.Diagnostic(range, "message",
		vscode.DiagnosticSeverity.Information);
	diagnostic.code = PROGRAM_MENTION;
	return diagnostic;
}

export function subscribeToDocumentChanges(context: vscode.ExtensionContext, programDiagnostics: vscode.DiagnosticCollection): void {
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(vscode.window.activeTextEditor.document, programDiagnostics);
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor(editor => {
			if (editor) {
				refreshDiagnostics(editor.document, programDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, programDiagnostics))
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument(doc => programDiagnostics.delete(doc.uri))
	);

}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "test" is now active!');

	diagnosticCollection = languages.createDiagnosticCollection("MonkeyC_collection");
	let diagnostics : Diagnostic[] = [];

	let documentUri = vscode.Uri.file("code_snippets\\test0.txt");


	let file = readFileSync('e:\\BP\\test\\test\\src\\code_snippets\\test0.txt','utf8');


	let message = "new Diagnostic pushed...";
	
	//diagnostics.push(new Diagnostic(file, message, DiagnosticSeverity.Warning));
	

	diagnosticCollection.set(documentUri, diagnostics);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from test!');
	});

	let testFunc = vscode.commands.registerCommand('test.testFunc', () => {
		console.log('testing...');
	});

	let ScanCode = vscode.commands.registerCommand('test.ScanCode', () => {
			// Create the lexer and parser

	//const file = readFileSync('test0.txt', 'utf-8');
	let code =
			`class SimpleAnalogApp extends App.AppBase {

			function initialize() {
				AppBase.initialize();
				$.gDeviceSettings = System.getDeviceSettings();
			}

			// onStart() is called on application start up
			function onStart(state) {
			}

			// onStop() is called when your application is exiting
			function onStop(state) {
			}

			// New app settings have been received so trigger a UI update
			function onSettingsChanged() {
				$.gSettingsChanged = true;
				$.gDeviceSettings = System.getDeviceSettings();
				Ui.requestUpdate();
			}

			// Return the initial view of your application here
			function getInitialView() {
				return [ new SimpleAnalogView() ];
			}

			function getBooleanProperty(key, initial) {
				var value = getProperty(key);
				if (value != null) {
					if (value instanceof Lang.Boolean) {
						return value;
					} else if (value instanceof Lang.String) {
						// added to work around GCM Android problems
						return value.toNumber() != 0;
					}
				}
				return initial;
			}

		}`;
	
	let inputStream = new ANTLRInputStream(code);


	let lexer = new MonkeyCLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new MonkeyCParser(tokenStream);

	// Parse the input, where `compilationUnit` is whatever entry point you defined
	let tree = parser.compilationUnit();

	const listener: MonkeyCListener = new EnterFunctionListener();
	ParseTreeWalker.DEFAULT.walk(listener,tree);
	});

	context.subscriptions.push(disposable,testFunc,ScanCode);
	//context.subscriptions.push(diagnosticCollection);

}

// this method is called when your extension is deactivated
export function deactivate() {}
