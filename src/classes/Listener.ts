import * as vscode from 'vscode';
import { AST } from './AST';
import { Node } from './Node';
import { AdditiveExpressionContext, ArgumentsContext, BlockContext, BlockStatementContext, ClassBodyContext, ClassBodyMemberContext, ClassBodyMembersContext, ClassDeclarationContext, CompilationUnitContext, ComponentNameContext, ConstDeclarationContext, FieldDeclarationContext, FieldDeclarationListContext, FormalParameterDeclarationsContext, FullyQualifiedReferenceExpressionContext, FunctionDeclarationContext, GeneralFullyQualifiedReferenceExpressionContext, IdContext, LiteralContext, LiteralExpressionContext, MethodInvocationContext, ModifiersContext, ModuleBodyContext, ModuleBodyMemberContext, ModuleBodyMembersContext, ModuleDeclarationContext, MonkeyCParser, ProgramContext, QualifiedReferenceExpressionContext, ReferenceExpressionContext, ReferenceOrThisExpressionContext, StatementContext, TernaryExpressionContext, ThisExpressionContext, UsingDeclarationContext, VariableDeclarationContext, VariableDeclarationListContext, VariableInitializerContext, VarOrFieldDeclarationContext } from '../MonkeyCParser';
import { MonkeyCListener } from '../MonkeyCListener';

export class Listener implements MonkeyCListener {

	completionStrings: vscode.CompletionItem[];
	completionList: vscode.CompletionList;
	AST : AST;

	/* index of current BlockContext in AST */
	currentScopeIndex: number;

	constructor() {
		this.completionStrings = [];
		this.completionList = new vscode.CompletionList(this.completionStrings,false);
		this.AST = new AST("");
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

		let EOF = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.root,
			/*1..n children: */         [],
			/*value of the context: */  '<EOF>'
		
		);
		
		this.AST.root.addChild(EOF);
		this.AST.addNode(EOF);
		this.AST.currentNode = this.AST.root;

		this.completionList = new vscode.CompletionList(this.completionStrings, false);
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		
		let compilationUnitNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
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

	enterModuleDeclaration(context: ModuleDeclarationContext) {

		let moduleDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleDeclarationNode);

		this.AST.addNode(moduleDeclarationNode);
		this.AST.currentNode = moduleDeclarationNode;

	}

	exitModuleDeclaration(context: ModuleDeclarationContext) { }

	enterModuleBody(context: ModuleBodyContext) { 

		let moduleBodyNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  moduleBodyNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text
		
		);

		moduleBodyNode.addChild(LBRACE);


		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleBodyNode);

		this.AST.addNode(LBRACE);
		this.AST.addNode(moduleBodyNode);

		this.AST.currentNode = moduleBodyNode;


	}
	exitModuleBody(context: ModuleBodyContext) { 

		let classBodyNode = this.AST.getParseTree().find((x) => x !== null && x.getContext()?.ruleIndex === MonkeyCParser.RULE_moduleBody);

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

	enterModuleBodyMembers(context: ModuleBodyMembersContext) { 

		let moduleBodyMembersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleBodyMembersNode);

		this.AST.addNode(moduleBodyMembersNode);
		this.AST.currentNode = moduleBodyMembersNode;

	}
	exitModuleBodyMembers(context: ModuleBodyMembersContext) { }

	enterModuleBodyMember(context: ModuleBodyMemberContext) { 

		this.AST.currentNode = this.AST.getParseTree().find((x) => x !== null && x.getContext()?.ruleIndex === MonkeyCParser.RULE_moduleBodyMembers) as Node; 

		let moduleBodyMemberNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleBodyMemberNode);

		this.AST.addNode(moduleBodyMemberNode);
		this.AST.currentNode = moduleBodyMemberNode;

	}


	exitModuleBodyMember(context: ModuleBodyMemberContext) { }


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

		let classBodyNode = this.AST.getParseTree().find((x) => x !== null && x.getContext()?.ruleIndex === MonkeyCParser.RULE_classBody);

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
		//this.AST.currentNode = this.AST.getParseTree()?.[this.currentScopeIndex-1];
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
				/*value of the context: */  context._parent.getChild(1).text
			
			);

			
			/* set this node as one of children to the previous node */
			this.AST.currentNode.addChild(modifiersNode);
			this.AST.currentNode.addChild(modifier);
			
			this.AST.addNode(modifiersNode);
			this.AST.addNode(modifier);
		} else {

			this.AST.currentNode.addChild(modifiersNode);
			this.AST.addNode(modifiersNode);
		}
	}

	exitModifiers() { 

	let curr =undefined;
	if(this.AST.currentNode.getContext()!?.ruleIndex === MonkeyCParser.RULE_fieldDeclarationList) {
		curr = this.AST.findNode(MonkeyCParser.RULE_fieldDeclarationList);
	} else if(this.AST.currentNode.getContext()!?.ruleIndex === MonkeyCParser.RULE_classDeclaration) {
		curr = this.AST.findNode(MonkeyCParser.RULE_classDeclaration);
	} else if(this.AST.currentNode.getContext()!?.ruleIndex === MonkeyCParser.RULE_moduleDeclaration) {
		curr = this.AST.findNode(MonkeyCParser.RULE_moduleDeclaration);
	} else if(this.AST.currentNode.getContext()!?.ruleIndex === MonkeyCParser.RULE_classBodyMember) {
		curr = this.AST.findNode(MonkeyCParser.RULE_classBodyMember);
	} else if(this.AST.currentNode.getContext()!?.ruleIndex === MonkeyCParser.RULE_functionDeclaration) {
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
		let tree = this.AST.getParseTree();
		let n = null;
		for(let i = tree.length-1; i >= 0; i--) {

			if(tree[i] != null && tree[i].getContext() != null)
				if(tree[i].getContext()!?.ruleIndex === MonkeyCParser.RULE_fieldDeclaration) {

					this.AST.currentNode = tree[i];
					break;
				}	
		}
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

	enterGeneralFullyQualifiedReferenceExpression(context: GeneralFullyQualifiedReferenceExpressionContext) {

		let generalFullyQualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(generalFullyQualifiedReferenceExpressionNode);

		this.AST.addNode(generalFullyQualifiedReferenceExpressionNode);
		this.AST.currentNode = generalFullyQualifiedReferenceExpressionNode;

	}

	exitGeneralFullyQualifiedReferenceExpression(context: GeneralFullyQualifiedReferenceExpressionContext) { }


	enterQualifiedReferenceExpression(context: QualifiedReferenceExpressionContext) {

		let qualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(qualifiedReferenceExpressionNode);

		this.AST.addNode(qualifiedReferenceExpressionNode);
		this.AST.currentNode = qualifiedReferenceExpressionNode;

	}

	exitQualifiedReferenceExpression(context: QualifiedReferenceExpressionContext) { }

	
	enterMethodInvocation(context: MethodInvocationContext) {
		
		let methodInvocationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(methodInvocationNode);

		this.AST.addNode(methodInvocationNode);
		this.AST.currentNode = methodInvocationNode;

	}

	exitMethodInvocation(context: MethodInvocationContext) { }

	enterArguments(context: ArgumentsContext) {

		let argumentsNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);

		let LPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  argumentsNode,
			/*1..n children: */         [],
			/*value of the context: */  context.getChild(0).text
		
		);

		argumentsNode.addChild(LPAREN);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(argumentsNode);

		this.AST.addNode(argumentsNode);
		this.AST.addNode(LPAREN);

		this.AST.currentNode = argumentsNode;
	}

	exitArguments(context: ArgumentsContext) { 

		let argumentsNode = this.AST.findNode(MonkeyCParser.RULE_arguments);

		let RPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  argumentsNode,
			/*1..n children: */         [],
			/*value of the context: */  context.getChild(1).text
		
		);

		argumentsNode?.addChild(RPAREN);

		this.AST.currentNode = argumentsNode!;

	}


	enterComponentName(context: ComponentNameContext) {

		let componentNameNode = new Node(
			
			/* context of this node: */ context.parent,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text
		
		);
		if(this.AST.currentNode === undefined) this.AST.currentNode = this.AST.getParseTree()[this.AST.getParseTree().length-2];
		this.AST.currentNode.addChild(componentNameNode);
		let _extends = null;
		if(context._parent!?.childCount > 4) {

			_extends = new Node(
			
				/* context of this node: */ undefined,
				/* parent of this node: */  this.AST.currentNode,
				/*1..n children: */         [],
				/*value of the context: */  'extends'
			
			);

			this.AST.currentNode.addChild(_extends);

		}
	
		this.AST.addNode(componentNameNode);
		this.AST.addNode(_extends!);
		
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

	enterAdditiveExpression(context: AdditiveExpressionContext) { 

		

	}
	exitAdditiveExpression(context: AdditiveExpressionContext) { }

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
}