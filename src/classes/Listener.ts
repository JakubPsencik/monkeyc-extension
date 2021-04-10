import * as vscode from 'vscode';
import { AST } from './AST';
import { Node } from './Node';
import { AdditiveExpressionContext, AnnotationContext, ArgumentsContext, ArgumentsListContext, ArrayCreatorContext, ArrayCreatorExpressionContext, ArrayInitializerContext, AssignmentExpressionContext, AssignmentOperatorContext, AssignmentOperatorExpressionContext, BitAndExpressionContext, BitNotExpressionContext, BitOrExpressionContext, BitShiftExpressionContext, BitwiseExpressionContext, BitwiseOperatorContext, BitXOrExpressionContext, BlingExpressionContext, BlockContext, BlockStatementContext, CatchClauseContext, CatchesContext, CatchParameterContext, ClassAccessContext, ClassBodyContext, ClassBodyMemberContext, ClassBodyMembersContext, ClassDeclarationContext, CompilationUnitContext, ComponentNameContext, ConstDeclarationContext, DictionaryCreatorContext, ElementAccessExpressionContext, EnumConstantContext, EnumDeclarationContext, EqualityExpressionContext, ExpressionListContext, FieldDeclarationContext, FieldDeclarationListContext, ForInitContext, FormalParameterDeclarationsContext, ForStatementContext, FullyQualifiedReferenceExpressionContext, FunctionDeclarationContext, GeneralFullyQualifiedReferenceExpressionContext, HasExpressionContext, IdContext, InstanceofExpressionContext, KeyValueInitializerContext, LiteralContext, LiteralExpressionContext, LogicalAndExpressionContext, LogicalOrExpressionContext, MaybeSignedIntegerContext, MethodInvocationContext, MethodInvocationExpressionContext, ModifiersContext, ModuleBodyContext, ModuleBodyMemberContext, ModuleBodyMembersContext, ModuleDeclarationContext, MonkeyCParser, MultiplicativeExpressionContext, NotExpressionContext, ObjectCreatorContext, ObjectCreatorExpressionContext, ParenthesizedExpressionContext, PostDecreaseExpressionContext, PostIncrementExpressionContext, PreDecreaseExpressionContext, PreIncrementExpressionContext, ProgramContext, QualifiedNameContext, QualifiedReferenceExpressionContext, ReferenceExpressionContext, ReferenceOrThisExpressionContext, RelationalExpressionContext, RelationalOpContext, ShiftOpContext, SingleExpressionContext, StatementContext, SwitchBlockStatementGroupContext, SwitchBlockStatementGroupsContext, SwitchLabelContext, SymbolContext, SymbolExpressionContext, TernaryExpressionContext, ThisExpressionContext, TryStatementContext, UnaryMinusExpressionContext, UnaryPlusExpressionContext, UsingDeclarationContext, VariableDeclarationContext, VariableDeclarationListContext, VariableInitializerContext, VarOrFieldDeclarationContext, VoidDotClassExpressionContext } from '../MonkeyCParser';
import { MonkeyCListener } from '../MonkeyCListener';
import { MonkeyCLexer } from '../MonkeyCLexer';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { BufferedTokenStream, CommonToken, CommonTokenStream, Parser, ParserRuleContext, Token, TokenStreamRewriter } from 'antlr4ts';
import { MonkeyCBaseParser } from '../MonkeyCBaseParser';


export class CommentShifter {
 
	static tokens : BufferedTokenStream;
	static rewriter : TokenStreamRewriter;

	/** Create TokenStreamRewriter attached to token stream
	 *  sitting between the Cymbol lexer and parser.
	 */
   constructor(tokens : BufferedTokenStream) {

	   CommentShifter.tokens = tokens;
	   CommentShifter.rewriter = new TokenStreamRewriter(tokens);
	   
   }
        
}	

export class Listener implements MonkeyCListener {

	completionStrings: vscode.CompletionItem[];
	completionList: vscode.CompletionList;
	AST : AST;
	testAST: any;
	currentlyProcessedUnit: string;

	constructor() {
		this.completionStrings = [];
		this.completionList = new vscode.CompletionList(this.completionStrings,false);
		this.AST = new AST("");
		this.testAST = [];

		this.currentlyProcessedUnit = "";
	}

	getList() { return this.completionList; }
	getAST() { return this.AST; }
	getTestAST() { return this.testAST; }


	getCommentsFromChannel(channel: number) {
		let tokens : Token[] = [];
		CommentShifter.tokens.getTokens().forEach(t => {
			if(t.channel === channel) { tokens.push(t); }
		});

		return tokens;

	}
		
	enterEveryRule(context: ParserRuleContext) { 
		
		let node = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  undefined,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
			/*context type:			*/	context.start.type

		);

		this.testAST.push(node);
		//this.AST.addNode(node);
	
	}


	
	exitEveryRule(context: ParserRuleContext) { 

	}

	/* root */
	enterProgram(context: ProgramContext) {
		
		//let x= CommonTokenStream.getNumberOfOnChannelTokens();

		let node = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  undefined,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type

		);

		this.AST.addNode(node);
		this.AST.root = node;
		this.AST.currentNode = node;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
		
	}

	exitProgram(context: ProgramContext) {

		let EOF = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.root,
			/*1..n children: */         [],
			/*value of the context: */  '<EOF>',
										context.start.type
		
		);
		
		this.AST.root.addChild(EOF);
		this.AST.addNode(EOF);
		this.AST.currentNode = this.AST.root;

		this.completionList = new vscode.CompletionList(this.completionStrings, false);
		
		/*this.testAST.forEach((treeNode : ParserRuleContext) => {
			console.log('---------------------------------------------------------------------');
			console.log('treeNode._parent: ', treeNode._parent);
			console.log('treeNode._start: ', treeNode._start);
			console.log('treeNode._start: ', treeNode._stop);
			console.log('treeNode.altNumber: ', treeNode.altNumber);
			console.log('treeNode.childCount: ', treeNode.childCount);
			console.log('treeNode.children: ', treeNode.children);
			console.log('treeNode.exception: ', treeNode.exception);
			console.log('treeNode.isEmpty: ', treeNode.isEmpty);
			console.log('treeNode.parent: ', treeNode.parent);
			console.log('treeNode.payload: ', treeNode.payload);
			console.log('treeNode.ruleContext: ', treeNode.ruleContext);
			console.log('treeNode.ruleIndex: ', treeNode.ruleIndex);
			console.log('treeNode.sourceInterval: ', treeNode.sourceInterval);
			console.log('treeNode.start: ', treeNode.start);
			console.log('treeNode.stop: ', treeNode.stop);
			console.log('treeNode.text: ', treeNode.text);
			console.log('-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-');

		});*/
	}

	enterCompilationUnit(context: CompilationUnitContext) {
		
		let compilationUnitNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context.text,
										context.start.type
		
		);
		
		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(compilationUnitNode);

		this.AST.addNode(compilationUnitNode);
		this.AST.currentNode = compilationUnitNode;


		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
		
	}

	
	exitCompilationUnit(context: CompilationUnitContext) {
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
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let using = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  usingDeclarationNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
		);

		usingDeclarationNode.addChild(using);

		this.AST.currentNode.addChild(usingDeclarationNode);

		this.AST.addNode(using);
		this.AST.addNode(usingDeclarationNode);
		this.AST.currentNode = usingDeclarationNode;

		/*this.testAST.push(context);*/
	}

	exitUsingDeclaration() { }

	enterFullyQualifiedReferenceExpression(context: FullyQualifiedReferenceExpressionContext) {
		
		this.currentlyProcessedUnit = "EXTENDS";
		
		let fullyQualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(fullyQualifiedReferenceExpressionNode);

		this.AST.addNode(fullyQualifiedReferenceExpressionNode);
		this.AST.currentNode = fullyQualifiedReferenceExpressionNode;

		/*this.testAST.push(context);*/
	}

	exitFullyQualifiedReferenceExpression() { }

	enterReferenceOrThisExpression(context: ReferenceOrThisExpressionContext) {
		
		let referenceOrThisExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(referenceOrThisExpressionNode);

		this.AST.addNode(referenceOrThisExpressionNode);
		this.AST.currentNode = referenceOrThisExpressionNode;

		/*this.testAST.push(context);*/

	}

	exitReferenceOrThisExpression(context: ReferenceOrThisExpressionContext) { 

		//this.AST.currentNode = this.AST.getParseTree().find((x) => x !== null && x.getContext()?.ruleIndex === MonkeyCParser.RULE_classDeclaration) as Node; 

	}

	enterReferenceExpression(context: ReferenceExpressionContext) {
		
		let referenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(referenceExpressionNode);

		this.AST.addNode(referenceExpressionNode);
		this.AST.currentNode = referenceExpressionNode;

		/*this.testAST.push(context);*/
	}

	exitReferenceExpression() { }

	enterStatement(context: StatementContext) {
		/*this.testAST.push(context);*/
		let statement = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(statement);

		this.AST.addNode(statement);
		this.AST.currentNode = statement;
	}

	exitStatement(context: StatementContext) {

	}
	
	enterSingleExpression(context: SingleExpressionContext) {
		
		let singleExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(singleExpressionNode);

		this.AST.addNode(singleExpressionNode);
		this.AST.currentNode = singleExpressionNode;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
	}

	exitSingleExpression(context: SingleExpressionContext) {

	}

	enterModuleDeclaration(context: ModuleDeclarationContext) {
		/*this.testAST.push(context);*/
		let moduleDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleDeclarationNode);

		this.AST.addNode(moduleDeclarationNode);
		this.AST.currentNode = moduleDeclarationNode;

	}

	exitModuleDeclaration(context: ModuleDeclarationContext) { }

	enterModuleBody(context: ModuleBodyContext) { 
		/*this.testAST.push(context);*/
		let moduleBodyNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  moduleBodyNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
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
			/*value of the context: */  context.getChild(2).text,
										context.start.type
		
		);

		classBodyNode!.addChild(RBRACE);

		this.AST.addNode(RBRACE);
		this.AST.currentNode = classBodyNode as Node;	

	}

	enterModuleBodyMembers(context: ModuleBodyMembersContext) { 
		/*this.testAST.push(context);*/
		let moduleBodyMembersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleBodyMembersNode);

		this.AST.addNode(moduleBodyMembersNode);
		this.AST.currentNode = moduleBodyMembersNode;

	}
	exitModuleBodyMembers(context: ModuleBodyMembersContext) { }

	enterModuleBodyMember(context: ModuleBodyMemberContext) { 
		/*this.testAST.push(context);*/
		this.AST.currentNode = this.AST.getParseTree().find((x) => x !== null && x.getContext()?.ruleIndex === MonkeyCParser.RULE_moduleBodyMembers) as Node; 

		let moduleBodyMemberNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(moduleBodyMemberNode);

		this.AST.addNode(moduleBodyMemberNode);
		this.AST.currentNode = moduleBodyMemberNode;

	}


	exitModuleBodyMember(context: ModuleBodyMemberContext) { }


	enterClassDeclaration(context: ClassDeclarationContext) {
		/*this.testAST.push(context);*/
		this.currentlyProcessedUnit = "CLASS";

		let classDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classDeclarationNode);

		this.AST.addNode(classDeclarationNode);
		this.AST.currentNode = classDeclarationNode;

	}

	exitClassDeclaration() { }
	
	enterClassBody(context: ClassBodyContext) {
		/*this.testAST.push(context);*/
		let classBodyNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  classBodyNode,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
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
			/*value of the context: */  context.getChild(2).text,
										context.start.type
		
		);

		classBodyNode!.addChild(RBRACE);

		this.AST.addNode(RBRACE);
		this.AST.currentNode = classBodyNode as Node;	
	}

	enterClassBodyMembers(context: ClassBodyMembersContext) {
		/*this.testAST.push(context);*/
		let classBodyMembersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(classBodyMembersNode);

		this.AST.addNode(classBodyMembersNode);
		this.AST.currentNode = classBodyMembersNode;

	}

	exitClassBodyMembers(context: ClassBodyMembersContext) { }

	enterClassBodyMember(context: ClassBodyMemberContext) {
		/*this.testAST.push(context);*/	
		let classBodyMemberNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
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
		/*this.testAST.push(context);*/
		let block = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		);

		let LBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  block,
			/*no children for leafs */  undefined,
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
		);
		block.addChild(LBRACE);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(block);

		
		this.AST.addNode(block);
		this.AST.addNode(LBRACE);

		this.AST.currentNode = block;

	}

	exitBlock(context: BlockContext) {
		//console.log('exitBlock\n');
		let block = this.AST.findNode(MonkeyCParser.RULE_block);

		let RBRACE = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  block,
			/*no children for leafs */  undefined,
			/*value of the context: */  "}",
										context.start.type
		);

		block!.addChild(RBRACE);
		this.AST.addNode(RBRACE);
		this.AST.currentNode = block!.getParent() as Node;
	}

	enterBlockStatement(context: BlockStatementContext) {
		/*this.testAST.push(context);*/
		let blockStatementNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
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
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(fieldDeclarationListNode);
		this.AST.addNode(fieldDeclarationListNode);

		this.AST.currentNode = fieldDeclarationListNode;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
	}

	exitFieldDeclarationList(context: FieldDeclarationListContext) { }

	enterModifiers(context: ModifiersContext) {

		let modifiersNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);
		
		if (context._parent?.getChild(1).text === "var") {
			
			let modifier = new Node(
			
				/* context of this node: */ undefined,
				/* parent of this node: */  modifiersNode,
				/*1..n children: */         undefined,
				/*value of the context: */  context._parent.getChild(1).text,
										context.start.type
			
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

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
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
			/*value of the context: */  context._parent?.getChild(1).text,
										context.start.type
		
		); 
		
		let fieldDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let comma = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(3).text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(_var);
		this.AST.currentNode.addChild(fieldDeclarationNode);
		this.AST.currentNode.addChild(comma);

		this.AST.addNode(_var);
		this.AST.addNode(fieldDeclarationNode);
		this.AST.addNode(comma);

		//this.AST.currentNode = fieldDeclarationNode;
		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
	}

	exitFieldDeclaration(context: FieldDeclarationContext) {
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
		/*this.testAST.push(context);*/
		let variableDeclarationListNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let comma = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text,
										context.start.type
		
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
		/*this.testAST.push(context);*/
		let variableDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		);

		let var_ = new Node(
			
			/* context of this node: */ /*"var"*/undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(0).text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(var_);
		this.AST.currentNode.addChild(variableDeclarationNode);

		this.AST.addNode(var_);
		this.AST.addNode(variableDeclarationNode);
		this.AST.currentNode = variableDeclarationNode;
	}

	exitVariableDeclaration(context: VariableDeclarationContext) { }

	enterVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {

		let varOrFieldDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(varOrFieldDeclarationNode);

		this.AST.addNode(varOrFieldDeclarationNode);
		this.AST.currentNode = varOrFieldDeclarationNode;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
		
	}

	
	exitVarOrFieldDeclaration(context: VarOrFieldDeclarationContext) {
		//pri exitu nastavit ten aktualni node na ten ktery sem prave exitnul
		//parent?
		//console.log('exitVarOrFieldDeclaration\n');
	}

	enterGeneralFullyQualifiedReferenceExpression(context: GeneralFullyQualifiedReferenceExpressionContext) {
		/*this.testAST.push(context);*/
		let generalFullyQualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(generalFullyQualifiedReferenceExpressionNode);

		this.AST.addNode(generalFullyQualifiedReferenceExpressionNode);
		this.AST.currentNode = generalFullyQualifiedReferenceExpressionNode;

	}

	exitGeneralFullyQualifiedReferenceExpression(context: GeneralFullyQualifiedReferenceExpressionContext) { }


	enterQualifiedReferenceExpression(context: QualifiedReferenceExpressionContext) {
		/*this.testAST.push(context);*/
		let qualifiedReferenceExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(qualifiedReferenceExpressionNode);

		this.AST.addNode(qualifiedReferenceExpressionNode);
		this.AST.currentNode = qualifiedReferenceExpressionNode;

	}

	exitQualifiedReferenceExpression(context: QualifiedReferenceExpressionContext) { }

	
	enterMethodInvocation(context: MethodInvocationContext) {
		/*this.testAST.push(context);*/
		let methodInvocationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(methodInvocationNode);

		this.AST.addNode(methodInvocationNode);
		this.AST.currentNode = methodInvocationNode;

	}

	exitMethodInvocation(context: MethodInvocationContext) { }

	enterArguments(context: ArgumentsContext) {
		/*this.testAST.push(context);*/
		let argumentsNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let LPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  argumentsNode,
			/*1..n children: */         [],
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
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
			/*value of the context: */  context.getChild(1).text,
										context.start.type
		
		);

		argumentsNode?.addChild(RPAREN);

		this.AST.currentNode = argumentsNode!;

	}


	enterComponentName(context: ComponentNameContext) {

		let componentNameNode = new Node(
			
			/* context of this node: */ context.parent,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);
		if(this.AST.currentNode === undefined) this.AST.currentNode = this.AST.getParseTree()[this.AST.getParseTree().length-2];
		this.AST.currentNode.addChild(componentNameNode);
		let _extends = null;
		if(context._parent!?.childCount > 4) {

			_extends = new Node(
			
				/* context of this node: */ undefined,
				/* parent of this node: */  this.AST.currentNode,
				/*1..n children: */         [],
				/*value of the context: */  'extends',
										context.start.type
			
			);

			this.AST.currentNode.addChild(_extends);

		}
	
		this.AST.addNode(componentNameNode);
		this.AST.addNode(_extends!);
		
		//this.AST.currentNode = componentNameNode;
		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
	}

	exitComponentName(context: ComponentNameContext) { }


	enterId(context: IdContext): void {

		let idNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let variableNameNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  idNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context.getChild(0).text,
										context.start.type
		
		);
		idNode.addChild(variableNameNode);


		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(idNode);

		this.AST.addNode(idNode);
		this.AST.addNode(variableNameNode);
		//this.AST.getParseTree()![1];

		/*TADY JE TA BOTA */
		//this.AST.currentNode = this.AST.currentNode.getParent() as Node;
		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
	}

	exitId(context: IdContext) { 

		let _Node;
		switch (this.currentlyProcessedUnit) {
			case "CLASS":
				_Node = this.AST.findNode(MonkeyCParser.RULE_classDeclaration);
				this.AST.currentNode = _Node!.getParent()!;
			break;

			case "FUNCTION":
				_Node = this.AST.findNode(MonkeyCParser.RULE_functionDeclaration);
				this.AST.currentNode = this.AST.currentNode.getParent() as Node;
			break;

			case "EXTENDS":
				_Node = this.AST.findNode(MonkeyCParser.RULE_classDeclaration);
				if(_Node !== undefined)
					this.AST.currentNode = _Node!.getParent()!;
			break;

			default:
				this.AST.currentNode = this.AST.currentNode.getParent() as Node;
				break;
		}
			this.currentlyProcessedUnit = "";
	}

	enterVariableInitializer(context: VariableInitializerContext) {
	
		let EQ_Node = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */  context._parent?.getChild(1).text,
										context.start.type
		
		);

		let variableInitializerNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(EQ_Node);
		this.AST.currentNode.addChild(variableInitializerNode);

		this.AST.addNode(EQ_Node);
		this.AST.addNode(variableInitializerNode);

		this.AST.currentNode = variableInitializerNode;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));

	}

	exitVariableInitializer(context: VariableInitializerContext) { }

	enterAdditiveExpression(context: AdditiveExpressionContext) { 

		/*this.testAST.push(context);*/

	}
	exitAdditiveExpression(context: AdditiveExpressionContext) { }

	enterLiteralExpression(context: LiteralExpressionContext) {

		let literalExpressionNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		);
		var tkn = context.tryGetToken(MonkeyCLexer.INTLITERAL,0);
		
		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalExpressionNode);

		this.AST.addNode(literalExpressionNode);
		this.AST.currentNode = literalExpressionNode;

		/*this.testAST.push(context);*/

	}

	exitLiteralExpression() { }

	enterLiteral(context: LiteralContext) {

		let literalValueNode = new Node(
			/* CHECK */
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         undefined,
			/*value of the context: */ context.getChild(0).text,
										context.start.type
			
		);
		
		let children : Node[] = [];
		children.push(literalValueNode);

		let literalNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         children,
			/* value of context:  */	context.text,
										context.start.type

		);

		/* set this node as one of children to the previous node */
		this.AST.currentNode.addChild(literalNode);

		this.AST.addNode(literalNode);
		this.AST.addNode(literalValueNode);
		
		this.AST.currentNode = literalValueNode;

		/*this.testAST.push(context);*/
		//this.testAST.push(new Node(context,undefined,[],context.text,context.start.type));
		
	}

	exitLiteral(context: LiteralContext) { }

	enterFunctionDeclaration(context: FunctionDeclarationContext) {	
		/*this.testAST.push(context);*/
		this.currentlyProcessedUnit = "FUNCTION";
		
		let functionDeclarationNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
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
			/*value of the context: */  context.getChild(1).text,
										context.start.type
		
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

	exitFunctionDeclaration(context: FunctionDeclarationContext) { 

		let functionDeclarationNode = this.AST.findNode(MonkeyCParser.RULE_functionDeclaration);
		this.AST.currentNode = functionDeclarationNode!;



	}

	enterFormalParameterDeclarations(context: FormalParameterDeclarationsContext) {
		/*this.testAST.push(context);*/
		this.currentlyProcessedUnit = "FUNCTION";
		
		let LPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context._parent?.getChild(3).text,
										context.start.type
		
		);
		
		let formalParameterDeclarationsNode = new Node(
			
			/* context of this node: */ context,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context.text,
										context.start.type
		
		);

		let RPAREN = new Node(
			
			/* context of this node: */ undefined,
			/* parent of this node: */  this.AST.currentNode,
			/*1..n children: */         [],
			/*value of the context: */  context._parent?.getChild(5).text,
										context.start.type
		
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

	enterAnnotation(context: AnnotationContext) { /*this.testAST.push(context);*/ }
	exitAnnotation(context: AnnotationContext) { }

	enterArgumentsList(context: ArgumentsListContext) { /*this.testAST.push(context);*/ }
	exitArgumentsList(context: ArgumentsListContext) { }

	enterArrayCreator(context: ArrayCreatorContext) { /*this.testAST.push(context);*/ }
	exitArrayCreator(context: ArrayCreatorContext) { }

	enterArrayCreatorExpression(context: ArrayCreatorExpressionContext) { /*this.testAST.push(context);*/ }
	exitArrayCreatorExpression(context: ArrayCreatorExpressionContext) { }

	enterArrayInitializer(context: ArrayInitializerContext) { /*this.testAST.push(context);*/ }
	exitArrayInitializer(context: ArrayInitializerContext) { }

	enterAssignmentExpression(context: AssignmentExpressionContext) { /*this.testAST.push(context);*/ }
	exitAssignmentExpression(context: AssignmentExpressionContext) { }

	enterAssignmentOperator(context: AssignmentOperatorContext) { /*this.testAST.push(context);*/ }
	exitAssignmentOperator(context: AssignmentOperatorContext) { }

	enterAssignmentOperatorExpression(context: AssignmentOperatorExpressionContext) { /*this.testAST.push(context);*/ }
	exitAssignmentOperatorExpression(context: AssignmentOperatorExpressionContext) { }

	enterBitAndExpression(context: BitAndExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitAndExpression(context: BitAndExpressionContext) { }

	enterBitNotExpression(context: BitNotExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitNotExpression(context: BitNotExpressionContext) { }

	enterBitOrExpression(context: BitOrExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitOrExpression(context: BitOrExpressionContext) { }

	enterBitShiftExpression(context: BitShiftExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitShiftExpression(context: BitShiftExpressionContext) { }

	enterBitXOrExpression(context:BitXOrExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitXOrExpression(context: BitXOrExpressionContext) { }

	enterBitwiseExpression(context: BitwiseExpressionContext) { /*this.testAST.push(context);*/ }
	exitBitwiseExpression(context: BitwiseExpressionContext) { }

	enterBitwiseOperator(context: BitwiseOperatorContext) { /*this.testAST.push(context);*/ }
	exitBitwiseOperator(context: BitwiseOperatorContext) { }

	enterBlingExpression(context: BlingExpressionContext) { /*this.testAST.push(context);*/ }
	exitBlingExpression(context: BlingExpressionContext) { }

	enterCatchClause(context: CatchClauseContext) { /*this.testAST.push(context);*/ }
	exitCatchClause(context: CatchClauseContext) { }

	enterCatchParameter(context: CatchParameterContext) { /*this.testAST.push(context);*/ }
	exitCatchParameter(context: CatchParameterContext) { }

	enterCatches(context: CatchesContext) { /*this.testAST.push(context);*/ }
	exitCatches(context: CatchesContext) { }

	enterClassAccess(context: ClassAccessContext) { /*this.testAST.push(context);*/ }
	exitClassAccess(context: ClassAccessContext) { }

	enterConstDeclaration(context: ConstDeclarationContext) { /*this.testAST.push(context);*/ }
	exitConstDeclaration(context: ConstDeclarationContext) { }

	enterDictionaryCreator(context: DictionaryCreatorContext) { /*this.testAST.push(context);*/ }
	exitDictionaryCreator(context: DictionaryCreatorContext) { }

	enterElementAccessExpression(context: ElementAccessExpressionContext) { /*this.testAST.push(context);*/ }
	exitElementAccessExpression(context: ElementAccessExpressionContext) { }

	enterEnumConstant(context: EnumConstantContext) { /*this.testAST.push(context);*/ }
	exitEnumConstant(context: EnumConstantContext) { }

	enterEnumDeclaration(context: EnumDeclarationContext) { /*this.testAST.push(context);*/ }
	exitEnumDeclaration(context: EnumDeclarationContext) { }

	enterEqualityExpression(context: EqualityExpressionContext) { /*this.testAST.push(context);*/ }
	exitEqualityExpression(context: EqualityExpressionContext) { }

	enterExpressionList(context: ExpressionListContext) { /*this.testAST.push(context);*/ }
	exitExpressionList(context: ExpressionListContext) { }

	enterForInit(context: ForInitContext) { /*this.testAST.push(context);*/ }
	exitForInit(context: ForInitContext) { }

	enterForStatement(context: ForStatementContext) { /*this.testAST.push(context);*/ }
	exitForStatement(context: ForStatementContext) { }

	enterHasExpression(context: HasExpressionContext) { /*this.testAST.push(context);*/ }
	exitHasExpression(context: HasExpressionContext) { }

	enterInstanceofExpression(context: InstanceofExpressionContext) { /*this.testAST.push(context);*/ }
	exitInstanceofExpression(context: InstanceofExpressionContext) { }

	enterKeyValueInitializer(context: KeyValueInitializerContext) { /*this.testAST.push(context);*/ }
	exitKeyValueInitializer(context: KeyValueInitializerContext) { }

	enterLogicalAndExpression(context: LogicalAndExpressionContext) { /*this.testAST.push(context);*/ }
	exitLogicalAndExpression(context: LogicalAndExpressionContext) { }

	enterLogicalOrExpression(context: LogicalOrExpressionContext) { /*this.testAST.push(context);*/ }
	exitLogicalOrExpression(context: LogicalOrExpressionContext) { }

	enterMaybeSignedInteger(context: MaybeSignedIntegerContext) { /*this.testAST.push(context);*/ }
	exitMaybeSignedInteger(context: MaybeSignedIntegerContext) { }

	enterMethodInvocationExpression(context: MethodInvocationExpressionContext) { /*this.testAST.push(context);*/ }
	exitMethodInvocationExpression(context: MethodInvocationExpressionContext) { }

	enterMultiplicativeExpression(context: MultiplicativeExpressionContext) { /*this.testAST.push(context);*/ }
	exitMultiplicativeExpression(context: MultiplicativeExpressionContext) { }

	enterNotExpression(context: NotExpressionContext) { /*this.testAST.push(context);*/ }
	exitNotExpression(context: NotExpressionContext) { }

	enterObjectCreator(context: ObjectCreatorContext) { /*this.testAST.push(context);*/ }
	exitObjectCreator(context: ObjectCreatorContext) { }

	enterObjectCreatorExpression(context: ObjectCreatorExpressionContext) { /*this.testAST.push(context);*/ }
	exitObjectCreatorExpression(context: ObjectCreatorExpressionContext) { }

	enterParenthesizedExpression(context: ParenthesizedExpressionContext) { /*this.testAST.push(context);*/ }
	exitParenthesizedExpression(context: ParenthesizedExpressionContext) { }

	enterPostDecreaseExpression(context: PostDecreaseExpressionContext) { /*this.testAST.push(context);*/ }
	exitPostDecreaseExpression(context: PostDecreaseExpressionContext) { }

	enterPostIncrementExpression(context: PostIncrementExpressionContext) { /*this.testAST.push(context);*/ }
	exitPostIncrementExpression(context: PostIncrementExpressionContext) { }

	enterPreDecreaseExpression(context: PreDecreaseExpressionContext) { /*this.testAST.push(context);*/ }
	exitPreDecreaseExpression(context: PreDecreaseExpressionContext) { }

	enterPreIncrementExpression(context: PreIncrementExpressionContext) { /*this.testAST.push(context);*/ }
	exitPreIncrementExpression(context: PreIncrementExpressionContext) { }

	enterQualifiedName(context: QualifiedNameContext) { /*this.testAST.push(context);*/ }
	exitQualifiedName(context: QualifiedNameContext) { }

	enterRelationalExpression(context: RelationalExpressionContext) { /*this.testAST.push(context);*/ }
	exitRelationalExpression(context: RelationalExpressionContext) { }

	enterRelationalOp(context: RelationalOpContext) { /*this.testAST.push(context);*/ }
	exitRelationalOp(context: RelationalOpContext) { }

	enterShiftOp(context: ShiftOpContext) { /*this.testAST.push(context);*/ }
	exitShiftOp(context: ShiftOpContext) { }

	enterSwitchBlockStatementGroup(context: SwitchBlockStatementGroupContext) { /*this.testAST.push(context);*/ }
	exitSwitchBlockStatementGroup(context: SwitchBlockStatementGroupContext) { }

	enterSwitchBlockStatementGroups(context: SwitchBlockStatementGroupsContext) { /*this.testAST.push(context);*/ }
	exitSwitchBlockStatementGroups(context: SwitchBlockStatementGroupsContext) { }

	enterSwitchLabel(context: SwitchLabelContext) { /*this.testAST.push(context);*/ }
	exitSwitchLabel(context: SwitchLabelContext) { }
	
	enterSymbol(context: SymbolContext) { /*this.testAST.push(context);*/ }
	exitSymbol(context: SymbolContext) { }

	enterSymbolExpression(context: SymbolExpressionContext) { /*this.testAST.push(context);*/ }
	exitSymbolExpression(context: SymbolExpressionContext) { }

	enterTernaryExpression(context: TernaryExpressionContext) { /*this.testAST.push(context);*/ }
	exitTernaryExpression(context: TernaryExpressionContext) { }

	enterThisExpression(context: ThisExpressionContext) { /*this.testAST.push(context);*/ }
	exitThisExpression(context: ThisExpressionContext) { }

	enterTryStatement(context: TryStatementContext) { /*this.testAST.push(context);*/ }
	exitTryStatement(context: TryStatementContext) { }
		
	enterUnaryMinusExpression(context: UnaryMinusExpressionContext) { /*this.testAST.push(context);*/ }
	exitUnaryMinusExpression(context: UnaryMinusExpressionContext) { }

	enterUnaryPlusExpression(context: UnaryPlusExpressionContext) { /*this.testAST.push(context);*/ }
	exitUnaryPlusExpression(context: UnaryPlusExpressionContext) { }

	enterVoidDotClassExpression(context: VoidDotClassExpressionContext) { /*this.testAST.push(context);*/ }
	exitVoidDotClassExpression(context: VoidDotClassExpressionContext) { }

	visitErrorNode(node: ErrorNode) {
		this.testAST.push(node);
	}

	visitTerminal(node: TerminalNode) { 
		this.testAST.push(node);
	}

}