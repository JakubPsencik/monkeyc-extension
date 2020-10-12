// Generated from src/MonkeyC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MonkeyCListener } from "./MonkeyCListener";

export class MonkeyCParser extends Parser {
	public static readonly DOT = 1;
	public static readonly SEMI = 2;
	public static readonly QUES = 3;
	public static readonly COLON = 4;
	public static readonly CLASS = 5;
	public static readonly FUNCTION = 6;
	public static readonly RETURN = 7;
	public static readonly NEW = 8;
	public static readonly VAR = 9;
	public static readonly CONST = 10;
	public static readonly MODULE = 11;
	public static readonly USING = 12;
	public static readonly AS = 13;
	public static readonly ENUM = 14;
	public static readonly EXTENDS = 15;
	public static readonly NULL = 16;
	public static readonly NATIVE = 17;
	public static readonly HIDDEN_TOKEN = 18;
	public static readonly STATIC = 19;
	public static readonly PRIVATE = 20;
	public static readonly PROTECTED = 21;
	public static readonly PUBLIC = 22;
	public static readonly INSTANCEOF = 23;
	public static readonly HAS = 24;
	public static readonly IF = 25;
	public static readonly ELSE = 26;
	public static readonly DO = 27;
	public static readonly WHILE = 28;
	public static readonly FOR = 29;
	public static readonly BREAK = 30;
	public static readonly CONTINUE = 31;
	public static readonly SWITCH = 32;
	public static readonly DEFAULT = 33;
	public static readonly CASE = 34;
	public static readonly TRY = 35;
	public static readonly CATCH = 36;
	public static readonly FINALLY = 37;
	public static readonly THROW = 38;
	public static readonly AND = 39;
	public static readonly OR = 40;
	public static readonly TRUE = 41;
	public static readonly FALSE = 42;
	public static readonly THIS = 43;
	public static readonly SELF = 44;
	public static readonly SUPER = 45;
	public static readonly VOID = 46;
	public static readonly BLING = 47;
	public static readonly MULTI_LINE_COMMENT_START = 48;
	public static readonly MULTI_LINE_COMMENT_END = 49;
	public static readonly STRING_A = 50;
	public static readonly STRING_B = 51;
	public static readonly LBRACE = 52;
	public static readonly RBRACE = 53;
	public static readonly LBRACKET = 54;
	public static readonly RBRACKET = 55;
	public static readonly LPAREN = 56;
	public static readonly RPAREN = 57;
	public static readonly COMMA = 58;
	public static readonly STAR = 59;
	public static readonly BAR = 60;
	public static readonly LT = 61;
	public static readonly GT = 62;
	public static readonly EQGT = 63;
	public static readonly AMP = 64;
	public static readonly BARBAR = 65;
	public static readonly AMPAMP = 66;
	public static readonly PLUSPLUS = 67;
	public static readonly SUBSUB = 68;
	public static readonly EQ = 69;
	public static readonly EQEQ = 70;
	public static readonly BANGEQ = 71;
	public static readonly PLUSEQ = 72;
	public static readonly SUBEQ = 73;
	public static readonly STAREQ = 74;
	public static readonly SLASHEQ = 75;
	public static readonly AMPEQ = 76;
	public static readonly CARETEQ = 77;
	public static readonly PERCENTEQ = 78;
	public static readonly CARET = 79;
	public static readonly PERCENT = 80;
	public static readonly TILDE = 81;
	public static readonly BANG = 82;
	public static readonly PLUS = 83;
	public static readonly SUB = 84;
	public static readonly SLASH = 85;
	public static readonly WHITE_SPACE = 86;
	public static readonly SINGLE_LINE_COMMENT = 87;
	public static readonly SINGLE_LINE_DOC_COMMENT = 88;
	public static readonly BLOCK_COMMENT = 89;
	public static readonly IDENTIFIER = 90;
	public static readonly LONGLITERAL = 91;
	public static readonly INTLITERAL = 92;
	public static readonly HEX_LITERAL = 93;
	public static readonly FLOATLITERAL = 94;
	public static readonly DOUBLELITERAL = 95;
	public static readonly CHARLITERAL = 96;
	public static readonly DoubleStringCharacter = 97;
	public static readonly RULE_program = 0;
	public static readonly RULE_string = 1;
	public static readonly RULE_compilationUnit = 2;
	public static readonly RULE_usingDeclaration = 3;
	public static readonly RULE_moduleDeclaration = 4;
	public static readonly RULE_moduleBody = 5;
	public static readonly RULE_moduleBodyMembers = 6;
	public static readonly RULE_moduleBodyMember = 7;
	public static readonly RULE_fullyQualifiedReferenceExpression = 8;
	public static readonly RULE_classDeclaration = 9;
	public static readonly RULE_classBody = 10;
	public static readonly RULE_classBodyMembers = 11;
	public static readonly RULE_classBodyMember = 12;
	public static readonly RULE_enumDeclaration = 13;
	public static readonly RULE_maybeSignedInteger = 14;
	public static readonly RULE_enumConstant = 15;
	public static readonly RULE_constDeclaration = 16;
	public static readonly RULE_fieldDeclarationList = 17;
	public static readonly RULE_fieldDeclaration = 18;
	public static readonly RULE_functionDeclaration = 19;
	public static readonly RULE_formalParameterDeclarations = 20;
	public static readonly RULE_block = 21;
	public static readonly RULE_blockStatement = 22;
	public static readonly RULE_variableDeclarationList = 23;
	public static readonly RULE_variableDeclaration = 24;
	public static readonly RULE_varOrFieldDeclaration = 25;
	public static readonly RULE_variableInitializer = 26;
	public static readonly RULE_arrayInitializer = 27;
	public static readonly RULE_statement = 28;
	public static readonly RULE_switchBlockStatementGroups = 29;
	public static readonly RULE_switchBlockStatementGroup = 30;
	public static readonly RULE_switchLabel = 31;
	public static readonly RULE_tryStatement = 32;
	public static readonly RULE_catches = 33;
	public static readonly RULE_catchClause = 34;
	public static readonly RULE_catchParameter = 35;
	public static readonly RULE_forStatement = 36;
	public static readonly RULE_forInit = 37;
	public static readonly RULE_expressionList = 38;
	public static readonly RULE_parExpression = 39;
	public static readonly RULE_thisExpression = 40;
	public static readonly RULE_blingExpression = 41;
	public static readonly RULE_referenceOrThisExpression = 42;
	public static readonly RULE_expression = 43;
	public static readonly RULE_assignmentOperator = 44;
	public static readonly RULE_conditionalExpression = 45;
	public static readonly RULE_conditionalOrExpression = 46;
	public static readonly RULE_conditionalAndExpression = 47;
	public static readonly RULE_inclusiveOrExpression = 48;
	public static readonly RULE_exclusiveOrExpression = 49;
	public static readonly RULE_andExpression = 50;
	public static readonly RULE_equalityExpression = 51;
	public static readonly RULE_hasExpression = 52;
	public static readonly RULE_instanceOfExpression = 53;
	public static readonly RULE_relationalExpression = 54;
	public static readonly RULE_relationalOp = 55;
	public static readonly RULE_shiftExpression = 56;
	public static readonly RULE_shiftOp = 57;
	public static readonly RULE_additiveExpression = 58;
	public static readonly RULE_multiplicativeExpression = 59;
	public static readonly RULE_bitwiseExpression = 60;
	public static readonly RULE_bitwiseOperator = 61;
	public static readonly RULE_unaryExpression = 62;
	public static readonly RULE_unaryExpressionNotPlusMinus = 63;
	public static readonly RULE_primary = 64;
	public static readonly RULE_qualifiedReferenceExpression = 65;
	public static readonly RULE_referenceExpression = 66;
	public static readonly RULE_identifierSuffix = 67;
	public static readonly RULE_selector = 68;
	public static readonly RULE_creator = 69;
	public static readonly RULE_objectCreator = 70;
	public static readonly RULE_arrayCreator = 71;
	public static readonly RULE_dictionaryCreator = 72;
	public static readonly RULE_keyValueInitializer = 73;
	public static readonly RULE_arguments = 74;
	public static readonly RULE_argumentsList = 75;
	public static readonly RULE_modifiers = 76;
	public static readonly RULE_annotation = 77;
	public static readonly RULE_symbol = 78;
	public static readonly RULE_qualifiedName = 79;
	public static readonly RULE_componentName = 80;
	public static readonly RULE_id = 81;
	public static readonly RULE_literal = 82;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "string", "compilationUnit", "usingDeclaration", "moduleDeclaration", 
		"moduleBody", "moduleBodyMembers", "moduleBodyMember", "fullyQualifiedReferenceExpression", 
		"classDeclaration", "classBody", "classBodyMembers", "classBodyMember", 
		"enumDeclaration", "maybeSignedInteger", "enumConstant", "constDeclaration", 
		"fieldDeclarationList", "fieldDeclaration", "functionDeclaration", "formalParameterDeclarations", 
		"block", "blockStatement", "variableDeclarationList", "variableDeclaration", 
		"varOrFieldDeclaration", "variableInitializer", "arrayInitializer", "statement", 
		"switchBlockStatementGroups", "switchBlockStatementGroup", "switchLabel", 
		"tryStatement", "catches", "catchClause", "catchParameter", "forStatement", 
		"forInit", "expressionList", "parExpression", "thisExpression", "blingExpression", 
		"referenceOrThisExpression", "expression", "assignmentOperator", "conditionalExpression", 
		"conditionalOrExpression", "conditionalAndExpression", "inclusiveOrExpression", 
		"exclusiveOrExpression", "andExpression", "equalityExpression", "hasExpression", 
		"instanceOfExpression", "relationalExpression", "relationalOp", "shiftExpression", 
		"shiftOp", "additiveExpression", "multiplicativeExpression", "bitwiseExpression", 
		"bitwiseOperator", "unaryExpression", "unaryExpressionNotPlusMinus", "primary", 
		"qualifiedReferenceExpression", "referenceExpression", "identifierSuffix", 
		"selector", "creator", "objectCreator", "arrayCreator", "dictionaryCreator", 
		"keyValueInitializer", "arguments", "argumentsList", "modifiers", "annotation", 
		"symbol", "qualifiedName", "componentName", "id", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "';'", "'?'", "':'", "'class'", "'function'", "'return'", 
		"'new'", "'var'", "'const'", "'module'", "'using'", "'as'", "'enum'", 
		"'extends'", "'null'", "'native'", "'hidden'", "'static'", "'private'", 
		"'protected'", "'public'", "'instanceof'", "'has'", "'if'", "'else'", 
		"'do'", "'while'", "'for'", "'break'", "'continue'", "'switch'", "'default'", 
		"'case'", "'try'", "'catch'", "'finally'", "'throw'", "'and'", "'or'", 
		"'true'", "'false'", "'this'", "'self'", "'super'", "'void'", "'$'", "'/*'", 
		"'*/'", "'\"'", "'''", "'{'", "'}'", "'['", "']'", "'('", "')'", "','", 
		"'*'", "'|'", "'<'", "'>'", "'=>'", "'&'", "'||'", "'&&'", "'++'", "'--'", 
		"'='", "'=='", "'!='", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", 
		"'%='", "'^'", "'%'", "'~'", "'!'", "'+'", "'-'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOT", "SEMI", "QUES", "COLON", "CLASS", "FUNCTION", "RETURN", 
		"NEW", "VAR", "CONST", "MODULE", "USING", "AS", "ENUM", "EXTENDS", "NULL", 
		"NATIVE", "HIDDEN_TOKEN", "STATIC", "PRIVATE", "PROTECTED", "PUBLIC", 
		"INSTANCEOF", "HAS", "IF", "ELSE", "DO", "WHILE", "FOR", "BREAK", "CONTINUE", 
		"SWITCH", "DEFAULT", "CASE", "TRY", "CATCH", "FINALLY", "THROW", "AND", 
		"OR", "TRUE", "FALSE", "THIS", "SELF", "SUPER", "VOID", "BLING", "MULTI_LINE_COMMENT_START", 
		"MULTI_LINE_COMMENT_END", "STRING_A", "STRING_B", "LBRACE", "RBRACE", 
		"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COMMA", "STAR", "BAR", "LT", 
		"GT", "EQGT", "AMP", "BARBAR", "AMPAMP", "PLUSPLUS", "SUBSUB", "EQ", "EQEQ", 
		"BANGEQ", "PLUSEQ", "SUBEQ", "STAREQ", "SLASHEQ", "AMPEQ", "CARETEQ", 
		"PERCENTEQ", "CARET", "PERCENT", "TILDE", "BANG", "PLUS", "SUB", "SLASH", 
		"WHITE_SPACE", "SINGLE_LINE_COMMENT", "SINGLE_LINE_DOC_COMMENT", "BLOCK_COMMENT", 
		"IDENTIFIER", "LONGLITERAL", "INTLITERAL", "HEX_LITERAL", "FLOATLITERAL", 
		"DOUBLELITERAL", "CHARLITERAL", "DoubleStringCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MonkeyCParser._LITERAL_NAMES, MonkeyCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MonkeyCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MonkeyC.g4"; }

	// @Override
	public get ruleNames(): string[] { return MonkeyCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MonkeyCParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MonkeyCParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MonkeyCParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.USING) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.STATIC) | (1 << MonkeyCParser.PRIVATE) | (1 << MonkeyCParser.PROTECTED) | (1 << MonkeyCParser.PUBLIC) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.THIS - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.STRING_A - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (MonkeyCParser.PLUSPLUS - 67)) | (1 << (MonkeyCParser.SUBSUB - 67)) | (1 << (MonkeyCParser.TILDE - 67)) | (1 << (MonkeyCParser.BANG - 67)) | (1 << (MonkeyCParser.PLUS - 67)) | (1 << (MonkeyCParser.SUB - 67)) | (1 << (MonkeyCParser.IDENTIFIER - 67)) | (1 << (MonkeyCParser.LONGLITERAL - 67)) | (1 << (MonkeyCParser.INTLITERAL - 67)) | (1 << (MonkeyCParser.HEX_LITERAL - 67)) | (1 << (MonkeyCParser.FLOATLITERAL - 67)) | (1 << (MonkeyCParser.DOUBLELITERAL - 67)) | (1 << (MonkeyCParser.CHARLITERAL - 67)))) !== 0)) {
				{
				{
				this.state = 166;
				this.compilationUnit();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 172;
			this.match(MonkeyCParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MonkeyCParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(MonkeyCParser.STRING_A);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.DoubleStringCharacter) {
				{
				{
				this.state = 175;
				this.match(MonkeyCParser.DoubleStringCharacter);
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
			this.match(MonkeyCParser.STRING_A);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MonkeyCParser.RULE_compilationUnit);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 183;
				this.usingDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				this.moduleDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 185;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 186;
				this.enumDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 187;
				this.constDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 188;
				this.fieldDeclarationList();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 189;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 190;
				this.blockStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingDeclaration(): UsingDeclarationContext {
		let _localctx: UsingDeclarationContext = new UsingDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MonkeyCParser.RULE_usingDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(MonkeyCParser.USING);
			this.state = 194;
			this.fullyQualifiedReferenceExpression();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.AS) {
				{
				this.state = 195;
				this.match(MonkeyCParser.AS);
				this.state = 196;
				this.componentName();
				}
			}

			this.state = 199;
			this.match(MonkeyCParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MonkeyCParser.RULE_moduleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.modifiers();
			this.state = 202;
			this.match(MonkeyCParser.MODULE);
			this.state = 203;
			this.componentName();
			this.state = 204;
			this.moduleBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MonkeyCParser.RULE_moduleBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(MonkeyCParser.LBRACE);
			this.state = 207;
			this.moduleBodyMembers();
			this.state = 208;
			this.match(MonkeyCParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBodyMembers(): ModuleBodyMembersContext {
		let _localctx: ModuleBodyMembersContext = new ModuleBodyMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MonkeyCParser.RULE_moduleBodyMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.STATIC) | (1 << MonkeyCParser.PRIVATE) | (1 << MonkeyCParser.PROTECTED) | (1 << MonkeyCParser.PUBLIC))) !== 0) || _la === MonkeyCParser.LPAREN) {
				{
				{
				this.state = 210;
				this.moduleBodyMember();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBodyMember(): ModuleBodyMemberContext {
		let _localctx: ModuleBodyMemberContext = new ModuleBodyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MonkeyCParser.RULE_moduleBodyMember);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.fieldDeclarationList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.functionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 219;
				this.classDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 220;
				this.enumDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 221;
				this.moduleDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext {
		let _localctx: FullyQualifiedReferenceExpressionContext = new FullyQualifiedReferenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MonkeyCParser.RULE_fullyQualifiedReferenceExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.referenceOrThisExpression();
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.qualifiedReferenceExpression();
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MonkeyCParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.modifiers();
			this.state = 232;
			this.match(MonkeyCParser.CLASS);
			this.state = 233;
			this.componentName();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EXTENDS) {
				{
				this.state = 234;
				this.match(MonkeyCParser.EXTENDS);
				this.state = 235;
				this.fullyQualifiedReferenceExpression();
				}
			}

			this.state = 238;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MonkeyCParser.RULE_classBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(MonkeyCParser.LBRACE);
			this.state = 241;
			this.classBodyMembers();
			this.state = 242;
			this.match(MonkeyCParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyMembers(): ClassBodyMembersContext {
		let _localctx: ClassBodyMembersContext = new ClassBodyMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MonkeyCParser.RULE_classBodyMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.STATIC) | (1 << MonkeyCParser.PRIVATE) | (1 << MonkeyCParser.PROTECTED) | (1 << MonkeyCParser.PUBLIC))) !== 0) || _la === MonkeyCParser.LPAREN) {
				{
				{
				this.state = 244;
				this.classBodyMember();
				}
				}
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyMember(): ClassBodyMemberContext {
		let _localctx: ClassBodyMemberContext = new ClassBodyMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MonkeyCParser.RULE_classBodyMember);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.fieldDeclarationList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 252;
				this.functionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 253;
				this.classDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 254;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MonkeyCParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			this.modifiers();
			this.state = 258;
			this.match(MonkeyCParser.ENUM);
			this.state = 259;
			this.match(MonkeyCParser.LBRACE);
			this.state = 260;
			this.enumConstant();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 261;
				this.match(MonkeyCParser.COMMA);
				this.state = 262;
				this.enumConstant();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 268;
			this.match(MonkeyCParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maybeSignedInteger(): MaybeSignedIntegerContext {
		let _localctx: MaybeSignedIntegerContext = new MaybeSignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MonkeyCParser.RULE_maybeSignedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.PLUS || _la === MonkeyCParser.SUB) {
				{
				this.state = 270;
				_la = this._input.LA(1);
				if (!(_la === MonkeyCParser.PLUS || _la === MonkeyCParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 273;
			this.match(MonkeyCParser.INTLITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MonkeyCParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.componentName();
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 276;
				this.match(MonkeyCParser.EQ);
				this.state = 277;
				this.maybeSignedInteger();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MonkeyCParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.modifiers();
			this.state = 281;
			this.match(MonkeyCParser.CONST);
			this.state = 282;
			this.componentName();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 283;
				this.match(MonkeyCParser.EQ);
				this.state = 284;
				this.expression();
				}
			}

			this.state = 287;
			this.match(MonkeyCParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclarationList(): FieldDeclarationListContext {
		let _localctx: FieldDeclarationListContext = new FieldDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MonkeyCParser.RULE_fieldDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.modifiers();
			this.state = 290;
			this.match(MonkeyCParser.VAR);
			this.state = 291;
			this.fieldDeclaration();
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 292;
				this.match(MonkeyCParser.COMMA);
				this.state = 293;
				this.fieldDeclaration();
				}
				}
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 299;
			this.match(MonkeyCParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MonkeyCParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.varOrFieldDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MonkeyCParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.modifiers();
			this.state = 304;
			this.match(MonkeyCParser.FUNCTION);
			this.state = 305;
			this.componentName();
			this.state = 306;
			this.match(MonkeyCParser.LPAREN);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.IDENTIFIER) {
				{
				this.state = 307;
				this.formalParameterDeclarations();
				}
			}

			this.state = 310;
			this.match(MonkeyCParser.RPAREN);
			this.state = 311;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterDeclarations(): FormalParameterDeclarationsContext {
		let _localctx: FormalParameterDeclarationsContext = new FormalParameterDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MonkeyCParser.RULE_formalParameterDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.componentName();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 314;
				this.match(MonkeyCParser.COMMA);
				this.state = 315;
				this.componentName();
				}
				}
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MonkeyCParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(MonkeyCParser.LBRACE);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.THIS - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.STRING_A - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (MonkeyCParser.PLUSPLUS - 67)) | (1 << (MonkeyCParser.SUBSUB - 67)) | (1 << (MonkeyCParser.TILDE - 67)) | (1 << (MonkeyCParser.BANG - 67)) | (1 << (MonkeyCParser.PLUS - 67)) | (1 << (MonkeyCParser.SUB - 67)) | (1 << (MonkeyCParser.IDENTIFIER - 67)) | (1 << (MonkeyCParser.LONGLITERAL - 67)) | (1 << (MonkeyCParser.INTLITERAL - 67)) | (1 << (MonkeyCParser.HEX_LITERAL - 67)) | (1 << (MonkeyCParser.FLOATLITERAL - 67)) | (1 << (MonkeyCParser.DOUBLELITERAL - 67)) | (1 << (MonkeyCParser.CHARLITERAL - 67)))) !== 0)) {
				{
				{
				this.state = 322;
				this.blockStatement();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 328;
			this.match(MonkeyCParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MonkeyCParser.RULE_blockStatement);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.variableDeclarationList();
				this.state = 331;
				this.match(MonkeyCParser.SEMI);
				}
				break;
			case MonkeyCParser.SEMI:
			case MonkeyCParser.COLON:
			case MonkeyCParser.RETURN:
			case MonkeyCParser.NEW:
			case MonkeyCParser.NULL:
			case MonkeyCParser.IF:
			case MonkeyCParser.DO:
			case MonkeyCParser.WHILE:
			case MonkeyCParser.FOR:
			case MonkeyCParser.BREAK:
			case MonkeyCParser.CONTINUE:
			case MonkeyCParser.SWITCH:
			case MonkeyCParser.TRY:
			case MonkeyCParser.THROW:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
			case MonkeyCParser.STRING_A:
			case MonkeyCParser.LBRACE:
			case MonkeyCParser.LBRACKET:
			case MonkeyCParser.LPAREN:
			case MonkeyCParser.PLUSPLUS:
			case MonkeyCParser.SUBSUB:
			case MonkeyCParser.TILDE:
			case MonkeyCParser.BANG:
			case MonkeyCParser.PLUS:
			case MonkeyCParser.SUB:
			case MonkeyCParser.IDENTIFIER:
			case MonkeyCParser.LONGLITERAL:
			case MonkeyCParser.INTLITERAL:
			case MonkeyCParser.HEX_LITERAL:
			case MonkeyCParser.FLOATLITERAL:
			case MonkeyCParser.DOUBLELITERAL:
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 333;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MonkeyCParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(MonkeyCParser.VAR);
			this.state = 337;
			this.variableDeclaration();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 338;
				this.match(MonkeyCParser.COMMA);
				this.state = 339;
				this.variableDeclaration();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MonkeyCParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.varOrFieldDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varOrFieldDeclaration(): VarOrFieldDeclarationContext {
		let _localctx: VarOrFieldDeclarationContext = new VarOrFieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MonkeyCParser.RULE_varOrFieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.componentName();
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.LBRACKET) {
				{
				{
				this.state = 348;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 349;
				this.match(MonkeyCParser.RBRACKET);
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 355;
				this.match(MonkeyCParser.EQ);
				this.state = 356;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MonkeyCParser.RULE_variableInitializer);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.arrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MonkeyCParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(MonkeyCParser.LBRACE);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
				{
				this.state = 364;
				this.variableInitializer();
				this.state = 369;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 365;
						this.match(MonkeyCParser.COMMA);
						this.state = 366;
						this.variableInitializer();
						}
						}
					}
					this.state = 371;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.COMMA) {
				{
				this.state = 374;
				this.match(MonkeyCParser.COMMA);
				}
			}

			this.state = 377;
			this.match(MonkeyCParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MonkeyCParser.RULE_statement);
		let _la: number;
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 379;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 380;
				this.match(MonkeyCParser.IF);
				this.state = 381;
				this.parExpression();
				this.state = 382;
				this.statement();
				this.state = 385;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 383;
					this.match(MonkeyCParser.ELSE);
					this.state = 384;
					this.statement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 387;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 388;
				this.match(MonkeyCParser.WHILE);
				this.state = 389;
				this.parExpression();
				this.state = 390;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 392;
				this.match(MonkeyCParser.DO);
				this.state = 393;
				this.statement();
				this.state = 394;
				this.match(MonkeyCParser.WHILE);
				this.state = 395;
				this.parExpression();
				this.state = 396;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 398;
				this.tryStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 399;
				this.match(MonkeyCParser.SWITCH);
				this.state = 400;
				this.parExpression();
				this.state = 401;
				this.match(MonkeyCParser.LBRACE);
				this.state = 402;
				this.switchBlockStatementGroups();
				this.state = 403;
				this.match(MonkeyCParser.RBRACE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 405;
				this.match(MonkeyCParser.RETURN);
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
					{
					this.state = 406;
					this.expression();
					}
				}

				this.state = 409;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 410;
				this.match(MonkeyCParser.THROW);
				this.state = 411;
				this.expression();
				this.state = 412;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 414;
				this.match(MonkeyCParser.BREAK);
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.IDENTIFIER) {
					{
					this.state = 415;
					this.referenceExpression();
					}
				}

				this.state = 418;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 419;
				this.match(MonkeyCParser.CONTINUE);
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.IDENTIFIER) {
					{
					this.state = 420;
					this.referenceExpression();
					}
				}

				this.state = 423;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 424;
				this.expression();
				this.state = 425;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 427;
				this.match(MonkeyCParser.IDENTIFIER);
				this.state = 428;
				this.match(MonkeyCParser.COLON);
				this.state = 429;
				this.statement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 430;
				this.match(MonkeyCParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroups(): SwitchBlockStatementGroupsContext {
		let _localctx: SwitchBlockStatementGroupsContext = new SwitchBlockStatementGroupsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MonkeyCParser.RULE_switchBlockStatementGroups);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.DEFAULT || _la === MonkeyCParser.CASE) {
				{
				{
				this.state = 433;
				this.switchBlockStatementGroup();
				}
				}
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MonkeyCParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.switchLabel();
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.THIS - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.STRING_A - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (MonkeyCParser.PLUSPLUS - 67)) | (1 << (MonkeyCParser.SUBSUB - 67)) | (1 << (MonkeyCParser.TILDE - 67)) | (1 << (MonkeyCParser.BANG - 67)) | (1 << (MonkeyCParser.PLUS - 67)) | (1 << (MonkeyCParser.SUB - 67)) | (1 << (MonkeyCParser.IDENTIFIER - 67)) | (1 << (MonkeyCParser.LONGLITERAL - 67)) | (1 << (MonkeyCParser.INTLITERAL - 67)) | (1 << (MonkeyCParser.HEX_LITERAL - 67)) | (1 << (MonkeyCParser.FLOATLITERAL - 67)) | (1 << (MonkeyCParser.DOUBLELITERAL - 67)) | (1 << (MonkeyCParser.CHARLITERAL - 67)))) !== 0)) {
				{
				{
				this.state = 440;
				this.blockStatement();
				}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MonkeyCParser.RULE_switchLabel);
		try {
			this.state = 452;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.match(MonkeyCParser.CASE);
				this.state = 447;
				this.expression();
				this.state = 448;
				this.match(MonkeyCParser.COLON);
				}
				break;
			case MonkeyCParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 450;
				this.match(MonkeyCParser.DEFAULT);
				this.state = 451;
				this.match(MonkeyCParser.COLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MonkeyCParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(MonkeyCParser.TRY);
			this.state = 455;
			this.block();
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.catches();
				this.state = 457;
				this.match(MonkeyCParser.FINALLY);
				this.state = 458;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 460;
				this.catches();
				}
				break;

			case 3:
				{
				this.state = 461;
				this.match(MonkeyCParser.FINALLY);
				this.state = 462;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MonkeyCParser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.catchClause();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.CATCH) {
				{
				{
				this.state = 466;
				this.catchClause();
				}
				}
				this.state = 471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MonkeyCParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(MonkeyCParser.CATCH);
			this.state = 473;
			this.match(MonkeyCParser.LPAREN);
			this.state = 474;
			this.catchParameter();
			this.state = 475;
			this.match(MonkeyCParser.RPAREN);
			this.state = 476;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchParameter(): CatchParameterContext {
		let _localctx: CatchParameterContext = new CatchParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MonkeyCParser.RULE_catchParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.id();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.INSTANCEOF) {
				{
				this.state = 479;
				this.match(MonkeyCParser.INSTANCEOF);
				this.state = 480;
				this.qualifiedName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MonkeyCParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.match(MonkeyCParser.FOR);
			this.state = 484;
			this.match(MonkeyCParser.LPAREN);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
				{
				this.state = 485;
				this.forInit();
				}
			}

			this.state = 488;
			this.match(MonkeyCParser.SEMI);
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
				{
				this.state = 489;
				this.expression();
				}
			}

			this.state = 492;
			this.match(MonkeyCParser.SEMI);
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
				{
				this.state = 493;
				this.expressionList();
				}
			}

			this.state = 496;
			this.match(MonkeyCParser.RPAREN);
			this.state = 497;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MonkeyCParser.RULE_forInit);
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 499;
				this.variableDeclarationList();
				}
				break;
			case MonkeyCParser.COLON:
			case MonkeyCParser.NEW:
			case MonkeyCParser.NULL:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
			case MonkeyCParser.STRING_A:
			case MonkeyCParser.LBRACE:
			case MonkeyCParser.LBRACKET:
			case MonkeyCParser.LPAREN:
			case MonkeyCParser.PLUSPLUS:
			case MonkeyCParser.SUBSUB:
			case MonkeyCParser.TILDE:
			case MonkeyCParser.BANG:
			case MonkeyCParser.PLUS:
			case MonkeyCParser.SUB:
			case MonkeyCParser.IDENTIFIER:
			case MonkeyCParser.LONGLITERAL:
			case MonkeyCParser.INTLITERAL:
			case MonkeyCParser.HEX_LITERAL:
			case MonkeyCParser.FLOATLITERAL:
			case MonkeyCParser.DOUBLELITERAL:
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 500;
				this.expressionList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MonkeyCParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.expression();
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 504;
				this.match(MonkeyCParser.COMMA);
				this.state = 505;
				this.expression();
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MonkeyCParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(MonkeyCParser.LPAREN);
			this.state = 512;
			this.expression();
			this.state = 513;
			this.match(MonkeyCParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MonkeyCParser.RULE_thisExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!(_la === MonkeyCParser.THIS || _la === MonkeyCParser.SELF)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blingExpression(): BlingExpressionContext {
		let _localctx: BlingExpressionContext = new BlingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MonkeyCParser.RULE_blingExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(MonkeyCParser.BLING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceOrThisExpression(): ReferenceOrThisExpressionContext {
		let _localctx: ReferenceOrThisExpressionContext = new ReferenceOrThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MonkeyCParser.RULE_referenceOrThisExpression);
		try {
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.referenceExpression();
				}
				break;
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.thisExpression();
				}
				break;
			case MonkeyCParser.BLING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 521;
				this.blingExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MonkeyCParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.conditionalExpression();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (MonkeyCParser.LT - 61)) | (1 << (MonkeyCParser.GT - 61)) | (1 << (MonkeyCParser.EQ - 61)) | (1 << (MonkeyCParser.PLUSEQ - 61)) | (1 << (MonkeyCParser.SUBEQ - 61)) | (1 << (MonkeyCParser.STAREQ - 61)) | (1 << (MonkeyCParser.SLASHEQ - 61)) | (1 << (MonkeyCParser.AMPEQ - 61)) | (1 << (MonkeyCParser.CARETEQ - 61)) | (1 << (MonkeyCParser.PERCENTEQ - 61)))) !== 0)) {
				{
				this.state = 525;
				this.assignmentOperator();
				this.state = 526;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MonkeyCParser.RULE_assignmentOperator);
		try {
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 530;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
				this.match(MonkeyCParser.PLUSEQ);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 532;
				this.match(MonkeyCParser.SUBEQ);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 533;
				this.match(MonkeyCParser.STAREQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 534;
				this.match(MonkeyCParser.SLASHEQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 535;
				this.match(MonkeyCParser.AMPEQ);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 536;
				this.match(MonkeyCParser.CARETEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 537;
				this.match(MonkeyCParser.PERCENTEQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 538;
				this.match(MonkeyCParser.LT);
				this.state = 539;
				this.match(MonkeyCParser.LT);
				this.state = 540;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 541;
				this.match(MonkeyCParser.GT);
				this.state = 542;
				this.match(MonkeyCParser.GT);
				this.state = 543;
				this.match(MonkeyCParser.GT);
				this.state = 544;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 545;
				this.match(MonkeyCParser.GT);
				this.state = 546;
				this.match(MonkeyCParser.GT);
				this.state = 547;
				this.match(MonkeyCParser.EQ);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MonkeyCParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.conditionalOrExpression();
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.QUES) {
				{
				this.state = 551;
				this.match(MonkeyCParser.QUES);
				this.state = 552;
				this.expression();
				this.state = 553;
				this.match(MonkeyCParser.COLON);
				this.state = 554;
				this.conditionalExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MonkeyCParser.RULE_conditionalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.conditionalAndExpression();
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.OR || _la === MonkeyCParser.BARBAR) {
				{
				{
				this.state = 559;
				_la = this._input.LA(1);
				if (!(_la === MonkeyCParser.OR || _la === MonkeyCParser.BARBAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 560;
				this.conditionalAndExpression();
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MonkeyCParser.RULE_conditionalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.inclusiveOrExpression();
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.AND || _la === MonkeyCParser.AMPAMP) {
				{
				{
				this.state = 567;
				_la = this._input.LA(1);
				if (!(_la === MonkeyCParser.AND || _la === MonkeyCParser.AMPAMP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 568;
				this.inclusiveOrExpression();
				}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MonkeyCParser.RULE_inclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.exclusiveOrExpression();
			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.BAR) {
				{
				{
				this.state = 575;
				this.match(MonkeyCParser.BAR);
				this.state = 576;
				this.exclusiveOrExpression();
				}
				}
				this.state = 581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, MonkeyCParser.RULE_exclusiveOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.andExpression();
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.CARET) {
				{
				{
				this.state = 583;
				this.match(MonkeyCParser.CARET);
				this.state = 584;
				this.andExpression();
				}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MonkeyCParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.equalityExpression();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.AMP) {
				{
				{
				this.state = 591;
				this.match(MonkeyCParser.AMP);
				this.state = 592;
				this.equalityExpression();
				}
				}
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, MonkeyCParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.hasExpression();
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.EQEQ || _la === MonkeyCParser.BANGEQ) {
				{
				{
				this.state = 599;
				_la = this._input.LA(1);
				if (!(_la === MonkeyCParser.EQEQ || _la === MonkeyCParser.BANGEQ)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 600;
				this.hasExpression();
				}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hasExpression(): HasExpressionContext {
		let _localctx: HasExpressionContext = new HasExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, MonkeyCParser.RULE_hasExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this.instanceOfExpression();
			this.state = 609;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.HAS) {
				{
				this.state = 607;
				this.match(MonkeyCParser.HAS);
				this.state = 608;
				this.symbol();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instanceOfExpression(): InstanceOfExpressionContext {
		let _localctx: InstanceOfExpressionContext = new InstanceOfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, MonkeyCParser.RULE_instanceOfExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.relationalExpression();
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.INSTANCEOF) {
				{
				this.state = 612;
				this.match(MonkeyCParser.INSTANCEOF);
				this.state = 613;
				this.qualifiedName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, MonkeyCParser.RULE_relationalExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.shiftExpression();
			this.state = 622;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 617;
					this.relationalOp();
					this.state = 618;
					this.shiftExpression();
					}
					}
				}
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalOp(): RelationalOpContext {
		let _localctx: RelationalOpContext = new RelationalOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, MonkeyCParser.RULE_relationalOp);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 625;
				this.match(MonkeyCParser.LT);
				this.state = 626;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.match(MonkeyCParser.GT);
				this.state = 628;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 629;
				this.match(MonkeyCParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 630;
				this.match(MonkeyCParser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftExpression(): ShiftExpressionContext {
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, MonkeyCParser.RULE_shiftExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.additiveExpression();
			this.state = 639;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 634;
					this.shiftOp();
					this.state = 635;
					this.additiveExpression();
					}
					}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shiftOp(): ShiftOpContext {
		let _localctx: ShiftOpContext = new ShiftOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, MonkeyCParser.RULE_shiftOp);
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 642;
				this.match(MonkeyCParser.LT);
				this.state = 643;
				this.match(MonkeyCParser.LT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 644;
				this.match(MonkeyCParser.GT);
				this.state = 645;
				this.match(MonkeyCParser.GT);
				this.state = 646;
				this.match(MonkeyCParser.GT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 647;
				this.match(MonkeyCParser.GT);
				this.state = 648;
				this.match(MonkeyCParser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, MonkeyCParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.multiplicativeExpression();
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.PLUS || _la === MonkeyCParser.SUB) {
				{
				{
				this.state = 652;
				_la = this._input.LA(1);
				if (!(_la === MonkeyCParser.PLUS || _la === MonkeyCParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 653;
				this.multiplicativeExpression();
				}
				}
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, MonkeyCParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.bitwiseExpression();
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (MonkeyCParser.STAR - 59)) | (1 << (MonkeyCParser.PERCENT - 59)) | (1 << (MonkeyCParser.SLASH - 59)))) !== 0)) {
				{
				{
				this.state = 660;
				_la = this._input.LA(1);
				if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (MonkeyCParser.STAR - 59)) | (1 << (MonkeyCParser.PERCENT - 59)) | (1 << (MonkeyCParser.SLASH - 59)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 661;
				this.unaryExpression();
				}
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseExpression(): BitwiseExpressionContext {
		let _localctx: BitwiseExpressionContext = new BitwiseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, MonkeyCParser.RULE_bitwiseExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this.unaryExpression();
			this.state = 673;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this.bitwiseOperator();
					this.state = 669;
					this.unaryExpression();
					}
					}
				}
				this.state = 675;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, MonkeyCParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (MonkeyCParser.BAR - 60)) | (1 << (MonkeyCParser.AMP - 60)) | (1 << (MonkeyCParser.CARET - 60)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, MonkeyCParser.RULE_unaryExpression);
		try {
			this.state = 687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 678;
				this.match(MonkeyCParser.PLUS);
				this.state = 679;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.SUB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 680;
				this.match(MonkeyCParser.SUB);
				this.state = 681;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.PLUSPLUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 682;
				this.match(MonkeyCParser.PLUSPLUS);
				this.state = 683;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.SUBSUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 684;
				this.match(MonkeyCParser.SUBSUB);
				this.state = 685;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.COLON:
			case MonkeyCParser.NEW:
			case MonkeyCParser.NULL:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
			case MonkeyCParser.STRING_A:
			case MonkeyCParser.LBRACE:
			case MonkeyCParser.LBRACKET:
			case MonkeyCParser.LPAREN:
			case MonkeyCParser.TILDE:
			case MonkeyCParser.BANG:
			case MonkeyCParser.IDENTIFIER:
			case MonkeyCParser.LONGLITERAL:
			case MonkeyCParser.INTLITERAL:
			case MonkeyCParser.HEX_LITERAL:
			case MonkeyCParser.FLOATLITERAL:
			case MonkeyCParser.DOUBLELITERAL:
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 686;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, MonkeyCParser.RULE_unaryExpressionNotPlusMinus);
		let _la: number;
		try {
			this.state = 703;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.TILDE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 689;
				this.match(MonkeyCParser.TILDE);
				this.state = 690;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.BANG:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 691;
				this.match(MonkeyCParser.BANG);
				this.state = 692;
				this.unaryExpression();
				}
				break;
			case MonkeyCParser.COLON:
			case MonkeyCParser.NEW:
			case MonkeyCParser.NULL:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
			case MonkeyCParser.STRING_A:
			case MonkeyCParser.LBRACE:
			case MonkeyCParser.LBRACKET:
			case MonkeyCParser.LPAREN:
			case MonkeyCParser.IDENTIFIER:
			case MonkeyCParser.LONGLITERAL:
			case MonkeyCParser.INTLITERAL:
			case MonkeyCParser.HEX_LITERAL:
			case MonkeyCParser.FLOATLITERAL:
			case MonkeyCParser.DOUBLELITERAL:
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 693;
				this.primary();
				this.state = 697;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MonkeyCParser.DOT || _la === MonkeyCParser.LBRACKET) {
					{
					{
					this.state = 694;
					this.selector();
					}
					}
					this.state = 699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.PLUSPLUS || _la === MonkeyCParser.SUBSUB) {
					{
					this.state = 700;
					_la = this._input.LA(1);
					if (!(_la === MonkeyCParser.PLUSPLUS || _la === MonkeyCParser.SUBSUB)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, MonkeyCParser.RULE_primary);
		try {
			this.state = 716;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 705;
				this.parExpression();
				}
				break;
			case MonkeyCParser.THIS:
			case MonkeyCParser.SELF:
			case MonkeyCParser.BLING:
			case MonkeyCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.fullyQualifiedReferenceExpression();
				this.state = 708;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 707;
					this.identifierSuffix();
					}
					break;
				}
				}
				break;
			case MonkeyCParser.NULL:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.STRING_A:
			case MonkeyCParser.LONGLITERAL:
			case MonkeyCParser.INTLITERAL:
			case MonkeyCParser.HEX_LITERAL:
			case MonkeyCParser.FLOATLITERAL:
			case MonkeyCParser.DOUBLELITERAL:
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 710;
				this.literal();
				}
				break;
			case MonkeyCParser.COLON:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 711;
				this.symbol();
				}
				break;
			case MonkeyCParser.NEW:
			case MonkeyCParser.LBRACE:
			case MonkeyCParser.LBRACKET:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 712;
				this.creator();
				}
				break;
			case MonkeyCParser.VOID:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 713;
				this.match(MonkeyCParser.VOID);
				this.state = 714;
				this.match(MonkeyCParser.DOT);
				this.state = 715;
				this.match(MonkeyCParser.CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedReferenceExpression(): QualifiedReferenceExpressionContext {
		let _localctx: QualifiedReferenceExpressionContext = new QualifiedReferenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, MonkeyCParser.RULE_qualifiedReferenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(MonkeyCParser.DOT);
			this.state = 719;
			this.referenceExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceExpression(): ReferenceExpressionContext {
		let _localctx: ReferenceExpressionContext = new ReferenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, MonkeyCParser.RULE_referenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSuffix(): IdentifierSuffixContext {
		let _localctx: IdentifierSuffixContext = new IdentifierSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, MonkeyCParser.RULE_identifierSuffix);
		try {
			let _alt: number;
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 727;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 723;
						this.match(MonkeyCParser.LBRACKET);
						this.state = 724;
						this.expression();
						this.state = 725;
						this.match(MonkeyCParser.RBRACKET);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 729;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 731;
				this.arguments();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.match(MonkeyCParser.DOT);
				this.state = 733;
				this.match(MonkeyCParser.CLASS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 734;
				this.match(MonkeyCParser.DOT);
				this.state = 735;
				this.match(MonkeyCParser.IDENTIFIER);
				this.state = 736;
				this.arguments();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 737;
				this.match(MonkeyCParser.DOT);
				this.state = 738;
				this.match(MonkeyCParser.SUPER);
				this.state = 739;
				this.arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let _localctx: SelectorContext = new SelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, MonkeyCParser.RULE_selector);
		let _la: number;
		try {
			this.state = 751;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 742;
				this.match(MonkeyCParser.DOT);
				this.state = 743;
				this.match(MonkeyCParser.IDENTIFIER);
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.LPAREN) {
					{
					this.state = 744;
					this.arguments();
					}
				}

				}
				break;
			case MonkeyCParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 748;
				this.expression();
				this.state = 749;
				this.match(MonkeyCParser.RBRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, MonkeyCParser.RULE_creator);
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 753;
				this.objectCreator();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 754;
				this.arrayCreator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectCreator(): ObjectCreatorContext {
		let _localctx: ObjectCreatorContext = new ObjectCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, MonkeyCParser.RULE_objectCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(MonkeyCParser.NEW);
			this.state = 758;
			this.fullyQualifiedReferenceExpression();
			this.state = 759;
			this.arguments();
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.LBRACE) {
				{
				this.state = 760;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreator(): ArrayCreatorContext {
		let _localctx: ArrayCreatorContext = new ArrayCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, MonkeyCParser.RULE_arrayCreator);
		let _la: number;
		try {
			this.state = 781;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.match(MonkeyCParser.NEW);
				this.state = 764;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 765;
				this.expression();
				this.state = 766;
				this.match(MonkeyCParser.RBRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 768;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
					{
					this.state = 769;
					this.expression();
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MonkeyCParser.COMMA) {
						{
						{
						this.state = 770;
						this.match(MonkeyCParser.COMMA);
						this.state = 771;
						this.expression();
						}
						}
						this.state = 776;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 779;
				this.match(MonkeyCParser.RBRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 780;
				this.dictionaryCreator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryCreator(): DictionaryCreatorContext {
		let _localctx: DictionaryCreatorContext = new DictionaryCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, MonkeyCParser.RULE_dictionaryCreator);
		let _la: number;
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 783;
				this.match(MonkeyCParser.NEW);
				this.state = 784;
				this.match(MonkeyCParser.LBRACE);
				this.state = 785;
				this.match(MonkeyCParser.RBRACE);
				}
				break;
			case MonkeyCParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 786;
				this.match(MonkeyCParser.LBRACE);
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (MonkeyCParser.IDENTIFIER - 90)) | (1 << (MonkeyCParser.LONGLITERAL - 90)) | (1 << (MonkeyCParser.INTLITERAL - 90)) | (1 << (MonkeyCParser.HEX_LITERAL - 90)) | (1 << (MonkeyCParser.FLOATLITERAL - 90)) | (1 << (MonkeyCParser.DOUBLELITERAL - 90)) | (1 << (MonkeyCParser.CHARLITERAL - 90)))) !== 0)) {
					{
					this.state = 787;
					this.keyValueInitializer();
					this.state = 792;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MonkeyCParser.COMMA) {
						{
						{
						this.state = 788;
						this.match(MonkeyCParser.COMMA);
						this.state = 789;
						this.keyValueInitializer();
						}
						}
						this.state = 794;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 797;
				this.match(MonkeyCParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyValueInitializer(): KeyValueInitializerContext {
		let _localctx: KeyValueInitializerContext = new KeyValueInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, MonkeyCParser.RULE_keyValueInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this.primary();
			this.state = 801;
			this.match(MonkeyCParser.EQGT);
			this.state = 802;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, MonkeyCParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 804;
			this.match(MonkeyCParser.LPAREN);
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.THIS - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.STRING_A - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (MonkeyCParser.TILDE - 81)) | (1 << (MonkeyCParser.BANG - 81)) | (1 << (MonkeyCParser.PLUS - 81)) | (1 << (MonkeyCParser.SUB - 81)) | (1 << (MonkeyCParser.IDENTIFIER - 81)) | (1 << (MonkeyCParser.LONGLITERAL - 81)) | (1 << (MonkeyCParser.INTLITERAL - 81)) | (1 << (MonkeyCParser.HEX_LITERAL - 81)) | (1 << (MonkeyCParser.FLOATLITERAL - 81)) | (1 << (MonkeyCParser.DOUBLELITERAL - 81)) | (1 << (MonkeyCParser.CHARLITERAL - 81)))) !== 0)) {
				{
				this.state = 805;
				this.argumentsList();
				}
			}

			this.state = 808;
			this.match(MonkeyCParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentsList(): ArgumentsListContext {
		let _localctx: ArgumentsListContext = new ArgumentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, MonkeyCParser.RULE_argumentsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.expression();
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 811;
				this.match(MonkeyCParser.COMMA);
				this.state = 812;
				this.expression();
				}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		let _localctx: ModifiersContext = new ModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, MonkeyCParser.RULE_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.LPAREN) {
				{
				this.state = 818;
				this.annotation();
				}
			}

			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.PRIVATE) {
				{
				this.state = 821;
				this.match(MonkeyCParser.PRIVATE);
				}
			}

			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.PROTECTED) {
				{
				this.state = 824;
				this.match(MonkeyCParser.PROTECTED);
				}
			}

			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.PUBLIC) {
				{
				this.state = 827;
				this.match(MonkeyCParser.PUBLIC);
				}
			}

			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.STATIC) {
				{
				this.state = 830;
				this.match(MonkeyCParser.STATIC);
				}
			}

			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.HIDDEN_TOKEN) {
				{
				this.state = 833;
				this.match(MonkeyCParser.HIDDEN_TOKEN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, MonkeyCParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(MonkeyCParser.LPAREN);
			this.state = 837;
			this.symbol();
			this.state = 838;
			this.match(MonkeyCParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, MonkeyCParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(MonkeyCParser.COLON);
			this.state = 841;
			this.referenceExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, MonkeyCParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.componentName();
			this.state = 848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.DOT) {
				{
				{
				this.state = 844;
				this.match(MonkeyCParser.DOT);
				this.state = 845;
				this.componentName();
				}
				}
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentName(): ComponentNameContext {
		let _localctx: ComponentNameContext = new ComponentNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, MonkeyCParser.RULE_componentName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, MonkeyCParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.match(MonkeyCParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, MonkeyCParser.RULE_literal);
		try {
			this.state = 865;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.INTLITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.match(MonkeyCParser.INTLITERAL);
				}
				break;
			case MonkeyCParser.LONGLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 856;
				this.match(MonkeyCParser.LONGLITERAL);
				}
				break;
			case MonkeyCParser.FLOATLITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 857;
				this.match(MonkeyCParser.FLOATLITERAL);
				}
				break;
			case MonkeyCParser.DOUBLELITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 858;
				this.match(MonkeyCParser.DOUBLELITERAL);
				}
				break;
			case MonkeyCParser.HEX_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 859;
				this.match(MonkeyCParser.HEX_LITERAL);
				}
				break;
			case MonkeyCParser.CHARLITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 860;
				this.match(MonkeyCParser.CHARLITERAL);
				}
				break;
			case MonkeyCParser.STRING_A:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 861;
				this.string();
				}
				break;
			case MonkeyCParser.TRUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 862;
				this.match(MonkeyCParser.TRUE);
				}
				break;
			case MonkeyCParser.FALSE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 863;
				this.match(MonkeyCParser.FALSE);
				}
				break;
			case MonkeyCParser.NULL:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 864;
				this.match(MonkeyCParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03c\u0366\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x07\x02\xAA\n\x02" +
		"\f\x02\x0E\x02\xAD\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\xB3\n" +
		"\x03\f\x03\x0E\x03\xB6\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xC2\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xC8\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x07\b\xD6\n" +
		"\b\f\b\x0E\b\xD9\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xE1\n\t" +
		"\x03\n\x03\n\x07\n\xE5\n\n\f\n\x0E\n\xE8\v\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\xEF\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x07\r\xF8\n" +
		"\r\f\r\x0E\r\xFB\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0102" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u010A\n" +
		"\x0F\f\x0F\x0E\x0F\u010D\v\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\u0112\n" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0119\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0120\n\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0129\n\x13\f\x13\x0E\x13" +
		"\u012C\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0137\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x07\x16\u013F\n\x16\f\x16\x0E\x16\u0142\v\x16\x03\x17\x03\x17" +
		"\x07\x17\u0146\n\x17\f\x17\x0E\x17\u0149\v\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u0151\n\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x07\x19\u0157\n\x19\f\x19\x0E\x19\u015A\v\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u0161\n\x1B\f\x1B\x0E\x1B\u0164\v\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u0168\n\x1B\x03\x1C\x03\x1C\x05\x1C\u016C\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0172\n\x1D\f\x1D\x0E\x1D\u0175\v" +
		"\x1D\x05\x1D\u0177\n\x1D\x03\x1D\x05\x1D\u017A\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0184\n\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u019A\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u01A3\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01A8" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u01B2\n\x1E\x03\x1F\x07\x1F\u01B5\n\x1F\f\x1F\x0E\x1F\u01B8\v" +
		"\x1F\x03 \x03 \x07 \u01BC\n \f \x0E \u01BF\v \x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x05!\u01C7\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u01D2\n\"\x03#\x03#\x07#\u01D6\n#\f#\x0E#\u01D9\v#\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x05%\u01E4\n%\x03&\x03&\x03&\x05&" +
		"\u01E9\n&\x03&\x03&\x05&\u01ED\n&\x03&\x03&\x05&\u01F1\n&\x03&\x03&\x03" +
		"&\x03\'\x03\'\x05\'\u01F8\n\'\x03(\x03(\x03(\x07(\u01FD\n(\f(\x0E(\u0200" +
		"\v(\x03)\x03)\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x05,\u020D" +
		"\n,\x03-\x03-\x03-\x03-\x05-\u0213\n-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0227\n" +
		".\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u022F\n/\x030\x030\x030\x070\u0234" +
		"\n0\f0\x0E0\u0237\v0\x031\x031\x031\x071\u023C\n1\f1\x0E1\u023F\v1\x03" +
		"2\x032\x032\x072\u0244\n2\f2\x0E2\u0247\v2\x033\x033\x033\x073\u024C\n" +
		"3\f3\x0E3\u024F\v3\x034\x034\x034\x074\u0254\n4\f4\x0E4\u0257\v4\x035" +
		"\x035\x035\x075\u025C\n5\f5\x0E5\u025F\v5\x036\x036\x036\x056\u0264\n" +
		"6\x037\x037\x037\x057\u0269\n7\x038\x038\x038\x038\x078\u026F\n8\f8\x0E" +
		"8\u0272\v8\x039\x039\x039\x039\x039\x039\x059\u027A\n9\x03:\x03:\x03:" +
		"\x03:\x07:\u0280\n:\f:\x0E:\u0283\v:\x03;\x03;\x03;\x03;\x03;\x03;\x03" +
		";\x05;\u028C\n;\x03<\x03<\x03<\x07<\u0291\n<\f<\x0E<\u0294\v<\x03=\x03" +
		"=\x03=\x07=\u0299\n=\f=\x0E=\u029C\v=\x03>\x03>\x03>\x03>\x07>\u02A2\n" +
		">\f>\x0E>\u02A5\v>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03" +
		"@\x05@\u02B2\n@\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u02BA\nA\fA\x0EA\u02BD" +
		"\vA\x03A\x05A\u02C0\nA\x05A\u02C2\nA\x03B\x03B\x03B\x05B\u02C7\nB\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x05B\u02CF\nB\x03C\x03C\x03C\x03D\x03D\x03" +
		"E\x03E\x03E\x03E\x06E\u02DA\nE\rE\x0EE\u02DB\x03E\x03E\x03E\x03E\x03E" +
		"\x03E\x03E\x03E\x03E\x05E\u02E7\nE\x03F\x03F\x03F\x05F\u02EC\nF\x03F\x03" +
		"F\x03F\x03F\x05F\u02F2\nF\x03G\x03G\x05G\u02F6\nG\x03H\x03H\x03H\x03H" +
		"\x05H\u02FC\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u0307" +
		"\nI\fI\x0EI\u030A\vI\x05I\u030C\nI\x03I\x03I\x05I\u0310\nI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x07J\u0319\nJ\fJ\x0EJ\u031C\vJ\x05J\u031E\nJ\x03" +
		"J\x05J\u0321\nJ\x03K\x03K\x03K\x03K\x03L\x03L\x05L\u0329\nL\x03L\x03L" +
		"\x03M\x03M\x03M\x07M\u0330\nM\fM\x0EM\u0333\vM\x03N\x05N\u0336\nN\x03" +
		"N\x05N\u0339\nN\x03N\x05N\u033C\nN\x03N\x05N\u033F\nN\x03N\x05N\u0342" +
		"\nN\x03N\x05N\u0345\nN\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03" +
		"Q\x07Q\u0351\nQ\fQ\x0EQ\u0354\vQ\x03R\x03R\x03S\x03S\x03T\x03T\x03T\x03" +
		"T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0364\nT\x03T\x02\x02\x02U\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\x02\n\x03\x02UV\x03\x02-.\x04\x02**CC\x04\x02))DD\x03\x02" +
		"HI\x05\x02==RRWW\x05\x02>>BBQQ\x03\x02EF\x02\u03A6\x02\xAB\x03\x02\x02" +
		"\x02\x04\xB0\x03\x02\x02\x02\x06\xC1\x03\x02\x02\x02\b\xC3\x03\x02\x02" +
		"\x02\n\xCB\x03\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xD7\x03\x02\x02\x02" +
		"\x10\xE0\x03\x02\x02\x02\x12\xE2\x03\x02\x02\x02\x14\xE9\x03\x02\x02\x02" +
		"\x16\xF2\x03\x02\x02\x02\x18\xF9\x03\x02\x02\x02\x1A\u0101\x03\x02\x02" +
		"\x02\x1C\u0103\x03\x02\x02\x02\x1E\u0111\x03\x02\x02\x02 \u0115\x03\x02" +
		"\x02\x02\"\u011A\x03\x02\x02\x02$\u0123\x03\x02\x02\x02&\u012F\x03\x02" +
		"\x02\x02(\u0131\x03\x02\x02\x02*\u013B\x03\x02\x02\x02,\u0143\x03\x02" +
		"\x02\x02.\u0150\x03\x02\x02\x020\u0152\x03\x02\x02\x022\u015B\x03\x02" +
		"\x02\x024\u015D\x03\x02\x02\x026\u016B\x03\x02\x02\x028\u016D\x03\x02" +
		"\x02\x02:\u01B1\x03\x02\x02\x02<\u01B6\x03\x02\x02\x02>\u01B9\x03\x02" +
		"\x02\x02@\u01C6\x03\x02\x02\x02B\u01C8\x03\x02\x02\x02D\u01D3\x03\x02" +
		"\x02\x02F\u01DA\x03\x02\x02\x02H\u01E0\x03\x02\x02\x02J\u01E5\x03\x02" +
		"\x02\x02L\u01F7\x03\x02\x02\x02N\u01F9\x03\x02\x02\x02P\u0201\x03\x02" +
		"\x02\x02R\u0205\x03\x02\x02\x02T\u0207\x03\x02\x02\x02V\u020C\x03\x02" +
		"\x02\x02X\u020E\x03\x02\x02\x02Z\u0226\x03\x02\x02\x02\\\u0228\x03\x02" +
		"\x02\x02^\u0230\x03\x02\x02\x02`\u0238\x03\x02\x02\x02b\u0240\x03\x02" +
		"\x02\x02d\u0248\x03\x02\x02\x02f\u0250\x03\x02\x02\x02h\u0258\x03\x02" +
		"\x02\x02j\u0260\x03\x02\x02\x02l\u0265\x03\x02\x02\x02n\u026A\x03\x02" +
		"\x02\x02p\u0279\x03\x02\x02\x02r\u027B\x03\x02\x02\x02t\u028B\x03\x02" +
		"\x02\x02v\u028D\x03\x02\x02\x02x\u0295\x03\x02\x02\x02z\u029D\x03\x02" +
		"\x02\x02|\u02A6\x03\x02\x02\x02~\u02B1\x03\x02\x02\x02\x80\u02C1\x03\x02" +
		"\x02\x02\x82\u02CE\x03\x02\x02\x02\x84\u02D0\x03\x02\x02\x02\x86\u02D3" +
		"\x03\x02\x02\x02\x88\u02E6\x03\x02\x02\x02\x8A\u02F1\x03\x02\x02\x02\x8C" +
		"\u02F5\x03\x02\x02\x02\x8E\u02F7\x03\x02\x02\x02\x90\u030F\x03\x02\x02" +
		"\x02\x92\u0320\x03\x02\x02\x02\x94\u0322\x03\x02\x02\x02\x96\u0326\x03" +
		"\x02\x02\x02\x98\u032C\x03\x02\x02\x02\x9A\u0335\x03\x02\x02\x02\x9C\u0346" +
		"\x03\x02\x02\x02\x9E\u034A\x03\x02\x02\x02\xA0\u034D\x03\x02\x02\x02\xA2" +
		"\u0355\x03\x02\x02\x02\xA4\u0357\x03\x02\x02\x02\xA6\u0363\x03\x02\x02" +
		"\x02\xA8\xAA\x05\x06\x04\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03\x02\x02" +
		"\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAE\x03\x02\x02" +
		"\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x07\x02\x02\x03\xAF\x03\x03\x02\x02" +
		"\x02\xB0\xB4\x074\x02\x02\xB1\xB3\x07c\x02\x02\xB2\xB1\x03\x02\x02\x02" +
		"\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02" +
		"\xB5\xB7\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x074\x02\x02" +
		"\xB8\x05\x03\x02\x02\x02\xB9\xC2\x05\b\x05\x02\xBA\xC2\x05\n\x06\x02\xBB" +
		"\xC2\x05\x14\v\x02\xBC\xC2\x05\x1C\x0F\x02\xBD\xC2\x05\"\x12\x02\xBE\xC2" +
		"\x05$\x13\x02\xBF\xC2\x05(\x15\x02\xC0\xC2\x05.\x18\x02\xC1\xB9\x03\x02" +
		"\x02\x02\xC1\xBA\x03\x02\x02\x02\xC1\xBB\x03\x02\x02\x02\xC1\xBC\x03\x02" +
		"\x02\x02\xC1\xBD\x03\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03\x02" +
		"\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\x07\x03\x02\x02\x02\xC3\xC4\x07\x0E" +
		"\x02\x02\xC4\xC7\x05\x12\n\x02\xC5\xC6\x07\x0F\x02\x02\xC6\xC8\x05\xA2" +
		"R\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xCA\x07\x04\x02\x02\xCA\t\x03\x02\x02\x02\xCB\xCC\x05\x9A" +
		"N\x02\xCC\xCD\x07\r\x02\x02\xCD\xCE\x05\xA2R\x02\xCE\xCF\x05\f\x07\x02" +
		"\xCF\v\x03\x02\x02\x02\xD0\xD1\x076\x02\x02\xD1\xD2\x05\x0E\b\x02\xD2" +
		"\xD3\x077\x02\x02\xD3\r\x03\x02\x02\x02\xD4\xD6\x05\x10\t\x02\xD5\xD4" +
		"\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\x0F\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xE1" +
		"\x05\"\x12\x02\xDB\xE1\x05$\x13\x02\xDC\xE1\x05(\x15\x02\xDD\xE1\x05\x14" +
		"\v\x02\xDE\xE1\x05\x1C\x0F\x02\xDF\xE1\x05\n\x06\x02\xE0\xDA\x03\x02\x02" +
		"\x02\xE0\xDB\x03\x02\x02\x02\xE0\xDC\x03\x02\x02\x02\xE0\xDD\x03\x02\x02" +
		"\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\x11\x03\x02\x02" +
		"\x02\xE2\xE6\x05V,\x02\xE3\xE5\x05\x84C\x02\xE4\xE3\x03\x02\x02\x02\xE5" +
		"\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\x13\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x05\x9AN\x02\xEA" +
		"\xEB\x07\x07\x02\x02\xEB\xEE\x05\xA2R\x02\xEC\xED\x07\x11\x02\x02\xED" +
		"\xEF\x05\x12\n\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF" +
		"\xF0\x03\x02\x02\x02\xF0\xF1\x05\x16\f\x02\xF1\x15\x03\x02\x02\x02\xF2" +
		"\xF3\x076\x02\x02\xF3\xF4\x05\x18\r\x02\xF4\xF5\x077\x02\x02\xF5\x17\x03" +
		"\x02\x02\x02\xF6\xF8\x05\x1A\x0E\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03" +
		"\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\x19\x03" +
		"\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\u0102\x05\"\x12\x02\xFD\u0102" +
		"\x05$\x13\x02\xFE\u0102\x05(\x15\x02\xFF\u0102\x05\x14\v\x02\u0100\u0102" +
		"\x05\x1C\x0F\x02\u0101\xFC\x03\x02\x02\x02\u0101\xFD\x03\x02\x02\x02\u0101" +
		"\xFE\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0100\x03\x02\x02" +
		"\x02\u0102\x1B\x03\x02\x02\x02\u0103\u0104\x05\x9AN\x02\u0104\u0105\x07" +
		"\x10\x02\x02\u0105\u0106\x076\x02\x02\u0106\u010B\x05 \x11\x02\u0107\u0108" +
		"\x07<\x02\x02\u0108\u010A\x05 \x11\x02\u0109\u0107\x03\x02\x02\x02\u010A" +
		"\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u010E\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E" +
		"\u010F\x077\x02\x02\u010F\x1D\x03\x02\x02\x02\u0110\u0112\t\x02\x02\x02" +
		"\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03" +
		"\x02\x02\x02\u0113\u0114\x07^\x02\x02\u0114\x1F\x03\x02\x02\x02\u0115" +
		"\u0118\x05\xA2R\x02\u0116\u0117\x07G\x02\x02\u0117\u0119\x05\x1E\x10\x02" +
		"\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119!\x03\x02" +
		"\x02\x02\u011A\u011B\x05\x9AN\x02\u011B\u011C\x07\f\x02\x02\u011C\u011F" +
		"\x05\xA2R\x02\u011D\u011E\x07G\x02\x02\u011E\u0120\x05X-\x02\u011F\u011D" +
		"\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02" +
		"\u0121\u0122\x07\x04\x02\x02\u0122#\x03\x02\x02\x02\u0123\u0124\x05\x9A" +
		"N\x02\u0124\u0125\x07\v\x02\x02\u0125\u012A\x05&\x14\x02\u0126\u0127\x07" +
		"<\x02\x02\u0127\u0129\x05&\x14\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012C" +
		"\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02" +
		"\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D\u012E\x07" +
		"\x04\x02\x02\u012E%\x03\x02\x02\x02\u012F\u0130\x054\x1B\x02\u0130\'\x03" +
		"\x02\x02\x02\u0131\u0132\x05\x9AN\x02\u0132\u0133\x07\b\x02\x02\u0133" +
		"\u0134\x05\xA2R\x02\u0134\u0136\x07:\x02\x02\u0135\u0137\x05*\x16\x02" +
		"\u0136\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03" +
		"\x02\x02\x02\u0138\u0139\x07;\x02\x02\u0139\u013A\x05,\x17\x02\u013A)" +
		"\x03\x02\x02\x02\u013B\u0140\x05\xA2R\x02\u013C\u013D\x07<\x02\x02\u013D" +
		"\u013F\x05\xA2R\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0142\x03\x02\x02" +
		"\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141+\x03" +
		"\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0147\x076\x02\x02\u0144" +
		"\u0146\x05.\x18\x02\u0145\u0144\x03\x02\x02\x02\u0146\u0149\x03\x02\x02" +
		"\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A" +
		"\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014B\x077\x02\x02" +
		"\u014B-\x03\x02\x02\x02\u014C\u014D\x050\x19\x02\u014D\u014E\x07\x04\x02" +
		"\x02\u014E\u0151\x03\x02\x02\x02\u014F\u0151\x05:\x1E\x02\u0150\u014C" +
		"\x03\x02\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151/\x03\x02\x02\x02\u0152" +
		"\u0153\x07\v\x02\x02\u0153\u0158\x052\x1A\x02\u0154\u0155\x07<\x02\x02" +
		"\u0155\u0157\x052\x1A\x02\u0156\u0154\x03\x02\x02\x02\u0157\u015A\x03" +
		"\x02\x02\x02\u0158\u0156\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
		"1\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015B\u015C\x054\x1B\x02" +
		"\u015C3\x03\x02\x02\x02\u015D\u0162\x05\xA2R\x02\u015E\u015F\x078\x02" +
		"\x02\u015F\u0161\x079\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0164" +
		"\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
		"\u0163\u0167\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0166\x07" +
		"G\x02\x02\u0166\u0168\x056\x1C\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168" +
		"\x03\x02\x02\x02\u01685\x03\x02\x02\x02\u0169\u016C\x058\x1D\x02\u016A" +
		"\u016C\x05X-\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016A\x03\x02\x02\x02" +
		"\u016C7\x03\x02\x02\x02\u016D\u0176\x076\x02\x02\u016E\u0173\x056\x1C" +
		"\x02\u016F\u0170\x07<\x02\x02\u0170\u0172\x056\x1C\x02\u0171\u016F\x03" +
		"\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173" +
		"\u0174\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0176\u016E\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"\u0179\x03\x02\x02\x02\u0178\u017A\x07<\x02\x02\u0179\u0178\x03\x02\x02" +
		"\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C" +
		"\x077\x02\x02\u017C9\x03\x02\x02\x02\u017D\u01B2\x05,\x17\x02\u017E\u017F" +
		"\x07\x1B\x02\x02\u017F\u0180\x05P)\x02\u0180\u0183\x05:\x1E\x02\u0181" +
		"\u0182\x07\x1C\x02\x02\u0182\u0184\x05:\x1E\x02\u0183\u0181\x03\x02\x02" +
		"\x02\u0183\u0184\x03\x02\x02\x02\u0184\u01B2\x03\x02\x02\x02\u0185\u01B2" +
		"\x05J&\x02\u0186\u0187\x07\x1E\x02\x02\u0187\u0188\x05P)\x02\u0188\u0189" +
		"\x05:\x1E\x02\u0189\u01B2\x03\x02\x02\x02\u018A\u018B\x07\x1D\x02\x02" +
		"\u018B\u018C\x05:\x1E\x02\u018C\u018D\x07\x1E\x02\x02\u018D\u018E\x05" +
		"P)\x02\u018E\u018F\x07\x04\x02\x02\u018F\u01B2\x03\x02\x02\x02\u0190\u01B2" +
		"\x05B\"\x02\u0191\u0192\x07\"\x02\x02\u0192\u0193\x05P)\x02\u0193\u0194" +
		"\x076\x02\x02\u0194\u0195\x05<\x1F\x02\u0195\u0196\x077\x02\x02\u0196" +
		"\u01B2\x03\x02\x02\x02\u0197\u0199\x07\t\x02\x02\u0198\u019A\x05X-\x02" +
		"\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03" +
		"\x02\x02\x02\u019B\u01B2\x07\x04\x02\x02\u019C\u019D\x07(\x02\x02\u019D" +
		"\u019E\x05X-\x02\u019E\u019F\x07\x04\x02\x02\u019F\u01B2\x03\x02\x02\x02" +
		"\u01A0\u01A2\x07 \x02\x02\u01A1\u01A3\x05\x86D\x02\u01A2\u01A1\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4" +
		"\u01B2\x07\x04\x02\x02\u01A5\u01A7\x07!\x02\x02\u01A6\u01A8\x05\x86D\x02" +
		"\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x03" +
		"\x02\x02\x02\u01A9\u01B2\x07\x04\x02\x02\u01AA\u01AB\x05X-\x02\u01AB\u01AC" +
		"\x07\x04\x02\x02\u01AC\u01B2\x03\x02\x02\x02\u01AD\u01AE\x07\\\x02\x02" +
		"\u01AE\u01AF\x07\x06\x02\x02\u01AF\u01B2\x05:\x1E\x02\u01B0\u01B2\x07" +
		"\x04\x02\x02\u01B1\u017D\x03\x02\x02\x02\u01B1\u017E\x03\x02\x02\x02\u01B1" +
		"\u0185\x03\x02\x02\x02\u01B1\u0186\x03\x02\x02\x02\u01B1\u018A\x03\x02" +
		"\x02\x02\u01B1\u0190\x03\x02\x02\x02\u01B1\u0191\x03\x02\x02\x02\u01B1" +
		"\u0197\x03\x02\x02\x02\u01B1\u019C\x03\x02\x02\x02\u01B1\u01A0\x03\x02" +
		"\x02\x02\u01B1\u01A5\x03\x02\x02\x02\u01B1\u01AA\x03\x02\x02\x02\u01B1" +
		"\u01AD\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2;\x03\x02\x02" +
		"\x02\u01B3\u01B5\x05> \x02\u01B4\u01B3\x03\x02\x02\x02\u01B5\u01B8\x03" +
		"\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"=\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BD\x05@!\x02\u01BA" +
		"\u01BC\x05.\x18\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02" +
		"\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE?\x03" +
		"\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0\u01C1\x07$\x02\x02\u01C1" +
		"\u01C2\x05X-\x02\u01C2\u01C3\x07\x06\x02\x02\u01C3\u01C7\x03\x02\x02\x02" +
		"\u01C4\u01C5\x07#\x02\x02\u01C5\u01C7\x07\x06\x02\x02\u01C6\u01C0\x03" +
		"\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7A\x03\x02\x02\x02\u01C8" +
		"\u01C9\x07%\x02\x02\u01C9\u01D1\x05,\x17\x02\u01CA\u01CB\x05D#\x02\u01CB" +
		"\u01CC\x07\'\x02\x02\u01CC\u01CD\x05,\x17\x02\u01CD\u01D2\x03\x02\x02" +
		"\x02\u01CE\u01D2\x05D#\x02\u01CF\u01D0\x07\'\x02\x02\u01D0\u01D2\x05," +
		"\x17\x02\u01D1\u01CA\x03\x02\x02\x02\u01D1\u01CE\x03\x02\x02\x02\u01D1" +
		"\u01CF\x03\x02\x02\x02\u01D2C\x03\x02\x02\x02\u01D3\u01D7\x05F$\x02\u01D4" +
		"\u01D6\x05F$\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02" +
		"\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8E\x03\x02" +
		"\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\x07&\x02\x02\u01DB\u01DC" +
		"\x07:\x02\x02\u01DC\u01DD\x05H%\x02\u01DD\u01DE\x07;\x02\x02\u01DE\u01DF" +
		"\x05,\x17\x02\u01DFG\x03\x02\x02\x02\u01E0\u01E3\x05\xA4S\x02\u01E1\u01E2" +
		"\x07\x19\x02\x02\u01E2\u01E4\x05\xA0Q\x02\u01E3\u01E1\x03\x02\x02\x02" +
		"\u01E3\u01E4\x03\x02\x02\x02\u01E4I\x03\x02\x02\x02\u01E5\u01E6\x07\x1F" +
		"\x02\x02\u01E6\u01E8\x07:\x02\x02\u01E7\u01E9\x05L\'\x02\u01E8\u01E7\x03" +
		"\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA" +
		"\u01EC\x07\x04\x02\x02\u01EB\u01ED\x05X-\x02\u01EC\u01EB\x03\x02\x02\x02" +
		"\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x07" +
		"\x04\x02\x02\u01EF\u01F1\x05N(\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1" +
		"\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F3\x07;\x02\x02" +
		"\u01F3\u01F4\x05:\x1E\x02\u01F4K\x03\x02\x02\x02\u01F5\u01F8\x050\x19" +
		"\x02\u01F6\u01F8\x05N(\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u01F8M\x03\x02\x02\x02\u01F9\u01FE\x05X-\x02\u01FA\u01FB" +
		"\x07<\x02\x02\u01FB\u01FD\x05X-\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD" +
		"\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02" +
		"\x02\x02\u01FFO\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u0202" +
		"\x07:\x02\x02\u0202\u0203\x05X-\x02\u0203\u0204\x07;\x02\x02\u0204Q\x03" +
		"\x02\x02\x02\u0205\u0206\t\x03\x02\x02\u0206S\x03\x02\x02\x02\u0207\u0208" +
		"\x071\x02\x02\u0208U\x03\x02\x02\x02\u0209\u020D\x05\x86D\x02\u020A\u020D" +
		"\x05R*\x02\u020B\u020D\x05T+\x02\u020C\u0209\x03\x02\x02\x02\u020C\u020A" +
		"\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020DW\x03\x02\x02\x02\u020E" +
		"\u0212\x05\\/\x02\u020F\u0210\x05Z.\x02\u0210\u0211\x05X-\x02\u0211\u0213" +
		"\x03\x02\x02\x02\u0212\u020F\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213Y\x03\x02\x02\x02\u0214\u0227\x07G\x02\x02\u0215\u0227\x07J\x02" +
		"\x02\u0216\u0227\x07K\x02\x02\u0217\u0227\x07L\x02\x02\u0218\u0227\x07" +
		"M\x02\x02\u0219\u0227\x07N\x02\x02\u021A\u0227\x07O\x02\x02\u021B\u0227" +
		"\x07P\x02\x02\u021C\u021D\x07?\x02\x02\u021D\u021E\x07?\x02\x02\u021E" +
		"\u0227\x07G\x02\x02\u021F\u0220\x07@\x02\x02\u0220\u0221\x07@\x02\x02" +
		"\u0221\u0222\x07@\x02\x02\u0222\u0227\x07G\x02\x02\u0223\u0224\x07@\x02" +
		"\x02\u0224\u0225\x07@\x02\x02\u0225\u0227\x07G\x02\x02\u0226\u0214\x03" +
		"\x02\x02\x02\u0226\u0215\x03\x02\x02\x02\u0226\u0216\x03\x02\x02\x02\u0226" +
		"\u0217\x03\x02\x02\x02\u0226\u0218\x03\x02\x02\x02\u0226\u0219\x03\x02" +
		"\x02\x02\u0226\u021A\x03\x02\x02\x02\u0226\u021B\x03\x02\x02\x02\u0226" +
		"\u021C\x03\x02\x02\x02\u0226\u021F\x03\x02\x02\x02\u0226\u0223\x03\x02" +
		"\x02\x02\u0227[\x03\x02\x02\x02\u0228\u022E\x05^0\x02\u0229\u022A\x07" +
		"\x05\x02\x02\u022A\u022B\x05X-\x02\u022B\u022C\x07\x06\x02\x02\u022C\u022D" +
		"\x05\\/\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0229\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F]\x03\x02\x02\x02\u0230\u0235\x05`1\x02\u0231" +
		"\u0232\t\x04\x02\x02\u0232\u0234\x05`1\x02\u0233\u0231\x03\x02\x02\x02" +
		"\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03" +
		"\x02\x02\x02\u0236_\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0238" +
		"\u023D\x05b2\x02\u0239\u023A\t\x05\x02\x02\u023A\u023C\x05b2\x02\u023B" +
		"\u0239\x03\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02" +
		"\x02\x02\u023D\u023E\x03\x02\x02\x02\u023Ea\x03\x02\x02\x02\u023F\u023D" +
		"\x03\x02\x02\x02\u0240\u0245\x05d3\x02\u0241\u0242\x07>\x02\x02\u0242" +
		"\u0244\x05d3\x02\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02" +
		"\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246c\x03\x02" +
		"\x02\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024D\x05f4\x02\u0249\u024A" +
		"\x07Q\x02\x02\u024A\u024C\x05f4\x02\u024B\u0249\x03\x02\x02\x02\u024C" +
		"\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02" +
		"\x02\x02\u024Ee\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u0250\u0255" +
		"\x05h5\x02\u0251\u0252\x07B\x02\x02\u0252\u0254\x05h5\x02\u0253\u0251" +
		"\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0253\x03\x02\x02\x02" +
		"\u0255\u0256\x03\x02\x02\x02\u0256g\x03\x02\x02\x02\u0257\u0255\x03\x02" +
		"\x02\x02\u0258\u025D\x05j6\x02\u0259\u025A\t\x06\x02\x02\u025A\u025C\x05" +
		"j6\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B" +
		"\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025Ei\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u0260\u0263\x05l7\x02\u0261\u0262\x07\x1A\x02\x02" +
		"\u0262\u0264\x05\x9EP\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03" +
		"\x02\x02\x02\u0264k\x03\x02\x02\x02\u0265\u0268\x05n8\x02\u0266\u0267" +
		"\x07\x19\x02\x02\u0267\u0269\x05\xA0Q\x02\u0268\u0266\x03\x02\x02\x02" +
		"\u0268\u0269\x03\x02\x02\x02\u0269m\x03\x02\x02\x02\u026A\u0270\x05r:" +
		"\x02\u026B\u026C\x05p9\x02\u026C\u026D\x05r:\x02\u026D\u026F\x03\x02\x02" +
		"\x02\u026E\u026B\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E" +
		"\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271o\x03\x02\x02\x02\u0272" +
		"\u0270\x03\x02\x02\x02\u0273\u0274\x07?\x02\x02\u0274\u027A\x07G\x02\x02" +
		"\u0275\u0276\x07@\x02\x02\u0276\u027A\x07G\x02\x02\u0277\u027A\x07?\x02" +
		"\x02\u0278\u027A\x07@\x02\x02\u0279\u0273\x03\x02\x02\x02\u0279\u0275" +
		"\x03\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u0278\x03\x02\x02\x02" +
		"\u027Aq\x03\x02\x02\x02\u027B\u0281\x05v<\x02\u027C\u027D\x05t;\x02\u027D" +
		"\u027E\x05v<\x02\u027E\u0280\x03\x02\x02\x02\u027F\u027C\x03\x02\x02\x02" +
		"\u0280\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03" +
		"\x02\x02\x02\u0282s\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284" +
		"\u0285\x07?\x02\x02\u0285\u028C\x07?\x02\x02\u0286\u0287\x07@\x02\x02" +
		"\u0287\u0288\x07@\x02\x02\u0288\u028C\x07@\x02\x02\u0289\u028A\x07@\x02" +
		"\x02\u028A\u028C\x07@\x02\x02\u028B\u0284\x03\x02\x02\x02\u028B\u0286" +
		"\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028Cu\x03\x02\x02\x02\u028D" +
		"\u0292\x05x=\x02\u028E\u028F\t\x02\x02\x02\u028F\u0291\x05x=\x02\u0290" +
		"\u028E\x03\x02\x02\x02\u0291\u0294\x03\x02\x02\x02\u0292\u0290\x03\x02" +
		"\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293w\x03\x02\x02\x02\u0294\u0292" +
		"\x03\x02\x02\x02\u0295\u029A\x05z>\x02\u0296\u0297\t\x07\x02\x02\u0297" +
		"\u0299\x05~@\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02" +
		"\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029By\x03\x02" +
		"\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A3\x05~@\x02\u029E\u029F" +
		"\x05|?\x02\u029F\u02A0\x05~@\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029E" +
		"\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02" +
		"\u02A3\u02A4\x03\x02\x02\x02\u02A4{\x03\x02\x02\x02\u02A5\u02A3\x03\x02" +
		"\x02\x02\u02A6\u02A7\t\b\x02\x02\u02A7}\x03\x02\x02\x02\u02A8\u02A9\x07" +
		"U\x02\x02\u02A9\u02B2\x05~@\x02\u02AA\u02AB\x07V\x02\x02\u02AB\u02B2\x05" +
		"~@\x02\u02AC\u02AD\x07E\x02\x02\u02AD\u02B2\x05~@\x02\u02AE\u02AF\x07" +
		"F\x02\x02\u02AF\u02B2\x05~@\x02\u02B0\u02B2\x05\x80A\x02\u02B1\u02A8\x03" +
		"\x02\x02\x02\u02B1\u02AA\x03\x02\x02\x02\u02B1\u02AC\x03\x02\x02\x02\u02B1" +
		"\u02AE\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2\x7F\x03\x02\x02" +
		"\x02\u02B3\u02B4\x07S\x02\x02\u02B4\u02C2\x05~@\x02\u02B5\u02B6\x07T\x02" +
		"\x02\u02B6\u02C2\x05~@\x02\u02B7\u02BB\x05\x82B\x02\u02B8\u02BA\x05\x8A" +
		"F\x02\u02B9\u02B8\x03\x02\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9" +
		"\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02" +
		"\u02BD\u02BB\x03\x02\x02\x02\u02BE\u02C0\t\t\x02\x02\u02BF\u02BE\x03\x02" +
		"\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C2\x03\x02\x02\x02\u02C1" +
		"\u02B3\x03\x02\x02\x02\u02C1\u02B5\x03\x02\x02\x02\u02C1\u02B7\x03\x02" +
		"\x02\x02\u02C2\x81\x03\x02\x02\x02\u02C3\u02CF\x05P)\x02\u02C4\u02C6\x05" +
		"\x12\n\x02\u02C5\u02C7\x05\x88E\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6" +
		"\u02C7\x03\x02\x02\x02\u02C7\u02CF\x03\x02\x02\x02\u02C8\u02CF\x05\xA6" +
		"T\x02\u02C9\u02CF\x05\x9EP\x02\u02CA\u02CF\x05\x8CG\x02\u02CB\u02CC\x07" +
		"0\x02\x02\u02CC\u02CD\x07\x03\x02\x02\u02CD\u02CF\x07\x07\x02\x02\u02CE" +
		"\u02C3\x03\x02\x02\x02\u02CE\u02C4\x03\x02\x02\x02\u02CE\u02C8\x03\x02" +
		"\x02\x02\u02CE\u02C9\x03\x02\x02\x02\u02CE\u02CA\x03\x02\x02\x02\u02CE" +
		"\u02CB\x03\x02\x02\x02\u02CF\x83\x03\x02\x02\x02\u02D0\u02D1\x07\x03\x02" +
		"\x02\u02D1\u02D2\x05\x86D\x02\u02D2\x85\x03\x02\x02\x02\u02D3\u02D4\x05" +
		"\xA4S\x02\u02D4\x87\x03\x02\x02\x02\u02D5\u02D6\x078\x02\x02\u02D6\u02D7" +
		"\x05X-\x02\u02D7\u02D8\x079\x02\x02\u02D8\u02DA\x03\x02\x02\x02\u02D9" +
		"\u02D5\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02" +
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02E7\x03\x02\x02\x02\u02DD" +
		"\u02E7\x05\x96L\x02\u02DE\u02DF\x07\x03\x02\x02\u02DF\u02E7\x07\x07\x02" +
		"\x02\u02E0\u02E1\x07\x03\x02\x02\u02E1\u02E2\x07\\\x02\x02\u02E2\u02E7" +
		"\x05\x96L\x02\u02E3\u02E4\x07\x03\x02\x02\u02E4\u02E5\x07/\x02\x02\u02E5" +
		"\u02E7\x05\x96L\x02\u02E6\u02D9\x03\x02\x02\x02\u02E6\u02DD\x03\x02\x02" +
		"\x02\u02E6\u02DE\x03\x02\x02\x02\u02E6\u02E0\x03\x02\x02\x02\u02E6\u02E3" +
		"\x03\x02\x02\x02\u02E7\x89\x03\x02\x02\x02\u02E8\u02E9\x07\x03\x02\x02" +
		"\u02E9\u02EB\x07\\\x02\x02\u02EA\u02EC\x05\x96L\x02\u02EB\u02EA\x03\x02" +
		"\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02F2\x03\x02\x02\x02\u02ED" +
		"\u02EE\x078\x02\x02\u02EE\u02EF\x05X-\x02\u02EF\u02F0\x079\x02\x02\u02F0" +
		"\u02F2\x03\x02\x02\x02\u02F1\u02E8\x03\x02\x02\x02\u02F1\u02ED\x03\x02" +
		"\x02\x02\u02F2\x8B\x03\x02\x02\x02\u02F3\u02F6\x05\x8EH\x02\u02F4\u02F6" +
		"\x05\x90I\x02\u02F5\u02F3\x03\x02\x02\x02\u02F5\u02F4\x03\x02\x02\x02" +
		"\u02F6\x8D\x03\x02\x02\x02\u02F7\u02F8\x07\n\x02\x02\u02F8\u02F9\x05\x12" +
		"\n\x02\u02F9\u02FB\x05\x96L\x02\u02FA\u02FC\x05\x16\f\x02\u02FB\u02FA" +
		"\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02\u02FC\x8F\x03\x02\x02\x02" +
		"\u02FD\u02FE\x07\n\x02\x02\u02FE\u02FF\x078\x02\x02\u02FF\u0300\x05X-" +
		"\x02\u0300\u0301\x079\x02\x02\u0301\u0310\x03\x02\x02\x02\u0302\u030B" +
		"\x078\x02\x02\u0303\u0308\x05X-\x02\u0304\u0305\x07<\x02\x02\u0305\u0307" +
		"\x05X-\x02\u0306\u0304\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308" +
		"\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030C\x03\x02" +
		"\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u0303\x03\x02\x02\x02\u030B" +
		"\u030C\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u0310\x079\x02" +
		"\x02\u030E\u0310\x05\x92J\x02\u030F\u02FD\x03\x02\x02\x02\u030F\u0302" +
		"\x03\x02\x02\x02\u030F\u030E\x03\x02\x02\x02\u0310\x91\x03\x02\x02\x02" +
		"\u0311\u0312\x07\n\x02\x02\u0312\u0313\x076\x02\x02\u0313\u0321\x077\x02" +
		"\x02\u0314\u031D\x076\x02\x02\u0315\u031A\x05\x94K\x02\u0316\u0317\x07" +
		"<\x02\x02\u0317\u0319\x05\x94K\x02\u0318\u0316\x03\x02\x02\x02\u0319\u031C" +
		"\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02" +
		"\u031B\u031E\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u0315\x03" +
		"\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F" +
		"\u0321\x077\x02\x02\u0320\u0311\x03\x02\x02\x02\u0320\u0314\x03\x02\x02" +
		"\x02\u0321\x93\x03\x02\x02\x02\u0322\u0323\x05\x82B\x02\u0323\u0324\x07" +
		"A\x02\x02\u0324\u0325\x05X-\x02\u0325\x95\x03\x02\x02\x02\u0326\u0328" +
		"\x07:\x02\x02\u0327\u0329\x05\x98M\x02\u0328\u0327\x03\x02\x02\x02\u0328" +
		"\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A\u032B\x07;\x02" +
		"\x02\u032B\x97\x03\x02\x02\x02\u032C\u0331\x05X-\x02\u032D\u032E\x07<" +
		"\x02\x02\u032E\u0330\x05X-\x02\u032F\u032D\x03\x02\x02\x02\u0330\u0333" +
		"\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02" +
		"\u0332\x99\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0336\x05" +
		"\x9CO\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336" +
		"\u0338\x03\x02\x02\x02\u0337\u0339\x07\x16\x02\x02\u0338\u0337\x03\x02" +
		"\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A" +
		"\u033C\x07\x17\x02\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02" +
		"\x02\x02\u033C\u033E\x03\x02\x02\x02\u033D\u033F\x07\x18\x02\x02\u033E" +
		"\u033D\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0341\x03\x02" +
		"\x02\x02\u0340\u0342\x07\x15\x02\x02\u0341\u0340\x03\x02\x02\x02\u0341" +
		"\u0342\x03\x02\x02\x02\u0342\u0344\x03\x02\x02\x02\u0343\u0345\x07\x14" +
		"\x02\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
		"\x9B\x03\x02\x02\x02\u0346\u0347\x07:\x02\x02\u0347\u0348\x05\x9EP\x02" +
		"\u0348\u0349\x07;\x02\x02\u0349\x9D\x03\x02\x02\x02\u034A\u034B\x07\x06" +
		"\x02\x02\u034B\u034C\x05\x86D\x02\u034C\x9F\x03\x02\x02\x02\u034D\u0352" +
		"\x05\xA2R\x02\u034E\u034F\x07\x03\x02\x02\u034F\u0351\x05\xA2R\x02\u0350" +
		"\u034E\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03\x02" +
		"\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\xA1\x03\x02\x02\x02\u0354\u0352" +
		"\x03\x02\x02\x02\u0355\u0356\x05\xA4S\x02\u0356\xA3\x03\x02\x02\x02\u0357" +
		"\u0358\x07\\\x02\x02\u0358\xA5\x03\x02\x02\x02\u0359\u0364\x07^\x02\x02" +
		"\u035A\u0364\x07]\x02\x02\u035B\u0364\x07`\x02\x02\u035C\u0364\x07a\x02" +
		"\x02\u035D\u0364\x07_\x02\x02\u035E\u0364\x07b\x02\x02\u035F\u0364\x05" +
		"\x04\x03\x02\u0360\u0364\x07+\x02\x02\u0361\u0364\x07,\x02\x02\u0362\u0364" +
		"\x07\x12\x02\x02\u0363\u0359\x03\x02\x02\x02\u0363\u035A\x03\x02\x02\x02" +
		"\u0363\u035B\x03\x02\x02\x02\u0363\u035C\x03\x02\x02\x02\u0363\u035D\x03" +
		"\x02\x02\x02\u0363\u035E\x03\x02\x02\x02\u0363\u035F\x03\x02\x02\x02\u0363" +
		"\u0360\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0362\x03\x02" +
		"\x02\x02\u0364\xA7\x03\x02\x02\x02[\xAB\xB4\xC1\xC7\xD7\xE0\xE6\xEE\xF9" +
		"\u0101\u010B\u0111\u0118\u011F\u012A\u0136\u0140\u0147\u0150\u0158\u0162" +
		"\u0167\u016B\u0173\u0176\u0179\u0183\u0199\u01A2\u01A7\u01B1\u01B6\u01BD" +
		"\u01C6\u01D1\u01D7\u01E3\u01E8\u01EC\u01F0\u01F7\u01FE\u020C\u0212\u0226" +
		"\u022E\u0235\u023D\u0245\u024D\u0255\u025D\u0263\u0268\u0270\u0279\u0281" +
		"\u028B\u0292\u029A\u02A3\u02B1\u02BB\u02BF\u02C1\u02C6\u02CE\u02DB\u02E6" +
		"\u02EB\u02F1\u02F5\u02FB\u0308\u030B\u030F\u031A\u031D\u0320\u0328\u0331" +
		"\u0335\u0338\u033B\u033E\u0341\u0344\u0352\u0363";
	public static readonly _serializedATN: string = Utils.join(
		[
			MonkeyCParser._serializedATNSegment0,
			MonkeyCParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MonkeyCParser.__ATN) {
			MonkeyCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MonkeyCParser._serializedATN));
		}

		return MonkeyCParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MonkeyCParser.EOF, 0); }
	public compilationUnit(): CompilationUnitContext[];
	public compilationUnit(i: number): CompilationUnitContext;
	public compilationUnit(i?: number): CompilationUnitContext | CompilationUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompilationUnitContext);
		} else {
			return this.getRuleContext(i, CompilationUnitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_program; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING_A(): TerminalNode[];
	public STRING_A(i: number): TerminalNode;
	public STRING_A(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.STRING_A);
		} else {
			return this.getToken(MonkeyCParser.STRING_A, i);
		}
	}
	public DoubleStringCharacter(): TerminalNode[];
	public DoubleStringCharacter(i: number): TerminalNode;
	public DoubleStringCharacter(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.DoubleStringCharacter);
		} else {
			return this.getToken(MonkeyCParser.DoubleStringCharacter, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_string; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public usingDeclaration(): UsingDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingDeclarationContext);
	}
	public moduleDeclaration(): ModuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public fieldDeclarationList(): FieldDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationListContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public blockStatement(): BlockStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class UsingDeclarationContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(MonkeyCParser.USING, 0); }
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext {
		return this.getRuleContext(0, FullyQualifiedReferenceExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(MonkeyCParser.SEMI, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.AS, 0); }
	public componentName(): ComponentNameContext | undefined {
		return this.tryGetRuleContext(0, ComponentNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_usingDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterUsingDeclaration) {
			listener.enterUsingDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitUsingDeclaration) {
			listener.exitUsingDeclaration(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public MODULE(): TerminalNode { return this.getToken(MonkeyCParser.MODULE, 0); }
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public moduleBody(): ModuleBodyContext {
		return this.getRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_moduleDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public moduleBodyMembers(): ModuleBodyMembersContext {
		return this.getRuleContext(0, ModuleBodyMembersContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
}


export class ModuleBodyMembersContext extends ParserRuleContext {
	public moduleBodyMember(): ModuleBodyMemberContext[];
	public moduleBodyMember(i: number): ModuleBodyMemberContext;
	public moduleBodyMember(i?: number): ModuleBodyMemberContext | ModuleBodyMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyMemberContext);
		} else {
			return this.getRuleContext(i, ModuleBodyMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_moduleBodyMembers; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterModuleBodyMembers) {
			listener.enterModuleBodyMembers(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitModuleBodyMembers) {
			listener.exitModuleBodyMembers(this);
		}
	}
}


export class ModuleBodyMemberContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public fieldDeclarationList(): FieldDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationListContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public moduleDeclaration(): ModuleDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_moduleBodyMember; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterModuleBodyMember) {
			listener.enterModuleBodyMember(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitModuleBodyMember) {
			listener.exitModuleBodyMember(this);
		}
	}
}


export class FullyQualifiedReferenceExpressionContext extends ParserRuleContext {
	public referenceOrThisExpression(): ReferenceOrThisExpressionContext {
		return this.getRuleContext(0, ReferenceOrThisExpressionContext);
	}
	public qualifiedReferenceExpression(): QualifiedReferenceExpressionContext[];
	public qualifiedReferenceExpression(i: number): QualifiedReferenceExpressionContext;
	public qualifiedReferenceExpression(i?: number): QualifiedReferenceExpressionContext | QualifiedReferenceExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedReferenceExpressionContext);
		} else {
			return this.getRuleContext(i, QualifiedReferenceExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_fullyQualifiedReferenceExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterFullyQualifiedReferenceExpression) {
			listener.enterFullyQualifiedReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitFullyQualifiedReferenceExpression) {
			listener.exitFullyQualifiedReferenceExpression(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public CLASS(): TerminalNode { return this.getToken(MonkeyCParser.CLASS, 0); }
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EXTENDS, 0); }
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, FullyQualifiedReferenceExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public classBodyMembers(): ClassBodyMembersContext {
		return this.getRuleContext(0, ClassBodyMembersContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_classBody; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class ClassBodyMembersContext extends ParserRuleContext {
	public classBodyMember(): ClassBodyMemberContext[];
	public classBodyMember(i: number): ClassBodyMemberContext;
	public classBodyMember(i?: number): ClassBodyMemberContext | ClassBodyMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyMemberContext);
		} else {
			return this.getRuleContext(i, ClassBodyMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_classBodyMembers; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterClassBodyMembers) {
			listener.enterClassBodyMembers(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitClassBodyMembers) {
			listener.exitClassBodyMembers(this);
		}
	}
}


export class ClassBodyMemberContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public fieldDeclarationList(): FieldDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationListContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_classBodyMember; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterClassBodyMember) {
			listener.enterClassBodyMember(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitClassBodyMember) {
			listener.exitClassBodyMember(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public ENUM(): TerminalNode { return this.getToken(MonkeyCParser.ENUM, 0); }
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class MaybeSignedIntegerContext extends ParserRuleContext {
	public INTLITERAL(): TerminalNode { return this.getToken(MonkeyCParser.INTLITERAL, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUS, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_maybeSignedInteger; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterMaybeSignedInteger) {
			listener.enterMaybeSignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitMaybeSignedInteger) {
			listener.exitMaybeSignedInteger(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
	public maybeSignedInteger(): MaybeSignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, MaybeSignedIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public CONST(): TerminalNode { return this.getToken(MonkeyCParser.CONST, 0); }
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(MonkeyCParser.SEMI, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_constDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterConstDeclaration) {
			listener.enterConstDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitConstDeclaration) {
			listener.exitConstDeclaration(this);
		}
	}
}


export class FieldDeclarationListContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public VAR(): TerminalNode { return this.getToken(MonkeyCParser.VAR, 0); }
	public fieldDeclaration(): FieldDeclarationContext[];
	public fieldDeclaration(i: number): FieldDeclarationContext;
	public fieldDeclaration(i?: number): FieldDeclarationContext | FieldDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDeclarationContext);
		} else {
			return this.getRuleContext(i, FieldDeclarationContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(MonkeyCParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_fieldDeclarationList; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterFieldDeclarationList) {
			listener.enterFieldDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitFieldDeclarationList) {
			listener.exitFieldDeclarationList(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public varOrFieldDeclaration(): VarOrFieldDeclarationContext {
		return this.getRuleContext(0, VarOrFieldDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public FUNCTION(): TerminalNode { return this.getToken(MonkeyCParser.FUNCTION, 0); }
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public formalParameterDeclarations(): FormalParameterDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class FormalParameterDeclarationsContext extends ParserRuleContext {
	public componentName(): ComponentNameContext[];
	public componentName(i: number): ComponentNameContext;
	public componentName(i?: number): ComponentNameContext | ComponentNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentNameContext);
		} else {
			return this.getRuleContext(i, ComponentNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_formalParameterDeclarations; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterFormalParameterDeclarations) {
			listener.enterFormalParameterDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitFormalParameterDeclarations) {
			listener.exitFormalParameterDeclarations(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_block; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SEMI, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(MonkeyCParser.VAR, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public varOrFieldDeclaration(): VarOrFieldDeclarationContext {
		return this.getRuleContext(0, VarOrFieldDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class VarOrFieldDeclarationContext extends ParserRuleContext {
	public componentName(): ComponentNameContext {
		return this.getRuleContext(0, ComponentNameContext);
	}
	public LBRACKET(): TerminalNode[];
	public LBRACKET(i: number): TerminalNode;
	public LBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.LBRACKET);
		} else {
			return this.getToken(MonkeyCParser.LBRACKET, i);
		}
	}
	public RBRACKET(): TerminalNode[];
	public RBRACKET(i: number): TerminalNode;
	public RBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.RBRACKET);
		} else {
			return this.getToken(MonkeyCParser.RBRACKET, i);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_varOrFieldDeclaration; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterVarOrFieldDeclaration) {
			listener.enterVarOrFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitVarOrFieldDeclaration) {
			listener.exitVarOrFieldDeclaration(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.ELSE, 0); }
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DO, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SEMI, 0); }
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SWITCH, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LBRACE, 0); }
	public switchBlockStatementGroups(): SwitchBlockStatementGroupsContext | undefined {
		return this.tryGetRuleContext(0, SwitchBlockStatementGroupsContext);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.RBRACE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public THROW(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.BREAK, 0); }
	public referenceExpression(): ReferenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, ReferenceExpressionContext);
	}
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CONTINUE, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_statement; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class SwitchBlockStatementGroupsContext extends ParserRuleContext {
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_switchBlockStatementGroups; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSwitchBlockStatementGroups) {
			listener.enterSwitchBlockStatementGroups(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSwitchBlockStatementGroups) {
			listener.exitSwitchBlockStatementGroups(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext {
		return this.getRuleContext(0, SwitchLabelContext);
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(MonkeyCParser.COLON, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(MonkeyCParser.TRY, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.FINALLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_catches; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterCatches) {
			listener.enterCatches(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitCatches) {
			listener.exitCatches(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(MonkeyCParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public catchParameter(): CatchParameterContext {
		return this.getRuleContext(0, CatchParameterContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
}


export class CatchParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.INSTANCEOF, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_catchParameter; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterCatchParameter) {
			listener.enterCatchParameter(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitCatchParameter) {
			listener.exitCatchParameter(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(MonkeyCParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.SEMI);
		} else {
			return this.getToken(MonkeyCParser.SEMI, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_forInit; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
}


export class ThisExpressionContext extends ParserRuleContext {
	public THIS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.THIS, 0); }
	public SELF(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SELF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_thisExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
}


export class BlingExpressionContext extends ParserRuleContext {
	public BLING(): TerminalNode { return this.getToken(MonkeyCParser.BLING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_blingExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBlingExpression) {
			listener.enterBlingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBlingExpression) {
			listener.exitBlingExpression(this);
		}
	}
}


export class ReferenceOrThisExpressionContext extends ParserRuleContext {
	public referenceExpression(): ReferenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, ReferenceExpressionContext);
	}
	public thisExpression(): ThisExpressionContext | undefined {
		return this.tryGetRuleContext(0, ThisExpressionContext);
	}
	public blingExpression(): BlingExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlingExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_referenceOrThisExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterReferenceOrThisExpression) {
			listener.enterReferenceOrThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitReferenceOrThisExpression) {
			listener.exitReferenceOrThisExpression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_expression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
	public PLUSEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUSEQ, 0); }
	public SUBEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUBEQ, 0); }
	public STAREQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.STAREQ, 0); }
	public SLASHEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SLASHEQ, 0); }
	public AMPEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.AMPEQ, 0); }
	public CARETEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CARETEQ, 0); }
	public PERCENTEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PERCENTEQ, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.LT);
		} else {
			return this.getToken(MonkeyCParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.GT);
		} else {
			return this.getToken(MonkeyCParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public QUES(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.QUES, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.COLON, 0); }
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext[];
	public conditionalAndExpression(i: number): ConditionalAndExpressionContext;
	public conditionalAndExpression(i?: number): ConditionalAndExpressionContext | ConditionalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalAndExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalAndExpressionContext);
		}
	}
	public BARBAR(): TerminalNode[];
	public BARBAR(i: number): TerminalNode;
	public BARBAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.BARBAR);
		} else {
			return this.getToken(MonkeyCParser.BARBAR, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.OR);
		} else {
			return this.getToken(MonkeyCParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_conditionalOrExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterConditionalOrExpression) {
			listener.enterConditionalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitConditionalOrExpression) {
			listener.exitConditionalOrExpression(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext[];
	public inclusiveOrExpression(i: number): InclusiveOrExpressionContext;
	public inclusiveOrExpression(i?: number): InclusiveOrExpressionContext | InclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, InclusiveOrExpressionContext);
		}
	}
	public AMPAMP(): TerminalNode[];
	public AMPAMP(i: number): TerminalNode;
	public AMPAMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.AMPAMP);
		} else {
			return this.getToken(MonkeyCParser.AMPAMP, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.AND);
		} else {
			return this.getToken(MonkeyCParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_conditionalAndExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterConditionalAndExpression) {
			listener.enterConditionalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitConditionalAndExpression) {
			listener.exitConditionalAndExpression(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext[];
	public exclusiveOrExpression(i: number): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(i?: number): ExclusiveOrExpressionContext | ExclusiveOrExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExclusiveOrExpressionContext);
		} else {
			return this.getRuleContext(i, ExclusiveOrExpressionContext);
		}
	}
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.BAR);
		} else {
			return this.getToken(MonkeyCParser.BAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_inclusiveOrExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext[];
	public andExpression(i: number): AndExpressionContext;
	public andExpression(i?: number): AndExpressionContext | AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndExpressionContext);
		} else {
			return this.getRuleContext(i, AndExpressionContext);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.CARET);
		} else {
			return this.getToken(MonkeyCParser.CARET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_exclusiveOrExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.AMP);
		} else {
			return this.getToken(MonkeyCParser.AMP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_andExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public hasExpression(): HasExpressionContext[];
	public hasExpression(i: number): HasExpressionContext;
	public hasExpression(i?: number): HasExpressionContext | HasExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HasExpressionContext);
		} else {
			return this.getRuleContext(i, HasExpressionContext);
		}
	}
	public EQEQ(): TerminalNode[];
	public EQEQ(i: number): TerminalNode;
	public EQEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.EQEQ);
		} else {
			return this.getToken(MonkeyCParser.EQEQ, i);
		}
	}
	public BANGEQ(): TerminalNode[];
	public BANGEQ(i: number): TerminalNode;
	public BANGEQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.BANGEQ);
		} else {
			return this.getToken(MonkeyCParser.BANGEQ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
}


export class HasExpressionContext extends ParserRuleContext {
	public instanceOfExpression(): InstanceOfExpressionContext {
		return this.getRuleContext(0, InstanceOfExpressionContext);
	}
	public HAS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.HAS, 0); }
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_hasExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterHasExpression) {
			listener.enterHasExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitHasExpression) {
			listener.exitHasExpression(this);
		}
	}
}


export class InstanceOfExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.INSTANCEOF, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_instanceOfExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterInstanceOfExpression) {
			listener.enterInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitInstanceOfExpression) {
			listener.exitInstanceOfExpression(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext[];
	public shiftExpression(i: number): ShiftExpressionContext;
	public shiftExpression(i?: number): ShiftExpressionContext | ShiftExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftExpressionContext);
		} else {
			return this.getRuleContext(i, ShiftExpressionContext);
		}
	}
	public relationalOp(): RelationalOpContext[];
	public relationalOp(i: number): RelationalOpContext;
	public relationalOp(i?: number): RelationalOpContext | RelationalOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalOpContext);
		} else {
			return this.getRuleContext(i, RelationalOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}


export class RelationalOpContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_relationalOp; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterRelationalOp) {
			listener.enterRelationalOp(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitRelationalOp) {
			listener.exitRelationalOp(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
		}
	}
	public shiftOp(): ShiftOpContext[];
	public shiftOp(i: number): ShiftOpContext;
	public shiftOp(i?: number): ShiftOpContext | ShiftOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ShiftOpContext);
		} else {
			return this.getRuleContext(i, ShiftOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_shiftExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
}


export class ShiftOpContext extends ParserRuleContext {
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.LT);
		} else {
			return this.getToken(MonkeyCParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.GT);
		} else {
			return this.getToken(MonkeyCParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_shiftOp; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterShiftOp) {
			listener.enterShiftOp(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitShiftOp) {
			listener.exitShiftOp(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.PLUS);
		} else {
			return this.getToken(MonkeyCParser.PLUS, i);
		}
	}
	public SUB(): TerminalNode[];
	public SUB(i: number): TerminalNode;
	public SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.SUB);
		} else {
			return this.getToken(MonkeyCParser.SUB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public bitwiseExpression(): BitwiseExpressionContext {
		return this.getRuleContext(0, BitwiseExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.STAR);
		} else {
			return this.getToken(MonkeyCParser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.SLASH);
		} else {
			return this.getToken(MonkeyCParser.SLASH, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.PERCENT);
		} else {
			return this.getToken(MonkeyCParser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
}


export class BitwiseExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext[];
	public unaryExpression(i: number): UnaryExpressionContext;
	public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnaryExpressionContext);
		} else {
			return this.getRuleContext(i, UnaryExpressionContext);
		}
	}
	public bitwiseOperator(): BitwiseOperatorContext[];
	public bitwiseOperator(i: number): BitwiseOperatorContext;
	public bitwiseOperator(i?: number): BitwiseOperatorContext | BitwiseOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOperatorContext);
		} else {
			return this.getRuleContext(i, BitwiseOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_bitwiseExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitwiseExpression) {
			listener.enterBitwiseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitwiseExpression) {
			listener.exitBitwiseExpression(this);
		}
	}
}


export class BitwiseOperatorContext extends ParserRuleContext {
	public AMP(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.AMP, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CARET, 0); }
	public BAR(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.BAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_bitwiseOperator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitwiseOperator) {
			listener.enterBitwiseOperator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitwiseOperator) {
			listener.exitBitwiseOperator(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUS, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUB, 0); }
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUSPLUS, 0); }
	public SUBSUB(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUBSUB, 0); }
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.TILDE, 0); }
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.BANG, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public selector(): SelectorContext[];
	public selector(i: number): SelectorContext;
	public selector(i?: number): SelectorContext | SelectorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectorContext);
		} else {
			return this.getRuleContext(i, SelectorContext);
		}
	}
	public PLUSPLUS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUSPLUS, 0); }
	public SUBSUB(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUBSUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_unaryExpressionNotPlusMinus; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterUnaryExpressionNotPlusMinus) {
			listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitUnaryExpressionNotPlusMinus) {
			listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, FullyQualifiedReferenceExpressionContext);
	}
	public identifierSuffix(): IdentifierSuffixContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSuffixContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.VOID, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_primary; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class QualifiedReferenceExpressionContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(MonkeyCParser.DOT, 0); }
	public referenceExpression(): ReferenceExpressionContext {
		return this.getRuleContext(0, ReferenceExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_qualifiedReferenceExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterQualifiedReferenceExpression) {
			listener.enterQualifiedReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitQualifiedReferenceExpression) {
			listener.exitQualifiedReferenceExpression(this);
		}
	}
}


export class ReferenceExpressionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_referenceExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterReferenceExpression) {
			listener.enterReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitReferenceExpression) {
			listener.exitReferenceExpression(this);
		}
	}
}


export class IdentifierSuffixContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode[];
	public LBRACKET(i: number): TerminalNode;
	public LBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.LBRACKET);
		} else {
			return this.getToken(MonkeyCParser.LBRACKET, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACKET(): TerminalNode[];
	public RBRACKET(i: number): TerminalNode;
	public RBRACKET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.RBRACKET);
		} else {
			return this.getToken(MonkeyCParser.RBRACKET, i);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CLASS, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.IDENTIFIER, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_identifierSuffix; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterIdentifierSuffix) {
			listener.enterIdentifierSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitIdentifierSuffix) {
			listener.exitIdentifierSuffix(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LBRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_selector; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSelector) {
			listener.enterSelector(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSelector) {
			listener.exitSelector(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public objectCreator(): ObjectCreatorContext | undefined {
		return this.tryGetRuleContext(0, ObjectCreatorContext);
	}
	public arrayCreator(): ArrayCreatorContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_creator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
}


export class ObjectCreatorContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(MonkeyCParser.NEW, 0); }
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext {
		return this.getRuleContext(0, FullyQualifiedReferenceExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_objectCreator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterObjectCreator) {
			listener.enterObjectCreator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitObjectCreator) {
			listener.exitObjectCreator(this);
		}
	}
}


export class ArrayCreatorContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.NEW, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LBRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.RBRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	public dictionaryCreator(): DictionaryCreatorContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCreatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_arrayCreator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterArrayCreator) {
			listener.enterArrayCreator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitArrayCreator) {
			listener.exitArrayCreator(this);
		}
	}
}


export class DictionaryCreatorContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.NEW, 0); }
	public LBRACE(): TerminalNode { return this.getToken(MonkeyCParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(MonkeyCParser.RBRACE, 0); }
	public keyValueInitializer(): KeyValueInitializerContext[];
	public keyValueInitializer(i: number): KeyValueInitializerContext;
	public keyValueInitializer(i?: number): KeyValueInitializerContext | KeyValueInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValueInitializerContext);
		} else {
			return this.getRuleContext(i, KeyValueInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_dictionaryCreator; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterDictionaryCreator) {
			listener.enterDictionaryCreator(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitDictionaryCreator) {
			listener.exitDictionaryCreator(this);
		}
	}
}


export class KeyValueInitializerContext extends ParserRuleContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	public EQGT(): TerminalNode { return this.getToken(MonkeyCParser.EQGT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_keyValueInitializer; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterKeyValueInitializer) {
			listener.enterKeyValueInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitKeyValueInitializer) {
			listener.exitKeyValueInitializer(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	public argumentsList(): ArgumentsListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_arguments; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class ArgumentsListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.COMMA);
		} else {
			return this.getToken(MonkeyCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_argumentsList; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterArgumentsList) {
			listener.enterArgumentsList(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitArgumentsList) {
			listener.exitArgumentsList(this);
		}
	}
}


export class ModifiersContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PUBLIC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.STATIC, 0); }
	public HIDDEN_TOKEN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.HIDDEN_TOKEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_annotation; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(MonkeyCParser.COLON, 0); }
	public referenceExpression(): ReferenceExpressionContext {
		return this.getRuleContext(0, ReferenceExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_symbol; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public componentName(): ComponentNameContext[];
	public componentName(i: number): ComponentNameContext;
	public componentName(i?: number): ComponentNameContext | ComponentNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentNameContext);
		} else {
			return this.getRuleContext(i, ComponentNameContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MonkeyCParser.DOT);
		} else {
			return this.getToken(MonkeyCParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class ComponentNameContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_componentName; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterComponentName) {
			listener.enterComponentName(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitComponentName) {
			listener.exitComponentName(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MonkeyCParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_id; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public INTLITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.INTLITERAL, 0); }
	public LONGLITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LONGLITERAL, 0); }
	public FLOATLITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.FLOATLITERAL, 0); }
	public DOUBLELITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DOUBLELITERAL, 0); }
	public HEX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.HEX_LITERAL, 0); }
	public CHARLITERAL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.CHARLITERAL, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.FALSE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_literal; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


