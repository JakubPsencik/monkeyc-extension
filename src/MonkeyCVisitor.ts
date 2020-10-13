// Generated from src/MonkeyC.g4 by ANTLR 4.7.3-SNAPSHOT

import { Parser } from "../node_modules/antlr4ts/Parser";

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MonkeyCParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MonkeyCVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecreaseExpression?: (ctx: PostDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ElementAccessExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementAccessExpression?: (ctx: ElementAccessExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTernaryExpression?: (ctx: TernaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXOrExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXOrExpression?: (ctx: BitXOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `HasExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHasExpression?: (ctx: HasExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceofExpression?: (ctx: InstanceofExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitShiftExpression?: (ctx: BitShiftExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitwiseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseExpression?: (ctx: BitwiseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreDecreaseExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecreaseExpression?: (ctx: PreDecreaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitNotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpression?: (ctx: NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentOperatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperatorExpression?: (ctx: AssignmentOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GeneralFullyQualifiedReferenceExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralFullyQualifiedReferenceExpression?: (ctx: GeneralFullyQualifiedReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SymbolExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolExpression?: (ctx: SymbolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ObjectCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectCreatorExpression?: (ctx: ObjectCreatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayCreatorExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorExpression?: (ctx: ArrayCreatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `VoidDotClassExpression`
	 * labeled alternative in `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidDotClassExpression?: (ctx: VoidDotClassExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.usingDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingDeclaration?: (ctx: UsingDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.moduleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclaration?: (ctx: ModuleDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.moduleBodyMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBodyMembers?: (ctx: ModuleBodyMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.moduleBodyMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBodyMember?: (ctx: ModuleBodyMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.fullyQualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFullyQualifiedReferenceExpression?: (ctx: FullyQualifiedReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.classBodyMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyMembers?: (ctx: ClassBodyMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.classBodyMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyMember?: (ctx: ClassBodyMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.maybeSignedInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaybeSignedInteger?: (ctx: MaybeSignedIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.fieldDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclarationList?: (ctx: FieldDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.formalParameterDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterDeclarations?: (ctx: FormalParameterDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.varOrFieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarOrFieldDeclaration?: (ctx: VarOrFieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.switchBlockStatementGroups`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroups?: (ctx: SwitchBlockStatementGroupsContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.catches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatches?: (ctx: CatchesContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.catchParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchParameter?: (ctx: CatchParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.thisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.blingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlingExpression?: (ctx: BlingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.referenceOrThisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceOrThisExpression?: (ctx: ReferenceOrThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.classAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassAccess?: (ctx: ClassAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.methodInvocationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocationExpression?: (ctx: MethodInvocationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.relationalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOp?: (ctx: RelationalOpContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.shiftOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOp?: (ctx: ShiftOpContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.bitwiseOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOperator?: (ctx: BitwiseOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.qualifiedReferenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedReferenceExpression?: (ctx: QualifiedReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.referenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceExpression?: (ctx: ReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.methodInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation?: (ctx: MethodInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.objectCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectCreator?: (ctx: ObjectCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.arrayCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreator?: (ctx: ArrayCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.dictionaryCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryCreator?: (ctx: DictionaryCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.keyValueInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValueInitializer?: (ctx: KeyValueInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.argumentsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsList?: (ctx: ArgumentsListContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.modifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifiers?: (ctx: ModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.componentName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentName?: (ctx: ComponentNameContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `MonkeyCParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

