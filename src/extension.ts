import * as vscode from 'vscode';
import * as path from 'path';
import * as os from "os";
import { spawn } from 'child_process';
import { DocumentHandler } from './classes/DocumentHandler';


var clang = require("clang-format");
let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
let documentHandler : DocumentHandler;
let currentDocumentName: string;

let started: boolean = false;
	
export function activate(context: vscode.ExtensionContext) {	

	documentHandler = new DocumentHandler();

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

		
		documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName)?.clear();

		if(!started) {
			vscode.window.showInformationMessage('Extension started!');
			started = true;
			documentHandler.parseAllDocuments();
		} else {
			documentHandler.parseCurrentDocument();			
		}
		
		collection = documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName) as vscode.DiagnosticCollection;
		context.subscriptions.push(collection);
		
	});

	vscode.workspace.onDidChangeTextDocument(() => {

		
		documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName)?.clear();
		documentHandler.parseCurrentDocument();
		collection = documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName) as vscode.DiagnosticCollection;
		
		context.subscriptions.push(collection);		
	});

	const localVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {			
				
				const doc = DocumentHandler.currentDocumentName;
				console.log(doc);
				return documentHandler.documentAutocompleteMap.get(doc)?.get("localVariables");								
			}
		});

	const classVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{		
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const doc = DocumentHandler.currentDocumentName;
				console.log(doc);
				return documentHandler.documentAutocompleteMap.get(doc)?.get("classVariables");
			
			}
		},
		'self.','me.', '.' // triggered whenever any of these is being typed
	);

	context.subscriptions.push(localVariableProvider,classVariableProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}

