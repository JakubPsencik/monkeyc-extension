// Generated from MonkeyC.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MonkeyCParser}.
 */
public interface MonkeyCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MonkeyCParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MonkeyCParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompilationUnit(MonkeyCParser.CompilationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompilationUnit(MonkeyCParser.CompilationUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#usingDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterUsingDeclaration(MonkeyCParser.UsingDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#usingDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitUsingDeclaration(MonkeyCParser.UsingDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterModuleDeclaration(MonkeyCParser.ModuleDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitModuleDeclaration(MonkeyCParser.ModuleDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#moduleBody}.
	 * @param ctx the parse tree
	 */
	void enterModuleBody(MonkeyCParser.ModuleBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#moduleBody}.
	 * @param ctx the parse tree
	 */
	void exitModuleBody(MonkeyCParser.ModuleBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#moduleBodyMembers}.
	 * @param ctx the parse tree
	 */
	void enterModuleBodyMembers(MonkeyCParser.ModuleBodyMembersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#moduleBodyMembers}.
	 * @param ctx the parse tree
	 */
	void exitModuleBodyMembers(MonkeyCParser.ModuleBodyMembersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#moduleBodyMember}.
	 * @param ctx the parse tree
	 */
	void enterModuleBodyMember(MonkeyCParser.ModuleBodyMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#moduleBodyMember}.
	 * @param ctx the parse tree
	 */
	void exitModuleBodyMember(MonkeyCParser.ModuleBodyMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#fullyQualifiedReferenceExpression}.
	 * @param ctx the parse tree
	 */
	void enterFullyQualifiedReferenceExpression(MonkeyCParser.FullyQualifiedReferenceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#fullyQualifiedReferenceExpression}.
	 * @param ctx the parse tree
	 */
	void exitFullyQualifiedReferenceExpression(MonkeyCParser.FullyQualifiedReferenceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterClassDeclaration(MonkeyCParser.ClassDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitClassDeclaration(MonkeyCParser.ClassDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#classBody}.
	 * @param ctx the parse tree
	 */
	void enterClassBody(MonkeyCParser.ClassBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#classBody}.
	 * @param ctx the parse tree
	 */
	void exitClassBody(MonkeyCParser.ClassBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#classBodyMembers}.
	 * @param ctx the parse tree
	 */
	void enterClassBodyMembers(MonkeyCParser.ClassBodyMembersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#classBodyMembers}.
	 * @param ctx the parse tree
	 */
	void exitClassBodyMembers(MonkeyCParser.ClassBodyMembersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#classBodyMember}.
	 * @param ctx the parse tree
	 */
	void enterClassBodyMember(MonkeyCParser.ClassBodyMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#classBodyMember}.
	 * @param ctx the parse tree
	 */
	void exitClassBodyMember(MonkeyCParser.ClassBodyMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterEnumDeclaration(MonkeyCParser.EnumDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitEnumDeclaration(MonkeyCParser.EnumDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#maybeSignedInteger}.
	 * @param ctx the parse tree
	 */
	void enterMaybeSignedInteger(MonkeyCParser.MaybeSignedIntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#maybeSignedInteger}.
	 * @param ctx the parse tree
	 */
	void exitMaybeSignedInteger(MonkeyCParser.MaybeSignedIntegerContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#enumConstant}.
	 * @param ctx the parse tree
	 */
	void enterEnumConstant(MonkeyCParser.EnumConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#enumConstant}.
	 * @param ctx the parse tree
	 */
	void exitEnumConstant(MonkeyCParser.EnumConstantContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#constDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterConstDeclaration(MonkeyCParser.ConstDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#constDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitConstDeclaration(MonkeyCParser.ConstDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#fieldDeclarationList}.
	 * @param ctx the parse tree
	 */
	void enterFieldDeclarationList(MonkeyCParser.FieldDeclarationListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#fieldDeclarationList}.
	 * @param ctx the parse tree
	 */
	void exitFieldDeclarationList(MonkeyCParser.FieldDeclarationListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#fieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFieldDeclaration(MonkeyCParser.FieldDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#fieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFieldDeclaration(MonkeyCParser.FieldDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(MonkeyCParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(MonkeyCParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#formalParameterDeclarations}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameterDeclarations(MonkeyCParser.FormalParameterDeclarationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#formalParameterDeclarations}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameterDeclarations(MonkeyCParser.FormalParameterDeclarationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(MonkeyCParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(MonkeyCParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(MonkeyCParser.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(MonkeyCParser.BlockStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#variableDeclarationList}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclarationList(MonkeyCParser.VariableDeclarationListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#variableDeclarationList}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclarationList(MonkeyCParser.VariableDeclarationListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(MonkeyCParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(MonkeyCParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#varOrFieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVarOrFieldDeclaration(MonkeyCParser.VarOrFieldDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#varOrFieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVarOrFieldDeclaration(MonkeyCParser.VarOrFieldDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#variableInitializer}.
	 * @param ctx the parse tree
	 */
	void enterVariableInitializer(MonkeyCParser.VariableInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#variableInitializer}.
	 * @param ctx the parse tree
	 */
	void exitVariableInitializer(MonkeyCParser.VariableInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#arrayInitializer}.
	 * @param ctx the parse tree
	 */
	void enterArrayInitializer(MonkeyCParser.ArrayInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#arrayInitializer}.
	 * @param ctx the parse tree
	 */
	void exitArrayInitializer(MonkeyCParser.ArrayInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(MonkeyCParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(MonkeyCParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#switchBlockStatementGroups}.
	 * @param ctx the parse tree
	 */
	void enterSwitchBlockStatementGroups(MonkeyCParser.SwitchBlockStatementGroupsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#switchBlockStatementGroups}.
	 * @param ctx the parse tree
	 */
	void exitSwitchBlockStatementGroups(MonkeyCParser.SwitchBlockStatementGroupsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#switchBlockStatementGroup}.
	 * @param ctx the parse tree
	 */
	void enterSwitchBlockStatementGroup(MonkeyCParser.SwitchBlockStatementGroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#switchBlockStatementGroup}.
	 * @param ctx the parse tree
	 */
	void exitSwitchBlockStatementGroup(MonkeyCParser.SwitchBlockStatementGroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#switchLabel}.
	 * @param ctx the parse tree
	 */
	void enterSwitchLabel(MonkeyCParser.SwitchLabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#switchLabel}.
	 * @param ctx the parse tree
	 */
	void exitSwitchLabel(MonkeyCParser.SwitchLabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void enterTryStatement(MonkeyCParser.TryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void exitTryStatement(MonkeyCParser.TryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#catches}.
	 * @param ctx the parse tree
	 */
	void enterCatches(MonkeyCParser.CatchesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#catches}.
	 * @param ctx the parse tree
	 */
	void exitCatches(MonkeyCParser.CatchesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#catchClause}.
	 * @param ctx the parse tree
	 */
	void enterCatchClause(MonkeyCParser.CatchClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#catchClause}.
	 * @param ctx the parse tree
	 */
	void exitCatchClause(MonkeyCParser.CatchClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#catchParameter}.
	 * @param ctx the parse tree
	 */
	void enterCatchParameter(MonkeyCParser.CatchParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#catchParameter}.
	 * @param ctx the parse tree
	 */
	void exitCatchParameter(MonkeyCParser.CatchParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(MonkeyCParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(MonkeyCParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#forInit}.
	 * @param ctx the parse tree
	 */
	void enterForInit(MonkeyCParser.ForInitContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#forInit}.
	 * @param ctx the parse tree
	 */
	void exitForInit(MonkeyCParser.ForInitContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(MonkeyCParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(MonkeyCParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#thisExpression}.
	 * @param ctx the parse tree
	 */
	void enterThisExpression(MonkeyCParser.ThisExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#thisExpression}.
	 * @param ctx the parse tree
	 */
	void exitThisExpression(MonkeyCParser.ThisExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#blingExpression}.
	 * @param ctx the parse tree
	 */
	void enterBlingExpression(MonkeyCParser.BlingExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#blingExpression}.
	 * @param ctx the parse tree
	 */
	void exitBlingExpression(MonkeyCParser.BlingExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#referenceOrThisExpression}.
	 * @param ctx the parse tree
	 */
	void enterReferenceOrThisExpression(MonkeyCParser.ReferenceOrThisExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#referenceOrThisExpression}.
	 * @param ctx the parse tree
	 */
	void exitReferenceOrThisExpression(MonkeyCParser.ReferenceOrThisExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TernaryExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterTernaryExpression(MonkeyCParser.TernaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TernaryExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitTernaryExpression(MonkeyCParser.TernaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code HasExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterHasExpression(MonkeyCParser.HasExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code HasExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitHasExpression(MonkeyCParser.HasExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code LogicalAndExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalAndExpression(MonkeyCParser.LogicalAndExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code LogicalAndExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalAndExpression(MonkeyCParser.LogicalAndExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ElementAccessExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterElementAccessExpression(MonkeyCParser.ElementAccessExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ElementAccessExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitElementAccessExpression(MonkeyCParser.ElementAccessExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PreIncrementExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterPreIncrementExpression(MonkeyCParser.PreIncrementExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PreIncrementExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitPreIncrementExpression(MonkeyCParser.PreIncrementExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code LogicalOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalOrExpression(MonkeyCParser.LogicalOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code LogicalOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalOrExpression(MonkeyCParser.LogicalOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GeneralFullyQualifiedReferenceExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterGeneralFullyQualifiedReferenceExpression(MonkeyCParser.GeneralFullyQualifiedReferenceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GeneralFullyQualifiedReferenceExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitGeneralFullyQualifiedReferenceExpression(MonkeyCParser.GeneralFullyQualifiedReferenceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NotExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterNotExpression(MonkeyCParser.NotExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NotExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitNotExpression(MonkeyCParser.NotExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PreDecreaseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterPreDecreaseExpression(MonkeyCParser.PreDecreaseExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PreDecreaseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitPreDecreaseExpression(MonkeyCParser.PreDecreaseExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code VoidDotClassExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterVoidDotClassExpression(MonkeyCParser.VoidDotClassExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code VoidDotClassExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitVoidDotClassExpression(MonkeyCParser.VoidDotClassExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code UnaryMinusExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryMinusExpression(MonkeyCParser.UnaryMinusExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code UnaryMinusExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryMinusExpression(MonkeyCParser.UnaryMinusExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AssignmentExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentExpression(MonkeyCParser.AssignmentExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AssignmentExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentExpression(MonkeyCParser.AssignmentExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PostDecreaseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterPostDecreaseExpression(MonkeyCParser.PostDecreaseExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PostDecreaseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitPostDecreaseExpression(MonkeyCParser.PostDecreaseExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SymbolExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterSymbolExpression(MonkeyCParser.SymbolExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SymbolExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitSymbolExpression(MonkeyCParser.SymbolExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code InstanceofExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterInstanceofExpression(MonkeyCParser.InstanceofExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code InstanceofExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitInstanceofExpression(MonkeyCParser.InstanceofExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code UnaryPlusExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryPlusExpression(MonkeyCParser.UnaryPlusExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code UnaryPlusExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryPlusExpression(MonkeyCParser.UnaryPlusExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitXOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitXOrExpression(MonkeyCParser.BitXOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitXOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitXOrExpression(MonkeyCParser.BitXOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code EqualityExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterEqualityExpression(MonkeyCParser.EqualityExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code EqualityExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitEqualityExpression(MonkeyCParser.EqualityExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MultiplicativeExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplicativeExpression(MonkeyCParser.MultiplicativeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MultiplicativeExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplicativeExpression(MonkeyCParser.MultiplicativeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ArrayCreatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterArrayCreatorExpression(MonkeyCParser.ArrayCreatorExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ArrayCreatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitArrayCreatorExpression(MonkeyCParser.ArrayCreatorExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitShiftExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitShiftExpression(MonkeyCParser.BitShiftExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitShiftExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitShiftExpression(MonkeyCParser.BitShiftExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ParenthesizedExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(MonkeyCParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ParenthesizedExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(MonkeyCParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RelationalExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterRelationalExpression(MonkeyCParser.RelationalExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RelationalExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitRelationalExpression(MonkeyCParser.RelationalExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AdditiveExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterAdditiveExpression(MonkeyCParser.AdditiveExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AdditiveExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitAdditiveExpression(MonkeyCParser.AdditiveExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code PostIncrementExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterPostIncrementExpression(MonkeyCParser.PostIncrementExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code PostIncrementExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitPostIncrementExpression(MonkeyCParser.PostIncrementExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitNotExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitNotExpression(MonkeyCParser.BitNotExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitNotExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitNotExpression(MonkeyCParser.BitNotExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code LiteralExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterLiteralExpression(MonkeyCParser.LiteralExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code LiteralExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitLiteralExpression(MonkeyCParser.LiteralExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitAndExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitAndExpression(MonkeyCParser.BitAndExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitAndExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitAndExpression(MonkeyCParser.BitAndExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitOrExpression(MonkeyCParser.BitOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitOrExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitOrExpression(MonkeyCParser.BitOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AssignmentOperatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentOperatorExpression(MonkeyCParser.AssignmentOperatorExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AssignmentOperatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentOperatorExpression(MonkeyCParser.AssignmentOperatorExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ObjectCreatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterObjectCreatorExpression(MonkeyCParser.ObjectCreatorExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ObjectCreatorExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitObjectCreatorExpression(MonkeyCParser.ObjectCreatorExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BitwiseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void enterBitwiseExpression(MonkeyCParser.BitwiseExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BitwiseExpression}
	 * labeled alternative in {@link MonkeyCParser#singleExpression}.
	 * @param ctx the parse tree
	 */
	void exitBitwiseExpression(MonkeyCParser.BitwiseExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#classAccess}.
	 * @param ctx the parse tree
	 */
	void enterClassAccess(MonkeyCParser.ClassAccessContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#classAccess}.
	 * @param ctx the parse tree
	 */
	void exitClassAccess(MonkeyCParser.ClassAccessContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#methodInvocationExpression}.
	 * @param ctx the parse tree
	 */
	void enterMethodInvocationExpression(MonkeyCParser.MethodInvocationExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#methodInvocationExpression}.
	 * @param ctx the parse tree
	 */
	void exitMethodInvocationExpression(MonkeyCParser.MethodInvocationExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#assignmentOperator}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentOperator(MonkeyCParser.AssignmentOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#assignmentOperator}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentOperator(MonkeyCParser.AssignmentOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#relationalOp}.
	 * @param ctx the parse tree
	 */
	void enterRelationalOp(MonkeyCParser.RelationalOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#relationalOp}.
	 * @param ctx the parse tree
	 */
	void exitRelationalOp(MonkeyCParser.RelationalOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#shiftOp}.
	 * @param ctx the parse tree
	 */
	void enterShiftOp(MonkeyCParser.ShiftOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#shiftOp}.
	 * @param ctx the parse tree
	 */
	void exitShiftOp(MonkeyCParser.ShiftOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#bitwiseOperator}.
	 * @param ctx the parse tree
	 */
	void enterBitwiseOperator(MonkeyCParser.BitwiseOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#bitwiseOperator}.
	 * @param ctx the parse tree
	 */
	void exitBitwiseOperator(MonkeyCParser.BitwiseOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#qualifiedReferenceExpression}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedReferenceExpression(MonkeyCParser.QualifiedReferenceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#qualifiedReferenceExpression}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedReferenceExpression(MonkeyCParser.QualifiedReferenceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#referenceExpression}.
	 * @param ctx the parse tree
	 */
	void enterReferenceExpression(MonkeyCParser.ReferenceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#referenceExpression}.
	 * @param ctx the parse tree
	 */
	void exitReferenceExpression(MonkeyCParser.ReferenceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#methodInvocation}.
	 * @param ctx the parse tree
	 */
	void enterMethodInvocation(MonkeyCParser.MethodInvocationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#methodInvocation}.
	 * @param ctx the parse tree
	 */
	void exitMethodInvocation(MonkeyCParser.MethodInvocationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#objectCreator}.
	 * @param ctx the parse tree
	 */
	void enterObjectCreator(MonkeyCParser.ObjectCreatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#objectCreator}.
	 * @param ctx the parse tree
	 */
	void exitObjectCreator(MonkeyCParser.ObjectCreatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#arrayCreator}.
	 * @param ctx the parse tree
	 */
	void enterArrayCreator(MonkeyCParser.ArrayCreatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#arrayCreator}.
	 * @param ctx the parse tree
	 */
	void exitArrayCreator(MonkeyCParser.ArrayCreatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#dictionaryCreator}.
	 * @param ctx the parse tree
	 */
	void enterDictionaryCreator(MonkeyCParser.DictionaryCreatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#dictionaryCreator}.
	 * @param ctx the parse tree
	 */
	void exitDictionaryCreator(MonkeyCParser.DictionaryCreatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#keyValueInitializer}.
	 * @param ctx the parse tree
	 */
	void enterKeyValueInitializer(MonkeyCParser.KeyValueInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#keyValueInitializer}.
	 * @param ctx the parse tree
	 */
	void exitKeyValueInitializer(MonkeyCParser.KeyValueInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(MonkeyCParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(MonkeyCParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#argumentsList}.
	 * @param ctx the parse tree
	 */
	void enterArgumentsList(MonkeyCParser.ArgumentsListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#argumentsList}.
	 * @param ctx the parse tree
	 */
	void exitArgumentsList(MonkeyCParser.ArgumentsListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#modifiers}.
	 * @param ctx the parse tree
	 */
	void enterModifiers(MonkeyCParser.ModifiersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#modifiers}.
	 * @param ctx the parse tree
	 */
	void exitModifiers(MonkeyCParser.ModifiersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#annotation}.
	 * @param ctx the parse tree
	 */
	void enterAnnotation(MonkeyCParser.AnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#annotation}.
	 * @param ctx the parse tree
	 */
	void exitAnnotation(MonkeyCParser.AnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#symbol}.
	 * @param ctx the parse tree
	 */
	void enterSymbol(MonkeyCParser.SymbolContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#symbol}.
	 * @param ctx the parse tree
	 */
	void exitSymbol(MonkeyCParser.SymbolContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(MonkeyCParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(MonkeyCParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#componentName}.
	 * @param ctx the parse tree
	 */
	void enterComponentName(MonkeyCParser.ComponentNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#componentName}.
	 * @param ctx the parse tree
	 */
	void exitComponentName(MonkeyCParser.ComponentNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(MonkeyCParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(MonkeyCParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by {@link MonkeyCParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(MonkeyCParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link MonkeyCParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(MonkeyCParser.LiteralContext ctx);
}