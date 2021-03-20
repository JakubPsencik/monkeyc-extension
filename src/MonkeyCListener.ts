// Generated from src/MonkeyC.g4 by ANTLR 4.7.3-SNAPSHOT

import { MonkeyCBaseParser } from "./MonkeyCBaseParser";

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PostIncrementExpressionContext } from "./MonkeyCParser";
import { PostDecreaseExpressionContext } from "./MonkeyCParser";
import { ElementAccessExpressionContext } from "./MonkeyCParser";
import { TernaryExpressionContext } from "./MonkeyCParser";
import { LogicalOrExpressionContext } from "./MonkeyCParser";
import { LogicalAndExpressionContext } from "./MonkeyCParser";
import { BitOrExpressionContext } from "./MonkeyCParser";
import { BitXOrExpressionContext } from "./MonkeyCParser";
import { BitAndExpressionContext } from "./MonkeyCParser";
import { EqualityExpressionContext } from "./MonkeyCParser";
import { HasExpressionContext } from "./MonkeyCParser";
import { InstanceofExpressionContext } from "./MonkeyCParser";
import { RelationalExpressionContext } from "./MonkeyCParser";
import { BitShiftExpressionContext } from "./MonkeyCParser";
import { AdditiveExpressionContext } from "./MonkeyCParser";
import { MultiplicativeExpressionContext } from "./MonkeyCParser";
import { BitwiseExpressionContext } from "./MonkeyCParser";
import { UnaryPlusExpressionContext } from "./MonkeyCParser";
import { UnaryMinusExpressionContext } from "./MonkeyCParser";
import { PreIncrementExpressionContext } from "./MonkeyCParser";
import { PreDecreaseExpressionContext } from "./MonkeyCParser";
import { BitNotExpressionContext } from "./MonkeyCParser";
import { NotExpressionContext } from "./MonkeyCParser";
import { AssignmentExpressionContext } from "./MonkeyCParser";
import { AssignmentOperatorExpressionContext } from "./MonkeyCParser";
import { ParenthesizedExpressionContext } from "./MonkeyCParser";
import { GeneralFullyQualifiedReferenceExpressionContext } from "./MonkeyCParser";
import { LiteralExpressionContext } from "./MonkeyCParser";
import { SymbolExpressionContext } from "./MonkeyCParser";
import { ObjectCreatorExpressionContext } from "./MonkeyCParser";
import { ArrayCreatorExpressionContext } from "./MonkeyCParser";
import { VoidDotClassExpressionContext } from "./MonkeyCParser";
import { ProgramContext } from "./MonkeyCParser";
import { CompilationUnitContext } from "./MonkeyCParser";
import { UsingDeclarationContext } from "./MonkeyCParser";
import { ModuleDeclarationContext } from "./MonkeyCParser";
import { ModuleBodyContext } from "./MonkeyCParser";
import { ModuleBodyMembersContext } from "./MonkeyCParser";
import { ModuleBodyMemberContext } from "./MonkeyCParser";
import { FullyQualifiedReferenceExpressionContext } from "./MonkeyCParser";
import { ClassDeclarationContext } from "./MonkeyCParser";
import { ClassBodyContext } from "./MonkeyCParser";
import { ClassBodyMembersContext } from "./MonkeyCParser";
import { ClassBodyMemberContext } from "./MonkeyCParser";
import { EnumDeclarationContext } from "./MonkeyCParser";
import { MaybeSignedIntegerContext } from "./MonkeyCParser";
import { EnumConstantContext } from "./MonkeyCParser";
import { ConstDeclarationContext } from "./MonkeyCParser";
import { FieldDeclarationListContext } from "./MonkeyCParser";
import { FieldDeclarationContext } from "./MonkeyCParser";
import { FunctionDeclarationContext } from "./MonkeyCParser";
import { FormalParameterDeclarationsContext } from "./MonkeyCParser";
import { BlockContext } from "./MonkeyCParser";
import { BlockStatementContext } from "./MonkeyCParser";
import { VariableDeclarationListContext } from "./MonkeyCParser";
import { VariableDeclarationContext } from "./MonkeyCParser";
import { VarOrFieldDeclarationContext } from "./MonkeyCParser";
import { VariableInitializerContext } from "./MonkeyCParser";
import { ArrayInitializerContext } from "./MonkeyCParser";
import { StatementContext } from "./MonkeyCParser";
import { SwitchBlockStatementGroupsContext } from "./MonkeyCParser";
import { SwitchBlockStatementGroupContext } from "./MonkeyCParser";
import { SwitchLabelContext } from "./MonkeyCParser";
import { TryStatementContext } from "./MonkeyCParser";
import { CatchesContext } from "./MonkeyCParser";
import { CatchClauseContext } from "./MonkeyCParser";
import { CatchParameterContext } from "./MonkeyCParser";
import { ForStatementContext } from "./MonkeyCParser";
import { ForInitContext } from "./MonkeyCParser";
import { ExpressionListContext } from "./MonkeyCParser";
import { ThisExpressionContext } from "./MonkeyCParser";
import { BlingExpressionContext } from "./MonkeyCParser";
import { ReferenceOrThisExpressionContext } from "./MonkeyCParser";
import { SingleExpressionContext } from "./MonkeyCParser";
import { ClassAccessContext } from "./MonkeyCParser";
import { MethodInvocationExpressionContext } from "./MonkeyCParser";
import { AssignmentOperatorContext } from "./MonkeyCParser";
import { RelationalOpContext } from "./MonkeyCParser";
import { ShiftOpContext } from "./MonkeyCParser";
import { BitwiseOperatorContext } from "./MonkeyCParser";
import { QualifiedReferenceExpressionContext } from "./MonkeyCParser";
import { ReferenceExpressionContext } from "./MonkeyCParser";
import { MethodInvocationContext } from "./MonkeyCParser";
import { ObjectCreatorContext } from "./MonkeyCParser";
import { ArrayCreatorContext } from "./MonkeyCParser";
import { DictionaryCreatorContext } from "./MonkeyCParser";
import { KeyValueInitializerContext } from "./MonkeyCParser";
import { ArgumentsContext } from "./MonkeyCParser";
import { ArgumentsListContext } from "./MonkeyCParser";
import { ModifiersContext } from "./MonkeyCParser";
import { AnnotationContext } from "./MonkeyCParser";
import { SymbolContext } from "./MonkeyCParser";
import { QualifiedNameContext } from "./MonkeyCParser";
import { ComponentNameContext } from "./MonkeyCParser";
import { IdContext } from "./MonkeyCParser";
import { LiteralContext } from "./MonkeyCParser";
import * as vscode from 'vscode';
import { AST } from "./classes/AST";
import { Token } from "antlr4ts";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `MonkeyCParser`.
 */
export interface MonkeyCListener extends ParseTreeListener {
	
	getList() : vscode.CompletionList;

	getAST() : AST;

	getTestAST() : AST;

	//getCommentsFromChannel(channel: number, functionDeclarationLine : number, range: number) : string;
	getCommentsFromChannel(channel: number) : Token[];
	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ElementAccessExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterElementAccessExpression?: (ctx: ElementAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ElementAccessExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitElementAccessExpression?: (ctx: ElementAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitXOrExpression?: (ctx: BitXOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `HasExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterHasExpression?: (ctx: HasExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `HasExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitHasExpression?: (ctx: HasExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseExpression?: (ctx: BitwiseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterBitNotExpression?: (ctx: BitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitBitNotExpression?: (ctx: BitNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GeneralFullyQualifiedReferenceExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterGeneralFullyQualifiedReferenceExpression?: (ctx: GeneralFullyQualifiedReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneralFullyQualifiedReferenceExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitGeneralFullyQualifiedReferenceExpression?: (ctx: GeneralFullyQualifiedReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SymbolExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSymbolExpression?: (ctx: SymbolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SymbolExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSymbolExpression?: (ctx: SymbolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectCreatorExpression?: (ctx: ObjectCreatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectCreatorExpression?: (ctx: ObjectCreatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorExpression?: (ctx: ArrayCreatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorExpression?: (ctx: ArrayCreatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `VoidDotClassExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterVoidDotClassExpression?: (ctx: VoidDotClassExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidDotClassExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitVoidDotClassExpression?: (ctx: VoidDotClassExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.usingDeclaration`.
	 * @param ctx the parse tree
	 */
	enterUsingDeclaration?: (ctx: UsingDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.usingDeclaration`.
	 * @param ctx the parse tree
	 */
	exitUsingDeclaration?: (ctx: UsingDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	enterModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 */
	exitModuleDeclaration?: (ctx: ModuleDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.moduleBodyMembers`.
	 * @param ctx the parse tree
	 */
	enterModuleBodyMembers?: (ctx: ModuleBodyMembersContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.moduleBodyMembers`.
	 * @param ctx the parse tree
	 */
	exitModuleBodyMembers?: (ctx: ModuleBodyMembersContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.moduleBodyMember`.
	 * @param ctx the parse tree
	 */
	enterModuleBodyMember?: (ctx: ModuleBodyMemberContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.moduleBodyMember`.
	 * @param ctx the parse tree
	 */
	exitModuleBodyMember?: (ctx: ModuleBodyMemberContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.fullyQualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 */
	enterFullyQualifiedReferenceExpression?: (ctx: FullyQualifiedReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.fullyQualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 */
	exitFullyQualifiedReferenceExpression?: (ctx: FullyQualifiedReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.classBodyMembers`.
	 * @param ctx the parse tree
	 */
	enterClassBodyMembers?: (ctx: ClassBodyMembersContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.classBodyMembers`.
	 * @param ctx the parse tree
	 */
	exitClassBodyMembers?: (ctx: ClassBodyMembersContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.classBodyMember`.
	 * @param ctx the parse tree
	 */
	enterClassBodyMember?: (ctx: ClassBodyMemberContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.classBodyMember`.
	 * @param ctx the parse tree
	 */
	exitClassBodyMember?: (ctx: ClassBodyMemberContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.maybeSignedInteger`.
	 * @param ctx the parse tree
	 */
	enterMaybeSignedInteger?: (ctx: MaybeSignedIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.maybeSignedInteger`.
	 * @param ctx the parse tree
	 */
	exitMaybeSignedInteger?: (ctx: MaybeSignedIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstDeclaration?: (ctx: ConstDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstDeclaration?: (ctx: ConstDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.fieldDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclarationList?: (ctx: FieldDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.fieldDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclarationList?: (ctx: FieldDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.formalParameterDeclarations`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterDeclarations?: (ctx: FormalParameterDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.formalParameterDeclarations`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterDeclarations?: (ctx: FormalParameterDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.varOrFieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarOrFieldDeclaration?: (ctx: VarOrFieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.varOrFieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarOrFieldDeclaration?: (ctx: VarOrFieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	enterSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 */
	exitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.tryStatement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.catches`.
	 * @param ctx the parse tree
	 */
	enterCatches?: (ctx: CatchesContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.catches`.
	 * @param ctx the parse tree
	 */
	exitCatches?: (ctx: CatchesContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.catchParameter`.
	 * @param ctx the parse tree
	 */
	enterCatchParameter?: (ctx: CatchParameterContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.catchParameter`.
	 * @param ctx the parse tree
	 */
	exitCatchParameter?: (ctx: CatchParameterContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.blingExpression`.
	 * @param ctx the parse tree
	 */
	enterBlingExpression?: (ctx: BlingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.blingExpression`.
	 * @param ctx the parse tree
	 */
	exitBlingExpression?: (ctx: BlingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.referenceOrThisExpression`.
	 * @param ctx the parse tree
	 */
	enterReferenceOrThisExpression?: (ctx: ReferenceOrThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.referenceOrThisExpression`.
	 * @param ctx the parse tree
	 */
	exitReferenceOrThisExpression?: (ctx: ReferenceOrThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.classAccess`.
	 * @param ctx the parse tree
	 */
	enterClassAccess?: (ctx: ClassAccessContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.classAccess`.
	 * @param ctx the parse tree
	 */
	exitClassAccess?: (ctx: ClassAccessContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.methodInvocationExpression`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocationExpression?: (ctx: MethodInvocationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.methodInvocationExpression`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocationExpression?: (ctx: MethodInvocationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	enterRelationalOp?: (ctx: RelationalOpContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.relationalOp`.
	 * @param ctx the parse tree
	 */
	exitRelationalOp?: (ctx: RelationalOpContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.shiftOp`.
	 * @param ctx the parse tree
	 */
	enterShiftOp?: (ctx: ShiftOpContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.shiftOp`.
	 * @param ctx the parse tree
	 */
	exitShiftOp?: (ctx: ShiftOpContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOperator?: (ctx: BitwiseOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.qualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 */
	enterQualifiedReferenceExpression?: (ctx: QualifiedReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.qualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 */
	exitQualifiedReferenceExpression?: (ctx: QualifiedReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.referenceExpression`.
	 * @param ctx the parse tree
	 */
	enterReferenceExpression?: (ctx: ReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.referenceExpression`.
	 * @param ctx the parse tree
	 */
	exitReferenceExpression?: (ctx: ReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	enterMethodInvocation?: (ctx: MethodInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.methodInvocation`.
	 * @param ctx the parse tree
	 */
	exitMethodInvocation?: (ctx: MethodInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.objectCreator`.
	 * @param ctx the parse tree
	 */
	enterObjectCreator?: (ctx: ObjectCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.objectCreator`.
	 * @param ctx the parse tree
	 */
	exitObjectCreator?: (ctx: ObjectCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.arrayCreator`.
	 * @param ctx the parse tree
	 */
	enterArrayCreator?: (ctx: ArrayCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.arrayCreator`.
	 * @param ctx the parse tree
	 */
	exitArrayCreator?: (ctx: ArrayCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.dictionaryCreator`.
	 * @param ctx the parse tree
	 */
	enterDictionaryCreator?: (ctx: DictionaryCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.dictionaryCreator`.
	 * @param ctx the parse tree
	 */
	exitDictionaryCreator?: (ctx: DictionaryCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.keyValueInitializer`.
	 * @param ctx the parse tree
	 */
	enterKeyValueInitializer?: (ctx: KeyValueInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.keyValueInitializer`.
	 * @param ctx the parse tree
	 */
	exitKeyValueInitializer?: (ctx: KeyValueInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.argumentsList`.
	 * @param ctx the parse tree
	 */
	enterArgumentsList?: (ctx: ArgumentsListContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.argumentsList`.
	 * @param ctx the parse tree
	 */
	exitArgumentsList?: (ctx: ArgumentsListContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.modifiers`.
	 * @param ctx the parse tree
	 */
	enterModifiers?: (ctx: ModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.modifiers`.
	 * @param ctx the parse tree
	 */
	exitModifiers?: (ctx: ModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.componentName`.
	 * @param ctx the parse tree
	 */
	enterComponentName?: (ctx: ComponentNameContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.componentName`.
	 * @param ctx the parse tree
	 */
	exitComponentName?: (ctx: ComponentNameContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `MonkeyCParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MonkeyCParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}

