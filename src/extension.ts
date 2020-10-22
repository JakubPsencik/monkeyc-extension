// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, Parser, RecognitionException, Recognizer } from 'antlr4ts';
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

	enterCompilationUnit(context: CompilationUnitContext) {
		//console.log(`CompilationUnit start line number ${context._start.line}`);		
	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		//console.log(`Variable start line number ${context._start.line}`);
		// ...
		//console.log("variable context: ",context.text);
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
		//console.log("class body context: ",context.text);
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
			context.subscriptions.push(collection);
		}
	});

	vscode.workspace.onDidChangeTextDocument(() => {
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


	/*TESTING AUTOCOMPLETE*/
	/*const provider1 = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

				// a simple completion item which inserts `Hello World!`
				const simpleCompletion = new vscode.CompletionItem('Hello World!');

				// a completion item that inserts its text as snippet,
				// the `insertText`-property is a `SnippetString` which will be
				// honored by the editor.
				const snippetCompletion = new vscode.CompletionItem('Good part of the day');
				snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
				snippetCompletion.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

				// a completion item that can be accepted by a commit character,
				// the `commitCharacters`-property is set which means that the completion will
				// be inserted and then the character will be typed.
				const commitCharacterCompletion = new vscode.CompletionItem('console');
				commitCharacterCompletion.commitCharacters = ['.'];
				commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

				// a completion item that retriggers IntelliSense when being accepted,
				// the `command`-property is set which the editor will execute after 
				// completion has been inserted. Also, the `insertText` is set so that 
				// a space is inserted after `new`
				const commandCompletion = new vscode.CompletionItem('new');
				commandCompletion.kind = vscode.CompletionItemKind.Keyword;
				commandCompletion.insertText = 'new ';
				commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

				// return all completion items as array
				return [
					simpleCompletion,
					snippetCompletion,
					commitCharacterCompletion,
					commandCompletion
				];
			}
	});*/

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('console.')) {
					return undefined;
				}

				return [
					//creates that autocomplete list
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		}, 
		('.') // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(provider2);
	/*TESTING AUTOCOMPLETE*/
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
	
	ProvideAutocomplete(parser, parseTree);
}


function ProvideAutocomplete(parser : MonkeyCParser, parseTree: ProgramContext) {

	
	vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

				let core = new c3.CodeCompletionCore(parser);
				SetAutocompleteRules(core);

				let pos : CaretPosition =  {
					line : position.line,
					column : position.character
				};

				let	index = computeTokenIndex(parseTree,pos);
				//get token from parser
				let symb = new ScopedSymbol("");
				let candidateStrings: string[] = [];
				
				if (index !== undefined) {
					console.log('index: ',index);
					let candidates = core.collectCandidates(index);
					candidateStrings = getCompletionStrings(parser, candidates, symb);
				}

				const completionStrings : vscode.CompletionItem[] = [];
				candidateStrings.forEach(c => {
					let label = c.replace('\'','').replace('\'','');
					console.log('label: ', label);
					const tmp = new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword);
					if (!(tmp.label.includes("<end of keywords>") || tmp.label.includes("<end of functionNames>") || tmp.label.includes("<end of variableNames>"))) {
						completionStrings.push(tmp);						
					}
				});
				// a simple completion item which inserts `Hello World!`
				const completionList = new vscode.CompletionList(completionStrings,false);

				// return all completion items
				return completionList;
			}
		});
	}

function SetAutocompleteRules(core : c3.CodeCompletionCore) {

	core.preferredRules = new Set([ 
		MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_varOrFieldDeclaration,
		MonkeyCParser.RULE_variableDeclaration,
		MonkeyCParser.RULE_variableDeclarationList
	]);

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

			case MonkeyCParser.RULE_variableDeclaration: {
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