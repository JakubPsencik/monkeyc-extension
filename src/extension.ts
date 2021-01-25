import * as vscode from 'vscode';
import * as path from 'path';
import * as os from "os";
import { spawn } from 'child_process';
import { DocumentHandler } from './classes/DocumentHandler';
import * as http from 'http';
import { readFile, readFileSync } from 'fs';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var clang = require("clang-format");
let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
let documentHandler : DocumentHandler;

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
	
	/*documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName)?.clear();

	if(!started) {
		vscode.window.showInformationMessage('Extension started!');
		started = true;
		documentHandler.parseAllDocuments();
	} else {
		documentHandler.parseCurrentDocument();			
	}
	
	collection = documentHandler.diagnosticCollection.get(DocumentHandler.currentDocumentName) as vscode.DiagnosticCollection;
	context.subscriptions.push(collection);*/

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
				return documentHandler.documentAutocompleteMap.get(doc)?.get("localVariables");								
			}
		});

	const classVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{		
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const doc = DocumentHandler.currentDocumentName;
				
				const linePrefix = document.lineAt(position).text.substr(0, position.character).trim();

				if(linePrefix === '.') { return undefined; }
				if (linePrefix.endsWith('self.') || linePrefix.endsWith('me.')) 
					return documentHandler.documentAutocompleteMap.get(doc)?.get("classVariables");
	
				return undefined;
			}
		},
		'.' // triggered whenever '.' is being typed
	);

	const functionProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{		
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const doc = DocumentHandler.currentDocumentName;

				const linePrefix = document.lineAt(position).text.substr(0, position.character).trim();

				if (linePrefix.endsWith('self.') || linePrefix.endsWith('me.')) 
					return documentHandler.documentAutocompleteMap.get(doc)?.get("functions");

				return undefined;
			}
		},
		'.' // triggered whenever any of these is being typed
	);

	//instanced class variable
	const accessibleMembersProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				linePrefix = linePrefix.substr(linePrefix.indexOf('=')+1).replace('.','').trim();
				let className = documentHandler.findClassName(documentHandler.abstractSyntaxTreeMap.get(DocumentHandler.currentDocumentName)!?.getParseTree(), linePrefix);
				let class_ = documentHandler.findClass(className!);

				if(linePrefix === '.') { return undefined; }

				return documentHandler.collectAccessibleMembers(class_!);
			}
		},
		'.' // triggered whenever a '.' is being typed
	);


	const inheritedMembersProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				linePrefix = linePrefix.substr(linePrefix.indexOf('=')+1).replace('.','').trim();
				let class_ = documentHandler.findClass(linePrefix);

				if(linePrefix === '.') { return undefined; }

				return documentHandler.collectAccessibleMembers(class_!);
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	const toyboxProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character).trim();
				if(linePrefix === "using")
					return [new vscode.CompletionItem("Toybox", vscode.CompletionItemKind.Module)];
				else if (linePrefix === "using Toybox.") {
					let class_ = documentHandler.findModule("Toybox");
					return documentHandler.collectModules(class_!);
				} else if(linePrefix.startsWith("using Toybox.") && linePrefix.length > ("using Toybox.").length) {
					let classes = documentHandler.findModuleBodyMembers(linePrefix.substring(linePrefix.indexOf('.')+1,linePrefix.lastIndexOf('.')));
					return documentHandler.collectClassesFromModules(classes!);
				}
					
			}
		},
		' ','.' // triggered whenever a '.' is being typed
	);



	context.subscriptions.push(localVariableProvider,classVariableProvider, functionProvider, accessibleMembersProvider,inheritedMembersProvider,toyboxProvider);

	/*getRequest('https://developer.garmin.com/connect-iq/api-docs/class_list.html')
	.then(response => {
	  //console.log('response: ', response);
	})
	.catch(error => {
	  console.log(error);
	});*/
}

// this method is called when your extension is deactivated
export function deactivate() {}

function getRequest(url: string): Promise<any> {
	return new Promise<any>(
	  function (resolve, reject) {
		var request = new XMLHttpRequest();
		request.onload = function (result : any) {
		  if (this.status === 200) {
			//console.log(this.responseText);
			resolve(this.responseText);
		  } else {
			reject(new Error(this.statusText));
		  }
		};
		request.onerror = function () {
		  reject(new Error('XMLHttpRequest Error: ' + this.statusText));
		};
		request.open('GET', url);
		request.send();
	}); 
}