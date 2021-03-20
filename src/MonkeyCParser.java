// Generated from MonkeyC.g4 by ANTLR 4.9.2
import { MonkeyCBaseParser } from "../MonkeyCBaseParser";
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MonkeyCParser extends MonkeyCBaseParser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DOT=1, SEMI=2, QUES=3, COLON=4, CLASS=5, FUNCTION=6, RETURN=7, NEW=8, 
		VAR=9, CONST=10, MODULE=11, USING=12, AS=13, ENUM=14, EXTENDS=15, NULL=16, 
		NATIVE=17, HIDDEN_TOKEN=18, PUBLIC_TOKEN=19, PRIVATE_TOKEN=20, PROTECTED_TOKEN=21, 
		STATIC=22, INSTANCEOF=23, HAS=24, IF=25, ELSE=26, DO=27, WHILE=28, FOR=29, 
		BREAK=30, CONTINUE=31, SWITCH=32, DEFAULT=33, CASE=34, TRY=35, CATCH=36, 
		FINALLY=37, THROW=38, AND=39, OR=40, TRUE=41, FALSE=42, SELF=43, SUPER=44, 
		VOID=45, BLING=46, MULTI_LINE_COMMENT_START=47, MULTI_LINE_COMMENT_END=48, 
		STRING_A=49, STRING_B=50, LBRACE=51, RBRACE=52, LBRACKET=53, RBRACKET=54, 
		LPAREN=55, RPAREN=56, COMMA=57, STAR=58, BAR=59, LT=60, GT=61, EQGT=62, 
		AMP=63, BARBAR=64, AMPAMP=65, PLUSPLUS=66, SUBSUB=67, EQ=68, EQEQ=69, 
		BANGEQ=70, PLUSEQ=71, SUBEQ=72, STAREQ=73, SLASHEQ=74, AMPEQ=75, CARETEQ=76, 
		PERCENTEQ=77, CARET=78, PERCENT=79, TILDE=80, BANG=81, PLUS=82, SUB=83, 
		SLASH=84, WhiteSpaces=85, LineTerminator=86, SINGLE_LINE_COMMENT=87, SINGLE_LINE_DOC_COMMENT=88, 
		BLOCK_COMMENT=89, IDENTIFIER=90, LONGLITERAL=91, INTLITERAL=92, HEX_LITERAL=93, 
		FLOATLITERAL=94, DOUBLELITERAL=95, CHARLITERAL=96, STRING=97;
	public static final int
		RULE_program = 0, RULE_compilationUnit = 1, RULE_usingDeclaration = 2, 
		RULE_moduleDeclaration = 3, RULE_moduleBody = 4, RULE_moduleBodyMembers = 5, 
		RULE_moduleBodyMember = 6, RULE_fullyQualifiedReferenceExpression = 7, 
		RULE_classDeclaration = 8, RULE_classBody = 9, RULE_classBodyMembers = 10, 
		RULE_classBodyMember = 11, RULE_enumDeclaration = 12, RULE_maybeSignedInteger = 13, 
		RULE_enumConstant = 14, RULE_constDeclaration = 15, RULE_fieldDeclarationList = 16, 
		RULE_fieldDeclaration = 17, RULE_functionDeclaration = 18, RULE_formalParameterDeclarations = 19, 
		RULE_block = 20, RULE_blockStatement = 21, RULE_variableDeclarationList = 22, 
		RULE_variableDeclaration = 23, RULE_varOrFieldDeclaration = 24, RULE_variableInitializer = 25, 
		RULE_arrayInitializer = 26, RULE_statement = 27, RULE_switchBlockStatementGroups = 28, 
		RULE_switchBlockStatementGroup = 29, RULE_switchLabel = 30, RULE_tryStatement = 31, 
		RULE_catches = 32, RULE_catchClause = 33, RULE_catchParameter = 34, RULE_forStatement = 35, 
		RULE_forInit = 36, RULE_expressionList = 37, RULE_thisExpression = 38, 
		RULE_blingExpression = 39, RULE_referenceOrThisExpression = 40, RULE_singleExpression = 41, 
		RULE_classAccess = 42, RULE_methodInvocationExpression = 43, RULE_assignmentOperator = 44, 
		RULE_relationalOp = 45, RULE_shiftOp = 46, RULE_bitwiseOperator = 47, 
		RULE_qualifiedReferenceExpression = 48, RULE_referenceExpression = 49, 
		RULE_methodInvocation = 50, RULE_objectCreator = 51, RULE_arrayCreator = 52, 
		RULE_dictionaryCreator = 53, RULE_keyValueInitializer = 54, RULE_arguments = 55, 
		RULE_argumentsList = 56, RULE_modifiers = 57, RULE_annotation = 58, RULE_symbol = 59, 
		RULE_qualifiedName = 60, RULE_componentName = 61, RULE_id = 62, RULE_literal = 63;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "compilationUnit", "usingDeclaration", "moduleDeclaration", 
			"moduleBody", "moduleBodyMembers", "moduleBodyMember", "fullyQualifiedReferenceExpression", 
			"classDeclaration", "classBody", "classBodyMembers", "classBodyMember", 
			"enumDeclaration", "maybeSignedInteger", "enumConstant", "constDeclaration", 
			"fieldDeclarationList", "fieldDeclaration", "functionDeclaration", "formalParameterDeclarations", 
			"block", "blockStatement", "variableDeclarationList", "variableDeclaration", 
			"varOrFieldDeclaration", "variableInitializer", "arrayInitializer", "statement", 
			"switchBlockStatementGroups", "switchBlockStatementGroup", "switchLabel", 
			"tryStatement", "catches", "catchClause", "catchParameter", "forStatement", 
			"forInit", "expressionList", "thisExpression", "blingExpression", "referenceOrThisExpression", 
			"singleExpression", "classAccess", "methodInvocationExpression", "assignmentOperator", 
			"relationalOp", "shiftOp", "bitwiseOperator", "qualifiedReferenceExpression", 
			"referenceExpression", "methodInvocation", "objectCreator", "arrayCreator", 
			"dictionaryCreator", "keyValueInitializer", "arguments", "argumentsList", 
			"modifiers", "annotation", "symbol", "qualifiedName", "componentName", 
			"id", "literal"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.'", "';'", "'?'", "':'", "'class'", "'function'", "'return'", 
			"'new'", "'var'", "'const'", "'module'", "'using'", "'as'", "'enum'", 
			"'extends'", "'null'", "'native'", "'hidden'", "'public'", "'private'", 
			"'protected'", "'static'", "'instanceof'", "'has'", "'if'", "'else'", 
			"'do'", "'while'", "'for'", "'break'", "'continue'", "'switch'", "'default'", 
			"'case'", "'try'", "'catch'", "'finally'", "'throw'", "'and'", "'or'", 
			"'true'", "'false'", "'self'", "'super'", "'void'", "'$'", "'/*'", "'*/'", 
			"'\"'", "'''", "'{'", "'}'", "'['", "']'", "'('", "')'", "','", "'*'", 
			"'|'", "'<'", "'>'", "'=>'", "'&'", "'||'", "'&&'", "'++'", "'--'", "'='", 
			"'=='", "'!='", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'%='", 
			"'^'", "'%'", "'~'", "'!'", "'+'", "'-'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DOT", "SEMI", "QUES", "COLON", "CLASS", "FUNCTION", "RETURN", 
			"NEW", "VAR", "CONST", "MODULE", "USING", "AS", "ENUM", "EXTENDS", "NULL", 
			"NATIVE", "HIDDEN_TOKEN", "PUBLIC_TOKEN", "PRIVATE_TOKEN", "PROTECTED_TOKEN", 
			"STATIC", "INSTANCEOF", "HAS", "IF", "ELSE", "DO", "WHILE", "FOR", "BREAK", 
			"CONTINUE", "SWITCH", "DEFAULT", "CASE", "TRY", "CATCH", "FINALLY", "THROW", 
			"AND", "OR", "TRUE", "FALSE", "SELF", "SUPER", "VOID", "BLING", "MULTI_LINE_COMMENT_START", 
			"MULTI_LINE_COMMENT_END", "STRING_A", "STRING_B", "LBRACE", "RBRACE", 
			"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COMMA", "STAR", "BAR", "LT", 
			"GT", "EQGT", "AMP", "BARBAR", "AMPAMP", "PLUSPLUS", "SUBSUB", "EQ", 
			"EQEQ", "BANGEQ", "PLUSEQ", "SUBEQ", "STAREQ", "SLASHEQ", "AMPEQ", "CARETEQ", 
			"PERCENTEQ", "CARET", "PERCENT", "TILDE", "BANG", "PLUS", "SUB", "SLASH", 
			"WhiteSpaces", "LineTerminator", "SINGLE_LINE_COMMENT", "SINGLE_LINE_DOC_COMMENT", 
			"BLOCK_COMMENT", "IDENTIFIER", "LONGLITERAL", "INTLITERAL", "HEX_LITERAL", 
			"FLOATLITERAL", "DOUBLELITERAL", "CHARLITERAL", "STRING"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MonkeyC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MonkeyCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MonkeyCParser.EOF, 0); }
		public List<CompilationUnitContext> compilationUnit() {
			return getRuleContexts(CompilationUnitContext.class);
		}
		public CompilationUnitContext compilationUnit(int i) {
			return getRuleContext(CompilationUnitContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SEMI) | (1L << COLON) | (1L << CLASS) | (1L << FUNCTION) | (1L << RETURN) | (1L << NEW) | (1L << VAR) | (1L << CONST) | (1L << MODULE) | (1L << USING) | (1L << ENUM) | (1L << NULL) | (1L << HIDDEN_TOKEN) | (1L << PUBLIC_TOKEN) | (1L << PRIVATE_TOKEN) | (1L << PROTECTED_TOKEN) | (1L << STATIC) | (1L << IF) | (1L << DO) | (1L << WHILE) | (1L << FOR) | (1L << BREAK) | (1L << CONTINUE) | (1L << SWITCH) | (1L << TRY) | (1L << THROW) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				{
				setState(128);
				compilationUnit();
				}
				}
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(134);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public UsingDeclarationContext usingDeclaration() {
			return getRuleContext(UsingDeclarationContext.class,0);
		}
		public ModuleDeclarationContext moduleDeclaration() {
			return getRuleContext(ModuleDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public ConstDeclarationContext constDeclaration() {
			return getRuleContext(ConstDeclarationContext.class,0);
		}
		public FieldDeclarationListContext fieldDeclarationList() {
			return getRuleContext(FieldDeclarationListContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public BlockStatementContext blockStatement() {
			return getRuleContext(BlockStatementContext.class,0);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterCompilationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitCompilationUnit(this);
		}
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_compilationUnit);
		try {
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(136);
				usingDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
				moduleDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(138);
				classDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(139);
				enumDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(140);
				constDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(141);
				fieldDeclarationList();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(142);
				functionDeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(143);
				blockStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingDeclarationContext extends ParserRuleContext {
		public TerminalNode USING() { return getToken(MonkeyCParser.USING, 0); }
		public FullyQualifiedReferenceExpressionContext fullyQualifiedReferenceExpression() {
			return getRuleContext(FullyQualifiedReferenceExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(MonkeyCParser.SEMI, 0); }
		public TerminalNode AS() { return getToken(MonkeyCParser.AS, 0); }
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public UsingDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterUsingDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitUsingDeclaration(this);
		}
	}

	public final UsingDeclarationContext usingDeclaration() throws RecognitionException {
		UsingDeclarationContext _localctx = new UsingDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_usingDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(USING);
			setState(147);
			fullyQualifiedReferenceExpression();
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(148);
				match(AS);
				setState(149);
				componentName();
				}
			}

			setState(152);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleDeclarationContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode MODULE() { return getToken(MonkeyCParser.MODULE, 0); }
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public ModuleBodyContext moduleBody() {
			return getRuleContext(ModuleBodyContext.class,0);
		}
		public ModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterModuleDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitModuleDeclaration(this);
		}
	}

	public final ModuleDeclarationContext moduleDeclaration() throws RecognitionException {
		ModuleDeclarationContext _localctx = new ModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_moduleDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			modifiers();
			setState(155);
			match(MODULE);
			setState(156);
			componentName();
			setState(157);
			moduleBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public ModuleBodyMembersContext moduleBodyMembers() {
			return getRuleContext(ModuleBodyMembersContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public ModuleBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterModuleBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitModuleBody(this);
		}
	}

	public final ModuleBodyContext moduleBody() throws RecognitionException {
		ModuleBodyContext _localctx = new ModuleBodyContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_moduleBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(LBRACE);
			setState(160);
			moduleBodyMembers();
			setState(161);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleBodyMembersContext extends ParserRuleContext {
		public List<ModuleBodyMemberContext> moduleBodyMember() {
			return getRuleContexts(ModuleBodyMemberContext.class);
		}
		public ModuleBodyMemberContext moduleBodyMember(int i) {
			return getRuleContext(ModuleBodyMemberContext.class,i);
		}
		public ModuleBodyMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBodyMembers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterModuleBodyMembers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitModuleBodyMembers(this);
		}
	}

	public final ModuleBodyMembersContext moduleBodyMembers() throws RecognitionException {
		ModuleBodyMembersContext _localctx = new ModuleBodyMembersContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_moduleBodyMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << FUNCTION) | (1L << VAR) | (1L << CONST) | (1L << MODULE) | (1L << ENUM) | (1L << HIDDEN_TOKEN) | (1L << PUBLIC_TOKEN) | (1L << PRIVATE_TOKEN) | (1L << PROTECTED_TOKEN) | (1L << STATIC) | (1L << LPAREN))) != 0)) {
				{
				{
				setState(163);
				moduleBodyMember();
				}
				}
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleBodyMemberContext extends ParserRuleContext {
		public ConstDeclarationContext constDeclaration() {
			return getRuleContext(ConstDeclarationContext.class,0);
		}
		public FieldDeclarationListContext fieldDeclarationList() {
			return getRuleContext(FieldDeclarationListContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public ModuleDeclarationContext moduleDeclaration() {
			return getRuleContext(ModuleDeclarationContext.class,0);
		}
		public ModuleBodyMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBodyMember; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterModuleBodyMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitModuleBodyMember(this);
		}
	}

	public final ModuleBodyMemberContext moduleBodyMember() throws RecognitionException {
		ModuleBodyMemberContext _localctx = new ModuleBodyMemberContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_moduleBodyMember);
		try {
			setState(175);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(169);
				constDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(170);
				fieldDeclarationList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(171);
				functionDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(172);
				classDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(173);
				enumDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(174);
				moduleDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FullyQualifiedReferenceExpressionContext extends ParserRuleContext {
		public ReferenceOrThisExpressionContext referenceOrThisExpression() {
			return getRuleContext(ReferenceOrThisExpressionContext.class,0);
		}
		public List<QualifiedReferenceExpressionContext> qualifiedReferenceExpression() {
			return getRuleContexts(QualifiedReferenceExpressionContext.class);
		}
		public QualifiedReferenceExpressionContext qualifiedReferenceExpression(int i) {
			return getRuleContext(QualifiedReferenceExpressionContext.class,i);
		}
		public FullyQualifiedReferenceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fullyQualifiedReferenceExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterFullyQualifiedReferenceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitFullyQualifiedReferenceExpression(this);
		}
	}

	public final FullyQualifiedReferenceExpressionContext fullyQualifiedReferenceExpression() throws RecognitionException {
		FullyQualifiedReferenceExpressionContext _localctx = new FullyQualifiedReferenceExpressionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fullyQualifiedReferenceExpression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			referenceOrThisExpression();
			setState(181);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(178);
					qualifiedReferenceExpression();
					}
					} 
				}
				setState(183);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode CLASS() { return getToken(MonkeyCParser.CLASS, 0); }
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(MonkeyCParser.EXTENDS, 0); }
		public FullyQualifiedReferenceExpressionContext fullyQualifiedReferenceExpression() {
			return getRuleContext(FullyQualifiedReferenceExpressionContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterClassDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitClassDeclaration(this);
		}
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			modifiers();
			setState(185);
			match(CLASS);
			setState(186);
			componentName();
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(187);
				match(EXTENDS);
				setState(188);
				fullyQualifiedReferenceExpression();
				}
			}

			setState(191);
			classBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public ClassBodyMembersContext classBodyMembers() {
			return getRuleContext(ClassBodyMembersContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterClassBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitClassBody(this);
		}
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_classBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(LBRACE);
			setState(194);
			classBodyMembers();
			setState(195);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyMembersContext extends ParserRuleContext {
		public List<ClassBodyMemberContext> classBodyMember() {
			return getRuleContexts(ClassBodyMemberContext.class);
		}
		public ClassBodyMemberContext classBodyMember(int i) {
			return getRuleContext(ClassBodyMemberContext.class,i);
		}
		public ClassBodyMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBodyMembers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterClassBodyMembers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitClassBodyMembers(this);
		}
	}

	public final ClassBodyMembersContext classBodyMembers() throws RecognitionException {
		ClassBodyMembersContext _localctx = new ClassBodyMembersContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_classBodyMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << FUNCTION) | (1L << VAR) | (1L << CONST) | (1L << ENUM) | (1L << HIDDEN_TOKEN) | (1L << PUBLIC_TOKEN) | (1L << PRIVATE_TOKEN) | (1L << PROTECTED_TOKEN) | (1L << STATIC) | (1L << LPAREN))) != 0)) {
				{
				{
				setState(197);
				classBodyMember();
				}
				}
				setState(202);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyMemberContext extends ParserRuleContext {
		public ConstDeclarationContext constDeclaration() {
			return getRuleContext(ConstDeclarationContext.class,0);
		}
		public FieldDeclarationListContext fieldDeclarationList() {
			return getRuleContext(FieldDeclarationListContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public ClassBodyMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBodyMember; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterClassBodyMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitClassBodyMember(this);
		}
	}

	public final ClassBodyMemberContext classBodyMember() throws RecognitionException {
		ClassBodyMemberContext _localctx = new ClassBodyMemberContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_classBodyMember);
		try {
			setState(208);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(203);
				constDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(204);
				fieldDeclarationList();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(205);
				functionDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(206);
				classDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(207);
				enumDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode ENUM() { return getToken(MonkeyCParser.ENUM, 0); }
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public List<EnumConstantContext> enumConstant() {
			return getRuleContexts(EnumConstantContext.class);
		}
		public EnumConstantContext enumConstant(int i) {
			return getRuleContext(EnumConstantContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterEnumDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitEnumDeclaration(this);
		}
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			modifiers();
			setState(211);
			match(ENUM);
			setState(212);
			match(LBRACE);
			setState(213);
			enumConstant();
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(214);
				match(COMMA);
				setState(215);
				enumConstant();
				}
				}
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(221);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MaybeSignedIntegerContext extends ParserRuleContext {
		public TerminalNode INTLITERAL() { return getToken(MonkeyCParser.INTLITERAL, 0); }
		public TerminalNode PLUS() { return getToken(MonkeyCParser.PLUS, 0); }
		public TerminalNode SUB() { return getToken(MonkeyCParser.SUB, 0); }
		public MaybeSignedIntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_maybeSignedInteger; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterMaybeSignedInteger(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitMaybeSignedInteger(this);
		}
	}

	public final MaybeSignedIntegerContext maybeSignedInteger() throws RecognitionException {
		MaybeSignedIntegerContext _localctx = new MaybeSignedIntegerContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_maybeSignedInteger);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==SUB) {
				{
				setState(223);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(226);
			match(INTLITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumConstantContext extends ParserRuleContext {
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public MaybeSignedIntegerContext maybeSignedInteger() {
			return getRuleContext(MaybeSignedIntegerContext.class,0);
		}
		public EnumConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumConstant; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterEnumConstant(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitEnumConstant(this);
		}
	}

	public final EnumConstantContext enumConstant() throws RecognitionException {
		EnumConstantContext _localctx = new EnumConstantContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_enumConstant);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			componentName();
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(229);
				match(EQ);
				setState(230);
				maybeSignedInteger();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDeclarationContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode CONST() { return getToken(MonkeyCParser.CONST, 0); }
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(MonkeyCParser.SEMI, 0); }
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ConstDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterConstDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitConstDeclaration(this);
		}
	}

	public final ConstDeclarationContext constDeclaration() throws RecognitionException {
		ConstDeclarationContext _localctx = new ConstDeclarationContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_constDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			modifiers();
			setState(234);
			match(CONST);
			setState(235);
			componentName();
			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(236);
				match(EQ);
				setState(237);
				singleExpression(0);
				}
			}

			setState(240);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldDeclarationListContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode VAR() { return getToken(MonkeyCParser.VAR, 0); }
		public List<FieldDeclarationContext> fieldDeclaration() {
			return getRuleContexts(FieldDeclarationContext.class);
		}
		public FieldDeclarationContext fieldDeclaration(int i) {
			return getRuleContext(FieldDeclarationContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(MonkeyCParser.SEMI, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public FieldDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclarationList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterFieldDeclarationList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitFieldDeclarationList(this);
		}
	}

	public final FieldDeclarationListContext fieldDeclarationList() throws RecognitionException {
		FieldDeclarationListContext _localctx = new FieldDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_fieldDeclarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			modifiers();
			setState(243);
			match(VAR);
			setState(244);
			fieldDeclaration();
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(245);
				match(COMMA);
				setState(246);
				fieldDeclaration();
				}
				}
				setState(251);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(252);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldDeclarationContext extends ParserRuleContext {
		public VarOrFieldDeclarationContext varOrFieldDeclaration() {
			return getRuleContext(VarOrFieldDeclarationContext.class,0);
		}
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterFieldDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitFieldDeclaration(this);
		}
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_fieldDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			varOrFieldDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public ModifiersContext modifiers() {
			return getRuleContext(ModifiersContext.class,0);
		}
		public TerminalNode FUNCTION() { return getToken(MonkeyCParser.FUNCTION, 0); }
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FormalParameterDeclarationsContext formalParameterDeclarations() {
			return getRuleContext(FormalParameterDeclarationsContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterFunctionDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitFunctionDeclaration(this);
		}
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			modifiers();
			setState(257);
			match(FUNCTION);
			setState(258);
			componentName();
			setState(259);
			match(LPAREN);
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(260);
				formalParameterDeclarations();
				}
			}

			setState(263);
			match(RPAREN);
			setState(264);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterDeclarationsContext extends ParserRuleContext {
		public List<ComponentNameContext> componentName() {
			return getRuleContexts(ComponentNameContext.class);
		}
		public ComponentNameContext componentName(int i) {
			return getRuleContext(ComponentNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public FormalParameterDeclarationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterDeclarations; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterFormalParameterDeclarations(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitFormalParameterDeclarations(this);
		}
	}

	public final FormalParameterDeclarationsContext formalParameterDeclarations() throws RecognitionException {
		FormalParameterDeclarationsContext _localctx = new FormalParameterDeclarationsContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_formalParameterDeclarations);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			componentName();
			setState(271);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(267);
				match(COMMA);
				setState(268);
				componentName();
				}
				}
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(LBRACE);
			setState(278);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SEMI) | (1L << COLON) | (1L << RETURN) | (1L << NEW) | (1L << VAR) | (1L << NULL) | (1L << IF) | (1L << DO) | (1L << WHILE) | (1L << FOR) | (1L << BREAK) | (1L << CONTINUE) | (1L << SWITCH) | (1L << TRY) | (1L << THROW) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				{
				setState(275);
				blockStatement();
				}
				}
				setState(280);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(281);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockStatementContext extends ParserRuleContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(MonkeyCParser.SEMI, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public BlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBlockStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBlockStatement(this);
		}
	}

	public final BlockStatementContext blockStatement() throws RecognitionException {
		BlockStatementContext _localctx = new BlockStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_blockStatement);
		try {
			setState(287);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(283);
				variableDeclarationList();
				setState(284);
				match(SEMI);
				}
				break;
			case SEMI:
			case COLON:
			case RETURN:
			case NEW:
			case NULL:
			case IF:
			case DO:
			case WHILE:
			case FOR:
			case BREAK:
			case CONTINUE:
			case SWITCH:
			case TRY:
			case THROW:
			case TRUE:
			case FALSE:
			case SELF:
			case VOID:
			case BLING:
			case LBRACE:
			case LBRACKET:
			case LPAREN:
			case PLUSPLUS:
			case SUBSUB:
			case TILDE:
			case BANG:
			case PLUS:
			case SUB:
			case IDENTIFIER:
			case LONGLITERAL:
			case INTLITERAL:
			case HEX_LITERAL:
			case FLOATLITERAL:
			case DOUBLELITERAL:
			case CHARLITERAL:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(286);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationListContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(MonkeyCParser.VAR, 0); }
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterVariableDeclarationList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitVariableDeclarationList(this);
		}
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_variableDeclarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			match(VAR);
			setState(290);
			variableDeclaration();
			setState(295);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(291);
				match(COMMA);
				setState(292);
				variableDeclaration();
				}
				}
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public VarOrFieldDeclarationContext varOrFieldDeclaration() {
			return getRuleContext(VarOrFieldDeclarationContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitVariableDeclaration(this);
		}
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			varOrFieldDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarOrFieldDeclarationContext extends ParserRuleContext {
		public ComponentNameContext componentName() {
			return getRuleContext(ComponentNameContext.class,0);
		}
		public List<TerminalNode> LBRACKET() { return getTokens(MonkeyCParser.LBRACKET); }
		public TerminalNode LBRACKET(int i) {
			return getToken(MonkeyCParser.LBRACKET, i);
		}
		public List<TerminalNode> RBRACKET() { return getTokens(MonkeyCParser.RBRACKET); }
		public TerminalNode RBRACKET(int i) {
			return getToken(MonkeyCParser.RBRACKET, i);
		}
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public VariableInitializerContext variableInitializer() {
			return getRuleContext(VariableInitializerContext.class,0);
		}
		public VarOrFieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varOrFieldDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterVarOrFieldDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitVarOrFieldDeclaration(this);
		}
	}

	public final VarOrFieldDeclarationContext varOrFieldDeclaration() throws RecognitionException {
		VarOrFieldDeclarationContext _localctx = new VarOrFieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_varOrFieldDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			componentName();
			setState(305);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACKET) {
				{
				{
				setState(301);
				match(LBRACKET);
				setState(302);
				match(RBRACKET);
				}
				}
				setState(307);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(308);
				match(EQ);
				setState(309);
				variableInitializer();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableInitializerContext extends ParserRuleContext {
		public ArrayInitializerContext arrayInitializer() {
			return getRuleContext(ArrayInitializerContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableInitializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterVariableInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitVariableInitializer(this);
		}
	}

	public final VariableInitializerContext variableInitializer() throws RecognitionException {
		VariableInitializerContext _localctx = new VariableInitializerContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_variableInitializer);
		try {
			setState(314);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(312);
				arrayInitializer();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(313);
				singleExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayInitializerContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public List<VariableInitializerContext> variableInitializer() {
			return getRuleContexts(VariableInitializerContext.class);
		}
		public VariableInitializerContext variableInitializer(int i) {
			return getRuleContext(VariableInitializerContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public ArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInitializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterArrayInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitArrayInitializer(this);
		}
	}

	public final ArrayInitializerContext arrayInitializer() throws RecognitionException {
		ArrayInitializerContext _localctx = new ArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_arrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			match(LBRACE);
			setState(325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				setState(317);
				variableInitializer();
				setState(322);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(318);
						match(COMMA);
						setState(319);
						variableInitializer();
						}
						} 
					}
					setState(324);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
				}
				}
			}

			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(327);
				match(COMMA);
				}
			}

			setState(330);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode IF() { return getToken(MonkeyCParser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(MonkeyCParser.ELSE, 0); }
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(MonkeyCParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(MonkeyCParser.DO, 0); }
		public TerminalNode SEMI() { return getToken(MonkeyCParser.SEMI, 0); }
		public TryStatementContext tryStatement() {
			return getRuleContext(TryStatementContext.class,0);
		}
		public TerminalNode SWITCH() { return getToken(MonkeyCParser.SWITCH, 0); }
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public SwitchBlockStatementGroupsContext switchBlockStatementGroups() {
			return getRuleContext(SwitchBlockStatementGroupsContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public TerminalNode RETURN() { return getToken(MonkeyCParser.RETURN, 0); }
		public TerminalNode THROW() { return getToken(MonkeyCParser.THROW, 0); }
		public TerminalNode BREAK() { return getToken(MonkeyCParser.BREAK, 0); }
		public ReferenceExpressionContext referenceExpression() {
			return getRuleContext(ReferenceExpressionContext.class,0);
		}
		public TerminalNode CONTINUE() { return getToken(MonkeyCParser.CONTINUE, 0); }
		public TerminalNode IDENTIFIER() { return getToken(MonkeyCParser.IDENTIFIER, 0); }
		public TerminalNode COLON() { return getToken(MonkeyCParser.COLON, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_statement);
		int _la;
		try {
			setState(394);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(332);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(333);
				match(IF);
				setState(334);
				match(LPAREN);
				setState(335);
				singleExpression(0);
				setState(336);
				match(RPAREN);
				setState(337);
				statement();
				setState(340);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(338);
					match(ELSE);
					setState(339);
					statement();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(342);
				forStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(343);
				match(WHILE);
				setState(344);
				match(LPAREN);
				setState(345);
				singleExpression(0);
				setState(346);
				match(RPAREN);
				setState(347);
				statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(349);
				match(DO);
				setState(350);
				statement();
				setState(351);
				match(WHILE);
				setState(352);
				match(LPAREN);
				setState(353);
				singleExpression(0);
				setState(354);
				match(RPAREN);
				setState(355);
				match(SEMI);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(357);
				tryStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(358);
				match(SWITCH);
				setState(359);
				match(LPAREN);
				setState(360);
				singleExpression(0);
				setState(361);
				match(RPAREN);
				setState(362);
				match(LBRACE);
				setState(363);
				switchBlockStatementGroups();
				setState(364);
				match(RBRACE);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(366);
				match(RETURN);
				setState(368);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
					{
					setState(367);
					singleExpression(0);
					}
				}

				setState(370);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(371);
				match(THROW);
				setState(372);
				singleExpression(0);
				setState(373);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(375);
				match(BREAK);
				setState(377);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(376);
					referenceExpression();
					}
				}

				setState(379);
				match(SEMI);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(380);
				match(CONTINUE);
				setState(382);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(381);
					referenceExpression();
					}
				}

				setState(384);
				match(SEMI);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(385);
				singleExpression(0);
				setState(388);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
				case 1:
					{
					setState(386);
					match(SEMI);
					}
					break;
				case 2:
					{
					this.notifyErrorListeners("Missing ';'");
					}
					break;
				}
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(390);
				match(IDENTIFIER);
				setState(391);
				match(COLON);
				setState(392);
				statement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(393);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBlockStatementGroupsContext extends ParserRuleContext {
		public List<SwitchBlockStatementGroupContext> switchBlockStatementGroup() {
			return getRuleContexts(SwitchBlockStatementGroupContext.class);
		}
		public SwitchBlockStatementGroupContext switchBlockStatementGroup(int i) {
			return getRuleContext(SwitchBlockStatementGroupContext.class,i);
		}
		public SwitchBlockStatementGroupsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBlockStatementGroups; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterSwitchBlockStatementGroups(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitSwitchBlockStatementGroups(this);
		}
	}

	public final SwitchBlockStatementGroupsContext switchBlockStatementGroups() throws RecognitionException {
		SwitchBlockStatementGroupsContext _localctx = new SwitchBlockStatementGroupsContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_switchBlockStatementGroups);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DEFAULT || _la==CASE) {
				{
				{
				setState(396);
				switchBlockStatementGroup();
				}
				}
				setState(401);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBlockStatementGroupContext extends ParserRuleContext {
		public SwitchLabelContext switchLabel() {
			return getRuleContext(SwitchLabelContext.class,0);
		}
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
		}
		public SwitchBlockStatementGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBlockStatementGroup; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterSwitchBlockStatementGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitSwitchBlockStatementGroup(this);
		}
	}

	public final SwitchBlockStatementGroupContext switchBlockStatementGroup() throws RecognitionException {
		SwitchBlockStatementGroupContext _localctx = new SwitchBlockStatementGroupContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_switchBlockStatementGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
			switchLabel();
			setState(406);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SEMI) | (1L << COLON) | (1L << RETURN) | (1L << NEW) | (1L << VAR) | (1L << NULL) | (1L << IF) | (1L << DO) | (1L << WHILE) | (1L << FOR) | (1L << BREAK) | (1L << CONTINUE) | (1L << SWITCH) | (1L << TRY) | (1L << THROW) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				{
				setState(403);
				blockStatement();
				}
				}
				setState(408);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchLabelContext extends ParserRuleContext {
		public TerminalNode CASE() { return getToken(MonkeyCParser.CASE, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode COLON() { return getToken(MonkeyCParser.COLON, 0); }
		public TerminalNode DEFAULT() { return getToken(MonkeyCParser.DEFAULT, 0); }
		public SwitchLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchLabel; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterSwitchLabel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitSwitchLabel(this);
		}
	}

	public final SwitchLabelContext switchLabel() throws RecognitionException {
		SwitchLabelContext _localctx = new SwitchLabelContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_switchLabel);
		try {
			setState(415);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				enterOuterAlt(_localctx, 1);
				{
				setState(409);
				match(CASE);
				setState(410);
				singleExpression(0);
				setState(411);
				match(COLON);
				}
				break;
			case DEFAULT:
				enterOuterAlt(_localctx, 2);
				{
				setState(413);
				match(DEFAULT);
				setState(414);
				match(COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryStatementContext extends ParserRuleContext {
		public TerminalNode TRY() { return getToken(MonkeyCParser.TRY, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public CatchesContext catches() {
			return getRuleContext(CatchesContext.class,0);
		}
		public TerminalNode FINALLY() { return getToken(MonkeyCParser.FINALLY, 0); }
		public TryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterTryStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitTryStatement(this);
		}
	}

	public final TryStatementContext tryStatement() throws RecognitionException {
		TryStatementContext _localctx = new TryStatementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_tryStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(TRY);
			setState(418);
			block();
			setState(426);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				{
				setState(419);
				catches();
				setState(420);
				match(FINALLY);
				setState(421);
				block();
				}
				break;
			case 2:
				{
				setState(423);
				catches();
				}
				break;
			case 3:
				{
				setState(424);
				match(FINALLY);
				setState(425);
				block();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchesContext extends ParserRuleContext {
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public CatchesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catches; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterCatches(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitCatches(this);
		}
	}

	public final CatchesContext catches() throws RecognitionException {
		CatchesContext _localctx = new CatchesContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_catches);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			catchClause();
			setState(432);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CATCH) {
				{
				{
				setState(429);
				catchClause();
				}
				}
				setState(434);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public TerminalNode CATCH() { return getToken(MonkeyCParser.CATCH, 0); }
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public CatchParameterContext catchParameter() {
			return getRuleContext(CatchParameterContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterCatchClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitCatchClause(this);
		}
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_catchClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(435);
			match(CATCH);
			setState(436);
			match(LPAREN);
			setState(437);
			catchParameter();
			setState(438);
			match(RPAREN);
			setState(439);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchParameterContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode INSTANCEOF() { return getToken(MonkeyCParser.INSTANCEOF, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public CatchParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterCatchParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitCatchParameter(this);
		}
	}

	public final CatchParameterContext catchParameter() throws RecognitionException {
		CatchParameterContext _localctx = new CatchParameterContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_catchParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			id();
			setState(444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INSTANCEOF) {
				{
				setState(442);
				match(INSTANCEOF);
				setState(443);
				qualifiedName();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStatementContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(MonkeyCParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public List<TerminalNode> SEMI() { return getTokens(MonkeyCParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(MonkeyCParser.SEMI, i);
		}
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForInitContext forInit() {
			return getRuleContext(ForInitContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterForStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitForStatement(this);
		}
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_forStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			match(FOR);
			setState(447);
			match(LPAREN);
			setState(449);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << VAR) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				setState(448);
				forInit();
				}
			}

			setState(451);
			match(SEMI);
			setState(453);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				setState(452);
				singleExpression(0);
				}
			}

			setState(455);
			match(SEMI);
			setState(457);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				setState(456);
				expressionList();
				}
			}

			setState(459);
			match(RPAREN);
			setState(460);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForInitContext extends ParserRuleContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterForInit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitForInit(this);
		}
	}

	public final ForInitContext forInit() throws RecognitionException {
		ForInitContext _localctx = new ForInitContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_forInit);
		try {
			setState(464);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(462);
				variableDeclarationList();
				}
				break;
			case COLON:
			case NEW:
			case NULL:
			case TRUE:
			case FALSE:
			case SELF:
			case VOID:
			case BLING:
			case LBRACE:
			case LBRACKET:
			case LPAREN:
			case PLUSPLUS:
			case SUBSUB:
			case TILDE:
			case BANG:
			case PLUS:
			case SUB:
			case IDENTIFIER:
			case LONGLITERAL:
			case INTLITERAL:
			case HEX_LITERAL:
			case FLOATLITERAL:
			case DOUBLELITERAL:
			case CHARLITERAL:
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(463);
				expressionList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterExpressionList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitExpressionList(this);
		}
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(466);
			singleExpression(0);
			setState(471);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(467);
				match(COMMA);
				setState(468);
				singleExpression(0);
				}
				}
				setState(473);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThisExpressionContext extends ParserRuleContext {
		public TerminalNode SELF() { return getToken(MonkeyCParser.SELF, 0); }
		public ThisExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_thisExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterThisExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitThisExpression(this);
		}
	}

	public final ThisExpressionContext thisExpression() throws RecognitionException {
		ThisExpressionContext _localctx = new ThisExpressionContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_thisExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(474);
			match(SELF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlingExpressionContext extends ParserRuleContext {
		public TerminalNode BLING() { return getToken(MonkeyCParser.BLING, 0); }
		public BlingExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blingExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBlingExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBlingExpression(this);
		}
	}

	public final BlingExpressionContext blingExpression() throws RecognitionException {
		BlingExpressionContext _localctx = new BlingExpressionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_blingExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			match(BLING);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceOrThisExpressionContext extends ParserRuleContext {
		public ReferenceExpressionContext referenceExpression() {
			return getRuleContext(ReferenceExpressionContext.class,0);
		}
		public ThisExpressionContext thisExpression() {
			return getRuleContext(ThisExpressionContext.class,0);
		}
		public BlingExpressionContext blingExpression() {
			return getRuleContext(BlingExpressionContext.class,0);
		}
		public ReferenceOrThisExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceOrThisExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterReferenceOrThisExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitReferenceOrThisExpression(this);
		}
	}

	public final ReferenceOrThisExpressionContext referenceOrThisExpression() throws RecognitionException {
		ReferenceOrThisExpressionContext _localctx = new ReferenceOrThisExpressionContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_referenceOrThisExpression);
		try {
			setState(481);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(478);
				referenceExpression();
				}
				break;
			case SELF:
				enterOuterAlt(_localctx, 2);
				{
				setState(479);
				thisExpression();
				}
				break;
			case BLING:
				enterOuterAlt(_localctx, 3);
				{
				setState(480);
				blingExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TernaryExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode QUES() { return getToken(MonkeyCParser.QUES, 0); }
		public TerminalNode COLON() { return getToken(MonkeyCParser.COLON, 0); }
		public TernaryExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterTernaryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitTernaryExpression(this);
		}
	}
	public static class HasExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode HAS() { return getToken(MonkeyCParser.HAS, 0); }
		public SymbolContext symbol() {
			return getRuleContext(SymbolContext.class,0);
		}
		public HasExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterHasExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitHasExpression(this);
		}
	}
	public static class LogicalAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode AMPAMP() { return getToken(MonkeyCParser.AMPAMP, 0); }
		public TerminalNode AND() { return getToken(MonkeyCParser.AND, 0); }
		public LogicalAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterLogicalAndExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitLogicalAndExpression(this);
		}
	}
	public static class ElementAccessExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LBRACKET() { return getToken(MonkeyCParser.LBRACKET, 0); }
		public TerminalNode RBRACKET() { return getToken(MonkeyCParser.RBRACKET, 0); }
		public ElementAccessExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterElementAccessExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitElementAccessExpression(this);
		}
	}
	public static class PreIncrementExpressionContext extends SingleExpressionContext {
		public TerminalNode PLUSPLUS() { return getToken(MonkeyCParser.PLUSPLUS, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterPreIncrementExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitPreIncrementExpression(this);
		}
	}
	public static class LogicalOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BARBAR() { return getToken(MonkeyCParser.BARBAR, 0); }
		public TerminalNode OR() { return getToken(MonkeyCParser.OR, 0); }
		public LogicalOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterLogicalOrExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitLogicalOrExpression(this);
		}
	}
	public static class GeneralFullyQualifiedReferenceExpressionContext extends SingleExpressionContext {
		public FullyQualifiedReferenceExpressionContext fullyQualifiedReferenceExpression() {
			return getRuleContext(FullyQualifiedReferenceExpressionContext.class,0);
		}
		public ClassAccessContext classAccess() {
			return getRuleContext(ClassAccessContext.class,0);
		}
		public MethodInvocationExpressionContext methodInvocationExpression() {
			return getRuleContext(MethodInvocationExpressionContext.class,0);
		}
		public GeneralFullyQualifiedReferenceExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterGeneralFullyQualifiedReferenceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitGeneralFullyQualifiedReferenceExpression(this);
		}
	}
	public static class NotExpressionContext extends SingleExpressionContext {
		public TerminalNode BANG() { return getToken(MonkeyCParser.BANG, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public NotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterNotExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitNotExpression(this);
		}
	}
	public static class PreDecreaseExpressionContext extends SingleExpressionContext {
		public TerminalNode SUBSUB() { return getToken(MonkeyCParser.SUBSUB, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterPreDecreaseExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitPreDecreaseExpression(this);
		}
	}
	public static class VoidDotClassExpressionContext extends SingleExpressionContext {
		public TerminalNode VOID() { return getToken(MonkeyCParser.VOID, 0); }
		public TerminalNode DOT() { return getToken(MonkeyCParser.DOT, 0); }
		public TerminalNode CLASS() { return getToken(MonkeyCParser.CLASS, 0); }
		public VoidDotClassExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterVoidDotClassExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitVoidDotClassExpression(this);
		}
	}
	public static class UnaryMinusExpressionContext extends SingleExpressionContext {
		public TerminalNode SUB() { return getToken(MonkeyCParser.SUB, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterUnaryMinusExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitUnaryMinusExpression(this);
		}
	}
	public static class AssignmentExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public AssignmentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterAssignmentExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitAssignmentExpression(this);
		}
	}
	public static class PostDecreaseExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode SUBSUB() { return getToken(MonkeyCParser.SUBSUB, 0); }
		public PostDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterPostDecreaseExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitPostDecreaseExpression(this);
		}
	}
	public static class SymbolExpressionContext extends SingleExpressionContext {
		public SymbolContext symbol() {
			return getRuleContext(SymbolContext.class,0);
		}
		public SymbolExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterSymbolExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitSymbolExpression(this);
		}
	}
	public static class InstanceofExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode INSTANCEOF() { return getToken(MonkeyCParser.INSTANCEOF, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public InstanceofExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterInstanceofExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitInstanceofExpression(this);
		}
	}
	public static class UnaryPlusExpressionContext extends SingleExpressionContext {
		public TerminalNode PLUS() { return getToken(MonkeyCParser.PLUS, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryPlusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterUnaryPlusExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitUnaryPlusExpression(this);
		}
	}
	public static class BitXOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode CARET() { return getToken(MonkeyCParser.CARET, 0); }
		public BitXOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitXOrExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitXOrExpression(this);
		}
	}
	public static class EqualityExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode EQEQ() { return getToken(MonkeyCParser.EQEQ, 0); }
		public TerminalNode BANGEQ() { return getToken(MonkeyCParser.BANGEQ, 0); }
		public EqualityExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterEqualityExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitEqualityExpression(this);
		}
	}
	public static class MultiplicativeExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode STAR() { return getToken(MonkeyCParser.STAR, 0); }
		public TerminalNode SLASH() { return getToken(MonkeyCParser.SLASH, 0); }
		public TerminalNode PERCENT() { return getToken(MonkeyCParser.PERCENT, 0); }
		public MultiplicativeExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterMultiplicativeExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitMultiplicativeExpression(this);
		}
	}
	public static class ArrayCreatorExpressionContext extends SingleExpressionContext {
		public ArrayCreatorContext arrayCreator() {
			return getRuleContext(ArrayCreatorContext.class,0);
		}
		public ArrayCreatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterArrayCreatorExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitArrayCreatorExpression(this);
		}
	}
	public static class BitShiftExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public ShiftOpContext shiftOp() {
			return getRuleContext(ShiftOpContext.class,0);
		}
		public BitShiftExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitShiftExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitShiftExpression(this);
		}
	}
	public static class ParenthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public ParenthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterParenthesizedExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitParenthesizedExpression(this);
		}
	}
	public static class RelationalExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public RelationalOpContext relationalOp() {
			return getRuleContext(RelationalOpContext.class,0);
		}
		public RelationalExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterRelationalExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitRelationalExpression(this);
		}
	}
	public static class AdditiveExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(MonkeyCParser.PLUS, 0); }
		public TerminalNode SUB() { return getToken(MonkeyCParser.SUB, 0); }
		public AdditiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterAdditiveExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitAdditiveExpression(this);
		}
	}
	public static class PostIncrementExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PLUSPLUS() { return getToken(MonkeyCParser.PLUSPLUS, 0); }
		public PostIncrementExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterPostIncrementExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitPostIncrementExpression(this);
		}
	}
	public static class BitNotExpressionContext extends SingleExpressionContext {
		public TerminalNode TILDE() { return getToken(MonkeyCParser.TILDE, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public BitNotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitNotExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitNotExpression(this);
		}
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterLiteralExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitLiteralExpression(this);
		}
	}
	public static class BitAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode AMP() { return getToken(MonkeyCParser.AMP, 0); }
		public BitAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitAndExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitAndExpression(this);
		}
	}
	public static class BitOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BAR() { return getToken(MonkeyCParser.BAR, 0); }
		public BitOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitOrExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitOrExpression(this);
		}
	}
	public static class AssignmentOperatorExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentOperatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterAssignmentOperatorExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitAssignmentOperatorExpression(this);
		}
	}
	public static class ObjectCreatorExpressionContext extends SingleExpressionContext {
		public ObjectCreatorContext objectCreator() {
			return getRuleContext(ObjectCreatorContext.class,0);
		}
		public ObjectCreatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterObjectCreatorExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitObjectCreatorExpression(this);
		}
	}
	public static class BitwiseExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public BitwiseOperatorContext bitwiseOperator() {
			return getRuleContext(BitwiseOperatorContext.class,0);
		}
		public BitwiseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitwiseExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitwiseExpression(this);
		}
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 82;
		enterRecursionRule(_localctx, 82, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(514);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(484);
				match(PLUS);
				setState(485);
				singleExpression(15);
				}
				break;
			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(486);
				match(SUB);
				setState(487);
				singleExpression(14);
				}
				break;
			case 3:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(488);
				match(PLUSPLUS);
				setState(489);
				singleExpression(13);
				}
				break;
			case 4:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(490);
				match(SUBSUB);
				setState(491);
				singleExpression(12);
				}
				break;
			case 5:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(492);
				match(TILDE);
				setState(493);
				singleExpression(11);
				}
				break;
			case 6:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(494);
				match(BANG);
				setState(495);
				singleExpression(10);
				}
				break;
			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(496);
				match(LPAREN);
				setState(497);
				singleExpression(0);
				setState(498);
				match(RPAREN);
				}
				break;
			case 8:
				{
				_localctx = new GeneralFullyQualifiedReferenceExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(500);
				fullyQualifiedReferenceExpression();
				setState(505);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(501);
					if (!(this.isClassAccess())) throw new FailedPredicateException(this, "this.isClassAccess()");
					setState(502);
					classAccess();
					}
					break;
				case 2:
					{
					setState(503);
					methodInvocationExpression();
					}
					break;
				case 3:
					{
					}
					break;
				}
				}
				break;
			case 9:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(507);
				literal();
				}
				break;
			case 10:
				{
				_localctx = new SymbolExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(508);
				symbol();
				}
				break;
			case 11:
				{
				_localctx = new ObjectCreatorExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(509);
				objectCreator();
				}
				break;
			case 12:
				{
				_localctx = new ArrayCreatorExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(510);
				arrayCreator();
				}
				break;
			case 13:
				{
				_localctx = new VoidDotClassExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(511);
				match(VOID);
				setState(512);
				match(DOT);
				setState(513);
				match(CLASS);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(582);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(580);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(516);
						if (!(precpred(_ctx, 29))) throw new FailedPredicateException(this, "precpred(_ctx, 29)");
						setState(517);
						match(QUES);
						setState(518);
						singleExpression(0);
						setState(519);
						match(COLON);
						setState(520);
						singleExpression(30);
						}
						break;
					case 2:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(522);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(523);
						_la = _input.LA(1);
						if ( !(_la==OR || _la==BARBAR) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(524);
						singleExpression(29);
						}
						break;
					case 3:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(525);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(526);
						_la = _input.LA(1);
						if ( !(_la==AND || _la==AMPAMP) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(527);
						singleExpression(28);
						}
						break;
					case 4:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(528);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(529);
						match(BAR);
						setState(530);
						singleExpression(27);
						}
						break;
					case 5:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(531);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(532);
						match(CARET);
						setState(533);
						singleExpression(26);
						}
						break;
					case 6:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(534);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(535);
						match(AMP);
						setState(536);
						singleExpression(25);
						}
						break;
					case 7:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(537);
						if (!(precpred(_ctx, 23))) throw new FailedPredicateException(this, "precpred(_ctx, 23)");
						setState(538);
						_la = _input.LA(1);
						if ( !(_la==EQEQ || _la==BANGEQ) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(539);
						singleExpression(24);
						}
						break;
					case 8:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(540);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(541);
						relationalOp();
						setState(542);
						singleExpression(21);
						}
						break;
					case 9:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(544);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(545);
						shiftOp();
						setState(546);
						singleExpression(20);
						}
						break;
					case 10:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(548);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(549);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==SUB) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(550);
						singleExpression(19);
						}
						break;
					case 11:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(551);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(552);
						_la = _input.LA(1);
						if ( !(((((_la - 58)) & ~0x3f) == 0 && ((1L << (_la - 58)) & ((1L << (STAR - 58)) | (1L << (PERCENT - 58)) | (1L << (SLASH - 58)))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(553);
						singleExpression(18);
						}
						break;
					case 12:
						{
						_localctx = new BitwiseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(554);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(555);
						bitwiseOperator();
						setState(556);
						singleExpression(17);
						}
						break;
					case 13:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(558);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(559);
						match(EQ);
						setState(560);
						singleExpression(9);
						}
						break;
					case 14:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(561);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(562);
						assignmentOperator();
						setState(563);
						singleExpression(8);
						}
						break;
					case 15:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(565);
						if (!(precpred(_ctx, 32))) throw new FailedPredicateException(this, "precpred(_ctx, 32)");
						setState(566);
						match(PLUSPLUS);
						}
						break;
					case 16:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(567);
						if (!(precpred(_ctx, 31))) throw new FailedPredicateException(this, "precpred(_ctx, 31)");
						setState(568);
						match(SUBSUB);
						}
						break;
					case 17:
						{
						_localctx = new ElementAccessExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(569);
						if (!(precpred(_ctx, 30))) throw new FailedPredicateException(this, "precpred(_ctx, 30)");
						setState(570);
						match(LBRACKET);
						setState(571);
						singleExpression(0);
						setState(572);
						match(RBRACKET);
						}
						break;
					case 18:
						{
						_localctx = new HasExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(574);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(575);
						match(HAS);
						setState(576);
						symbol();
						}
						break;
					case 19:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(577);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(578);
						match(INSTANCEOF);
						setState(579);
						qualifiedName();
						}
						break;
					}
					} 
				}
				setState(584);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ClassAccessContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(MonkeyCParser.DOT, 0); }
		public TerminalNode CLASS() { return getToken(MonkeyCParser.CLASS, 0); }
		public ClassAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classAccess; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterClassAccess(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitClassAccess(this);
		}
	}

	public final ClassAccessContext classAccess() throws RecognitionException {
		ClassAccessContext _localctx = new ClassAccessContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_classAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(585);
			match(DOT);
			setState(586);
			match(CLASS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodInvocationExpressionContext extends ParserRuleContext {
		public MethodInvocationContext methodInvocation() {
			return getRuleContext(MethodInvocationContext.class,0);
		}
		public TerminalNode DOT() { return getToken(MonkeyCParser.DOT, 0); }
		public TerminalNode IDENTIFIER() { return getToken(MonkeyCParser.IDENTIFIER, 0); }
		public TerminalNode SUPER() { return getToken(MonkeyCParser.SUPER, 0); }
		public MethodInvocationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodInvocationExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterMethodInvocationExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitMethodInvocationExpression(this);
		}
	}

	public final MethodInvocationExpressionContext methodInvocationExpression() throws RecognitionException {
		MethodInvocationExpressionContext _localctx = new MethodInvocationExpressionContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_methodInvocationExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(592);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				{
				setState(588);
				match(DOT);
				setState(589);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(590);
				match(DOT);
				setState(591);
				match(SUPER);
				}
				break;
			}
			setState(594);
			methodInvocation();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode PLUSEQ() { return getToken(MonkeyCParser.PLUSEQ, 0); }
		public TerminalNode SUBEQ() { return getToken(MonkeyCParser.SUBEQ, 0); }
		public TerminalNode STAREQ() { return getToken(MonkeyCParser.STAREQ, 0); }
		public TerminalNode SLASHEQ() { return getToken(MonkeyCParser.SLASHEQ, 0); }
		public TerminalNode AMPEQ() { return getToken(MonkeyCParser.AMPEQ, 0); }
		public TerminalNode CARETEQ() { return getToken(MonkeyCParser.CARETEQ, 0); }
		public TerminalNode PERCENTEQ() { return getToken(MonkeyCParser.PERCENTEQ, 0); }
		public List<TerminalNode> LT() { return getTokens(MonkeyCParser.LT); }
		public TerminalNode LT(int i) {
			return getToken(MonkeyCParser.LT, i);
		}
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public List<TerminalNode> GT() { return getTokens(MonkeyCParser.GT); }
		public TerminalNode GT(int i) {
			return getToken(MonkeyCParser.GT, i);
		}
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterAssignmentOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitAssignmentOperator(this);
		}
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_assignmentOperator);
		try {
			setState(613);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(596);
				match(PLUSEQ);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(597);
				match(SUBEQ);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(598);
				match(STAREQ);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(599);
				match(SLASHEQ);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(600);
				match(AMPEQ);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(601);
				match(CARETEQ);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(602);
				match(PERCENTEQ);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(603);
				match(LT);
				setState(604);
				match(LT);
				setState(605);
				match(EQ);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(606);
				match(GT);
				setState(607);
				match(GT);
				setState(608);
				match(GT);
				setState(609);
				match(EQ);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(610);
				match(GT);
				setState(611);
				match(GT);
				setState(612);
				match(EQ);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationalOpContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(MonkeyCParser.LT, 0); }
		public TerminalNode EQ() { return getToken(MonkeyCParser.EQ, 0); }
		public TerminalNode GT() { return getToken(MonkeyCParser.GT, 0); }
		public RelationalOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalOp; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterRelationalOp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitRelationalOp(this);
		}
	}

	public final RelationalOpContext relationalOp() throws RecognitionException {
		RelationalOpContext _localctx = new RelationalOpContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_relationalOp);
		try {
			setState(621);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(615);
				match(LT);
				setState(616);
				match(EQ);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(617);
				match(GT);
				setState(618);
				match(EQ);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(619);
				match(LT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(620);
				match(GT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShiftOpContext extends ParserRuleContext {
		public List<TerminalNode> LT() { return getTokens(MonkeyCParser.LT); }
		public TerminalNode LT(int i) {
			return getToken(MonkeyCParser.LT, i);
		}
		public List<TerminalNode> GT() { return getTokens(MonkeyCParser.GT); }
		public TerminalNode GT(int i) {
			return getToken(MonkeyCParser.GT, i);
		}
		public ShiftOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shiftOp; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterShiftOp(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitShiftOp(this);
		}
	}

	public final ShiftOpContext shiftOp() throws RecognitionException {
		ShiftOpContext _localctx = new ShiftOpContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_shiftOp);
		try {
			setState(630);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(623);
				match(LT);
				setState(624);
				match(LT);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(625);
				match(GT);
				setState(626);
				match(GT);
				setState(627);
				match(GT);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(628);
				match(GT);
				setState(629);
				match(GT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BitwiseOperatorContext extends ParserRuleContext {
		public TerminalNode AMP() { return getToken(MonkeyCParser.AMP, 0); }
		public TerminalNode CARET() { return getToken(MonkeyCParser.CARET, 0); }
		public TerminalNode BAR() { return getToken(MonkeyCParser.BAR, 0); }
		public BitwiseOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwiseOperator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterBitwiseOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitBitwiseOperator(this);
		}
	}

	public final BitwiseOperatorContext bitwiseOperator() throws RecognitionException {
		BitwiseOperatorContext _localctx = new BitwiseOperatorContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_bitwiseOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			_la = _input.LA(1);
			if ( !(((((_la - 59)) & ~0x3f) == 0 && ((1L << (_la - 59)) & ((1L << (BAR - 59)) | (1L << (AMP - 59)) | (1L << (CARET - 59)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedReferenceExpressionContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(MonkeyCParser.DOT, 0); }
		public ReferenceExpressionContext referenceExpression() {
			return getRuleContext(ReferenceExpressionContext.class,0);
		}
		public QualifiedReferenceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedReferenceExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterQualifiedReferenceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitQualifiedReferenceExpression(this);
		}
	}

	public final QualifiedReferenceExpressionContext qualifiedReferenceExpression() throws RecognitionException {
		QualifiedReferenceExpressionContext _localctx = new QualifiedReferenceExpressionContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_qualifiedReferenceExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(634);
			match(DOT);
			setState(635);
			referenceExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceExpressionContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ReferenceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterReferenceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitReferenceExpression(this);
		}
	}

	public final ReferenceExpressionContext referenceExpression() throws RecognitionException {
		ReferenceExpressionContext _localctx = new ReferenceExpressionContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_referenceExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodInvocationContext extends ParserRuleContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public MethodInvocationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodInvocation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterMethodInvocation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitMethodInvocation(this);
		}
	}

	public final MethodInvocationContext methodInvocation() throws RecognitionException {
		MethodInvocationContext _localctx = new MethodInvocationContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_methodInvocation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(639);
			arguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectCreatorContext extends ParserRuleContext {
		public TerminalNode NEW() { return getToken(MonkeyCParser.NEW, 0); }
		public FullyQualifiedReferenceExpressionContext fullyQualifiedReferenceExpression() {
			return getRuleContext(FullyQualifiedReferenceExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public ObjectCreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectCreator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterObjectCreator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitObjectCreator(this);
		}
	}

	public final ObjectCreatorContext objectCreator() throws RecognitionException {
		ObjectCreatorContext _localctx = new ObjectCreatorContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_objectCreator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(641);
			match(NEW);
			setState(642);
			fullyQualifiedReferenceExpression();
			setState(643);
			arguments();
			setState(645);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
			case 1:
				{
				setState(644);
				classBody();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayCreatorContext extends ParserRuleContext {
		public TerminalNode NEW() { return getToken(MonkeyCParser.NEW, 0); }
		public TerminalNode LBRACKET() { return getToken(MonkeyCParser.LBRACKET, 0); }
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode RBRACKET() { return getToken(MonkeyCParser.RBRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public DictionaryCreatorContext dictionaryCreator() {
			return getRuleContext(DictionaryCreatorContext.class,0);
		}
		public ArrayCreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayCreator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterArrayCreator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitArrayCreator(this);
		}
	}

	public final ArrayCreatorContext arrayCreator() throws RecognitionException {
		ArrayCreatorContext _localctx = new ArrayCreatorContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_arrayCreator);
		int _la;
		try {
			setState(665);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(647);
				match(NEW);
				setState(648);
				match(LBRACKET);
				setState(649);
				singleExpression(0);
				setState(650);
				match(RBRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(652);
				match(LBRACKET);
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
					{
					setState(653);
					singleExpression(0);
					setState(658);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(654);
						match(COMMA);
						setState(655);
						singleExpression(0);
						}
						}
						setState(660);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(663);
				match(RBRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(664);
				dictionaryCreator();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryCreatorContext extends ParserRuleContext {
		public TerminalNode NEW() { return getToken(MonkeyCParser.NEW, 0); }
		public TerminalNode LBRACE() { return getToken(MonkeyCParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(MonkeyCParser.RBRACE, 0); }
		public List<KeyValueInitializerContext> keyValueInitializer() {
			return getRuleContexts(KeyValueInitializerContext.class);
		}
		public KeyValueInitializerContext keyValueInitializer(int i) {
			return getRuleContext(KeyValueInitializerContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public DictionaryCreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryCreator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterDictionaryCreator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitDictionaryCreator(this);
		}
	}

	public final DictionaryCreatorContext dictionaryCreator() throws RecognitionException {
		DictionaryCreatorContext _localctx = new DictionaryCreatorContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_dictionaryCreator);
		int _la;
		try {
			setState(682);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NEW:
				enterOuterAlt(_localctx, 1);
				{
				setState(667);
				match(NEW);
				setState(668);
				match(LBRACE);
				setState(669);
				match(RBRACE);
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(670);
				match(LBRACE);
				setState(679);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
					{
					setState(671);
					keyValueInitializer();
					setState(676);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==COMMA) {
						{
						{
						setState(672);
						match(COMMA);
						setState(673);
						keyValueInitializer();
						}
						}
						setState(678);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(681);
				match(RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyValueInitializerContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode EQGT() { return getToken(MonkeyCParser.EQGT, 0); }
		public KeyValueInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyValueInitializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterKeyValueInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitKeyValueInitializer(this);
		}
	}

	public final KeyValueInitializerContext keyValueInitializer() throws RecognitionException {
		KeyValueInitializerContext _localctx = new KeyValueInitializerContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_keyValueInitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(684);
			singleExpression(0);
			setState(685);
			match(EQGT);
			setState(686);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public ArgumentsListContext argumentsList() {
			return getRuleContext(ArgumentsListContext.class,0);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitArguments(this);
		}
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(688);
			match(LPAREN);
			setState(690);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COLON) | (1L << NEW) | (1L << NULL) | (1L << TRUE) | (1L << FALSE) | (1L << SELF) | (1L << VOID) | (1L << BLING) | (1L << LBRACE) | (1L << LBRACKET) | (1L << LPAREN))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (PLUSPLUS - 66)) | (1L << (SUBSUB - 66)) | (1L << (TILDE - 66)) | (1L << (BANG - 66)) | (1L << (PLUS - 66)) | (1L << (SUB - 66)) | (1L << (IDENTIFIER - 66)) | (1L << (LONGLITERAL - 66)) | (1L << (INTLITERAL - 66)) | (1L << (HEX_LITERAL - 66)) | (1L << (FLOATLITERAL - 66)) | (1L << (DOUBLELITERAL - 66)) | (1L << (CHARLITERAL - 66)) | (1L << (STRING - 66)))) != 0)) {
				{
				setState(689);
				argumentsList();
				}
			}

			setState(692);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsListContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MonkeyCParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MonkeyCParser.COMMA, i);
		}
		public ArgumentsListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentsList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterArgumentsList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitArgumentsList(this);
		}
	}

	public final ArgumentsListContext argumentsList() throws RecognitionException {
		ArgumentsListContext _localctx = new ArgumentsListContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_argumentsList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(694);
			singleExpression(0);
			setState(699);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(695);
				match(COMMA);
				setState(696);
				singleExpression(0);
				}
				}
				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModifiersContext extends ParserRuleContext {
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public TerminalNode STATIC() { return getToken(MonkeyCParser.STATIC, 0); }
		public TerminalNode HIDDEN_TOKEN() { return getToken(MonkeyCParser.HIDDEN_TOKEN, 0); }
		public TerminalNode PUBLIC_TOKEN() { return getToken(MonkeyCParser.PUBLIC_TOKEN, 0); }
		public TerminalNode PROTECTED_TOKEN() { return getToken(MonkeyCParser.PROTECTED_TOKEN, 0); }
		public TerminalNode PRIVATE_TOKEN() { return getToken(MonkeyCParser.PRIVATE_TOKEN, 0); }
		public ModifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifiers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterModifiers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitModifiers(this);
		}
	}

	public final ModifiersContext modifiers() throws RecognitionException {
		ModifiersContext _localctx = new ModifiersContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_modifiers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(703);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(702);
				annotation();
				}
			}

			setState(706);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STATIC) {
				{
				setState(705);
				match(STATIC);
				}
			}

			setState(709);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << HIDDEN_TOKEN) | (1L << PUBLIC_TOKEN) | (1L << PRIVATE_TOKEN) | (1L << PROTECTED_TOKEN))) != 0)) {
				{
				setState(708);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << HIDDEN_TOKEN) | (1L << PUBLIC_TOKEN) | (1L << PRIVATE_TOKEN) | (1L << PROTECTED_TOKEN))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(MonkeyCParser.LPAREN, 0); }
		public SymbolContext symbol() {
			return getRuleContext(SymbolContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(MonkeyCParser.RPAREN, 0); }
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterAnnotation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitAnnotation(this);
		}
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_annotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(711);
			match(LPAREN);
			setState(712);
			symbol();
			setState(713);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SymbolContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(MonkeyCParser.COLON, 0); }
		public ReferenceExpressionContext referenceExpression() {
			return getRuleContext(ReferenceExpressionContext.class,0);
		}
		public SymbolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_symbol; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterSymbol(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitSymbol(this);
		}
	}

	public final SymbolContext symbol() throws RecognitionException {
		SymbolContext _localctx = new SymbolContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_symbol);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(715);
			match(COLON);
			setState(716);
			referenceExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameContext extends ParserRuleContext {
		public List<ComponentNameContext> componentName() {
			return getRuleContexts(ComponentNameContext.class);
		}
		public ComponentNameContext componentName(int i) {
			return getRuleContext(ComponentNameContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(MonkeyCParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(MonkeyCParser.DOT, i);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterQualifiedName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitQualifiedName(this);
		}
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_qualifiedName);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(718);
			componentName();
			setState(723);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(719);
					match(DOT);
					setState(720);
					componentName();
					}
					} 
				}
				setState(725);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,63,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentNameContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ComponentNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterComponentName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitComponentName(this);
		}
	}

	public final ComponentNameContext componentName() throws RecognitionException {
		ComponentNameContext _localctx = new ComponentNameContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_componentName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(726);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(MonkeyCParser.IDENTIFIER, 0); }
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitId(this);
		}
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_id);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(728);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode INTLITERAL() { return getToken(MonkeyCParser.INTLITERAL, 0); }
		public TerminalNode LONGLITERAL() { return getToken(MonkeyCParser.LONGLITERAL, 0); }
		public TerminalNode FLOATLITERAL() { return getToken(MonkeyCParser.FLOATLITERAL, 0); }
		public TerminalNode DOUBLELITERAL() { return getToken(MonkeyCParser.DOUBLELITERAL, 0); }
		public TerminalNode HEX_LITERAL() { return getToken(MonkeyCParser.HEX_LITERAL, 0); }
		public TerminalNode CHARLITERAL() { return getToken(MonkeyCParser.CHARLITERAL, 0); }
		public TerminalNode STRING() { return getToken(MonkeyCParser.STRING, 0); }
		public TerminalNode TRUE() { return getToken(MonkeyCParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(MonkeyCParser.FALSE, 0); }
		public TerminalNode NULL() { return getToken(MonkeyCParser.NULL, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MonkeyCListener ) ((MonkeyCListener)listener).exitLiteral(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(730);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NULL) | (1L << TRUE) | (1L << FALSE))) != 0) || ((((_la - 91)) & ~0x3f) == 0 && ((1L << (_la - 91)) & ((1L << (LONGLITERAL - 91)) | (1L << (INTLITERAL - 91)) | (1L << (HEX_LITERAL - 91)) | (1L << (FLOATLITERAL - 91)) | (1L << (DOUBLELITERAL - 91)) | (1L << (CHARLITERAL - 91)) | (1L << (STRING - 91)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 41:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return this.isClassAccess();
		case 1:
			return precpred(_ctx, 29);
		case 2:
			return precpred(_ctx, 28);
		case 3:
			return precpred(_ctx, 27);
		case 4:
			return precpred(_ctx, 26);
		case 5:
			return precpred(_ctx, 25);
		case 6:
			return precpred(_ctx, 24);
		case 7:
			return precpred(_ctx, 23);
		case 8:
			return precpred(_ctx, 20);
		case 9:
			return precpred(_ctx, 19);
		case 10:
			return precpred(_ctx, 18);
		case 11:
			return precpred(_ctx, 17);
		case 12:
			return precpred(_ctx, 16);
		case 13:
			return precpred(_ctx, 9);
		case 14:
			return precpred(_ctx, 8);
		case 15:
			return precpred(_ctx, 32);
		case 16:
			return precpred(_ctx, 31);
		case 17:
			return precpred(_ctx, 30);
		case 18:
			return precpred(_ctx, 22);
		case 19:
			return precpred(_ctx, 21);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3c\u02df\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\3\2\7\2\u0084\n\2\f\2\16\2\u0087\13\2\3\2\3\2"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u0093\n\3\3\4\3\4\3\4\3\4\5\4\u0099"+
		"\n\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\7\7\u00a7\n\7\f\7"+
		"\16\7\u00aa\13\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00b2\n\b\3\t\3\t\7\t\u00b6"+
		"\n\t\f\t\16\t\u00b9\13\t\3\n\3\n\3\n\3\n\3\n\5\n\u00c0\n\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\f\7\f\u00c9\n\f\f\f\16\f\u00cc\13\f\3\r\3\r\3\r\3\r"+
		"\3\r\5\r\u00d3\n\r\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u00db\n\16\f\16"+
		"\16\16\u00de\13\16\3\16\3\16\3\17\5\17\u00e3\n\17\3\17\3\17\3\20\3\20"+
		"\3\20\5\20\u00ea\n\20\3\21\3\21\3\21\3\21\3\21\5\21\u00f1\n\21\3\21\3"+
		"\21\3\22\3\22\3\22\3\22\3\22\7\22\u00fa\n\22\f\22\16\22\u00fd\13\22\3"+
		"\22\3\22\3\23\3\23\3\24\3\24\3\24\3\24\3\24\5\24\u0108\n\24\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\7\25\u0110\n\25\f\25\16\25\u0113\13\25\3\26\3\26"+
		"\7\26\u0117\n\26\f\26\16\26\u011a\13\26\3\26\3\26\3\27\3\27\3\27\3\27"+
		"\5\27\u0122\n\27\3\30\3\30\3\30\3\30\7\30\u0128\n\30\f\30\16\30\u012b"+
		"\13\30\3\31\3\31\3\32\3\32\3\32\7\32\u0132\n\32\f\32\16\32\u0135\13\32"+
		"\3\32\3\32\5\32\u0139\n\32\3\33\3\33\5\33\u013d\n\33\3\34\3\34\3\34\3"+
		"\34\7\34\u0143\n\34\f\34\16\34\u0146\13\34\5\34\u0148\n\34\3\34\5\34\u014b"+
		"\n\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u0157\n\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u0173"+
		"\n\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u017c\n\35\3\35\3\35\3\35"+
		"\5\35\u0181\n\35\3\35\3\35\3\35\3\35\5\35\u0187\n\35\3\35\3\35\3\35\3"+
		"\35\5\35\u018d\n\35\3\36\7\36\u0190\n\36\f\36\16\36\u0193\13\36\3\37\3"+
		"\37\7\37\u0197\n\37\f\37\16\37\u019a\13\37\3 \3 \3 \3 \3 \3 \5 \u01a2"+
		"\n \3!\3!\3!\3!\3!\3!\3!\3!\3!\5!\u01ad\n!\3\"\3\"\7\"\u01b1\n\"\f\"\16"+
		"\"\u01b4\13\"\3#\3#\3#\3#\3#\3#\3$\3$\3$\5$\u01bf\n$\3%\3%\3%\5%\u01c4"+
		"\n%\3%\3%\5%\u01c8\n%\3%\3%\5%\u01cc\n%\3%\3%\3%\3&\3&\5&\u01d3\n&\3\'"+
		"\3\'\3\'\7\'\u01d8\n\'\f\'\16\'\u01db\13\'\3(\3(\3)\3)\3*\3*\3*\5*\u01e4"+
		"\n*\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+"+
		"\5+\u01fc\n+\3+\3+\3+\3+\3+\3+\3+\5+\u0205\n+\3+\3+\3+\3+\3+\3+\3+\3+"+
		"\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+"+
		"\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+"+
		"\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\7+\u0247\n+\f+\16+\u024a\13+\3,\3,\3,\3"+
		"-\3-\3-\3-\5-\u0253\n-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3"+
		".\3.\3.\3.\5.\u0268\n.\3/\3/\3/\3/\3/\3/\5/\u0270\n/\3\60\3\60\3\60\3"+
		"\60\3\60\3\60\3\60\5\60\u0279\n\60\3\61\3\61\3\62\3\62\3\62\3\63\3\63"+
		"\3\64\3\64\3\65\3\65\3\65\3\65\5\65\u0288\n\65\3\66\3\66\3\66\3\66\3\66"+
		"\3\66\3\66\3\66\3\66\7\66\u0293\n\66\f\66\16\66\u0296\13\66\5\66\u0298"+
		"\n\66\3\66\3\66\5\66\u029c\n\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\7\67"+
		"\u02a5\n\67\f\67\16\67\u02a8\13\67\5\67\u02aa\n\67\3\67\5\67\u02ad\n\67"+
		"\38\38\38\38\39\39\59\u02b5\n9\39\39\3:\3:\3:\7:\u02bc\n:\f:\16:\u02bf"+
		"\13:\3;\5;\u02c2\n;\3;\5;\u02c5\n;\3;\5;\u02c8\n;\3<\3<\3<\3<\3=\3=\3"+
		"=\3>\3>\3>\7>\u02d4\n>\f>\16>\u02d7\13>\3?\3?\3@\3@\3A\3A\3A\2\3TB\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\2\n\3\2TU\4\2**BB\4\2))CC\3\2GH\5\2<<Q"+
		"QVV\5\2==AAPP\3\2\24\27\5\2\22\22+,]c\2\u0323\2\u0085\3\2\2\2\4\u0092"+
		"\3\2\2\2\6\u0094\3\2\2\2\b\u009c\3\2\2\2\n\u00a1\3\2\2\2\f\u00a8\3\2\2"+
		"\2\16\u00b1\3\2\2\2\20\u00b3\3\2\2\2\22\u00ba\3\2\2\2\24\u00c3\3\2\2\2"+
		"\26\u00ca\3\2\2\2\30\u00d2\3\2\2\2\32\u00d4\3\2\2\2\34\u00e2\3\2\2\2\36"+
		"\u00e6\3\2\2\2 \u00eb\3\2\2\2\"\u00f4\3\2\2\2$\u0100\3\2\2\2&\u0102\3"+
		"\2\2\2(\u010c\3\2\2\2*\u0114\3\2\2\2,\u0121\3\2\2\2.\u0123\3\2\2\2\60"+
		"\u012c\3\2\2\2\62\u012e\3\2\2\2\64\u013c\3\2\2\2\66\u013e\3\2\2\28\u018c"+
		"\3\2\2\2:\u0191\3\2\2\2<\u0194\3\2\2\2>\u01a1\3\2\2\2@\u01a3\3\2\2\2B"+
		"\u01ae\3\2\2\2D\u01b5\3\2\2\2F\u01bb\3\2\2\2H\u01c0\3\2\2\2J\u01d2\3\2"+
		"\2\2L\u01d4\3\2\2\2N\u01dc\3\2\2\2P\u01de\3\2\2\2R\u01e3\3\2\2\2T\u0204"+
		"\3\2\2\2V\u024b\3\2\2\2X\u0252\3\2\2\2Z\u0267\3\2\2\2\\\u026f\3\2\2\2"+
		"^\u0278\3\2\2\2`\u027a\3\2\2\2b\u027c\3\2\2\2d\u027f\3\2\2\2f\u0281\3"+
		"\2\2\2h\u0283\3\2\2\2j\u029b\3\2\2\2l\u02ac\3\2\2\2n\u02ae\3\2\2\2p\u02b2"+
		"\3\2\2\2r\u02b8\3\2\2\2t\u02c1\3\2\2\2v\u02c9\3\2\2\2x\u02cd\3\2\2\2z"+
		"\u02d0\3\2\2\2|\u02d8\3\2\2\2~\u02da\3\2\2\2\u0080\u02dc\3\2\2\2\u0082"+
		"\u0084\5\4\3\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083\3\2"+
		"\2\2\u0085\u0086\3\2\2\2\u0086\u0088\3\2\2\2\u0087\u0085\3\2\2\2\u0088"+
		"\u0089\7\2\2\3\u0089\3\3\2\2\2\u008a\u0093\5\6\4\2\u008b\u0093\5\b\5\2"+
		"\u008c\u0093\5\22\n\2\u008d\u0093\5\32\16\2\u008e\u0093\5 \21\2\u008f"+
		"\u0093\5\"\22\2\u0090\u0093\5&\24\2\u0091\u0093\5,\27\2\u0092\u008a\3"+
		"\2\2\2\u0092\u008b\3\2\2\2\u0092\u008c\3\2\2\2\u0092\u008d\3\2\2\2\u0092"+
		"\u008e\3\2\2\2\u0092\u008f\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0091\3\2"+
		"\2\2\u0093\5\3\2\2\2\u0094\u0095\7\16\2\2\u0095\u0098\5\20\t\2\u0096\u0097"+
		"\7\17\2\2\u0097\u0099\5|?\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099"+
		"\u009a\3\2\2\2\u009a\u009b\7\4\2\2\u009b\7\3\2\2\2\u009c\u009d\5t;\2\u009d"+
		"\u009e\7\r\2\2\u009e\u009f\5|?\2\u009f\u00a0\5\n\6\2\u00a0\t\3\2\2\2\u00a1"+
		"\u00a2\7\65\2\2\u00a2\u00a3\5\f\7\2\u00a3\u00a4\7\66\2\2\u00a4\13\3\2"+
		"\2\2\u00a5\u00a7\5\16\b\2\u00a6\u00a5\3\2\2\2\u00a7\u00aa\3\2\2\2\u00a8"+
		"\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\r\3\2\2\2\u00aa\u00a8\3\2\2\2"+
		"\u00ab\u00b2\5 \21\2\u00ac\u00b2\5\"\22\2\u00ad\u00b2\5&\24\2\u00ae\u00b2"+
		"\5\22\n\2\u00af\u00b2\5\32\16\2\u00b0\u00b2\5\b\5\2\u00b1\u00ab\3\2\2"+
		"\2\u00b1\u00ac\3\2\2\2\u00b1\u00ad\3\2\2\2\u00b1\u00ae\3\2\2\2\u00b1\u00af"+
		"\3\2\2\2\u00b1\u00b0\3\2\2\2\u00b2\17\3\2\2\2\u00b3\u00b7\5R*\2\u00b4"+
		"\u00b6\5b\62\2\u00b5\u00b4\3\2\2\2\u00b6\u00b9\3\2\2\2\u00b7\u00b5\3\2"+
		"\2\2\u00b7\u00b8\3\2\2\2\u00b8\21\3\2\2\2\u00b9\u00b7\3\2\2\2\u00ba\u00bb"+
		"\5t;\2\u00bb\u00bc\7\7\2\2\u00bc\u00bf\5|?\2\u00bd\u00be\7\21\2\2\u00be"+
		"\u00c0\5\20\t\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c1\3"+
		"\2\2\2\u00c1\u00c2\5\24\13\2\u00c2\23\3\2\2\2\u00c3\u00c4\7\65\2\2\u00c4"+
		"\u00c5\5\26\f\2\u00c5\u00c6\7\66\2\2\u00c6\25\3\2\2\2\u00c7\u00c9\5\30"+
		"\r\2\u00c8\u00c7\3\2\2\2\u00c9\u00cc\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca"+
		"\u00cb\3\2\2\2\u00cb\27\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cd\u00d3\5 \21"+
		"\2\u00ce\u00d3\5\"\22\2\u00cf\u00d3\5&\24\2\u00d0\u00d3\5\22\n\2\u00d1"+
		"\u00d3\5\32\16\2\u00d2\u00cd\3\2\2\2\u00d2\u00ce\3\2\2\2\u00d2\u00cf\3"+
		"\2\2\2\u00d2\u00d0\3\2\2\2\u00d2\u00d1\3\2\2\2\u00d3\31\3\2\2\2\u00d4"+
		"\u00d5\5t;\2\u00d5\u00d6\7\20\2\2\u00d6\u00d7\7\65\2\2\u00d7\u00dc\5\36"+
		"\20\2\u00d8\u00d9\7;\2\2\u00d9\u00db\5\36\20\2\u00da\u00d8\3\2\2\2\u00db"+
		"\u00de\3\2\2\2\u00dc\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00df\3\2"+
		"\2\2\u00de\u00dc\3\2\2\2\u00df\u00e0\7\66\2\2\u00e0\33\3\2\2\2\u00e1\u00e3"+
		"\t\2\2\2\u00e2\u00e1\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4"+
		"\u00e5\7^\2\2\u00e5\35\3\2\2\2\u00e6\u00e9\5|?\2\u00e7\u00e8\7F\2\2\u00e8"+
		"\u00ea\5\34\17\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\37\3\2"+
		"\2\2\u00eb\u00ec\5t;\2\u00ec\u00ed\7\f\2\2\u00ed\u00f0\5|?\2\u00ee\u00ef"+
		"\7F\2\2\u00ef\u00f1\5T+\2\u00f0\u00ee\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1"+
		"\u00f2\3\2\2\2\u00f2\u00f3\7\4\2\2\u00f3!\3\2\2\2\u00f4\u00f5\5t;\2\u00f5"+
		"\u00f6\7\13\2\2\u00f6\u00fb\5$\23\2\u00f7\u00f8\7;\2\2\u00f8\u00fa\5$"+
		"\23\2\u00f9\u00f7\3\2\2\2\u00fa\u00fd\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fb"+
		"\u00fc\3\2\2\2\u00fc\u00fe\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fe\u00ff\7\4"+
		"\2\2\u00ff#\3\2\2\2\u0100\u0101\5\62\32\2\u0101%\3\2\2\2\u0102\u0103\5"+
		"t;\2\u0103\u0104\7\b\2\2\u0104\u0105\5|?\2\u0105\u0107\79\2\2\u0106\u0108"+
		"\5(\25\2\u0107\u0106\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\3\2\2\2\u0109"+
		"\u010a\7:\2\2\u010a\u010b\5*\26\2\u010b\'\3\2\2\2\u010c\u0111\5|?\2\u010d"+
		"\u010e\7;\2\2\u010e\u0110\5|?\2\u010f\u010d\3\2\2\2\u0110\u0113\3\2\2"+
		"\2\u0111\u010f\3\2\2\2\u0111\u0112\3\2\2\2\u0112)\3\2\2\2\u0113\u0111"+
		"\3\2\2\2\u0114\u0118\7\65\2\2\u0115\u0117\5,\27\2\u0116\u0115\3\2\2\2"+
		"\u0117\u011a\3\2\2\2\u0118\u0116\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011b"+
		"\3\2\2\2\u011a\u0118\3\2\2\2\u011b\u011c\7\66\2\2\u011c+\3\2\2\2\u011d"+
		"\u011e\5.\30\2\u011e\u011f\7\4\2\2\u011f\u0122\3\2\2\2\u0120\u0122\58"+
		"\35\2\u0121\u011d\3\2\2\2\u0121\u0120\3\2\2\2\u0122-\3\2\2\2\u0123\u0124"+
		"\7\13\2\2\u0124\u0129\5\60\31\2\u0125\u0126\7;\2\2\u0126\u0128\5\60\31"+
		"\2\u0127\u0125\3\2\2\2\u0128\u012b\3\2\2\2\u0129\u0127\3\2\2\2\u0129\u012a"+
		"\3\2\2\2\u012a/\3\2\2\2\u012b\u0129\3\2\2\2\u012c\u012d\5\62\32\2\u012d"+
		"\61\3\2\2\2\u012e\u0133\5|?\2\u012f\u0130\7\67\2\2\u0130\u0132\78\2\2"+
		"\u0131\u012f\3\2\2\2\u0132\u0135\3\2\2\2\u0133\u0131\3\2\2\2\u0133\u0134"+
		"\3\2\2\2\u0134\u0138\3\2\2\2\u0135\u0133\3\2\2\2\u0136\u0137\7F\2\2\u0137"+
		"\u0139\5\64\33\2\u0138\u0136\3\2\2\2\u0138\u0139\3\2\2\2\u0139\63\3\2"+
		"\2\2\u013a\u013d\5\66\34\2\u013b\u013d\5T+\2\u013c\u013a\3\2\2\2\u013c"+
		"\u013b\3\2\2\2\u013d\65\3\2\2\2\u013e\u0147\7\65\2\2\u013f\u0144\5\64"+
		"\33\2\u0140\u0141\7;\2\2\u0141\u0143\5\64\33\2\u0142\u0140\3\2\2\2\u0143"+
		"\u0146\3\2\2\2\u0144\u0142\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u0148\3\2"+
		"\2\2\u0146\u0144\3\2\2\2\u0147\u013f\3\2\2\2\u0147\u0148\3\2\2\2\u0148"+
		"\u014a\3\2\2\2\u0149\u014b\7;\2\2\u014a\u0149\3\2\2\2\u014a\u014b\3\2"+
		"\2\2\u014b\u014c\3\2\2\2\u014c\u014d\7\66\2\2\u014d\67\3\2\2\2\u014e\u018d"+
		"\5*\26\2\u014f\u0150\7\33\2\2\u0150\u0151\79\2\2\u0151\u0152\5T+\2\u0152"+
		"\u0153\7:\2\2\u0153\u0156\58\35\2\u0154\u0155\7\34\2\2\u0155\u0157\58"+
		"\35\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u018d\3\2\2\2\u0158"+
		"\u018d\5H%\2\u0159\u015a\7\36\2\2\u015a\u015b\79\2\2\u015b\u015c\5T+\2"+
		"\u015c\u015d\7:\2\2\u015d\u015e\58\35\2\u015e\u018d\3\2\2\2\u015f\u0160"+
		"\7\35\2\2\u0160\u0161\58\35\2\u0161\u0162\7\36\2\2\u0162\u0163\79\2\2"+
		"\u0163\u0164\5T+\2\u0164\u0165\7:\2\2\u0165\u0166\7\4\2\2\u0166\u018d"+
		"\3\2\2\2\u0167\u018d\5@!\2\u0168\u0169\7\"\2\2\u0169\u016a\79\2\2\u016a"+
		"\u016b\5T+\2\u016b\u016c\7:\2\2\u016c\u016d\7\65\2\2\u016d\u016e\5:\36"+
		"\2\u016e\u016f\7\66\2\2\u016f\u018d\3\2\2\2\u0170\u0172\7\t\2\2\u0171"+
		"\u0173\5T+\2\u0172\u0171\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0174\3\2\2"+
		"\2\u0174\u018d\7\4\2\2\u0175\u0176\7(\2\2\u0176\u0177\5T+\2\u0177\u0178"+
		"\7\4\2\2\u0178\u018d\3\2\2\2\u0179\u017b\7 \2\2\u017a\u017c\5d\63\2\u017b"+
		"\u017a\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u018d\7\4"+
		"\2\2\u017e\u0180\7!\2\2\u017f\u0181\5d\63\2\u0180\u017f\3\2\2\2\u0180"+
		"\u0181\3\2\2\2\u0181\u0182\3\2\2\2\u0182\u018d\7\4\2\2\u0183\u0186\5T"+
		"+\2\u0184\u0187\7\4\2\2\u0185\u0187\b\35\1\2\u0186\u0184\3\2\2\2\u0186"+
		"\u0185\3\2\2\2\u0187\u018d\3\2\2\2\u0188\u0189\7\\\2\2\u0189\u018a\7\6"+
		"\2\2\u018a\u018d\58\35\2\u018b\u018d\7\4\2\2\u018c\u014e\3\2\2\2\u018c"+
		"\u014f\3\2\2\2\u018c\u0158\3\2\2\2\u018c\u0159\3\2\2\2\u018c\u015f\3\2"+
		"\2\2\u018c\u0167\3\2\2\2\u018c\u0168\3\2\2\2\u018c\u0170\3\2\2\2\u018c"+
		"\u0175\3\2\2\2\u018c\u0179\3\2\2\2\u018c\u017e\3\2\2\2\u018c\u0183\3\2"+
		"\2\2\u018c\u0188\3\2\2\2\u018c\u018b\3\2\2\2\u018d9\3\2\2\2\u018e\u0190"+
		"\5<\37\2\u018f\u018e\3\2\2\2\u0190\u0193\3\2\2\2\u0191\u018f\3\2\2\2\u0191"+
		"\u0192\3\2\2\2\u0192;\3\2\2\2\u0193\u0191\3\2\2\2\u0194\u0198\5> \2\u0195"+
		"\u0197\5,\27\2\u0196\u0195\3\2\2\2\u0197\u019a\3\2\2\2\u0198\u0196\3\2"+
		"\2\2\u0198\u0199\3\2\2\2\u0199=\3\2\2\2\u019a\u0198\3\2\2\2\u019b\u019c"+
		"\7$\2\2\u019c\u019d\5T+\2\u019d\u019e\7\6\2\2\u019e\u01a2\3\2\2\2\u019f"+
		"\u01a0\7#\2\2\u01a0\u01a2\7\6\2\2\u01a1\u019b\3\2\2\2\u01a1\u019f\3\2"+
		"\2\2\u01a2?\3\2\2\2\u01a3\u01a4\7%\2\2\u01a4\u01ac\5*\26\2\u01a5\u01a6"+
		"\5B\"\2\u01a6\u01a7\7\'\2\2\u01a7\u01a8\5*\26\2\u01a8\u01ad\3\2\2\2\u01a9"+
		"\u01ad\5B\"\2\u01aa\u01ab\7\'\2\2\u01ab\u01ad\5*\26\2\u01ac\u01a5\3\2"+
		"\2\2\u01ac\u01a9\3\2\2\2\u01ac\u01aa\3\2\2\2\u01adA\3\2\2\2\u01ae\u01b2"+
		"\5D#\2\u01af\u01b1\5D#\2\u01b0\u01af\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2"+
		"\u01b0\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3C\3\2\2\2\u01b4\u01b2\3\2\2\2"+
		"\u01b5\u01b6\7&\2\2\u01b6\u01b7\79\2\2\u01b7\u01b8\5F$\2\u01b8\u01b9\7"+
		":\2\2\u01b9\u01ba\5*\26\2\u01baE\3\2\2\2\u01bb\u01be\5~@\2\u01bc\u01bd"+
		"\7\31\2\2\u01bd\u01bf\5z>\2\u01be\u01bc\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf"+
		"G\3\2\2\2\u01c0\u01c1\7\37\2\2\u01c1\u01c3\79\2\2\u01c2\u01c4\5J&\2\u01c3"+
		"\u01c2\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5\u01c7\7\4"+
		"\2\2\u01c6\u01c8\5T+\2\u01c7\u01c6\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01c9"+
		"\3\2\2\2\u01c9\u01cb\7\4\2\2\u01ca\u01cc\5L\'\2\u01cb\u01ca\3\2\2\2\u01cb"+
		"\u01cc\3\2\2\2\u01cc\u01cd\3\2\2\2\u01cd\u01ce\7:\2\2\u01ce\u01cf\58\35"+
		"\2\u01cfI\3\2\2\2\u01d0\u01d3\5.\30\2\u01d1\u01d3\5L\'\2\u01d2\u01d0\3"+
		"\2\2\2\u01d2\u01d1\3\2\2\2\u01d3K\3\2\2\2\u01d4\u01d9\5T+\2\u01d5\u01d6"+
		"\7;\2\2\u01d6\u01d8\5T+\2\u01d7\u01d5\3\2\2\2\u01d8\u01db\3\2\2\2\u01d9"+
		"\u01d7\3\2\2\2\u01d9\u01da\3\2\2\2\u01daM\3\2\2\2\u01db\u01d9\3\2\2\2"+
		"\u01dc\u01dd\7-\2\2\u01ddO\3\2\2\2\u01de\u01df\7\60\2\2\u01dfQ\3\2\2\2"+
		"\u01e0\u01e4\5d\63\2\u01e1\u01e4\5N(\2\u01e2\u01e4\5P)\2\u01e3\u01e0\3"+
		"\2\2\2\u01e3\u01e1\3\2\2\2\u01e3\u01e2\3\2\2\2\u01e4S\3\2\2\2\u01e5\u01e6"+
		"\b+\1\2\u01e6\u01e7\7T\2\2\u01e7\u0205\5T+\21\u01e8\u01e9\7U\2\2\u01e9"+
		"\u0205\5T+\20\u01ea\u01eb\7D\2\2\u01eb\u0205\5T+\17\u01ec\u01ed\7E\2\2"+
		"\u01ed\u0205\5T+\16\u01ee\u01ef\7R\2\2\u01ef\u0205\5T+\r\u01f0\u01f1\7"+
		"S\2\2\u01f1\u0205\5T+\f\u01f2\u01f3\79\2\2\u01f3\u01f4\5T+\2\u01f4\u01f5"+
		"\7:\2\2\u01f5\u0205\3\2\2\2\u01f6\u01fb\5\20\t\2\u01f7\u01f8\6+\2\2\u01f8"+
		"\u01fc\5V,\2\u01f9\u01fc\5X-\2\u01fa\u01fc\3\2\2\2\u01fb\u01f7\3\2\2\2"+
		"\u01fb\u01f9\3\2\2\2\u01fb\u01fa\3\2\2\2\u01fc\u0205\3\2\2\2\u01fd\u0205"+
		"\5\u0080A\2\u01fe\u0205\5x=\2\u01ff\u0205\5h\65\2\u0200\u0205\5j\66\2"+
		"\u0201\u0202\7/\2\2\u0202\u0203\7\3\2\2\u0203\u0205\7\7\2\2\u0204\u01e5"+
		"\3\2\2\2\u0204\u01e8\3\2\2\2\u0204\u01ea\3\2\2\2\u0204\u01ec\3\2\2\2\u0204"+
		"\u01ee\3\2\2\2\u0204\u01f0\3\2\2\2\u0204\u01f2\3\2\2\2\u0204\u01f6\3\2"+
		"\2\2\u0204\u01fd\3\2\2\2\u0204\u01fe\3\2\2\2\u0204\u01ff\3\2\2\2\u0204"+
		"\u0200\3\2\2\2\u0204\u0201\3\2\2\2\u0205\u0248\3\2\2\2\u0206\u0207\f\37"+
		"\2\2\u0207\u0208\7\5\2\2\u0208\u0209\5T+\2\u0209\u020a\7\6\2\2\u020a\u020b"+
		"\5T+ \u020b\u0247\3\2\2\2\u020c\u020d\f\36\2\2\u020d\u020e\t\3\2\2\u020e"+
		"\u0247\5T+\37\u020f\u0210\f\35\2\2\u0210\u0211\t\4\2\2\u0211\u0247\5T"+
		"+\36\u0212\u0213\f\34\2\2\u0213\u0214\7=\2\2\u0214\u0247\5T+\35\u0215"+
		"\u0216\f\33\2\2\u0216\u0217\7P\2\2\u0217\u0247\5T+\34\u0218\u0219\f\32"+
		"\2\2\u0219\u021a\7A\2\2\u021a\u0247\5T+\33\u021b\u021c\f\31\2\2\u021c"+
		"\u021d\t\5\2\2\u021d\u0247\5T+\32\u021e\u021f\f\26\2\2\u021f\u0220\5\\"+
		"/\2\u0220\u0221\5T+\27\u0221\u0247\3\2\2\2\u0222\u0223\f\25\2\2\u0223"+
		"\u0224\5^\60\2\u0224\u0225\5T+\26\u0225\u0247\3\2\2\2\u0226\u0227\f\24"+
		"\2\2\u0227\u0228\t\2\2\2\u0228\u0247\5T+\25\u0229\u022a\f\23\2\2\u022a"+
		"\u022b\t\6\2\2\u022b\u0247\5T+\24\u022c\u022d\f\22\2\2\u022d\u022e\5`"+
		"\61\2\u022e\u022f\5T+\23\u022f\u0247\3\2\2\2\u0230\u0231\f\13\2\2\u0231"+
		"\u0232\7F\2\2\u0232\u0247\5T+\13\u0233\u0234\f\n\2\2\u0234\u0235\5Z.\2"+
		"\u0235\u0236\5T+\n\u0236\u0247\3\2\2\2\u0237\u0238\f\"\2\2\u0238\u0247"+
		"\7D\2\2\u0239\u023a\f!\2\2\u023a\u0247\7E\2\2\u023b\u023c\f \2\2\u023c"+
		"\u023d\7\67\2\2\u023d\u023e\5T+\2\u023e\u023f\78\2\2\u023f\u0247\3\2\2"+
		"\2\u0240\u0241\f\30\2\2\u0241\u0242\7\32\2\2\u0242\u0247\5x=\2\u0243\u0244"+
		"\f\27\2\2\u0244\u0245\7\31\2\2\u0245\u0247\5z>\2\u0246\u0206\3\2\2\2\u0246"+
		"\u020c\3\2\2\2\u0246\u020f\3\2\2\2\u0246\u0212\3\2\2\2\u0246\u0215\3\2"+
		"\2\2\u0246\u0218\3\2\2\2\u0246\u021b\3\2\2\2\u0246\u021e\3\2\2\2\u0246"+
		"\u0222\3\2\2\2\u0246\u0226\3\2\2\2\u0246\u0229\3\2\2\2\u0246\u022c\3\2"+
		"\2\2\u0246\u0230\3\2\2\2\u0246\u0233\3\2\2\2\u0246\u0237\3\2\2\2\u0246"+
		"\u0239\3\2\2\2\u0246\u023b\3\2\2\2\u0246\u0240\3\2\2\2\u0246\u0243\3\2"+
		"\2\2\u0247\u024a\3\2\2\2\u0248\u0246\3\2\2\2\u0248\u0249\3\2\2\2\u0249"+
		"U\3\2\2\2\u024a\u0248\3\2\2\2\u024b\u024c\7\3\2\2\u024c\u024d\7\7\2\2"+
		"\u024dW\3\2\2\2\u024e\u024f\7\3\2\2\u024f\u0253\7\\\2\2\u0250\u0251\7"+
		"\3\2\2\u0251\u0253\7.\2\2\u0252\u024e\3\2\2\2\u0252\u0250\3\2\2\2\u0252"+
		"\u0253\3\2\2\2\u0253\u0254\3\2\2\2\u0254\u0255\5f\64\2\u0255Y\3\2\2\2"+
		"\u0256\u0268\7I\2\2\u0257\u0268\7J\2\2\u0258\u0268\7K\2\2\u0259\u0268"+
		"\7L\2\2\u025a\u0268\7M\2\2\u025b\u0268\7N\2\2\u025c\u0268\7O\2\2\u025d"+
		"\u025e\7>\2\2\u025e\u025f\7>\2\2\u025f\u0268\7F\2\2\u0260\u0261\7?\2\2"+
		"\u0261\u0262\7?\2\2\u0262\u0263\7?\2\2\u0263\u0268\7F\2\2\u0264\u0265"+
		"\7?\2\2\u0265\u0266\7?\2\2\u0266\u0268\7F\2\2\u0267\u0256\3\2\2\2\u0267"+
		"\u0257\3\2\2\2\u0267\u0258\3\2\2\2\u0267\u0259\3\2\2\2\u0267\u025a\3\2"+
		"\2\2\u0267\u025b\3\2\2\2\u0267\u025c\3\2\2\2\u0267\u025d\3\2\2\2\u0267"+
		"\u0260\3\2\2\2\u0267\u0264\3\2\2\2\u0268[\3\2\2\2\u0269\u026a\7>\2\2\u026a"+
		"\u0270\7F\2\2\u026b\u026c\7?\2\2\u026c\u0270\7F\2\2\u026d\u0270\7>\2\2"+
		"\u026e\u0270\7?\2\2\u026f\u0269\3\2\2\2\u026f\u026b\3\2\2\2\u026f\u026d"+
		"\3\2\2\2\u026f\u026e\3\2\2\2\u0270]\3\2\2\2\u0271\u0272\7>\2\2\u0272\u0279"+
		"\7>\2\2\u0273\u0274\7?\2\2\u0274\u0275\7?\2\2\u0275\u0279\7?\2\2\u0276"+
		"\u0277\7?\2\2\u0277\u0279\7?\2\2\u0278\u0271\3\2\2\2\u0278\u0273\3\2\2"+
		"\2\u0278\u0276\3\2\2\2\u0279_\3\2\2\2\u027a\u027b\t\7\2\2\u027ba\3\2\2"+
		"\2\u027c\u027d\7\3\2\2\u027d\u027e\5d\63\2\u027ec\3\2\2\2\u027f\u0280"+
		"\5~@\2\u0280e\3\2\2\2\u0281\u0282\5p9\2\u0282g\3\2\2\2\u0283\u0284\7\n"+
		"\2\2\u0284\u0285\5\20\t\2\u0285\u0287\5p9\2\u0286\u0288\5\24\13\2\u0287"+
		"\u0286\3\2\2\2\u0287\u0288\3\2\2\2\u0288i\3\2\2\2\u0289\u028a\7\n\2\2"+
		"\u028a\u028b\7\67\2\2\u028b\u028c\5T+\2\u028c\u028d\78\2\2\u028d\u029c"+
		"\3\2\2\2\u028e\u0297\7\67\2\2\u028f\u0294\5T+\2\u0290\u0291\7;\2\2\u0291"+
		"\u0293\5T+\2\u0292\u0290\3\2\2\2\u0293\u0296\3\2\2\2\u0294\u0292\3\2\2"+
		"\2\u0294\u0295\3\2\2\2\u0295\u0298\3\2\2\2\u0296\u0294\3\2\2\2\u0297\u028f"+
		"\3\2\2\2\u0297\u0298\3\2\2\2\u0298\u0299\3\2\2\2\u0299\u029c\78\2\2\u029a"+
		"\u029c\5l\67\2\u029b\u0289\3\2\2\2\u029b\u028e\3\2\2\2\u029b\u029a\3\2"+
		"\2\2\u029ck\3\2\2\2\u029d\u029e\7\n\2\2\u029e\u029f\7\65\2\2\u029f\u02ad"+
		"\7\66\2\2\u02a0\u02a9\7\65\2\2\u02a1\u02a6\5n8\2\u02a2\u02a3\7;\2\2\u02a3"+
		"\u02a5\5n8\2\u02a4\u02a2\3\2\2\2\u02a5\u02a8\3\2\2\2\u02a6\u02a4\3\2\2"+
		"\2\u02a6\u02a7\3\2\2\2\u02a7\u02aa\3\2\2\2\u02a8\u02a6\3\2\2\2\u02a9\u02a1"+
		"\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02ab\3\2\2\2\u02ab\u02ad\7\66\2\2"+
		"\u02ac\u029d\3\2\2\2\u02ac\u02a0\3\2\2\2\u02adm\3\2\2\2\u02ae\u02af\5"+
		"T+\2\u02af\u02b0\7@\2\2\u02b0\u02b1\5T+\2\u02b1o\3\2\2\2\u02b2\u02b4\7"+
		"9\2\2\u02b3\u02b5\5r:\2\u02b4\u02b3\3\2\2\2\u02b4\u02b5\3\2\2\2\u02b5"+
		"\u02b6\3\2\2\2\u02b6\u02b7\7:\2\2\u02b7q\3\2\2\2\u02b8\u02bd\5T+\2\u02b9"+
		"\u02ba\7;\2\2\u02ba\u02bc\5T+\2\u02bb\u02b9\3\2\2\2\u02bc\u02bf\3\2\2"+
		"\2\u02bd\u02bb\3\2\2\2\u02bd\u02be\3\2\2\2\u02bes\3\2\2\2\u02bf\u02bd"+
		"\3\2\2\2\u02c0\u02c2\5v<\2\u02c1\u02c0\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2"+
		"\u02c4\3\2\2\2\u02c3\u02c5\7\30\2\2\u02c4\u02c3\3\2\2\2\u02c4\u02c5\3"+
		"\2\2\2\u02c5\u02c7\3\2\2\2\u02c6\u02c8\t\b\2\2\u02c7\u02c6\3\2\2\2\u02c7"+
		"\u02c8\3\2\2\2\u02c8u\3\2\2\2\u02c9\u02ca\79\2\2\u02ca\u02cb\5x=\2\u02cb"+
		"\u02cc\7:\2\2\u02ccw\3\2\2\2\u02cd\u02ce\7\6\2\2\u02ce\u02cf\5d\63\2\u02cf"+
		"y\3\2\2\2\u02d0\u02d5\5|?\2\u02d1\u02d2\7\3\2\2\u02d2\u02d4\5|?\2\u02d3"+
		"\u02d1\3\2\2\2\u02d4\u02d7\3\2\2\2\u02d5\u02d3\3\2\2\2\u02d5\u02d6\3\2"+
		"\2\2\u02d6{\3\2\2\2\u02d7\u02d5\3\2\2\2\u02d8\u02d9\5~@\2\u02d9}\3\2\2"+
		"\2\u02da\u02db\7\\\2\2\u02db\177\3\2\2\2\u02dc\u02dd\t\t\2\2\u02dd\u0081"+
		"\3\2\2\2B\u0085\u0092\u0098\u00a8\u00b1\u00b7\u00bf\u00ca\u00d2\u00dc"+
		"\u00e2\u00e9\u00f0\u00fb\u0107\u0111\u0118\u0121\u0129\u0133\u0138\u013c"+
		"\u0144\u0147\u014a\u0156\u0172\u017b\u0180\u0186\u018c\u0191\u0198\u01a1"+
		"\u01ac\u01b2\u01be\u01c3\u01c7\u01cb\u01d2\u01d9\u01e3\u01fb\u0204\u0246"+
		"\u0248\u0252\u0267\u026f\u0278\u0287\u0294\u0297\u029b\u02a6\u02a9\u02ac"+
		"\u02b4\u02bd\u02c1\u02c4\u02c7\u02d5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}