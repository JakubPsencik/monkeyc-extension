import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonToken, CommonTokenStream, Lexer, ListTokenSource, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, BlockStatementContext, ClassBodyContext, ClassBodyMemberContext, ClassBodyMembersContext, ClassDeclarationContext, CompilationUnitContext, ComponentNameContext, ConstDeclarationContext, FieldDeclarationContext, FieldDeclarationListContext, FormalParameterDeclarationsContext, FullyQualifiedReferenceExpressionContext, FunctionDeclarationContext, IdContext, LiteralContext, LiteralExpressionContext, ModifiersContext, MonkeyCParser, ProgramContext, ReferenceExpressionContext, ReferenceOrThisExpressionContext, StatementContext, TernaryExpressionContext, ThisExpressionContext, UsingDeclarationContext, VariableDeclarationContext, VariableDeclarationListContext, VariableInitializerContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AST } from './AST';
import { Node } from './Node';
import { throws } from 'assert';
import * as fs from 'fs';
import {window, Uri, workspace, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument} from 'vscode';
import { dirname } from 'path';
import { stringify } from 'querystring';



var clang = require("clang-format");

interface ErrorDescription {
    offendingSymbol: any;
	line: number;
	charPositionInLine: number;
	msg : string
	e: RecognitionException | undefined
}

export interface Leaf {
	parent: Node,
	text: string
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
	completionStrings: vscode.CompletionItem[];
	completionList: vscode.CompletionList;
	AST : AST;

	/* index of current BlockContext in AST */
	currentScopeIndex: number;

	constructor() {
		this.completionStrings = [];
		this.completionList = new vscode.CompletionList(this.completionStrings,false);
		this.AST = new AST();
		this.currentScopeIndex = -1;
	}

	getList() { return this.completionList; }

	getAST() { return this.AST; }

	
	/* root */
	enterProgram(context: ProgramContext) {
		
		let node = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  undefined,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		this.AST.addNode(node);
		this.AST.root = node;
		this.AST.currentNode = node;
		
	}

	exitProgram(context: ProgramContext) {
		this.completionList = new vscode.CompletionList(this.completionStrings, false);
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		
		let compilationUnitNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(compilationUnitNode);

		this.AST.addNode(compilationUnitNode);
		this.AST.currentNode = compilationUnitNode;
		
	}

	
	exitCompilationUnit() {
		//console.log('exitCompilationUnit\n');
		this.AST.currentNode = this.AST.root;
	}

	enterUsingDeclaration(context: UsingDeclarationContext) {
		//console.log(`Using start line number ${context._start.line}`);		
		// ...
		let usingDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let using = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  usingDeclarationNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text
		
		);

		usingDeclarationNode.addChild(using);

		this.AST.currentNode.addChild(usingDeclarationNode);

		this.AST.addNode(using);
		this.currentScopeIndex = this.AST.getParseTree().length;
		this.AST.addNode(usingDeclarationNode);
		this.AST.currentNode = usingDeclarationNode;
	}

	exitUsingDeclaration() { }

	enterFullyQualifiedReferenceExpression(context: FullyQualifiedReferenceExpressionContext) {
		
		let fullyQualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(fullyQualifiedReferenceExpressionNode);

		this.AST.addNode(fullyQualifiedReferenceExpressionNode);
		this.AST.currentNode = fullyQualifiedReferenceExpressionNode;
	}

	exitFullyQualifiedReferenceExpression() { }

	enterReferenceOrThisExpression(context: ReferenceOrThisExpressionContext) {
		
		let referenceOrThisExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(referenceOrThisExpressionNode);

		this.AST.addNode(referenceOrThisExpressionNode);
		this.AST.currentNode = referenceOrThisExpressionNode;

	}

	exitReferenceOrThisExpression() { }

	enterReferenceExpression(context: ReferenceExpressionContext) {
		
		let referenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(referenceExpressionNode);

		this.AST.addNode(referenceExpressionNode);
		this.AST.currentNode = referenceExpressionNode;
	}

	exitReferenceExpression() { }

	enterStatement(context: StatementContext) {

		let statement = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(statement);

		this.AST.addNode(statement);
		this.AST.currentNode = statement;
	}

	exitStatement() {

	}

	enterClassDeclaration(context: ClassDeclarationContext) {
	
		let classDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classDeclarationNode);

		this.AST.addNode(classDeclarationNode);
		this.AST.currentNode = classDeclarationNode;

	}

	exitClassDeclaration() { }
	
	enterClassBody(context: ClassBodyContext) {

		let classBodyNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  classBodyNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text
		
		);

		classBodyNode.addChild(LBRACE);


		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classBodyNode);

		this.AST.addNode(LBRACE);
		this.AST.addNode(classBodyNode);

		this.AST.currentNode = classBodyNode;
	}

	exitClassBody(context: ClassBodyContext) {

		let classBodyNode = this.AST.getParseTree().find((x) => x.getContext()?.ruleIndex === MonkeyCParser.RULE_classBody);

		let RBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  classBodyNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(2).text
		
		);

		classBodyNode!.addChild(RBRACE);

		this.AST.addNode(RBRACE);
		this.AST.currentNode = classBodyNode as Node;	
	}

	enterClassBodyMembers(context: ClassBodyMembersContext) {

		let classBodyMembersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classBodyMembersNode);

		this.AST.addNode(classBodyMembersNode);
		this.AST.currentNode = classBodyMembersNode;

	}

	exitClassBodyMembers(context: ClassBodyMembersContext) { }

	enterClassBodyMember(context: ClassBodyMemberContext) {
		
		let classBodyMemberNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classBodyMemberNode);

		this.AST.addNode(classBodyMemberNode);
		this.AST.currentNode = classBodyMemberNode;

	}

	exitClassBodyMember(context: ClassBodyMemberContext) { 
	
		const classBodyMembersNode = this.AST.findNode(MonkeyCParser.RULE_classBodyMembers);	
		this.AST.currentNode = classBodyMembersNode!;
	}
	

	/*
	* new scope detected
	*/
	enterBlock(context: BlockContext) {
		/*console.log(`Block start line number ${context._start.line}`);
		console.log(`Block end line number ${context._stop?.line}`);
		console.log(context.text);*/

		let block = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  block,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text
		
		);
		block.addChild(LBRACE);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(block);

		
		this.AST.addNode(block);
		this.currentScopeIndex = this.AST.getParseTree().length;
		this.AST.addNode(LBRACE);

		this.AST.currentNode = block;

	}

	exitBlock() {
		//console.log('exitBlock\n');
		let block = this.AST.findNode(MonkeyCParser.RULE_block);

		let RBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  block,
			/*no children for leafs */  undefined,
			/*value of the context: */  "}"
		);

		block!.addChild(RBRACE);
		this.AST.addNode(RBRACE);
		this.AST.currentNode = block!.getParent() as Node;
	}

	enterBlockStatement(context: BlockStatementContext) {

		let blockStatementNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(blockStatementNode);
		this.AST.addNode(blockStatementNode);

		this.AST.currentNode = blockStatementNode;

	}

	exitBlockStatement() {
		this.AST.currentNode = this.AST.getParseTree()?.[this.currentScopeIndex-1];
	}

	enterFieldDeclarationList(context: FieldDeclarationListContext) {
		
		let fieldDeclarationListNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(fieldDeclarationListNode);
		this.AST.addNode(fieldDeclarationListNode);

		this.AST.currentNode = fieldDeclarationListNode;
	}

	exitFieldDeclarationList() { }

	enterModifiers(context: ModifiersContext) {

		let modifiersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);
		
		if (context._parent?.getChild(1).text === "var") {
			
			let modifier = new Node(
			
				/* context of this node: */ undefined,
				/* parent of this node: */  modifiersNode,
				/*1..n children: */         undefined,
				/*value of the context: */  context.getChild(0).text
			
			);
			modifiersNode.addChild(modifier);
			
			/* set this node as one of children to the previous node */
			this.AST.currentNode.addChild(modifiersNode);
			
			this.AST.addNode(modifiersNode);
			this.AST.addNode(modifier);
		} else {

			this.AST.currentNode.addChild(modifiersNode);
			this.AST.addNode(modifiersNode);
		}
		
		//this.AST.currentNode = modifiersNode;
	}

	exitModifiers() { 

	let curr =undefined;
	if(this.AST.currentNode.getContext()?.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList) {
		curr = this.AST.findNode(MonkeyCParser.RULE_fieldDeclarationList);
	} else if(this.AST.currentNode.getContext()?.ruleIndex === MonkeyCParser.RULE_classDeclaration) {
		curr = this.AST.findNode(MonkeyCParser.RULE_classDeclaration);
	} else if(this.AST.currentNode.getContext()?.ruleIndex === MonkeyCParser.RULE_classBodyMember) {
		curr = this.AST.findNode(MonkeyCParser.RULE_classBodyMember);
	} else if(this.AST.currentNode.getContext()?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
		curr = this.AST.findNode(MonkeyCParser.RULE_functionDeclaration);
	}
	
	this.AST.currentNode = curr!;

	}

	enterFieldDeclaration(context: FieldDeclarationContext) {
			
		let _var = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text
		
		); 
		
		let fieldDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let comma = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(3).text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(_var);
		this.AST.currentNode.addChild(fieldDeclarationNode);
		this.AST.currentNode.addChild(comma);

		this.AST.addNode(_var);
		this.AST.addNode(fieldDeclarationNode);
		this.AST.addNode(comma);

		//this.AST.currentNode = fieldDeclarationNode;

	}

	exitFieldDeclaration() {

		this.AST.currentNode = this.AST.getParseTree().find((x) => x.getContext()?.ruleIndex === MonkeyCParser.RULE_fieldDeclaration) as Node;

	}
	
	enterVariableDeclarationList(context: VariableDeclarationListContext) {

		let variableDeclarationListNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let comma = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text
		
		);



		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(variableDeclarationListNode);
		this.AST.currentNode.addChild(comma);

		this.AST.addNode(variableDeclarationListNode);
		this.AST.addNode(comma);

		this.AST.currentNode = variableDeclarationListNode;
	}

	exitVariableDeclarationList() {

	}

	enterVariableDeclaration(context: VariableDeclarationContext) {
		//console.log(`Variable start line number ${context._start.line}`);
		// ...

		let variableDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		);

		let var_ = new Node(
			
			/* context of this node: */ /*"var"*/undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(0).text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(var_);
		this.AST.currentNode.addChild(variableDeclarationNode);

		this.AST.addNode(var_);
		this.AST.addNode(variableDeclarationNode);
		this.AST.currentNode = variableDeclarationNode;
	}

	exitVariableDeclaration() { }

	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {

		let varOrFieldDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(varOrFieldDeclarationNode);

		this.AST.addNode(varOrFieldDeclarationNode);
		this.AST.currentNode = varOrFieldDeclarationNode;
		
	}

	
	exitVarOrFieldDeclaration() {
		//pri exitu nastavit ten aktualni node na ten ktery sem prave exitnul
		//parent?
		//console.log('exitVarOrFieldDeclaration\n');
	}

	enterComponentName(context: ComponentNameContext) {

		let componentNameNode = new Node(
			
			/* context of this node: */ context.parent,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(componentNameNode);

		this.AST.addNode(componentNameNode);
		this.AST.currentNode = componentNameNode;
	}

	exitComponentName() { }


	enterId(context: IdContext): void {

		let idNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let variableNameNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  idNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context.getChild(0).text
		
		);
		idNode.addChild(variableNameNode);


		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(idNode);

		this.AST.addNode(idNode);
		this.AST.addNode(variableNameNode);
		//this.AST.getParseTree()![1];

		this.AST.currentNode = this.AST.currentNode.getParent() as Node;
	}

	exitId() { }

	enterVariableInitializer(context: VariableInitializerContext) {
	
		let EQ_Node = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text
		
		);

		let variableInitializerNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(EQ_Node);
		this.AST.currentNode.addChild(variableInitializerNode);

		this.AST.addNode(EQ_Node);
		this.AST.addNode(variableInitializerNode);

		this.AST.currentNode = variableInitializerNode;

	}

	exitVariableInitializer() { }

	
	enterLiteralExpression(context: LiteralExpressionContext) {

		let literalExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalExpressionNode);

		this.AST.addNode(literalExpressionNode);
		this.AST.currentNode = literalExpressionNode;

	}

	exitLiteralExpression() { }


	enterLiteral(context: LiteralContext) {

		let literalValueNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */ context.getChild(0).text
			
		);
		
		let children : Node[] = [];
		children.push(literalValueNode);

		let literalNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         children,
			/* value of context:  */	context.text

		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalNode);

		this.AST.addNode(literalNode);
		this.AST.addNode(literalValueNode);
		
		this.AST.currentNode = literalValueNode;
		
	}

	exitLiteral() { }

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		
		let functionDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		//let modifier = new Node(
		//	
		//	/* context of this node: */ undefined,
		//	/* parent of this node: */  functionDeclarationNode,
		//	/*1..n children: */         [],
		//	/*value of the context: */  context.getChild(0).text
		//
		//);*/

		let _function = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  functionDeclarationNode,
			/*1..n children: */         [],
			/*value of the context: */  context.getChild(1).text
		
		);

		//functionDeclarationNode.addChild(modifier);
		functionDeclarationNode.addChild(_function);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(functionDeclarationNode);

		this.AST.addNode(functionDeclarationNode);
		//this.AST.addNode(modifier);
		this.AST.addNode(_function);

		this.AST.currentNode = functionDeclarationNode;

	}

	exitFunctionDeclaration() { 

		let functionDeclarationNode = this.AST.findNode(MonkeyCParser.RULE_functionDeclaration);
		this.AST.currentNode = functionDeclarationNode!;
	}

	enterFormalParameterDeclarations(context: FormalParameterDeclarationsContext) {
		
		
		let LPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context._parent?.getChild(3).text
		
		);
		
		let formalParameterDeclarationsNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let RPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context._parent?.getChild(5).text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(LPAREN);
		this.AST.currentNode.addChild(formalParameterDeclarationsNode);
		this.AST.currentNode.addChild(RPAREN);
		
		this.AST.addNode(LPAREN);
		this.AST.addNode(formalParameterDeclarationsNode);
		this.AST.addNode(RPAREN);

		//this.AST.currentNode = formalParameterDeclarationsNode;

	}

	exitFormalParameterDeclarations() {

		let functionDeclarationNode = this.AST.findNode(MonkeyCParser.RULE_functionDeclaration);
		this.AST.currentNode = functionDeclarationNode!;

	 }

	enterArguments(context: ArgumentsContext) {
		//console.log(`Argument start line number ${context._start.line}`);		
	}
}

	/*
	* vytvoreni nove kolekce s diagnostikou
	*/
	let collection = vscode.languages.createDiagnosticCollection('monkeyc-collection');
	let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
	let suggestions : Map<string, vscode.CompletionList> = new Map();
	let errorListener = new MyErrorListener();
	let parser : MonkeyCParser;
	let completionList : vscode.CompletionList;
	
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

			let suggestion = "suggestions: ";
			completionList.items.forEach(element => { suggestion += element.label + ", "; });
			console.log(suggestion.substring(0,(suggestion.length-2)));

			context.subscriptions.push(collection);

			
			/*const fileUri = vscode.window.activeTextEditor.document.uri;
			const folderPath = path.dirname(fileUri.path);
			const folderUri = fileUri.with({ path: folderPath });
			let files = countAndTotalOfFilesInFolder(folderUri);
			console.log(countAndTotalOfFilesInFolder(folderUri));
			
			let hehe = vscode.workspace.fs.readDirectory(folderUri);*/
			/*hehe.then.prototype.forEach((s : string, t : vscode.FileType).then((result : any) => {
				
			}).catch((err) => {
				
			}); */

			
		/*	//console.log(__dirname);
			let f = vscode.workspace.findFiles('.ts');
			console.log(vscode.workspace.findFiles('**​/*.mc'));
			let x : vscode.WorkspaceFolder[] = vscode.workspace.workspaceFolders as vscode.WorkspaceFolder[];
		
			console.log(0);
			let inputAsWorkspaceRelativeFolder = 'code_snippets'; // for example, would return: '/home/me/my-vs-project/assets' for input of './assets'
			let workspaceFolderPath = workspace.fs.readDirectory(folderUri);
			console.log(0);*/
		}
	});
	
	async function countAndTotalOfFilesInFolder(folder: vscode.Uri): Promise<{ total: number, count: number }> {
		let total = 0;
		let count = 0;
		for (const [name, type] of await vscode.workspace.fs.readDirectory(folder)) {
			if (type === vscode.FileType.File) {
				const filePath = path.join(folder.path, name);
				const stat = await vscode.workspace.fs.stat(folder.with({ path: filePath }));
				total += stat.size;
				count += 1;
			}
		}
		return { total, count };
	}


	vscode.workspace.onDidChangeTextDocument(() => {

		if (vscode.window.activeTextEditor) {
			errorListener.clearSyntaxErrors();
			collection.clear();
			diagnosticMap.clear();
			suggestions.clear();
			
			//clear autocomplete suggestions
			while (completionList.items.length > 0) {
				completionList.items.pop();
			}
			
			let document = vscode.window.activeTextEditor.document;
			document.save();
				
			ParseCode(document);
			let errors = errorListener.getSyntaxErrors();
			UpdateCollection(document,errors);
			
			let suggestion = "suggestions: ";
			completionList.items.forEach(element => { suggestion += element.label + ", "; });
			console.log(suggestion.substring(0,(suggestion.length-2)));

			context.subscriptions.push(collection);
		}
	});

	const localVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc', 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {			
				//return completionList;
				const s = suggestions.get("localVariables");
				return suggestions.get("localVariables");
			}
		});

	const classVariableProvider = vscode.languages.registerCompletionItemProvider(
		'monkeyc',
		{		
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			
				//return completionList;
				const s = suggestions.get("classVariables");
				return suggestions.get("classVariables");
				
			}
		},
		'self.','me.', '.'// triggered whenever any of these is being typed
	);

	
	context.subscriptions.push(localVariableProvider,classVariableProvider);
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
	parser = new MonkeyCParser(tokenStream);
	parser.buildParseTree = true;
	parser.removeErrorListeners();
	parser.addErrorListener(errorListener);

	let parseTree = parser.program();
	ParseTreeWalker.DEFAULT.walk(listener,parseTree);		

	ProvideAutocomplete(parser, listener, parseTree);
	
	let stream = parser.inputStream;
	stream.seek(0);
	let tokens = [];
	let offset = 1;
	while(true) {
		let token = stream.LT(offset++);
		tokens.push(token);
		if (token.type === -1) {
			break;
		}    
	}
}

function ProvideAutocomplete(parser : MonkeyCParser, listener: MonkeyCListener, parseTree: ProgramContext) {

	let core = new c3.CodeCompletionCore(parser);
	SetAutocompleteRules(core);

	let position = getCursorPosition();
	let pos : CaretPosition =  {
		line : position.line,
		column : position.column
	};

	let	index = computeTokenIndex(parseTree,pos);

	let candidateStrings: string[] = [];
	if (index !== undefined) {
		console.log('index: ',index);
		let candidates = core.collectCandidates(index,parser.ruleContext);
		candidateStrings = getKeywords(parser, candidates);
	}
	
	const completionStrings : vscode.CompletionItem[] = [];
	
	candidateStrings.forEach(c => {
		let label = c.replace('\'','').replace('\'','');
		completionStrings.push(new vscode.CompletionItem(label,vscode.CompletionItemKind.Keyword));						
	});

	let tree = listener.getAST().getParseTree();
	let localVariables = collectLocalVariables(tree,pos);
	let classVariables = collectClassVariables(tree,pos);
	let functions = collectFunctions(tree,pos);

	localVariables.forEach(v => {
		completionStrings.push(v);
	});
	
	completionList = new vscode.CompletionList(completionStrings,false);	

}

function collectLocalVariables(tree: Node[], position : CaretPosition) {

	let completionStrings : vscode.CompletionItem[] = [];

	for(let i = 0; i < tree.length; i++) {
		
		let ctx = tree[i].getContext();
			
		if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_block && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {

			let blockId = tree[i].getId();
			/* check every node in current scope */
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
		}	
	}

	suggestions.set("localVariables", new vscode.CompletionList(completionStrings,false));
	return completionStrings;
}

function collectClassVariables(tree: Node[], position : CaretPosition) {
	
	let classVariables : vscode.CompletionItem[] = [];

	for(let i = 0; i < tree.length; i++) {
		
		let ctx = tree[i].getContext();
			
		if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {

			let classBodyId = tree[i].getId();
			/* check every node in current scope */
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
		}	
	}

	suggestions.set("classVariables", new vscode.CompletionList(classVariables,false));
	return classVariables;
}

function collectFunctions(tree: Node[], position : CaretPosition) {
	
	let functions : vscode.CompletionItem[] = [];

	for(let i = 0; i < tree.length; i++) {
		
		let ctx = tree[i].getContext();
			
		if (ctx && ctx.ruleIndex === MonkeyCParser.RULE_classBody && (position.line > ctx._start.line && position.line < ctx._stop!.line)) {

			let classBodyId = tree[i].getId();
			/* check every node in current scope */
			while(!(tree[i].getValue() === '}' && tree[i].getParent()?.getId() === classBodyId)) {
				
				ctx = tree[i].getContext();
				
				if(ctx?.ruleIndex === MonkeyCParser.RULE_functionDeclaration && (tree[i].getChildren()!?.length <= 1)) {

					if(ctx._start.line <= position.line) {
						
						let variableName = "";
						if(ctx.text?.includes("=")) {
							variableName = ctx.text.substring(0,ctx.text?.indexOf('='));
						} else {
							variableName = ctx.text;
						}											
							functions.push(new vscode.CompletionItem(
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
		}	
	}

	suggestions.set("functions", new vscode.CompletionList(functions,false));
	return functions;
}

function getTokensFromParser(parser: MonkeyCParser) : Token[] {

	let stream = parser.inputStream;
	stream.seek(0);
	let tokens : Token[] = [];
	let offset = 1;
	while(true) {
		let token = stream.LT(offset++);
		tokens.push(token);
		if (token.type === -1) {
			break;
		}    
	}

	return tokens;
}

function getScopedSymbol(tokens: Token[]) : c3.ScopedSymbol {

	let cursorPos = getCursorPosition();

	tokens.forEach(token => {

		let startInLine = token.charPositionInLine;
		let endInLine = startInLine + (token.text !== undefined ? token.text.length : 0);

		if(token.line === (cursorPos.line+1)) {
			if (startInLine <= (cursorPos.column+1) && endInLine >= (cursorPos.column+1)) {
				return new ScopedSymbol(token.text);
			}
		}
	});

	return new ScopedSymbol(" ");
}

function SetAutocompleteRules(core : c3.CodeCompletionCore) {

	core.preferredRules = new Set([ 
		MonkeyCParser.RULE_varOrFieldDeclaration,
		MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_id
		/*MonkeyCParser.RULE_componentName,
		MonkeyCParser.RULE_variableDeclaration,
		MonkeyCParser.RULE_variableDeclarationList,*/
	]);

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

function getKeywords(parser: MonkeyCParser, candidates: c3.CandidatesCollection) {

	let keywords: string[] = [];
	
	for (let candidate of candidates.tokens) {
		keywords.push(parser.vocabulary.getDisplayName(candidate[0]));
	}

	return keywords;
}

function getCursorPosition() : CaretPosition {

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