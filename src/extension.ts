import * as vscode from 'vscode';
import * as path from 'path';
import * as os from "os";
import { spawn } from 'child_process';
import { DocumentHandler } from './classes/DocumentHandler';
import * as http from 'http';
import { readFile, readFileSync } from 'fs';
import { Node } from './classes/Node';

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

	const keywordsProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {			
				
				const doc = DocumentHandler.currentDocumentName;
				return documentHandler.documentAutocompleteMap.get(doc)?.get("keywords");								
			}
		}
	); 

	const localVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {			
				
				const doc = DocumentHandler.currentDocumentName;
				return documentHandler.documentAutocompleteMap.get(doc)?.get("localVariables");								
			}
		}
	);

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

	const toyboxProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character).trim();
				if(linePrefix === "using")
					return [new vscode.CompletionItem("Toybox", vscode.CompletionItemKind.Module)];
				else if (linePrefix === "using Toybox.") {
					return documentHandler.findModule("Toybox");
					
				} else if(linePrefix.startsWith("using Toybox.") && linePrefix.length > ("using Toybox.").length) {
					let classes = documentHandler.findModuleBodyMembers(linePrefix.substring(linePrefix.indexOf('.')+1,linePrefix.lastIndexOf('.')));
					return documentHandler.collectClassesFromModules(classes!);
				}

				return undefined;
					
			}
		},
		' ','.' // triggered whenever a '.' is being typed
	);

	//instanced class variable
	const accessibleMembersProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{ 
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character).trim();
				//let arr = linePrefix.split(['.',',']); 	
				var arr = linePrefix.match(/(\w)/g);
				var tmp = linePrefix.match("[^a-zA-Z0-9+]");
				
				linePrefix = linePrefix.substr(linePrefix.indexOf('=')+1).replace('.','').trim();	
				var s = 'x + y ( z )';
				
				let className = documentHandler.findClassName(documentHandler.abstractSyntaxTreeMap.get(DocumentHandler.currentDocumentName)!?.getParseTree(), linePrefix);
				console.log(linePrefix + ": " + className);
				let class_ = documentHandler.findClass(className!);
				if(linePrefix === '.') { return undefined; }
				console.log('[collected by: accessibleMembersProvider]');
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
				if(linePrefix === '.') { return undefined; }
				if(documentHandler.isInherited(documentHandler.abstractSyntaxTreeMap.get(DocumentHandler.currentDocumentName)!?.getParseTree(), linePrefix) === true) {
					let class_ = documentHandler.findClass(linePrefix);
					console.log('[collected by: inheritedMembersProvider]');
					return documentHandler.collectAccessibleMembers(class_!);
				} else { return undefined; }

			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	/** provider for suggesting classes from imported modules (primarly from Toybox)... */
	const importedMembersProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character).trim();
				
				if(linePrefix.endsWith('new')) {

					//TODO
					/* 
					   - funkce, ktera posbira naimportovane moduly - collectImportedModules
					   - findClass
					   - collectAccessibleMembers					
					*/
					let importedModules = documentHandler.collectImportedModules();
					let importedModulesValues : any[] = [];
					
					for(let i = 0; i < importedModules.length; i++) {

						let nodeValue = importedModules[i].getValue();
						let moduleValue = nodeValue!.substring(nodeValue!.indexOf('.')+1,nodeValue!.lastIndexOf('.'));
						if(moduleValue === '.') moduleValue =  nodeValue!.substring(nodeValue!.indexOf('.')+1,nodeValue!.lastIndexOf(';'));
						let tmp = documentHandler.findModuleBodyMembers(moduleValue);
						
						if(tmp)
							tmp.forEach(x => { importedModulesValues.push(x); });
														
					}
					
					return documentHandler.collectClassesFromModules(importedModulesValues);
					
				} else { return undefined; }

			}
		},
		' ' // triggered whenever a space is being typed
	);

	const curlyBracesProvider = vscode.languages.registerCompletionItemProvider('monkeyc', { provideCompletionItems() { return [ new vscode.CompletionItem('}') ]; } }, '{' );

	//instanced class variable
	const multilineCommentProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{ 
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				linePrefix = linePrefix.substring(linePrefix.lastIndexOf("/**"));

				let emptyComment = new vscode.CompletionItem("/** */",vscode.CompletionItemKind.Text);
				emptyComment.detail = "empty multiline comment.";
				emptyComment.insertText = "\n *\n *\n */";

				let dataTypeComment = new vscode.CompletionItem("/** @type */",vscode.CompletionItemKind.Text);
				dataTypeComment.detail = "data type comment.";
				dataTypeComment.insertText = "\n * @type \n */";

				if(linePrefix === "/**") {
					return [emptyComment, dataTypeComment];
				}

				return undefined;
			}
		},
		'*' // triggered whenever a '.' is being typed
	);
	
	const dataTypesProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let beginSlash = document.lineAt(position.line-1).text.trim();
				let linePrefix = document.lineAt(position).text.trim();
				let endSlash = document.lineAt(position.line+1).text.trim();

				if(beginSlash === "/**" && linePrefix.includes("* @type") && endSlash === "*/") {
					return documentHandler.collectDataTypes();
				}

				return undefined;
					
			}
		},
		' ' // triggered whenever a '/' is being typed
	);

	context.subscriptions.push(keywordsProvider, localVariableProvider,classVariableProvider, functionProvider, accessibleMembersProvider,inheritedMembersProvider, toyboxProvider, importedMembersProvider, curlyBracesProvider, dataTypesProvider, multilineCommentProvider);
}

// this method is called when your extension is deactivated
export function deactivate() {}