import * as vscode from 'vscode';
import { AST } from './AST';
import { Node } from './Node';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MonkeyCLexer } from '../MonkeyCLexer';
import { MonkeyCParser, ProgramContext } from '../MonkeyCParser';
import { MonkeyCListener } from '../MonkeyCListener';
import { Listener } from './Listener';
import { readFileSync } from 'fs';
import * as c3 from 'antlr4-c3';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ErrorDescription, MyErrorListener } from './ErrorListener';

type CaretPosition = { line: number, column: number };

/** Holds information about each document in active workspace folder, such as errors, suggestions for automplete, etc... */
export class DocumentHandler {

    static currentDocumentName : string;

    /** collection stores all errors for each    */
    public diagnosticCollection : Map<string, vscode.DiagnosticCollection>;
    /**
     * Map which stores suggested words for autocomplete
     * @access public
     * @type {Map<string, Map<string, vscode.CompletionList>>}
     *  *            1st string - name of relevant file
     *  *            2nd string - name of autocomplete "sublist" (localVariables, classVariables, etc...)
     *  * vscode.CompletionList - list with suggested words
     */
    public documentAutocompleteMap : Map<string, Map<string, vscode.CompletionList>>;

     /**
     * Map which stores syntax trees for each document
     * @access public
     * @type {Map<string, AST>}
     *  *            string - name of relevant file
     *  *            AST - syntax tree
     */
    public abstractSyntaxTreeMap : Map<string, AST>;
    
    private parser : MonkeyCParser;

    public errorListener : MyErrorListener;

    constructor() {

        this.diagnosticCollection = new Map();
        this.documentAutocompleteMap = new Map();
        this.abstractSyntaxTreeMap = new Map();
        this.parser = undefined!;
        this.errorListener = new MyErrorListener();

		DocumentHandler.currentDocumentName = this.getCurrentDocumentName();
    }

    getCurrentDocumentName() : string {
        let fileName = vscode.window.activeTextEditor?.document.fileName;
		return fileName!.substring(fileName!.lastIndexOf("\\")+1);
    }

    parseAllDocuments() {
        
        let listener: MonkeyCListener;
        let inputStream;
        let lexer;
        let tokenStream;
        let parseTree;
    
       
    
        let activeDocument = vscode.window.activeTextEditor!.document;
        activeDocument.save();
    
        let rootFolderUri = vscode.workspace.workspaceFolders![0].uri;
        let rootFolder = vscode.workspace.fs.readDirectory(rootFolderUri);
    
        rootFolder.then((documents) => {
            
            for(let i = 0; i < documents.length; i++) {
                listener  = new Listener();
                this.errorListener.getSyntaxErrors();
                const filePath = path.join(rootFolderUri.fsPath, ( "\/" + documents[i][0]));
                let file = vscode.Uri.file(filePath);
                const fileUri = vscode.Uri.parse(file.path);	

                this.diagnosticCollection.set(documents[i][0], vscode.languages.createDiagnosticCollection(documents[i][0].toString()));
                this.documentAutocompleteMap.set(documents[i][0], new Map());
                this.abstractSyntaxTreeMap.set(documents[i][0], new AST(documents[i][0]));
                
                inputStream = new ANTLRInputStream(readFileSync(fileUri.fsPath, 'utf-8'));
                lexer = new MonkeyCLexer(inputStream);
                lexer.removeErrorListeners();
                lexer.addErrorListener(this.errorListener);
                tokenStream = new CommonTokenStream(lexer);
                this.parser = new MonkeyCParser(tokenStream);
                this.parser.buildParseTree = true;
                this.parser.removeErrorListeners();
                this.parser.addErrorListener(this.errorListener);
    
                parseTree = this.parser.program();
                ParseTreeWalker.DEFAULT.walk(listener,parseTree);
                this.provideAutocomplete(this.parser, listener, parseTree,documents[i][0]);	
                console.log('[parseAllDocuments] parsing document: ',documents[i][0]);
                this.updateCollection(activeDocument, documents[i][0], this.errorListener.getSyntaxErrors());
                console.log('------------------------------------------');
                
            }	
        });
    }

    parseCurrentDocument() {

        DocumentHandler.currentDocumentName = this.getCurrentDocumentName();
        let listener: MonkeyCListener;
        let inputStream;
        let lexer;
        let tokenStream;
        let parseTree;
    
        listener  = new Listener();
        let activeDocument = vscode.window.activeTextEditor!.document;
        activeDocument.save();

        this.errorListener.clearSyntaxErrors();

        inputStream = new ANTLRInputStream(readFileSync(activeDocument.uri.fsPath, 'utf-8'));
        lexer = new MonkeyCLexer(inputStream);
        lexer.removeErrorListeners();
        lexer.addErrorListener(this.errorListener);
        tokenStream = new CommonTokenStream(lexer);
        this.parser = new MonkeyCParser(tokenStream);
        this.parser.buildParseTree = true;
        this.parser.removeErrorListeners();
        this.parser.addErrorListener(this.errorListener);
    
        parseTree = this.parser.program();
        ParseTreeWalker.DEFAULT.walk(listener,parseTree);
        this.provideAutocomplete(this.parser, listener, parseTree, DocumentHandler.currentDocumentName);	
        console.log('[parseCurrentDocument] parsing document: ', DocumentHandler.currentDocumentName);
        this.updateCollection(activeDocument, DocumentHandler.currentDocumentName, this.errorListener.getSyntaxErrors());
        console.log('------------------------------------------');
    }

    provideAutocomplete(parser : MonkeyCParser, listener: MonkeyCListener, parseTree: ProgramContext, documentName: string) {

        let core = new c3.CodeCompletionCore(parser);
        this.setAutocompleteRules(core);
    
        let position = this.getCursorPosition();
        let pos : CaretPosition =  {
            line : position.line,
            column : position.column
        };
    
        let	index = this.computeTokenIndex(parseTree,pos);
    
        let candidates = core.collectCandidates(index!);
        let candidateStrings = this.getKeywords(parser, candidates);
        
        const completionStrings : vscode.CompletionItem[] = [];
        
        candidateStrings.forEach(c => {
            let label = c.replace('\'','').replace('\'','');
            completionStrings.push(new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword));						
        });
    
        this.documentAutocompleteMap.get(documentName)?.set("keywords",new vscode.CompletionList(completionStrings,false));
    
        this.abstractSyntaxTreeMap.set(documentName,listener.getAST());
        let tree = this.abstractSyntaxTreeMap.get(documentName)!?.getParseTree();

        this.collectLocalVariables(tree,pos,documentName);
        this.collectClassVariables(tree,pos,documentName);
        this.collectFunctions(tree,pos,documentName);
    
    }

    collectLocalVariables(tree: Node[], position : CaretPosition, documentName: string) {

        let completionStrings : vscode.CompletionItem[] = [];
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i].getContext();
                
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_block && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
    
                let blockId = tree[i].getId();
                /* check every node in current scope */

                try {

                    while(!(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === blockId)) {
                    
                        ctx = tree[i].getContext();
                        
                        if(ctx?.ruleIndex === MonkeyCParser.RULE_varOrFieldDeclaration && (tree[i].getChildren()!?.length <= 1)) {
        
                            if(ctx._start.line <= position.line) {
                                
                                let variableName = "";
                                if(ctx.text?.includes("=")) {
                                    variableName = ctx.text.substring(0,ctx.text?.indexOf('='));
                                } else {
                                    variableName = ctx.text;
                                }											
                                    completionStrings.push(new vscode.CompletionItem(
                                        variableName,
                                        vscode.CompletionItemKind.Variable
                                    ));																								
                                }
                                /* skip 1 node with same context */	
                                i+=2;	
        
                            } else {								
                            i++;
                        }							
                    }	
                    
                } catch (error) {
                    console.log(error);
                    //print error message and continue
                }				
            }	
        }
        
        this.documentAutocompleteMap.get(documentName)?.set("localVariables",new vscode.CompletionList(completionStrings,false));
    }
    
    collectClassVariables(tree: Node[], position : CaretPosition, documentName: string) {
        
        let classVariables : vscode.CompletionItem[] = []; 
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i].getContext();   
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
    
                let classBodyId = tree[i].getId();
                /* check every node in current scope */
                    
                try {
                    
                    while(!(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
                    
                        ctx = tree[i].getContext();
                        
                        if(ctx?.ruleIndex === MonkeyCParser.RULE_fieldDeclaration && (tree[i].getChildren()!?.length <= 1)) {
        
                            if(ctx._start.line <= position.line) {
                                
                                let variableName = "";
                                if(ctx.text?.includes("=")) {
                                    variableName = ctx.text.substring(0,ctx.text?.indexOf('='));
                                } else {
                                    variableName = ctx.text;
                                }	

                                    classVariables.push(new vscode.CompletionItem(
                                        variableName,
                                        vscode.CompletionItemKind.Field
                                    ));																								
                                }
                                /* skip 1 node with same context */	
                                i+=2;
        
                            } else {								
                            i++;
                        }							
                    }
                } catch (error) {
                    console.log(error);
                    //print error message and continue
                }	
            }	
        }

        this.documentAutocompleteMap.get(documentName)?.set("classVariables",new vscode.CompletionList(classVariables,false));
    }
    
    collectFunctions(tree: Node[], position : CaretPosition, documentName: string) {
        
        let functions : vscode.CompletionItem[] = [];
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i].getContext();
                
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
    
                let classBodyId = tree[i].getId();
                /* check every node in current scope */

                try {
                   
                    while(!(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
                        
                        ctx = tree[i].getContext();
                        
                        if(ctx?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
        
                            if(ctx._start.line <= position.line) {
                                
                                let  variableName = ctx.getChild(2).text;                                                               
                                functions.push(new vscode.CompletionItem(
                                    variableName,
                                    vscode.CompletionItemKind.Function
                                ));																								
                                }
                                /* skip 1 node with same context */	
                                i+=4;	
        
                            } else {								
                            i++;
                        }				
                    }	
                    
                } catch (error) {
                    console.log(error);
                    //print error message and continue
                }					
            }	
        }
    
        this.documentAutocompleteMap.get(documentName)?.set("functions",new vscode.CompletionList(functions,false));
    }

    
    collectAccessibleMembers(class_: Node) {
        
        let accessibleMembers : vscode.CompletionItem[] = [];
        let classBodyMembers = class_.getChildren()![2].getChildren()![1].getChildren()!;

        //collect fields
        for(let i = 0; i < classBodyMembers.length; i++) {
            let ctx = classBodyMembers[i].getChildren()![0];
            if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList) {
                if(ctx.getChildren()![0].getValue() === 'public') {
                    let variableName = ctx.getChildren()![2].getValue();                                                               
                    accessibleMembers.push(new vscode.CompletionItem(
                        variableName!,
                        vscode.CompletionItemKind.Field
                    )); 
                }
            } else if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
                if(ctx.getChildren()![1].getValue() === 'public') {
                    let variableName = ctx.getChildren()![2].getValue();                                                               
                    accessibleMembers.push(new vscode.CompletionItem(
                        variableName!,
                        vscode.CompletionItemKind.Function
                    )); 
                }
            }
        }
       return accessibleMembers;
    }

    findClassName(tree: Node[], variableName: string) {

        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i].getContext();
                
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_variableDeclarationList) { 

                if(ctx.text.includes(variableName)) {
                    return ctx.text.substring(ctx.text.indexOf('new')+3, ctx.text.indexOf('('));
                }

            }
        
        }
    }

    findClass(className: string) {
        let classes : Node[] = [];
        this.abstractSyntaxTreeMap.forEach((tree: AST, name: string) => {
            classes.push(tree.getParseTree().find((x) => x.getContext()?.ruleIndex === MonkeyCParser.RULE_classDeclaration) as Node);
        });

        for(let i = 0; i < classes.length; i++) {
            if(classes[i].getChildren()![1].getValue() === className) {
                return classes[i];
            }
        }

        return undefined;
    }


    setAutocompleteRules(core : c3.CodeCompletionCore) {

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

    updateCollection(document: vscode.TextDocument, fileName: string, errors: ErrorDescription[]) {

        let tmp : vscode.Diagnostic[] = [];
        errors.forEach(err => {
            if(err.document === fileName) {

                let data = (err.offendingSymbol).toString();
                let offSymbol = data.substring(data.indexOf("'")+1,data.lastIndexOf("'"));
                      
                tmp.push(new vscode.Diagnostic(			
                    new vscode.Range(new vscode.Position(err.line-1, err.charPositionInLine), new vscode.Position(err.line-1,((err.charPositionInLine)+offSymbol.length))),
                        err.msg,
                        vscode.DiagnosticSeverity.Error
                    )		
                );
            }
            
        });

        this.diagnosticCollection.get(fileName)?.set(document.uri, tmp);      
    }

    computeTokenIndex(parseTree: ParseTree, caretPosition: CaretPosition): number | undefined {
        if (parseTree instanceof TerminalNode) {
            return this.computeTokenIndexOfTerminalNode(parseTree, caretPosition);
        } else {
            return this.computeTokenIndexOfChildNode(parseTree, caretPosition);
        }
    }

    computeTokenIndexOfTerminalNode(parseTree: TerminalNode, caretPosition: CaretPosition) {
        let start = parseTree.symbol.charPositionInLine;
        let stop = parseTree.symbol.charPositionInLine + parseTree.text.length;

        if (parseTree.symbol.line === caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
            return parseTree.symbol.tokenIndex;
        } else {
            return undefined;
        }
    }

    computeTokenIndexOfChildNode(parseTree: ParseTree, caretPosition: CaretPosition) {
        for (let i = 0; i < parseTree.childCount; i++) {
            let index = this.computeTokenIndex(parseTree.getChild(i), caretPosition);
            if (index !== undefined) {
                return index;
            }
        }
        return undefined;
    }

    getKeywords(parser: MonkeyCParser, candidates: c3.CandidatesCollection) {

        let keywords: string[] = [];
        
        for (let candidate of candidates.tokens) {
            keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
        }

        return keywords;
    }

    getCursorPosition() : CaretPosition {

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
}