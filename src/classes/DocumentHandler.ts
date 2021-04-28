import * as vscode from 'vscode';
import { AST } from './AST';
import { Node } from './Node';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, ParserRuleContext, Token } from 'antlr4ts';
import {MonkeyCBaseParser} from '../MonkeyCBaseParser';
import { MonkeyCLexer } from '../MonkeyCLexer';
import { MonkeyCParser, ProgramContext } from '../MonkeyCParser';
import { MonkeyCListener } from '../MonkeyCListener';
import { CommentShifter, Listener } from './Listener';
import { readFileSync } from 'fs';
import * as c3 from 'antlr4-c3';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ErrorDescription, MyErrorListener } from './ErrorListener';
import { trace } from 'console';
import { RuleNames } from './ruleNames';

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
    public abstractSyntaxTreeMap : Map<string, AST | any>;
    
    /** holding comments from hidden channel */
    public abstractSyntaxTreeCommentaryMap : Map<string, Token[] | any>;

    public importedModulesMap : Map<string, string[]>;
    
    private parser : MonkeyCParser;

    public errorListener : MyErrorListener;

    constructor() {

        this.diagnosticCollection = new Map();
        this.documentAutocompleteMap = new Map();
        this.abstractSyntaxTreeMap = new Map();
        this.abstractSyntaxTreeCommentaryMap = new Map();
        this.importedModulesMap = new Map();
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
                // && (!documents[i][0].toLowerCase().includes('toybox'))
                if(documents[i][0].includes('.mc')) {
                    listener  = new Listener();
                    this.errorListener.getSyntaxErrors();
                    const filePath = path.join(rootFolderUri.fsPath, ( "\/" + documents[i][0]));
                    let file = vscode.Uri.file(filePath);
                    const fileUri = vscode.Uri.parse(file.path);	
    
                    this.diagnosticCollection.set(documents[i][0], vscode.languages.createDiagnosticCollection(documents[i][0].toString()));
                    this.documentAutocompleteMap.set(documents[i][0], new Map());
                    this.abstractSyntaxTreeMap.set(documents[i][0], new AST(documents[i][0]));
                    this.abstractSyntaxTreeCommentaryMap.set(documents[i][0], []);
                    
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
                    let shifter = new CommentShifter(tokenStream);
                    //console.log('about to parse: ', documents[i][0]);
                    ParseTreeWalker.DEFAULT.walk(listener,parseTree);
                    ParseTreeWalker.DEFAULT.walk(shifter,parseTree);
                    this.abstractSyntaxTreeCommentaryMap.set(documents[i][0], listener.getCommentsFromChannel(1));
                    if(DocumentHandler.currentDocumentName.toLowerCase() !== "toybox.mc") {
                        this.provideAutocomplete(this.parser, listener, parseTree,documents[i][0]);	
                    }
                    //console.log('[parseAllDocuments] parsing document: ',documents[i][0]);
                    this.updateCollection(activeDocument, documents[i][0], this.errorListener.getSyntaxErrors());                   
                    //console.log('------------------------------------------');
                    
                }
            }	
        });


    }

    parseCurrentDocument() {

        DocumentHandler.currentDocumentName = this.getCurrentDocumentName();
        if((!DocumentHandler.currentDocumentName.toLowerCase().includes('toybox'))) {
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

            if(DocumentHandler.currentDocumentName.toLowerCase() !== "toybox.mc") {
                this.provideAutocomplete(this.parser, listener, parseTree, DocumentHandler.currentDocumentName);	
            }
            //console.log('[parseCurrentDocument] parsing document: ', DocumentHandler.currentDocumentName);
            this.updateCollection(activeDocument, DocumentHandler.currentDocumentName, this.errorListener.getSyntaxErrors());
            //console.log('------------------------------------------');
        }
        
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
    
        this.abstractSyntaxTreeMap.set(documentName, listener.getAST());
        let importedModules = this.collectImportedModules();
        let imported_ : vscode.CompletionItem[] = [];
        importedModules.forEach(m => {
            let txt : string = m.getValue();
            let count = 0;
            for(let i = 0; i < txt.length; i++) {
                if (txt[i] === '.') count++;
            }
            let name = "";
            if(count === 1) { 
                name = txt.substring(txt.indexOf("Toybox.") + "Toybox.".length,txt.indexOf(';')); 
                imported_.push(new vscode.CompletionItem(name, vscode.CompletionItemKind.Module));
            }
            else if(count === 2) { 
                name = txt.substring(txt.lastIndexOf('.') + 1,txt.indexOf(';')); 
                imported_.push(new vscode.CompletionItem(name, vscode.CompletionItemKind.Class));
            }                                       
        });

        this.documentAutocompleteMap.get(documentName)?.set("modules",new vscode.CompletionList(imported_,false));
        let tree = this.abstractSyntaxTreeMap.get(documentName)!?.getParseTree();
        
        this.collectLocalVariables(tree,pos,documentName);
        this.collectClassVariables(tree,pos,documentName);
        this.collectFunctions(tree,pos,documentName);
        this.collectCallbackFunctions(tree,pos,documentName);
    
    }

    collectLocalVariables(tree: Node[], position : CaretPosition, documentName: string) {

        let completionStrings : vscode.CompletionItem[] = [];
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i] ? tree[i].getContext() : undefined;
              
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_block && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
                
                let blockId = tree[i].getId();
                /* check every node in current scope */

                try {
                    if(tree[i]!==null) {
                        if(tree[i]!?.getValue() === '}' && tree[i].getParent()?.getId() === blockId) { 
                            break;
                        }
                        //while(!(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === blockId)) {
                        
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
                    //}//while end
                        
                    
                } catch (error) {
                    //console.log(error);
                    //print error message and continue
                }				
            }	
        }
        
        this.documentAutocompleteMap.get(documentName)?.set("localVariables",new vscode.CompletionList(completionStrings,false));
    }
    
    collectClassVariables(tree: Node[], position : CaretPosition, documentName: string) {
        
        let classVariables : vscode.CompletionItem[] = []; 
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i] ? tree[i].getContext() : undefined; 
            let classBodyId;
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
    
                classBodyId = tree[i].getId();
                /* check every node in current scope */
            }

            try {
                if(tree[i]!==null) {
                    if(tree[i]!?.getValue() === '}' && tree[i].getParent()?.getId() === classBodyId) { 
                        break;
                    }
                    //while(tree[i] && !(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
                    
                        ctx = tree[i].getContext();
                        
                        if(ctx?.ruleIndex === MonkeyCParser.RULE_fieldDeclaration && (tree[i].getChildren()!?.length <= 1)) {
        
                            if(ctx._start.line <= position.line) {
                                
                                let variableName ="";
                                if(ctx.text?.includes("=")) {
                                    variableName = ctx.text.substring(0,ctx.text?.indexOf('='));
                                } else {
                                    variableName = ctx.text;
                                }	
                                    let variable = new vscode.CompletionItem(
                                        variableName,
                                        vscode.CompletionItemKind.Field
                                    );

                                    classVariables.push(variable);																								
                                }
                                /* skip 1 node with same context */	
                                i+=2;
        
                            } else {								
                            //i++;
                        }							
                    //} while end
                }

            } catch (error) {
                //console.log(error);
                //print error message and continue
            }	
            	
        }

        this.documentAutocompleteMap.get(documentName)?.set("classVariables",new vscode.CompletionList(classVariables,false));
    }
    
    collectFunctions(tree: Node[], position : CaretPosition, documentName: string) {
        
        let functions : vscode.CompletionItem[] = [];
    
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i] ? tree[i].getContext() : undefined;
                
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {
    
                let classBodyId = tree[i].getId();
                /* check every node in current scope */

                try {
                    if(tree[i]!==null) {
                        while(tree[i] && !(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
                            
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
                    }
                        
                    
                } catch (error) {
                    console.log(error);
                    //print error message and continue
                }					
            }	
        }
    
        this.documentAutocompleteMap.get(documentName)?.set("functions",new vscode.CompletionList(functions,false));
    }

    collectCallbackFunctions(tree: Node[], position : CaretPosition, documentName: string) {
        
        let functions : vscode.CompletionItem[] = [];
        let classBodyId;
        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i] ? tree[i].getContext() : undefined;
                
            if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody) {
    
                classBodyId = tree[i].getId();
                /* check every node in current scope */
            }
            
            try {
                if(tree[i]!==null) {
                    while(tree[i] && !(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
                        
                        ctx = tree[i].getContext();
                        
                        if(ctx?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
        
                            //if(ctx._start.line <= position.line) {
                            let  variableName = ctx.getChild(2).text;                                                               
                            functions.push(new vscode.CompletionItem(variableName,vscode.CompletionItemKind.Function));																							
                            //}
                            /* skip 1 node with same context */	
                            i+=4;	
        
                        } else {	 i++;		}					
                           
                       	 			
                    }//while end	
                }
                    
                
            } catch (error) {
                //console.log(error);
                //print error message and continue
            }					
            	
        }
    
        this.documentAutocompleteMap.get(documentName)?.set("callbackFunctions",new vscode.CompletionList(functions,false));
    }
 
    collectAccessibleMembers(class_: Node) {
        
        if(class_ === undefined) { return undefined; }

        let accessibleMembers : vscode.CompletionItem[] = [];
        let classBodyMembers;
        let classValue = class_.getValue()!;
        let className = classValue.substring(classValue.indexOf("class") + "class".length,classValue.indexOf('{'));
        let parentClass;
        let classes_ = [];
        let member;
        classes_.push(class_);
        if(classValue.includes('extends')) {
           classValue = classValue.substring(classValue.indexOf('extends') + 'extends'.length, classValue.indexOf('{'));
           parentClass = this.findClass(classValue);
           classes_.push(parentClass);

        }
        for(let j = 0; j < classes_.length; j++) {

            if(classes_[j]!.getChildren()!?.length >= 5)
                classBodyMembers = classes_[j]!.getChildren()![5].getChildren()![1].getChildren()!;
            else
                classBodyMembers = classes_[j]!.getChildren()![3].getChildren()![1].getChildren()!;
            
            if(!classBodyMembers) return undefined;

            //collect fields
            for(let i = 0; i < classBodyMembers.length; i++) {
                if(classBodyMembers[i].getContext()!.ruleIndex === MonkeyCParser.RULE_classBodyMember) {
                    
                    let ctx = classBodyMembers[i].getChildren()![0];
                    if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList) {
                        if(ctx.getChildren()![0].getValue() === 'public' || ctx.getChildren()![0].getValue() === 'protected' || ctx.getChildren()![0].getValue() === '') {
                            let variableName = ctx.getChildren()![3].getValue();      
                            member = new vscode.CompletionItem(
                                variableName!,
                                vscode.CompletionItemKind.Field
                            ); 
                            let cmt = this.getCommentFromChannel(1,ctx.getContext()!.start.line,10); 
                            let markdownDescription = this.makeMarkdownDescription(className, variableName!, cmt,false);
                            member.documentation = new vscode.MarkdownString(markdownDescription);                                                     
                            accessibleMembers.push(member);
                        }
                    } else if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
                        if(ctx.getChildren()![1].getValue() === 'public' || ctx.getChildren()![1].getValue() === 'protected' || ctx.getChildren()![1].getValue() === '') {
                            let variableName = ctx.getChildren()![2].getValue();   
                            member = new vscode.CompletionItem(
                                variableName!,
                                vscode.CompletionItemKind.Function
                            );
                            let cmt = this.getCommentFromChannel(1,ctx.getContext()!.start.line,10); 
                            let markdownDescription = this.makeMarkdownDescription(className, variableName!, cmt,true);
                            member.documentation = new vscode.MarkdownString(markdownDescription);                                                           
                            accessibleMembers.push(member);
                        }
                    }
                }
                    
            }

            classBodyMembers = undefined;
        }

       return accessibleMembers;
    }

    collectDataTypes() {
        let rootFolderUri = vscode.workspace.workspaceFolders![0].uri;
        const filePath = path.join(rootFolderUri.fsPath, ( "\/" + 'types.txt'));
        let file = vscode.Uri.file(filePath);
        const fileUri = vscode.Uri.parse(file.path);	
        let types : string[] = readFileSync(fileUri.fsPath,'utf8').split("\r\n");

        let types_arr : vscode.CompletionItem[] = [];

        types.forEach(t => {
            types_arr.push(new vscode.CompletionItem(t, vscode.CompletionItemKind.Class));
        });

        return types_arr;
    }

    collectModules(module_: Node) {
        
        let accessibleMembers : vscode.CompletionItem[] = [];
        let classBodyMembers = module_.getChildren()![2].getChildren()![1].getChildren()!;

        //collect fields
        for(let i = 0; i < classBodyMembers.length; i++) {
            
            if(classBodyMembers[i].getContext() !== undefined) {
                let ctx = classBodyMembers[i].getChildren()![0];
                if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_modifiers && ctx.getParent()?.getContext()?.ruleIndex === MonkeyCParser.RULE_moduleDeclaration) {
                    if(ctx.getValue() === 'public' || ctx.getValue() === 'protected' || ctx.getValue() === '') {
                        let variableName = ctx.getParent()!.getChildren()![1].getValue();                                                               
                        accessibleMembers.push(new vscode.CompletionItem(
                            variableName!,
                            vscode.CompletionItemKind.Module
                        ));
                    }
                } else if(ctx.getContext()?.ruleIndex === MonkeyCParser.RULE_moduleDeclaration) {
                    if(ctx.getChildren()![0].getValue() === 'public' || ctx.getChildren()![0].getValue() === 'protected' || ctx.getChildren()![0].getValue() === '') {
                        let variableName = ctx.getChildren()![1].getValue();                                                               
                        accessibleMembers.push(new vscode.CompletionItem(
                            variableName!,
                            vscode.CompletionItemKind.Module
                        )); 
                    }
                }
            }     
        }
       return accessibleMembers;
    }

    collectClassesFromModules(classes: Node[]) {
        
        let accessibleMembers : vscode.CompletionItem[] = [];

        //collect classes
        for(let i = 0; i < classes.length; i++) {
            if(classes[i].getValue()?.substring(0,classes[i].getValue()?.indexOf('{')).includes("class")) {
                let variableName = classes[i].getChildren()![0].getChildren()![1].getValue();                                                               
                accessibleMembers.push(new vscode.CompletionItem(
                    variableName!,
                    vscode.CompletionItemKind.Class
                ));    
            }
                      
        }
       return accessibleMembers;
    }

    collectFunctionsFromModules(moduleName : string, functions: Node[]) {
        
        let accessibleMembers : vscode.CompletionItem[] = [];

        //collect functions
        for(let i = 0; i < functions.length; i++) {
            if((functions[i].getValue()?.substring(0,functions[i].getValue()?.indexOf('{')).includes("function"))) {
                let variableName = functions[i].getChildren()![0].getChildren()![2].getValue();  
                let member = new vscode.CompletionItem(variableName!, vscode.CompletionItemKind.Function);
                let cmt = this.getCommentFromChannel(1,functions[i].getContext()!.start.line,10); 
                let markdownDescription = this.makeMarkdownDescription(moduleName, variableName!, cmt,true);
                member.documentation = new vscode.MarkdownString(markdownDescription);
                accessibleMembers.push(member);  
            }
                        
        }
       return accessibleMembers;
    }

    makeMarkdownDescription(moduleName: string, variableName: string, cmnt : string, isFunction : boolean) {

        let description = "";
        let params = "";
        let ret = "";
        let final_desc = "";

        let arr : string[] = [];

        if(isFunction) {
            cmnt = cmnt.replace("/**\n            * ", "").trim();
            description = cmnt.substring(0, cmnt.indexOf('.')+1);
            if(cmnt.includes("@param")) {
                params = cmnt.substring(cmnt.indexOf("@param"),cmnt.indexOf("@returns"));
                arr = params.split("@param");
                for(let i = 1; i < arr.length; i++) {
                    arr[i] = "**" + arr[i].replace("(","").replace(')',"").substring(0,arr[i].lastIndexOf("\n")).trim();
                    arr[i] = arr[i].replace(" -","** -");
                }
            }
            ret += "***" + cmnt.substring(cmnt.indexOf("@returns") + "@returns".length, cmnt.lastIndexOf("\n")).trim() + "***";

            if(ret.length <= 6) {
                ret = "***void***";
            }

            final_desc += ret + " " + "**" + moduleName + "**" + "." + variableName + "()\n\n" + "*" + description + "*\n";
            for(let i = 1; i < arr.length; i++) {
                final_desc += "* " + arr[i] + "\n";
            }

        } else {

            cmnt = cmnt.replace("/**\n            * ", "").trim();
            description = cmnt.substring(0, cmnt.indexOf('.')+1);
            ret += "***" + cmnt.substring(cmnt.indexOf("@type") + "@type".length, cmnt.lastIndexOf("\n")).trim() + "***";

            if(ret.length <= 6) {
                ret = "***void***";
            }

            final_desc += ret + " " + "**" + moduleName + "**" + "." + variableName + "()\n\n" + "*" + description + "*\n";

        }
     
        return final_desc;
    }
    
    
    /* hledám komentař které jsou v daném rozmezí, v daném kanálu */
	getCommentFromChannel(channel: number, functionDeclarationLine : number, range: number) : string { 
		
		/*let comment = this.abstractSyntaxTreeCommentaryMap.get("Toybox.mc").find((x : Token) => 
			((x.channel === channel) && (x.line <= functionDeclarationLine && x.line > functionDeclarationLine-range))
			 && (x.text?.startsWith('/**') && x.text.endsWith('*¨/')))!.text!;*/

        //return comment;

        let tree = this.abstractSyntaxTreeCommentaryMap.get("Toybox.mc");
        let founded = false;
        let res = "";
        for (let i = 0; i < tree.length; i++) {
            if(founded) { break; }
            if((tree[i].channel === channel) && (tree[i].line <= functionDeclarationLine && tree[i].line > functionDeclarationLine-range)
             && (tree[i].text?.startsWith("/**") && tree[i].text?.endsWith("*/"))) {
                res = tree[i].text;
                founded = true;
            }
        }

        return res;

	}

    /* hledám komentař datoveho typu které jsou v daném rozmezí, v daném kanálu */
	getDataTypeCommentFromChannel(channel: number, startLine : number, range: number, fileName: string) : string { 
		
        let tree = this.abstractSyntaxTreeCommentaryMap.get(fileName);
        let founded = false;
        let res = "";
        for (let i = 0; i < tree.length; i++) {
            if(founded) { break; }
            if((tree[i].channel === channel) && (tree[i].line <= startLine && tree[i].line > startLine-range)
             && (tree[i].text?.startsWith("/**") && tree[i].text?.includes('* @type ') && tree[i].text?.endsWith("*/"))) {
                res = tree[i].text;
                founded = true;

            }
            
            
        }

        return res;

	}
    
    extractFromDeclarationRule(tree: Node[], variableName: string) {

        for(let i = 0; i < tree.length; i++) {
            
            let ctx = tree[i] ? tree[i].getContext() : undefined;
            if (ctx && (ctx.ruleIndex === MonkeyCParser.RULE_variableDeclarationList || ctx.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList)) { 
                
                //new instance initialization
                if(ctx.text.includes('var'+variableName+'=') && ctx.text.includes('new')) {
                    let tmp = "";
                    if(ctx.text.includes('(') && ctx.text.includes(')'))
                        tmp = ctx.text.substring(ctx.text.indexOf('new')+3, ctx.text.indexOf('('));
                    else if((ctx.text.includes('[') && ctx.text.includes(']')) && (ctx.text.indexOf('[') < ctx.text.indexOf(']')))
                        return "Array";
                    if((variableName !== tmp) && ctx.text.includes(tmp)) 
                        return tmp;
                }
              //finding through comments --> single method call
            } else if(ctx && ctx.text.includes(variableName + '=') && ctx.ruleIndex === MonkeyCParser.RULE_varOrFieldDeclaration) {
                try {
                    let tmp; 
                    tmp = tree[i-1].getChildren()![2].getType()!;
                    /*if(tree[i].getChildren()!?.length > 2)
                       
                    else
                        tmp = tree[i].getChildren()![1].getType()!;*/
                    return RuleNames.ruleNamesDictionary[tmp-1];
                } catch (error) {
                    return undefined;
                }
              
            }  
        }

        return undefined;
    }

    findThroughComments(tree: Node[],i:number) {
        let tmp;
        let members = [];
        let onCalled = "";
        let called = "";

        tmp = tree[i-1].getChildren()![2]!.getValue();
        members = tmp!?.split('.');
        members.forEach(mem => {
            if(mem.includes('(') && mem.includes(')')) {
                //hledam metodu hehe
                let _classes = this.findClass(onCalled)?.getChildren()![3].getChildren()![1].getChildren();
                let target = _classes?.find(x => x.getValue()?.includes(mem.substring(0,mem.indexOf('('))));
                let funcDeclarationLine = target?.getContext()?._start.line!;
                let cmnt = this.getCommentFromChannel(1,funcDeclarationLine,10);
                called = cmnt.substring(cmnt.indexOf("@returns")+"@returns".length, cmnt.lastIndexOf("\n")).trim();
                called = called.substring(called.lastIndexOf('::')+'::'.length);
               
                return called;
                
            } else {
                onCalled = this.processClassName(this.extractFromDeclarationRule(tree, mem)!);
            }
        });
       if(called.length > 0 ) { return called; }
    }

    findClassName(tree: Node[], variableName: string) {
        const cursorPos = this.getCursorPosition();
        for(let i = 0; i < tree.length; i++) {
            let ctx = tree[i] ? tree[i].getContext() : undefined;
            //context must not be undefined or null
            if(ctx) {
                //im considering only contexts, which are on the same line as mouse cursor
                //if((cursorPos.line+1) === ctx.start.line) {
                    if ((ctx.ruleIndex === MonkeyCParser.RULE_variableDeclarationList || ctx.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList || ctx.ruleIndex === MonkeyCParser.RULE_blockStatement || ctx.ruleIndex === MonkeyCParser.RULE_statement)) { 
                    
                        //new instance initialization
                        if(ctx.text.includes('var'+variableName+'=') && ctx.text.includes('new')) {
                            let tmp = "";
                            if(ctx.text.includes('(') && ctx.text.includes(')'))
                                tmp = ctx.text.substring(ctx.text.indexOf('new')+3, ctx.text.indexOf('('));
                            else if((ctx.text.includes('[') && ctx.text.includes(']')) && (ctx.text.indexOf('[') < ctx.text.indexOf(']')))
                                return "Array";
                            if((variableName !== tmp) && ctx.text.includes(tmp)) 
                                return tmp;
                        //this condition covers fiding data type of variables from comments above them.
                        } else if ((ctx.text.includes(variableName))) {
                            let comment = this.getDataTypeCommentFromChannel(1,ctx._start.line-1,5,DocumentHandler.currentDocumentName);
                            if(comment.length > 0) {
                                let _type = comment.substring(comment.lastIndexOf('.')+1);                                                       
                                var tmp = _type.match("[^A-Za-z0-9]+");
                                _type = _type.replace(tmp![0],"");
                                return _type;
                            } else {
                                return undefined;
                            }
                        }                
                    } 
                    //finding through comments --> single method call
                    else if ((ctx.text.includes(variableName) && ctx.text.includes('.') && ctx.text.includes('(') && ctx.text.includes(')')) && (ctx.ruleIndex === MonkeyCParser.RULE_varOrFieldDeclaration || ctx.ruleIndex === MonkeyCParser.RULE_fullyQualifiedReferenceExpression)) {
                        let tmp;
                        let members = [];
                        let onCalled = "";
                        let called = "";
                        tmp = tree[i-1].getChildren()![2]!.getValue();
                        members = tmp!?.split('.');
                        members.forEach(mem => {
                            if(mem.includes('(') && mem.includes(')')) {
                                //hledam metodu hehe
                                let _classes = this.findClass(onCalled)?.getChildren()![3].getChildren()![1].getChildren();
                                let target = _classes?.find(x => x.getValue()?.includes(mem.substring(0,mem.indexOf('('))));
                                let funcDeclarationLine = target?.getContext()?._start.line!;
                                let cmnt = this.getCommentFromChannel(1,funcDeclarationLine,10);
                                called = cmnt.substring(cmnt.indexOf("@returns")+"@returns".length, cmnt.lastIndexOf("\n")).trim();                       
                                called = called.substring(called.lastIndexOf('.')+'.'.length);
                            
                                return called;
                                
                            } else {
                                onCalled = this.processClassName(this.extractFromDeclarationRule(tree, mem)!);
                            }
                        });
                    if(called.length > 0 ) { return called; }
                        
                    } else if(ctx.text.includes(variableName + '=') && ctx.ruleIndex === MonkeyCParser.RULE_varOrFieldDeclaration) {
                        try {
                            let tmp; 
                            tmp = tree[i-1].getChildren()![2].getType()!;
                            let val = RuleNames.ruleNamesDictionary[tmp-1];
                            if(val !== 'IDENTIFIER')
                                return val;
                        } catch (error) {
                            //return undefined;
                            continue;
                        }
                    
                    } 
               // }//end of position check condition
            }//end of context check
        }

    return undefined;
    }


    isInherited(tree: Node[], variableName: string) : boolean {
        for(let i = 0; i < tree.length; i++) {           
            let ctx = tree[i] ? tree[i].getContext() : undefined;                
            if (ctx && (ctx.ruleIndex === MonkeyCParser.RULE_classDeclaration))
                if(ctx.text.includes('extends' + variableName)) { return true; }                       
        }
        return false;  
    }

    findClass(className: string) {
        className = this.processClassName(className);
        let classes : Node[] = [];
        this.abstractSyntaxTreeMap.forEach((t: AST) => {
            let tree = t.getParseTree();
            for(let i = 0; i < tree.length; i++)
                if(!(tree[i] === null || tree[i] === undefined) && tree[i].getContext()?.ruleIndex === MonkeyCParser.RULE_classDeclaration) classes.push(tree[i]);
        });

        for(let i = 0; i < classes.length; i+=2) {
            try {
                if(classes[i].getChildren()![1].getValue() === className)                
                    return classes[i];
            } catch (error) {
                //console.log(error);
                //
            }
        }

        return undefined;
    }

    processClassName(name: string) {

        switch (name) {

            case "Array":
                return "Array";

            case "TRUE":
                return "Boolean";
            
            case "FALSE":
                return "Boolean";
            
            case "INTLITERAL":
                return "Number";

            case "LONGLITERAL":
                return "Long";
                
            case "HEX_LITERAL":
                return name;

            case "FLOATLITERAL":
                return "Float";

            case "DOUBLELITERAL":
                return "Double";
                
            case "CHARLITERAL":
                return "Char";
                
            case "STRING":
                return "String";
            default:
                return name;
                
        }
    }

    findModule(moduleName: string) {
        let modules : any[] =[];
        let tree : Node[] = this.abstractSyntaxTreeMap.get("Toybox.mc")!?.getParseTree();
        let tmp;

        for(let i = 0; i < tree.length; i++) {
            if(tree[i] !== null && tree[i]!?.getContext()!==undefined) {
            
                if (tree[i].getContext()!.ruleIndex === MonkeyCParser.RULE_moduleBodyMembers) {
                    tmp = tree[i];
                    while(modules.length < tmp.getContext()!.childCount) {
                        i++;
                        if(tree[i] !== null && tree[i]!?.getContext()!==undefined) {

                            if(tree[i].getContext()!.ruleIndex === MonkeyCParser.RULE_moduleBodyMember && tree[i].getValue()?.startsWith("module")) {
                                
                                modules.push(new vscode.CompletionItem(
                                    tree[i].getValue()!?.substring(tree[i].getValue()!?.indexOf("module") + ("module").length, tree[i].getValue()?.indexOf('{')),
                                    vscode.CompletionItemKind.Module
                                ));
                            }
                        }                           
                    }

                    break;
                }              
            }
        }
        return modules;
    }

    findModuleBodyMembers(moduleName: string) {
        let modules : Node[] =[];
        let bodyMembers : Node[] = []; 
        let tree = this.abstractSyntaxTreeMap.get("Toybox.mc")!?.getParseTree();
        for(let i = 0; i < tree.length; i++) {
            if(tree[i] !== null)
                if(tree[i].getContext()!?.ruleIndex === MonkeyCParser.RULE_moduleBodyMembers) {
                    modules = tree[i].getChildren()!;
                    break;
                }
                    
        }
        let founded = false;
        let moduleCompleted = false;
        for(let i = 0; i < modules.length; i++) {  
            
            if(moduleCompleted) { break; }

            if(modules[i] !== undefined) {
                if(!founded) {
                    let identifier = modules[i].getValue()?.substring(("module").length,modules[i].getValue()?.indexOf('{'));
                    if(identifier === moduleName)
                        founded = true;
                } else {
                    if(modules[i].getValue()?.includes("module") && modules[i].getChildren()?.length === 2) {
                        moduleCompleted = true;
                    }
                    if(!moduleCompleted) {
                        if(modules[i].getValue()?.substring(0,modules[i].getValue()?.indexOf('{')).includes("class") || 
                          (modules[i].getValue()?.substring(0,modules[i].getValue()?.indexOf('{')).includes("function"))) {
                            bodyMembers.push(modules[i]);
                        }
                    }
                    
                }
                
            }
        }
        if(bodyMembers.length <= 0 ) { return undefined; }
        else { return bodyMembers; }
    }

    collectImportedModules() {

        let tree = this.abstractSyntaxTreeMap.get(DocumentHandler.currentDocumentName)!?.getParseTree();
        var modules = [], i;
        for(let i = 0; i < tree.length; i++)
            if (tree[i] && tree[i].getContext()!?.ruleIndex === MonkeyCParser.RULE_usingDeclaration)
                modules.push(tree[i]);
        return modules;

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