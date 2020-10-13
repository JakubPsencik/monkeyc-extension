// Generated from src/MonkeyC.g4 by ANTLR 4.7.3-SNAPSHOT

import { MonkeyCBaseParser } from "../MonkeyCBaseParser";

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

export class MonkeyCParser extends MonkeyCBaseParser {
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
	public static readonly PUBLIC_TOKEN = 19;
	public static readonly PRIVATE_TOKEN = 20;
	public static readonly PROTECTED_TOKEN = 21;
	public static readonly STATIC = 22;
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
	public static readonly SELF = 43;
	public static readonly SUPER = 44;
	public static readonly VOID = 45;
	public static readonly BLING = 46;
	public static readonly MULTI_LINE_COMMENT_START = 47;
	public static readonly MULTI_LINE_COMMENT_END = 48;
	public static readonly STRING_A = 49;
	public static readonly STRING_B = 50;
	public static readonly LBRACE = 51;
	public static readonly RBRACE = 52;
	public static readonly LBRACKET = 53;
	public static readonly RBRACKET = 54;
	public static readonly LPAREN = 55;
	public static readonly RPAREN = 56;
	public static readonly COMMA = 57;
	public static readonly STAR = 58;
	public static readonly BAR = 59;
	public static readonly LT = 60;
	public static readonly GT = 61;
	public static readonly EQGT = 62;
	public static readonly AMP = 63;
	public static readonly BARBAR = 64;
	public static readonly AMPAMP = 65;
	public static readonly PLUSPLUS = 66;
	public static readonly SUBSUB = 67;
	public static readonly EQ = 68;
	public static readonly EQEQ = 69;
	public static readonly BANGEQ = 70;
	public static readonly PLUSEQ = 71;
	public static readonly SUBEQ = 72;
	public static readonly STAREQ = 73;
	public static readonly SLASHEQ = 74;
	public static readonly AMPEQ = 75;
	public static readonly CARETEQ = 76;
	public static readonly PERCENTEQ = 77;
	public static readonly CARET = 78;
	public static readonly PERCENT = 79;
	public static readonly TILDE = 80;
	public static readonly BANG = 81;
	public static readonly PLUS = 82;
	public static readonly SUB = 83;
	public static readonly SLASH = 84;
	public static readonly WhiteSpaces = 85;
	public static readonly LineTerminator = 86;
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
	public static readonly STRING = 97;
	public static readonly RULE_program = 0;
	public static readonly RULE_compilationUnit = 1;
	public static readonly RULE_usingDeclaration = 2;
	public static readonly RULE_moduleDeclaration = 3;
	public static readonly RULE_moduleBody = 4;
	public static readonly RULE_moduleBodyMembers = 5;
	public static readonly RULE_moduleBodyMember = 6;
	public static readonly RULE_fullyQualifiedReferenceExpression = 7;
	public static readonly RULE_classDeclaration = 8;
	public static readonly RULE_classBody = 9;
	public static readonly RULE_classBodyMembers = 10;
	public static readonly RULE_classBodyMember = 11;
	public static readonly RULE_enumDeclaration = 12;
	public static readonly RULE_maybeSignedInteger = 13;
	public static readonly RULE_enumConstant = 14;
	public static readonly RULE_constDeclaration = 15;
	public static readonly RULE_fieldDeclarationList = 16;
	public static readonly RULE_fieldDeclaration = 17;
	public static readonly RULE_functionDeclaration = 18;
	public static readonly RULE_formalParameterDeclarations = 19;
	public static readonly RULE_block = 20;
	public static readonly RULE_blockStatement = 21;
	public static readonly RULE_variableDeclarationList = 22;
	public static readonly RULE_variableDeclaration = 23;
	public static readonly RULE_varOrFieldDeclaration = 24;
	public static readonly RULE_variableInitializer = 25;
	public static readonly RULE_arrayInitializer = 26;
	public static readonly RULE_statement = 27;
	public static readonly RULE_switchBlockStatementGroups = 28;
	public static readonly RULE_switchBlockStatementGroup = 29;
	public static readonly RULE_switchLabel = 30;
	public static readonly RULE_tryStatement = 31;
	public static readonly RULE_catches = 32;
	public static readonly RULE_catchClause = 33;
	public static readonly RULE_catchParameter = 34;
	public static readonly RULE_forStatement = 35;
	public static readonly RULE_forInit = 36;
	public static readonly RULE_expressionList = 37;
	public static readonly RULE_thisExpression = 38;
	public static readonly RULE_blingExpression = 39;
	public static readonly RULE_referenceOrThisExpression = 40;
	public static readonly RULE_singleExpression = 41;
	public static readonly RULE_classAccess = 42;
	public static readonly RULE_methodInvocationExpression = 43;
	public static readonly RULE_assignmentOperator = 44;
	public static readonly RULE_relationalOp = 45;
	public static readonly RULE_shiftOp = 46;
	public static readonly RULE_bitwiseOperator = 47;
	public static readonly RULE_qualifiedReferenceExpression = 48;
	public static readonly RULE_referenceExpression = 49;
	public static readonly RULE_methodInvocation = 50;
	public static readonly RULE_objectCreator = 51;
	public static readonly RULE_arrayCreator = 52;
	public static readonly RULE_dictionaryCreator = 53;
	public static readonly RULE_keyValueInitializer = 54;
	public static readonly RULE_arguments = 55;
	public static readonly RULE_argumentsList = 56;
	public static readonly RULE_modifiers = 57;
	public static readonly RULE_annotation = 58;
	public static readonly RULE_symbol = 59;
	public static readonly RULE_qualifiedName = 60;
	public static readonly RULE_componentName = 61;
	public static readonly RULE_id = 62;
	public static readonly RULE_literal = 63;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
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
		"id", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "';'", "'?'", "':'", "'class'", "'function'", "'return'", 
		"'new'", "'var'", "'const'", "'module'", "'using'", "'as'", "'enum'", 
		"'extends'", "'null'", "'native'", "'hidden'", "'public'", "'private'", 
		"'protected'", "'static'", "'instanceof'", "'has'", "'if'", "'else'", 
		"'do'", "'while'", "'for'", "'break'", "'continue'", "'switch'", "'default'", 
		"'case'", "'try'", "'catch'", "'finally'", "'throw'", "'and'", "'or'", 
		"'true'", "'false'", "'self'", "'super'", "'void'", "'$'", "'/*'", "'*/'", 
		"'\"'", "'''", "'{'", "'}'", "'['", "']'", "'('", "')'", "','", "'*'", 
		"'|'", "'<'", "'>'", "'=>'", "'&'", "'||'", "'&&'", "'++'", "'--'", "'='", 
		"'=='", "'!='", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'%='", 
		"'^'", "'%'", "'~'", "'!'", "'+'", "'-'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOT", "SEMI", "QUES", "COLON", "CLASS", "FUNCTION", "RETURN", 
		"NEW", "VAR", "CONST", "MODULE", "USING", "AS", "ENUM", "EXTENDS", "NULL", 
		"NATIVE", "HIDDEN_TOKEN", "PUBLIC_TOKEN", "PRIVATE_TOKEN", "PROTECTED_TOKEN", 
		"STATIC", "INSTANCEOF", "HAS", "IF", "ELSE", "DO", "WHILE", "FOR", "BREAK", 
		"CONTINUE", "SWITCH", "DEFAULT", "CASE", "TRY", "CATCH", "FINALLY", "THROW", 
		"AND", "OR", "TRUE", "FALSE", "SELF", "SUPER", "VOID", "BLING", "MULTI_LINE_COMMENT_START", 
		"MULTI_LINE_COMMENT_END", "STRING_A", "STRING_B", "LBRACE", "RBRACE", 
		"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COMMA", "STAR", "BAR", "LT", 
		"GT", "EQGT", "AMP", "BARBAR", "AMPAMP", "PLUSPLUS", "SUBSUB", "EQ", "EQEQ", 
		"BANGEQ", "PLUSEQ", "SUBEQ", "STAREQ", "SLASHEQ", "AMPEQ", "CARETEQ", 
		"PERCENTEQ", "CARET", "PERCENT", "TILDE", "BANG", "PLUS", "SUB", "SLASH", 
		"WhiteSpaces", "LineTerminator", "SINGLE_LINE_COMMENT", "SINGLE_LINE_DOC_COMMENT", 
		"BLOCK_COMMENT", "IDENTIFIER", "LONGLITERAL", "INTLITERAL", "HEX_LITERAL", 
		"FLOATLITERAL", "DOUBLELITERAL", "CHARLITERAL", "STRING",
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
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.USING) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.PUBLIC_TOKEN) | (1 << MonkeyCParser.PRIVATE_TOKEN) | (1 << MonkeyCParser.PROTECTED_TOKEN) | (1 << MonkeyCParser.STATIC) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MonkeyCParser.PLUSPLUS - 66)) | (1 << (MonkeyCParser.SUBSUB - 66)) | (1 << (MonkeyCParser.TILDE - 66)) | (1 << (MonkeyCParser.BANG - 66)) | (1 << (MonkeyCParser.PLUS - 66)) | (1 << (MonkeyCParser.SUB - 66)) | (1 << (MonkeyCParser.IDENTIFIER - 66)) | (1 << (MonkeyCParser.LONGLITERAL - 66)) | (1 << (MonkeyCParser.INTLITERAL - 66)) | (1 << (MonkeyCParser.HEX_LITERAL - 66)) | (1 << (MonkeyCParser.FLOATLITERAL - 66)) | (1 << (MonkeyCParser.DOUBLELITERAL - 66)) | (1 << (MonkeyCParser.CHARLITERAL - 66)) | (1 << (MonkeyCParser.STRING - 66)))) !== 0)) {
				{
				{
				this.state = 128;
				this.compilationUnit();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MonkeyCParser.RULE_compilationUnit);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.usingDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.moduleDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.classDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 139;
				this.enumDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 140;
				this.constDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 141;
				this.fieldDeclarationList();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 142;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 143;
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
		this.enterRule(_localctx, 4, MonkeyCParser.RULE_usingDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(MonkeyCParser.USING);
			this.state = 147;
			this.fullyQualifiedReferenceExpression();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.AS) {
				{
				this.state = 148;
				this.match(MonkeyCParser.AS);
				this.state = 149;
				this.componentName();
				}
			}

			this.state = 152;
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
		this.enterRule(_localctx, 6, MonkeyCParser.RULE_moduleDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.modifiers();
			this.state = 155;
			this.match(MonkeyCParser.MODULE);
			this.state = 156;
			this.componentName();
			this.state = 157;
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
		this.enterRule(_localctx, 8, MonkeyCParser.RULE_moduleBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(MonkeyCParser.LBRACE);
			this.state = 160;
			this.moduleBodyMembers();
			this.state = 161;
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
		this.enterRule(_localctx, 10, MonkeyCParser.RULE_moduleBodyMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.PUBLIC_TOKEN) | (1 << MonkeyCParser.PRIVATE_TOKEN) | (1 << MonkeyCParser.PROTECTED_TOKEN) | (1 << MonkeyCParser.STATIC))) !== 0) || _la === MonkeyCParser.LPAREN) {
				{
				{
				this.state = 163;
				this.moduleBodyMember();
				}
				}
				this.state = 168;
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
		this.enterRule(_localctx, 12, MonkeyCParser.RULE_moduleBodyMember);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.fieldDeclarationList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 171;
				this.functionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 172;
				this.classDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 173;
				this.enumDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 174;
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
		this.enterRule(_localctx, 14, MonkeyCParser.RULE_fullyQualifiedReferenceExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.referenceOrThisExpression();
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 178;
					this.qualifiedReferenceExpression();
					}
					}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
		this.enterRule(_localctx, 16, MonkeyCParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.modifiers();
			this.state = 185;
			this.match(MonkeyCParser.CLASS);
			this.state = 186;
			this.componentName();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EXTENDS) {
				{
				this.state = 187;
				this.match(MonkeyCParser.EXTENDS);
				this.state = 188;
				this.fullyQualifiedReferenceExpression();
				}
			}

			this.state = 191;
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
		this.enterRule(_localctx, 18, MonkeyCParser.RULE_classBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(MonkeyCParser.LBRACE);
			this.state = 194;
			this.classBodyMembers();
			this.state = 195;
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
		this.enterRule(_localctx, 20, MonkeyCParser.RULE_classBodyMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.CLASS) | (1 << MonkeyCParser.FUNCTION) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.CONST) | (1 << MonkeyCParser.MODULE) | (1 << MonkeyCParser.ENUM) | (1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.PUBLIC_TOKEN) | (1 << MonkeyCParser.PRIVATE_TOKEN) | (1 << MonkeyCParser.PROTECTED_TOKEN) | (1 << MonkeyCParser.STATIC))) !== 0) || _la === MonkeyCParser.LPAREN) {
				{
				{
				this.state = 197;
				this.classBodyMember();
				}
				}
				this.state = 202;
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
		this.enterRule(_localctx, 22, MonkeyCParser.RULE_classBodyMember);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.fieldDeclarationList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 205;
				this.functionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 206;
				this.classDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 207;
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
		this.enterRule(_localctx, 24, MonkeyCParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.modifiers();
			this.state = 211;
			this.match(MonkeyCParser.ENUM);
			this.state = 212;
			this.match(MonkeyCParser.LBRACE);
			this.state = 213;
			this.enumConstant();
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 214;
				this.match(MonkeyCParser.COMMA);
				this.state = 215;
				this.enumConstant();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
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
		this.enterRule(_localctx, 26, MonkeyCParser.RULE_maybeSignedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.PLUS || _la === MonkeyCParser.SUB) {
				{
				this.state = 223;
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

			this.state = 226;
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
		this.enterRule(_localctx, 28, MonkeyCParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.componentName();
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 229;
				this.match(MonkeyCParser.EQ);
				this.state = 230;
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
		this.enterRule(_localctx, 30, MonkeyCParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.modifiers();
			this.state = 234;
			this.match(MonkeyCParser.CONST);
			this.state = 235;
			this.componentName();
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 236;
				this.match(MonkeyCParser.EQ);
				this.state = 237;
				this.singleExpression(0);
				}
			}

			this.state = 240;
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
		this.enterRule(_localctx, 32, MonkeyCParser.RULE_fieldDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.modifiers();
			this.state = 243;
			this.match(MonkeyCParser.VAR);
			this.state = 244;
			this.fieldDeclaration();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 245;
				this.match(MonkeyCParser.COMMA);
				this.state = 246;
				this.fieldDeclaration();
				}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 252;
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
		this.enterRule(_localctx, 34, MonkeyCParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
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
		this.enterRule(_localctx, 36, MonkeyCParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.modifiers();
			this.state = 257;
			this.match(MonkeyCParser.FUNCTION);
			this.state = 258;
			this.componentName();
			this.state = 259;
			this.match(MonkeyCParser.LPAREN);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.IDENTIFIER) {
				{
				this.state = 260;
				this.formalParameterDeclarations();
				}
			}

			this.state = 263;
			this.match(MonkeyCParser.RPAREN);
			this.state = 264;
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
		this.enterRule(_localctx, 38, MonkeyCParser.RULE_formalParameterDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.componentName();
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 267;
				this.match(MonkeyCParser.COMMA);
				this.state = 268;
				this.componentName();
				}
				}
				this.state = 273;
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
		this.enterRule(_localctx, 40, MonkeyCParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(MonkeyCParser.LBRACE);
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MonkeyCParser.PLUSPLUS - 66)) | (1 << (MonkeyCParser.SUBSUB - 66)) | (1 << (MonkeyCParser.TILDE - 66)) | (1 << (MonkeyCParser.BANG - 66)) | (1 << (MonkeyCParser.PLUS - 66)) | (1 << (MonkeyCParser.SUB - 66)) | (1 << (MonkeyCParser.IDENTIFIER - 66)) | (1 << (MonkeyCParser.LONGLITERAL - 66)) | (1 << (MonkeyCParser.INTLITERAL - 66)) | (1 << (MonkeyCParser.HEX_LITERAL - 66)) | (1 << (MonkeyCParser.FLOATLITERAL - 66)) | (1 << (MonkeyCParser.DOUBLELITERAL - 66)) | (1 << (MonkeyCParser.CHARLITERAL - 66)) | (1 << (MonkeyCParser.STRING - 66)))) !== 0)) {
				{
				{
				this.state = 275;
				this.blockStatement();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
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
		this.enterRule(_localctx, 42, MonkeyCParser.RULE_blockStatement);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.variableDeclarationList();
				this.state = 284;
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
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
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
			case MonkeyCParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
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
		this.enterRule(_localctx, 44, MonkeyCParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(MonkeyCParser.VAR);
			this.state = 290;
			this.variableDeclaration();
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 291;
				this.match(MonkeyCParser.COMMA);
				this.state = 292;
				this.variableDeclaration();
				}
				}
				this.state = 297;
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
		this.enterRule(_localctx, 46, MonkeyCParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
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
		this.enterRule(_localctx, 48, MonkeyCParser.RULE_varOrFieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.componentName();
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.LBRACKET) {
				{
				{
				this.state = 301;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 302;
				this.match(MonkeyCParser.RBRACKET);
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.EQ) {
				{
				this.state = 308;
				this.match(MonkeyCParser.EQ);
				this.state = 309;
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
		this.enterRule(_localctx, 50, MonkeyCParser.RULE_variableInitializer);
		try {
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 312;
				this.arrayInitializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 313;
				this.singleExpression(0);
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
		this.enterRule(_localctx, 52, MonkeyCParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(MonkeyCParser.LBRACE);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
				{
				this.state = 317;
				this.variableInitializer();
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 318;
						this.match(MonkeyCParser.COMMA);
						this.state = 319;
						this.variableInitializer();
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				}
			}

			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.COMMA) {
				{
				this.state = 327;
				this.match(MonkeyCParser.COMMA);
				}
			}

			this.state = 330;
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
		this.enterRule(_localctx, 54, MonkeyCParser.RULE_statement);
		let _la: number;
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 332;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 333;
				this.match(MonkeyCParser.IF);
				this.state = 334;
				this.match(MonkeyCParser.LPAREN);
				this.state = 335;
				this.singleExpression(0);
				this.state = 336;
				this.match(MonkeyCParser.RPAREN);
				this.state = 337;
				this.statement();
				this.state = 340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 338;
					this.match(MonkeyCParser.ELSE);
					this.state = 339;
					this.statement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 342;
				this.forStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 343;
				this.match(MonkeyCParser.WHILE);
				this.state = 344;
				this.match(MonkeyCParser.LPAREN);
				this.state = 345;
				this.singleExpression(0);
				this.state = 346;
				this.match(MonkeyCParser.RPAREN);
				this.state = 347;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 349;
				this.match(MonkeyCParser.DO);
				this.state = 350;
				this.statement();
				this.state = 351;
				this.match(MonkeyCParser.WHILE);
				this.state = 352;
				this.match(MonkeyCParser.LPAREN);
				this.state = 353;
				this.singleExpression(0);
				this.state = 354;
				this.match(MonkeyCParser.RPAREN);
				this.state = 355;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 357;
				this.tryStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 358;
				this.match(MonkeyCParser.SWITCH);
				this.state = 359;
				this.match(MonkeyCParser.LPAREN);
				this.state = 360;
				this.singleExpression(0);
				this.state = 361;
				this.match(MonkeyCParser.RPAREN);
				this.state = 362;
				this.match(MonkeyCParser.LBRACE);
				this.state = 363;
				this.switchBlockStatementGroups();
				this.state = 364;
				this.match(MonkeyCParser.RBRACE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 366;
				this.match(MonkeyCParser.RETURN);
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
					{
					this.state = 367;
					this.singleExpression(0);
					}
				}

				this.state = 370;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 371;
				this.match(MonkeyCParser.THROW);
				this.state = 372;
				this.singleExpression(0);
				this.state = 373;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 375;
				this.match(MonkeyCParser.BREAK);
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.IDENTIFIER) {
					{
					this.state = 376;
					this.referenceExpression();
					}
				}

				this.state = 379;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 380;
				this.match(MonkeyCParser.CONTINUE);
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MonkeyCParser.IDENTIFIER) {
					{
					this.state = 381;
					this.referenceExpression();
					}
				}

				this.state = 384;
				this.match(MonkeyCParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 385;
				this.singleExpression(0);
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 386;
					this.match(MonkeyCParser.SEMI);
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
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 390;
				this.match(MonkeyCParser.IDENTIFIER);
				this.state = 391;
				this.match(MonkeyCParser.COLON);
				this.state = 392;
				this.statement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 393;
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
		this.enterRule(_localctx, 56, MonkeyCParser.RULE_switchBlockStatementGroups);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.DEFAULT || _la === MonkeyCParser.CASE) {
				{
				{
				this.state = 396;
				this.switchBlockStatementGroup();
				}
				}
				this.state = 401;
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
		this.enterRule(_localctx, 58, MonkeyCParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.switchLabel();
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.SEMI) | (1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.RETURN) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL) | (1 << MonkeyCParser.IF) | (1 << MonkeyCParser.DO) | (1 << MonkeyCParser.WHILE) | (1 << MonkeyCParser.FOR) | (1 << MonkeyCParser.BREAK) | (1 << MonkeyCParser.CONTINUE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (MonkeyCParser.SWITCH - 32)) | (1 << (MonkeyCParser.TRY - 32)) | (1 << (MonkeyCParser.THROW - 32)) | (1 << (MonkeyCParser.TRUE - 32)) | (1 << (MonkeyCParser.FALSE - 32)) | (1 << (MonkeyCParser.SELF - 32)) | (1 << (MonkeyCParser.VOID - 32)) | (1 << (MonkeyCParser.BLING - 32)) | (1 << (MonkeyCParser.LBRACE - 32)) | (1 << (MonkeyCParser.LBRACKET - 32)) | (1 << (MonkeyCParser.LPAREN - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (MonkeyCParser.PLUSPLUS - 66)) | (1 << (MonkeyCParser.SUBSUB - 66)) | (1 << (MonkeyCParser.TILDE - 66)) | (1 << (MonkeyCParser.BANG - 66)) | (1 << (MonkeyCParser.PLUS - 66)) | (1 << (MonkeyCParser.SUB - 66)) | (1 << (MonkeyCParser.IDENTIFIER - 66)) | (1 << (MonkeyCParser.LONGLITERAL - 66)) | (1 << (MonkeyCParser.INTLITERAL - 66)) | (1 << (MonkeyCParser.HEX_LITERAL - 66)) | (1 << (MonkeyCParser.FLOATLITERAL - 66)) | (1 << (MonkeyCParser.DOUBLELITERAL - 66)) | (1 << (MonkeyCParser.CHARLITERAL - 66)) | (1 << (MonkeyCParser.STRING - 66)))) !== 0)) {
				{
				{
				this.state = 403;
				this.blockStatement();
				}
				}
				this.state = 408;
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
		this.enterRule(_localctx, 60, MonkeyCParser.RULE_switchLabel);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.match(MonkeyCParser.CASE);
				this.state = 410;
				this.singleExpression(0);
				this.state = 411;
				this.match(MonkeyCParser.COLON);
				}
				break;
			case MonkeyCParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.match(MonkeyCParser.DEFAULT);
				this.state = 414;
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
		this.enterRule(_localctx, 62, MonkeyCParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(MonkeyCParser.TRY);
			this.state = 418;
			this.block();
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 419;
				this.catches();
				this.state = 420;
				this.match(MonkeyCParser.FINALLY);
				this.state = 421;
				this.block();
				}
				break;

			case 2:
				{
				this.state = 423;
				this.catches();
				}
				break;

			case 3:
				{
				this.state = 424;
				this.match(MonkeyCParser.FINALLY);
				this.state = 425;
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
		this.enterRule(_localctx, 64, MonkeyCParser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.catchClause();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.CATCH) {
				{
				{
				this.state = 429;
				this.catchClause();
				}
				}
				this.state = 434;
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
		this.enterRule(_localctx, 66, MonkeyCParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(MonkeyCParser.CATCH);
			this.state = 436;
			this.match(MonkeyCParser.LPAREN);
			this.state = 437;
			this.catchParameter();
			this.state = 438;
			this.match(MonkeyCParser.RPAREN);
			this.state = 439;
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
		this.enterRule(_localctx, 68, MonkeyCParser.RULE_catchParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.id();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.INSTANCEOF) {
				{
				this.state = 442;
				this.match(MonkeyCParser.INSTANCEOF);
				this.state = 443;
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
		this.enterRule(_localctx, 70, MonkeyCParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(MonkeyCParser.FOR);
			this.state = 447;
			this.match(MonkeyCParser.LPAREN);
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.VAR) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
				{
				this.state = 448;
				this.forInit();
				}
			}

			this.state = 451;
			this.match(MonkeyCParser.SEMI);
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
				{
				this.state = 452;
				this.singleExpression(0);
				}
			}

			this.state = 455;
			this.match(MonkeyCParser.SEMI);
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
				{
				this.state = 456;
				this.expressionList();
				}
			}

			this.state = 459;
			this.match(MonkeyCParser.RPAREN);
			this.state = 460;
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
		this.enterRule(_localctx, 72, MonkeyCParser.RULE_forInit);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.variableDeclarationList();
				}
				break;
			case MonkeyCParser.COLON:
			case MonkeyCParser.NEW:
			case MonkeyCParser.NULL:
			case MonkeyCParser.TRUE:
			case MonkeyCParser.FALSE:
			case MonkeyCParser.SELF:
			case MonkeyCParser.VOID:
			case MonkeyCParser.BLING:
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
			case MonkeyCParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
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
		this.enterRule(_localctx, 74, MonkeyCParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.singleExpression(0);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 467;
				this.match(MonkeyCParser.COMMA);
				this.state = 468;
				this.singleExpression(0);
				}
				}
				this.state = 473;
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
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MonkeyCParser.RULE_thisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(MonkeyCParser.SELF);
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
		this.enterRule(_localctx, 78, MonkeyCParser.RULE_blingExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
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
		this.enterRule(_localctx, 80, MonkeyCParser.RULE_referenceOrThisExpression);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.referenceExpression();
				}
				break;
			case MonkeyCParser.SELF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.thisExpression();
				}
				break;
			case MonkeyCParser.BLING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 480;
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

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, MonkeyCParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 484;
				this.match(MonkeyCParser.PLUS);
				this.state = 485;
				this.singleExpression(15);
				}
				break;

			case 2:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 486;
				this.match(MonkeyCParser.SUB);
				this.state = 487;
				this.singleExpression(14);
				}
				break;

			case 3:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 488;
				this.match(MonkeyCParser.PLUSPLUS);
				this.state = 489;
				this.singleExpression(13);
				}
				break;

			case 4:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 490;
				this.match(MonkeyCParser.SUBSUB);
				this.state = 491;
				this.singleExpression(12);
				}
				break;

			case 5:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 492;
				this.match(MonkeyCParser.TILDE);
				this.state = 493;
				this.singleExpression(11);
				}
				break;

			case 6:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 494;
				this.match(MonkeyCParser.BANG);
				this.state = 495;
				this.singleExpression(10);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 496;
				this.match(MonkeyCParser.LPAREN);
				this.state = 497;
				this.singleExpression(0);
				this.state = 498;
				this.match(MonkeyCParser.RPAREN);
				}
				break;

			case 8:
				{
				_localctx = new GeneralFullyQualifiedReferenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 500;
				this.fullyQualifiedReferenceExpression();
				this.state = 505;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 501;
					if (!(this.isClassAccess())) {
						throw new FailedPredicateException(this, "this.isClassAccess()");
					}
					this.state = 502;
					this.classAccess();
					}
					break;

				case 2:
					{
					this.state = 503;
					this.methodInvocationExpression();
					}
					break;

				case 3:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 507;
				this.literal();
				}
				break;

			case 10:
				{
				_localctx = new SymbolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 508;
				this.symbol();
				}
				break;

			case 11:
				{
				_localctx = new ObjectCreatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 509;
				this.objectCreator();
				}
				break;

			case 12:
				{
				_localctx = new ArrayCreatorExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 510;
				this.arrayCreator();
				}
				break;

			case 13:
				{
				_localctx = new VoidDotClassExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 511;
				this.match(MonkeyCParser.VOID);
				this.state = 512;
				this.match(MonkeyCParser.DOT);
				this.state = 513;
				this.match(MonkeyCParser.CLASS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 582;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 580;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 516;
						if (!(this.precpred(this._ctx, 29))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 29)");
						}
						this.state = 517;
						this.match(MonkeyCParser.QUES);
						this.state = 518;
						this.singleExpression(0);
						this.state = 519;
						this.match(MonkeyCParser.COLON);
						this.state = 520;
						this.singleExpression(30);
						}
						break;

					case 2:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 522;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 523;
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
						this.state = 524;
						this.singleExpression(29);
						}
						break;

					case 3:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 525;
						if (!(this.precpred(this._ctx, 27))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 27)");
						}
						this.state = 526;
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
						this.state = 527;
						this.singleExpression(28);
						}
						break;

					case 4:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 528;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 529;
						this.match(MonkeyCParser.BAR);
						this.state = 530;
						this.singleExpression(27);
						}
						break;

					case 5:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 531;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 532;
						this.match(MonkeyCParser.CARET);
						this.state = 533;
						this.singleExpression(26);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 534;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 535;
						this.match(MonkeyCParser.AMP);
						this.state = 536;
						this.singleExpression(25);
						}
						break;

					case 7:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 537;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 538;
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
						this.state = 539;
						this.singleExpression(24);
						}
						break;

					case 8:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 540;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 541;
						this.relationalOp();
						this.state = 542;
						this.singleExpression(21);
						}
						break;

					case 9:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 544;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 545;
						this.shiftOp();
						this.state = 546;
						this.singleExpression(20);
						}
						break;

					case 10:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 548;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 549;
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
						this.state = 550;
						this.singleExpression(19);
						}
						break;

					case 11:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 551;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 552;
						_la = this._input.LA(1);
						if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (MonkeyCParser.STAR - 58)) | (1 << (MonkeyCParser.PERCENT - 58)) | (1 << (MonkeyCParser.SLASH - 58)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 553;
						this.singleExpression(18);
						}
						break;

					case 12:
						{
						_localctx = new BitwiseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 554;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 555;
						this.bitwiseOperator();
						this.state = 556;
						this.singleExpression(17);
						}
						break;

					case 13:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 558;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 559;
						this.match(MonkeyCParser.EQ);
						this.state = 560;
						this.singleExpression(9);
						}
						break;

					case 14:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 561;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 562;
						this.assignmentOperator();
						this.state = 563;
						this.singleExpression(8);
						}
						break;

					case 15:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 565;
						if (!(this.precpred(this._ctx, 32))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 32)");
						}
						this.state = 566;
						this.match(MonkeyCParser.PLUSPLUS);
						}
						break;

					case 16:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 567;
						if (!(this.precpred(this._ctx, 31))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 31)");
						}
						this.state = 568;
						this.match(MonkeyCParser.SUBSUB);
						}
						break;

					case 17:
						{
						_localctx = new ElementAccessExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 569;
						if (!(this.precpred(this._ctx, 30))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 30)");
						}
						this.state = 570;
						this.match(MonkeyCParser.LBRACKET);
						this.state = 571;
						this.singleExpression(0);
						this.state = 572;
						this.match(MonkeyCParser.RBRACKET);
						}
						break;

					case 18:
						{
						_localctx = new HasExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 574;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 575;
						this.match(MonkeyCParser.HAS);
						this.state = 576;
						this.symbol();
						}
						break;

					case 19:
						{
						_localctx = new InstanceofExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MonkeyCParser.RULE_singleExpression);
						this.state = 577;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 578;
						this.match(MonkeyCParser.INSTANCEOF);
						this.state = 579;
						this.qualifiedName();
						}
						break;
					}
					}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classAccess(): ClassAccessContext {
		let _localctx: ClassAccessContext = new ClassAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MonkeyCParser.RULE_classAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(MonkeyCParser.DOT);
			this.state = 586;
			this.match(MonkeyCParser.CLASS);
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
	public methodInvocationExpression(): MethodInvocationExpressionContext {
		let _localctx: MethodInvocationExpressionContext = new MethodInvocationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MonkeyCParser.RULE_methodInvocationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				{
				this.state = 588;
				this.match(MonkeyCParser.DOT);
				this.state = 589;
				this.match(MonkeyCParser.IDENTIFIER);
				}
				break;

			case 2:
				{
				this.state = 590;
				this.match(MonkeyCParser.DOT);
				this.state = 591;
				this.match(MonkeyCParser.SUPER);
				}
				break;
			}
			this.state = 594;
			this.methodInvocation();
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
			this.state = 613;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.match(MonkeyCParser.PLUSEQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 597;
				this.match(MonkeyCParser.SUBEQ);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 598;
				this.match(MonkeyCParser.STAREQ);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 599;
				this.match(MonkeyCParser.SLASHEQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 600;
				this.match(MonkeyCParser.AMPEQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 601;
				this.match(MonkeyCParser.CARETEQ);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 602;
				this.match(MonkeyCParser.PERCENTEQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 603;
				this.match(MonkeyCParser.LT);
				this.state = 604;
				this.match(MonkeyCParser.LT);
				this.state = 605;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 606;
				this.match(MonkeyCParser.GT);
				this.state = 607;
				this.match(MonkeyCParser.GT);
				this.state = 608;
				this.match(MonkeyCParser.GT);
				this.state = 609;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 610;
				this.match(MonkeyCParser.GT);
				this.state = 611;
				this.match(MonkeyCParser.GT);
				this.state = 612;
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
	public relationalOp(): RelationalOpContext {
		let _localctx: RelationalOpContext = new RelationalOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MonkeyCParser.RULE_relationalOp);
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 615;
				this.match(MonkeyCParser.LT);
				this.state = 616;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.match(MonkeyCParser.GT);
				this.state = 618;
				this.match(MonkeyCParser.EQ);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 619;
				this.match(MonkeyCParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 620;
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
	public shiftOp(): ShiftOpContext {
		let _localctx: ShiftOpContext = new ShiftOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MonkeyCParser.RULE_shiftOp);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.match(MonkeyCParser.LT);
				this.state = 624;
				this.match(MonkeyCParser.LT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.match(MonkeyCParser.GT);
				this.state = 626;
				this.match(MonkeyCParser.GT);
				this.state = 627;
				this.match(MonkeyCParser.GT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 628;
				this.match(MonkeyCParser.GT);
				this.state = 629;
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
	public bitwiseOperator(): BitwiseOperatorContext {
		let _localctx: BitwiseOperatorContext = new BitwiseOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MonkeyCParser.RULE_bitwiseOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (MonkeyCParser.BAR - 59)) | (1 << (MonkeyCParser.AMP - 59)) | (1 << (MonkeyCParser.CARET - 59)))) !== 0))) {
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
	public qualifiedReferenceExpression(): QualifiedReferenceExpressionContext {
		let _localctx: QualifiedReferenceExpressionContext = new QualifiedReferenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MonkeyCParser.RULE_qualifiedReferenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(MonkeyCParser.DOT);
			this.state = 635;
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
		this.enterRule(_localctx, 98, MonkeyCParser.RULE_referenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
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
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, MonkeyCParser.RULE_methodInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this.arguments();
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
		this.enterRule(_localctx, 102, MonkeyCParser.RULE_objectCreator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(MonkeyCParser.NEW);
			this.state = 642;
			this.fullyQualifiedReferenceExpression();
			this.state = 643;
			this.arguments();
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 644;
				this.classBody();
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
	public arrayCreator(): ArrayCreatorContext {
		let _localctx: ArrayCreatorContext = new ArrayCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, MonkeyCParser.RULE_arrayCreator);
		let _la: number;
		try {
			this.state = 665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 647;
				this.match(MonkeyCParser.NEW);
				this.state = 648;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 649;
				this.singleExpression(0);
				this.state = 650;
				this.match(MonkeyCParser.RBRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 652;
				this.match(MonkeyCParser.LBRACKET);
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
					{
					this.state = 653;
					this.singleExpression(0);
					this.state = 658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MonkeyCParser.COMMA) {
						{
						{
						this.state = 654;
						this.match(MonkeyCParser.COMMA);
						this.state = 655;
						this.singleExpression(0);
						}
						}
						this.state = 660;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 663;
				this.match(MonkeyCParser.RBRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 664;
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
		this.enterRule(_localctx, 106, MonkeyCParser.RULE_dictionaryCreator);
		let _la: number;
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MonkeyCParser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.match(MonkeyCParser.NEW);
				this.state = 668;
				this.match(MonkeyCParser.LBRACE);
				this.state = 669;
				this.match(MonkeyCParser.RBRACE);
				}
				break;
			case MonkeyCParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 670;
				this.match(MonkeyCParser.LBRACE);
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
					{
					this.state = 671;
					this.keyValueInitializer();
					this.state = 676;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MonkeyCParser.COMMA) {
						{
						{
						this.state = 672;
						this.match(MonkeyCParser.COMMA);
						this.state = 673;
						this.keyValueInitializer();
						}
						}
						this.state = 678;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 681;
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
		this.enterRule(_localctx, 108, MonkeyCParser.RULE_keyValueInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.singleExpression(0);
			this.state = 685;
			this.match(MonkeyCParser.EQGT);
			this.state = 686;
			this.singleExpression(0);
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
		this.enterRule(_localctx, 110, MonkeyCParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(MonkeyCParser.LPAREN);
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.COLON) | (1 << MonkeyCParser.NEW) | (1 << MonkeyCParser.NULL))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MonkeyCParser.TRUE - 41)) | (1 << (MonkeyCParser.FALSE - 41)) | (1 << (MonkeyCParser.SELF - 41)) | (1 << (MonkeyCParser.VOID - 41)) | (1 << (MonkeyCParser.BLING - 41)) | (1 << (MonkeyCParser.LBRACE - 41)) | (1 << (MonkeyCParser.LBRACKET - 41)) | (1 << (MonkeyCParser.LPAREN - 41)) | (1 << (MonkeyCParser.PLUSPLUS - 41)) | (1 << (MonkeyCParser.SUBSUB - 41)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (MonkeyCParser.TILDE - 80)) | (1 << (MonkeyCParser.BANG - 80)) | (1 << (MonkeyCParser.PLUS - 80)) | (1 << (MonkeyCParser.SUB - 80)) | (1 << (MonkeyCParser.IDENTIFIER - 80)) | (1 << (MonkeyCParser.LONGLITERAL - 80)) | (1 << (MonkeyCParser.INTLITERAL - 80)) | (1 << (MonkeyCParser.HEX_LITERAL - 80)) | (1 << (MonkeyCParser.FLOATLITERAL - 80)) | (1 << (MonkeyCParser.DOUBLELITERAL - 80)) | (1 << (MonkeyCParser.CHARLITERAL - 80)) | (1 << (MonkeyCParser.STRING - 80)))) !== 0)) {
				{
				this.state = 689;
				this.argumentsList();
				}
			}

			this.state = 692;
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
		this.enterRule(_localctx, 112, MonkeyCParser.RULE_argumentsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.singleExpression(0);
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MonkeyCParser.COMMA) {
				{
				{
				this.state = 695;
				this.match(MonkeyCParser.COMMA);
				this.state = 696;
				this.singleExpression(0);
				}
				}
				this.state = 701;
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
		this.enterRule(_localctx, 114, MonkeyCParser.RULE_modifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.LPAREN) {
				{
				this.state = 702;
				this.annotation();
				}
			}

			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MonkeyCParser.STATIC) {
				{
				this.state = 705;
				this.match(MonkeyCParser.STATIC);
				}
			}

			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.PUBLIC_TOKEN) | (1 << MonkeyCParser.PRIVATE_TOKEN) | (1 << MonkeyCParser.PROTECTED_TOKEN))) !== 0)) {
				{
				this.state = 708;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MonkeyCParser.HIDDEN_TOKEN) | (1 << MonkeyCParser.PUBLIC_TOKEN) | (1 << MonkeyCParser.PRIVATE_TOKEN) | (1 << MonkeyCParser.PROTECTED_TOKEN))) !== 0))) {
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
		this.enterRule(_localctx, 116, MonkeyCParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this.match(MonkeyCParser.LPAREN);
			this.state = 712;
			this.symbol();
			this.state = 713;
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
		this.enterRule(_localctx, 118, MonkeyCParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(MonkeyCParser.COLON);
			this.state = 716;
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
		this.enterRule(_localctx, 120, MonkeyCParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.componentName();
			this.state = 723;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 719;
					this.match(MonkeyCParser.DOT);
					this.state = 720;
					this.componentName();
					}
					}
				}
				this.state = 725;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
		this.enterRule(_localctx, 122, MonkeyCParser.RULE_componentName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
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
		this.enterRule(_localctx, 124, MonkeyCParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
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
		this.enterRule(_localctx, 126, MonkeyCParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			_la = this._input.LA(1);
			if (!(((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & ((1 << (MonkeyCParser.NULL - 16)) | (1 << (MonkeyCParser.TRUE - 16)) | (1 << (MonkeyCParser.FALSE - 16)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (MonkeyCParser.LONGLITERAL - 91)) | (1 << (MonkeyCParser.INTLITERAL - 91)) | (1 << (MonkeyCParser.HEX_LITERAL - 91)) | (1 << (MonkeyCParser.FLOATLITERAL - 91)) | (1 << (MonkeyCParser.DOUBLELITERAL - 91)) | (1 << (MonkeyCParser.CHARLITERAL - 91)) | (1 << (MonkeyCParser.STRING - 91)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 41:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.isClassAccess();

		case 1:
			return this.precpred(this._ctx, 29);

		case 2:
			return this.precpred(this._ctx, 28);

		case 3:
			return this.precpred(this._ctx, 27);

		case 4:
			return this.precpred(this._ctx, 26);

		case 5:
			return this.precpred(this._ctx, 25);

		case 6:
			return this.precpred(this._ctx, 24);

		case 7:
			return this.precpred(this._ctx, 23);

		case 8:
			return this.precpred(this._ctx, 20);

		case 9:
			return this.precpred(this._ctx, 19);

		case 10:
			return this.precpred(this._ctx, 18);

		case 11:
			return this.precpred(this._ctx, 17);

		case 12:
			return this.precpred(this._ctx, 16);

		case 13:
			return this.precpred(this._ctx, 9);

		case 14:
			return this.precpred(this._ctx, 8);

		case 15:
			return this.precpred(this._ctx, 32);

		case 16:
			return this.precpred(this._ctx, 31);

		case 17:
			return this.precpred(this._ctx, 30);

		case 18:
			return this.precpred(this._ctx, 22);

		case 19:
			return this.precpred(this._ctx, 21);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03c\u02DF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x03\x02\x07\x02\x84\n\x02\f\x02\x0E" +
		"\x02\x87\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x93\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x05\x04\x99\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x07\x07\xA7\n\x07\f\x07" +
		"\x0E\x07\xAA\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xB2\n\b\x03" +
		"\t\x03\t\x07\t\xB6\n\t\f\t\x0E\t\xB9\v\t\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x05\n\xC0\n\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x07\f\xC9\n\f" +
		"\f\f\x0E\f\xCC\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xD3\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xDB\n\x0E\f\x0E\x0E\x0E" +
		"\xDE\v\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\xE3\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xEA\n\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\xF1\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x07\x12\xFA\n\x12\f\x12\x0E\x12\xFD\v\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0108" +
		"\n\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u0110\n" +
		"\x15\f\x15\x0E\x15\u0113\v\x15\x03\x16\x03\x16\x07\x16\u0117\n\x16\f\x16" +
		"\x0E\x16\u011A\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05" +
		"\x17\u0122\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u0128\n\x18\f" +
		"\x18\x0E\x18\u012B\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A" +
		"\u0132\n\x1A\f\x1A\x0E\x1A\u0135\v\x1A\x03\x1A\x03\x1A\x05\x1A\u0139\n" +
		"\x1A\x03\x1B\x03\x1B\x05\x1B\u013D\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x07\x1C\u0143\n\x1C\f\x1C\x0E\x1C\u0146\v\x1C\x05\x1C\u0148\n\x1C\x03" +
		"\x1C\x05\x1C\u014B\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0157\n\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0173\n\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u017C\n\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u0181\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u0187\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u018D\n\x1D" +
		"\x03\x1E\x07\x1E\u0190\n\x1E\f\x1E\x0E\x1E\u0193\v\x1E\x03\x1F\x03\x1F" +
		"\x07\x1F\u0197\n\x1F\f\x1F\x0E\x1F\u019A\v\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x05 \u01A2\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05" +
		"!\u01AD\n!\x03\"\x03\"\x07\"\u01B1\n\"\f\"\x0E\"\u01B4\v\"\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x05$\u01BF\n$\x03%\x03%\x03%\x05%\u01C4" +
		"\n%\x03%\x03%\x05%\u01C8\n%\x03%\x03%\x05%\u01CC\n%\x03%\x03%\x03%\x03" +
		"&\x03&\x05&\u01D3\n&\x03\'\x03\'\x03\'\x07\'\u01D8\n\'\f\'\x0E\'\u01DB" +
		"\v\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x05*\u01E4\n*\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x05+\u01FC\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x05+\u0205\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u0247\n" +
		"+\f+\x0E+\u024A\v+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x05-\u0253\n-\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x05.\u0268\n.\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
		"/\u0270\n/\x030\x030\x030\x030\x030\x030\x030\x050\u0279\n0\x031\x031" +
		"\x032\x032\x032\x033\x033\x034\x034\x035\x035\x035\x035\x055\u0288\n5" +
		"\x036\x036\x036\x036\x036\x036\x036\x036\x036\x076\u0293\n6\f6\x0E6\u0296" +
		"\v6\x056\u0298\n6\x036\x036\x056\u029C\n6\x037\x037\x037\x037\x037\x03" +
		"7\x037\x077\u02A5\n7\f7\x0E7\u02A8\v7\x057\u02AA\n7\x037\x057\u02AD\n" +
		"7\x038\x038\x038\x038\x039\x039\x059\u02B5\n9\x039\x039\x03:\x03:\x03" +
		":\x07:\u02BC\n:\f:\x0E:\u02BF\v:\x03;\x05;\u02C2\n;\x03;\x05;\u02C5\n" +
		";\x03;\x05;\u02C8\n;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03" +
		">\x07>\u02D4\n>\f>\x0E>\u02D7\v>\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x02" +
		"\x02\x03TB\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x02\n\x03\x02TU\x04\x02**BB\x04\x02))CC\x03\x02" +
		"GH\x05\x02<<QQVV\x05\x02==AAPP\x03\x02\x14\x17\x05\x02\x12\x12+,]c\x02" +
		"\u0323\x02\x85\x03\x02\x02\x02\x04\x92\x03\x02\x02\x02\x06\x94\x03\x02" +
		"\x02\x02\b\x9C\x03\x02\x02\x02\n\xA1\x03\x02\x02\x02\f\xA8\x03\x02\x02" +
		"\x02\x0E\xB1\x03\x02\x02\x02\x10\xB3\x03\x02\x02\x02\x12\xBA\x03\x02\x02" +
		"\x02\x14\xC3\x03\x02\x02\x02\x16\xCA\x03\x02\x02\x02\x18\xD2\x03\x02\x02" +
		"\x02\x1A\xD4\x03\x02\x02\x02\x1C\xE2\x03\x02\x02\x02\x1E\xE6\x03\x02\x02" +
		"\x02 \xEB\x03\x02\x02\x02\"\xF4\x03\x02\x02\x02$\u0100\x03\x02\x02\x02" +
		"&\u0102\x03\x02\x02\x02(\u010C\x03\x02\x02\x02*\u0114\x03\x02\x02\x02" +
		",\u0121\x03\x02\x02\x02.\u0123\x03\x02\x02\x020\u012C\x03\x02\x02\x02" +
		"2\u012E\x03\x02\x02\x024\u013C\x03\x02\x02\x026\u013E\x03\x02\x02\x02" +
		"8\u018C\x03\x02\x02\x02:\u0191\x03\x02\x02\x02<\u0194\x03\x02\x02\x02" +
		">\u01A1\x03\x02\x02\x02@\u01A3\x03\x02\x02\x02B\u01AE\x03\x02\x02\x02" +
		"D\u01B5\x03\x02\x02\x02F\u01BB\x03\x02\x02\x02H\u01C0\x03\x02\x02\x02" +
		"J\u01D2\x03\x02\x02\x02L\u01D4\x03\x02\x02\x02N\u01DC\x03\x02\x02\x02" +
		"P\u01DE\x03\x02\x02\x02R\u01E3\x03\x02\x02\x02T\u0204\x03\x02\x02\x02" +
		"V\u024B\x03\x02\x02\x02X\u0252\x03\x02\x02\x02Z\u0267\x03\x02\x02\x02" +
		"\\\u026F\x03\x02\x02\x02^\u0278\x03\x02\x02\x02`\u027A\x03\x02\x02\x02" +
		"b\u027C\x03\x02\x02\x02d\u027F\x03\x02\x02\x02f\u0281\x03\x02\x02\x02" +
		"h\u0283\x03\x02\x02\x02j\u029B\x03\x02\x02\x02l\u02AC\x03\x02\x02\x02" +
		"n\u02AE\x03\x02\x02\x02p\u02B2\x03\x02\x02\x02r\u02B8\x03\x02\x02\x02" +
		"t\u02C1\x03\x02\x02\x02v\u02C9\x03\x02\x02\x02x\u02CD\x03\x02\x02\x02" +
		"z\u02D0\x03\x02\x02\x02|\u02D8\x03\x02\x02\x02~\u02DA\x03\x02\x02\x02" +
		"\x80\u02DC\x03\x02\x02\x02\x82\x84\x05\x04\x03\x02\x83\x82\x03\x02\x02" +
		"\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
		"\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89\x07\x02\x02" +
		"\x03\x89\x03\x03\x02\x02\x02\x8A\x93\x05\x06\x04\x02\x8B\x93\x05\b\x05" +
		"\x02\x8C\x93\x05\x12\n\x02\x8D\x93\x05\x1A\x0E\x02\x8E\x93\x05 \x11\x02" +
		"\x8F\x93\x05\"\x12\x02\x90\x93\x05&\x14\x02\x91\x93\x05,\x17\x02\x92\x8A" +
		"\x03\x02\x02\x02\x92\x8B\x03\x02\x02\x02\x92\x8C\x03\x02\x02\x02\x92\x8D" +
		"\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x92\x8F\x03\x02\x02\x02\x92\x90" +
		"\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\x05\x03\x02\x02\x02\x94\x95" +
		"\x07\x0E\x02\x02\x95\x98\x05\x10\t\x02\x96\x97\x07\x0F\x02\x02\x97\x99" +
		"\x05|?\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03" +
		"\x02\x02\x02\x9A\x9B\x07\x04\x02\x02\x9B\x07\x03\x02\x02\x02\x9C\x9D\x05" +
		"t;\x02\x9D\x9E\x07\r\x02\x02\x9E\x9F\x05|?\x02\x9F\xA0\x05\n\x06\x02\xA0" +
		"\t\x03\x02\x02\x02\xA1\xA2\x075\x02\x02\xA2\xA3\x05\f\x07\x02\xA3\xA4" +
		"\x076\x02\x02\xA4\v\x03\x02\x02\x02\xA5\xA7\x05\x0E\b\x02\xA6\xA5\x03" +
		"\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03" +
		"\x02\x02\x02\xA9\r\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xB2\x05" +
		" \x11\x02\xAC\xB2\x05\"\x12\x02\xAD\xB2\x05&\x14\x02\xAE\xB2\x05\x12\n" +
		"\x02\xAF\xB2\x05\x1A\x0E\x02\xB0\xB2\x05\b\x05\x02\xB1\xAB\x03\x02\x02" +
		"\x02\xB1\xAC\x03\x02\x02\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02" +
		"\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2\x0F\x03\x02\x02" +
		"\x02\xB3\xB7\x05R*\x02\xB4\xB6\x05b2\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9" +
		"\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\x11" +
		"\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x05t;\x02\xBB\xBC\x07" +
		"\x07\x02\x02\xBC\xBF\x05|?\x02\xBD\xBE\x07\x11\x02\x02\xBE\xC0\x05\x10" +
		"\t\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02" +
		"\x02\x02\xC1\xC2\x05\x14\v\x02\xC2\x13\x03\x02\x02\x02\xC3\xC4\x075\x02" +
		"\x02\xC4\xC5\x05\x16\f\x02\xC5\xC6\x076\x02\x02\xC6\x15\x03\x02\x02\x02" +
		"\xC7\xC9\x05\x18\r\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02" +
		"\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\x17\x03\x02\x02\x02" +
		"\xCC\xCA\x03\x02\x02\x02\xCD\xD3\x05 \x11\x02\xCE\xD3\x05\"\x12\x02\xCF" +
		"\xD3\x05&\x14\x02\xD0\xD3\x05\x12\n\x02\xD1\xD3\x05\x1A\x0E\x02\xD2\xCD" +
		"\x03\x02\x02\x02\xD2\xCE\x03\x02\x02\x02\xD2\xCF\x03\x02\x02\x02\xD2\xD0" +
		"\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD5" +
		"\x05t;\x02\xD5\xD6\x07\x10\x02\x02\xD6\xD7\x075\x02\x02\xD7\xDC\x05\x1E" +
		"\x10\x02\xD8\xD9\x07;\x02\x02\xD9\xDB\x05\x1E\x10\x02\xDA\xD8\x03\x02" +
		"\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02" +
		"\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x076" +
		"\x02\x02\xE0\x1B\x03\x02\x02\x02\xE1\xE3\t\x02\x02\x02\xE2\xE1\x03\x02" +
		"\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x07^" +
		"\x02\x02\xE5\x1D\x03\x02\x02\x02\xE6\xE9\x05|?\x02\xE7\xE8\x07F\x02\x02" +
		"\xE8\xEA\x05\x1C\x0F\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02" +
		"\xEA\x1F\x03\x02\x02\x02\xEB\xEC\x05t;\x02\xEC\xED\x07\f\x02\x02\xED\xF0" +
		"\x05|?\x02\xEE\xEF\x07F\x02\x02\xEF\xF1\x05T+\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3\x07\x04\x02" +
		"\x02\xF3!\x03\x02\x02\x02\xF4\xF5\x05t;\x02\xF5\xF6\x07\v\x02\x02\xF6" +
		"\xFB\x05$\x13\x02\xF7\xF8\x07;\x02\x02\xF8\xFA\x05$\x13\x02\xF9\xF7\x03" +
		"\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x07" +
		"\x04\x02\x02\xFF#\x03\x02\x02\x02\u0100\u0101\x052\x1A\x02\u0101%\x03" +
		"\x02\x02\x02\u0102\u0103\x05t;\x02\u0103\u0104\x07\b\x02\x02\u0104\u0105" +
		"\x05|?\x02\u0105\u0107\x079\x02\x02\u0106\u0108\x05(\x15\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
		"\u0109\u010A\x07:\x02\x02\u010A\u010B\x05*\x16\x02\u010B\'\x03\x02\x02" +
		"\x02\u010C\u0111\x05|?\x02\u010D\u010E\x07;\x02\x02\u010E\u0110\x05|?" +
		"\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F" +
		"\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112)\x03\x02\x02\x02\u0113" +
		"\u0111\x03\x02\x02\x02\u0114\u0118\x075\x02\x02\u0115\u0117\x05,\x17\x02" +
		"\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116\x03" +
		"\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A" +
		"\u0118\x03\x02\x02\x02\u011B\u011C\x076\x02\x02\u011C+\x03\x02\x02\x02" +
		"\u011D\u011E\x05.\x18\x02\u011E\u011F\x07\x04\x02\x02\u011F\u0122\x03" +
		"\x02\x02\x02\u0120\u0122\x058\x1D\x02\u0121\u011D\x03\x02\x02\x02\u0121" +
		"\u0120\x03\x02\x02\x02\u0122-\x03\x02\x02\x02\u0123\u0124\x07\v\x02\x02" +
		"\u0124\u0129\x050\x19\x02\u0125\u0126\x07;\x02\x02\u0126\u0128\x050\x19" +
		"\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A/\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012C\u012D\x052\x1A\x02\u012D1\x03\x02\x02\x02" +
		"\u012E\u0133\x05|?\x02\u012F\u0130\x077\x02\x02\u0130\u0132\x078\x02\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0138\x03\x02\x02\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0136\u0137\x07F\x02\x02\u0137\u0139\x054\x1B\x02" +
		"\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u01393\x03\x02" +
		"\x02\x02\u013A\u013D\x056\x1C\x02\u013B\u013D\x05T+\x02\u013C\u013A\x03" +
		"\x02\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D5\x03\x02\x02\x02\u013E" +
		"\u0147\x075\x02\x02\u013F\u0144\x054\x1B\x02\u0140\u0141\x07;\x02\x02" +
		"\u0141\u0143\x054\x1B\x02\u0142\u0140\x03\x02\x02\x02\u0143\u0146\x03" +
		"\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
		"\u0148\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147\u013F\x03\x02" +
		"\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014A\x03\x02\x02\x02\u0149" +
		"\u014B\x07;\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02" +
		"\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x076\x02\x02\u014D7\x03\x02" +
		"\x02\x02\u014E\u018D\x05*\x16\x02\u014F\u0150\x07\x1B\x02\x02\u0150\u0151" +
		"\x079\x02\x02\u0151\u0152\x05T+\x02\u0152\u0153\x07:\x02\x02\u0153\u0156" +
		"\x058\x1D\x02\u0154\u0155\x07\x1C\x02\x02\u0155\u0157\x058\x1D\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u018D\x03\x02" +
		"\x02\x02\u0158\u018D\x05H%\x02\u0159\u015A\x07\x1E\x02\x02\u015A\u015B" +
		"\x079\x02\x02\u015B\u015C\x05T+\x02\u015C\u015D\x07:\x02\x02\u015D\u015E" +
		"\x058\x1D\x02\u015E\u018D\x03\x02\x02\x02\u015F\u0160\x07\x1D\x02\x02" +
		"\u0160\u0161\x058\x1D\x02\u0161\u0162\x07\x1E\x02\x02\u0162\u0163\x07" +
		"9\x02\x02\u0163\u0164\x05T+\x02\u0164\u0165\x07:\x02\x02\u0165\u0166\x07" +
		"\x04\x02\x02\u0166\u018D\x03\x02\x02\x02\u0167\u018D\x05@!\x02\u0168\u0169" +
		"\x07\"\x02\x02\u0169\u016A\x079\x02\x02\u016A\u016B\x05T+\x02\u016B\u016C" +
		"\x07:\x02\x02\u016C\u016D\x075\x02\x02\u016D\u016E\x05:\x1E\x02\u016E" +
		"\u016F\x076\x02\x02\u016F\u018D\x03\x02\x02\x02\u0170\u0172\x07\t\x02" +
		"\x02\u0171\u0173\x05T+\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03" +
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u018D\x07\x04\x02\x02\u0175" +
		"\u0176\x07(\x02\x02\u0176\u0177\x05T+\x02\u0177\u0178\x07\x04\x02\x02" +
		"\u0178\u018D\x03\x02\x02\x02\u0179\u017B\x07 \x02\x02\u017A\u017C\x05" +
		"d3\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D" +
		"\x03\x02\x02\x02\u017D\u018D\x07\x04\x02\x02\u017E\u0180\x07!\x02\x02" +
		"\u017F\u0181\x05d3\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u018D\x07\x04\x02\x02\u0183" +
		"\u0186\x05T+\x02\u0184\u0187\x07\x04\x02\x02\u0185\u0187\b\x1D\x01\x02" +
		"\u0186\u0184\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\u018D\x03" +
		"\x02\x02\x02\u0188\u0189\x07\\\x02\x02\u0189\u018A\x07\x06\x02\x02\u018A" +
		"\u018D\x058\x1D\x02\u018B\u018D\x07\x04\x02\x02\u018C\u014E\x03\x02\x02" +
		"\x02\u018C\u014F\x03\x02\x02\x02\u018C\u0158\x03\x02\x02\x02\u018C\u0159" +
		"\x03\x02\x02\x02\u018C\u015F\x03\x02\x02\x02\u018C\u0167\x03\x02\x02\x02" +
		"\u018C\u0168\x03\x02\x02\x02\u018C\u0170\x03\x02\x02\x02\u018C\u0175\x03" +
		"\x02\x02\x02\u018C\u0179\x03\x02\x02\x02\u018C\u017E\x03\x02\x02\x02\u018C" +
		"\u0183\x03\x02\x02\x02\u018C\u0188\x03\x02\x02\x02\u018C\u018B\x03\x02" +
		"\x02\x02\u018D9\x03\x02\x02\x02\u018E\u0190\x05<\x1F\x02\u018F\u018E\x03" +
		"\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191" +
		"\u0192\x03\x02\x02\x02\u0192;\x03\x02\x02\x02\u0193\u0191\x03\x02\x02" +
		"\x02\u0194\u0198\x05> \x02\u0195\u0197\x05,\x17\x02\u0196\u0195\x03\x02" +
		"\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198" +
		"\u0199\x03\x02\x02\x02\u0199=\x03\x02\x02\x02\u019A\u0198\x03\x02\x02" +
		"\x02\u019B\u019C\x07$\x02\x02\u019C\u019D\x05T+\x02\u019D\u019E\x07\x06" +
		"\x02\x02\u019E\u01A2\x03\x02\x02\x02\u019F\u01A0\x07#\x02\x02\u01A0\u01A2" +
		"\x07\x06\x02\x02\u01A1\u019B\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02" +
		"\u01A2?\x03\x02\x02\x02\u01A3\u01A4\x07%\x02\x02\u01A4\u01AC\x05*\x16" +
		"\x02\u01A5\u01A6\x05B\"\x02\u01A6\u01A7\x07\'\x02\x02\u01A7\u01A8\x05" +
		"*\x16\x02\u01A8\u01AD\x03\x02\x02\x02\u01A9\u01AD\x05B\"\x02\u01AA\u01AB" +
		"\x07\'\x02\x02\u01AB\u01AD\x05*\x16\x02\u01AC\u01A5\x03\x02\x02\x02\u01AC" +
		"\u01A9\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01ADA\x03\x02\x02" +
		"\x02\u01AE\u01B2\x05D#\x02\u01AF\u01B1\x05D#\x02\u01B0\u01AF\x03\x02\x02" +
		"\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3" +
		"\x03\x02\x02\x02\u01B3C\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B5" +
		"\u01B6\x07&\x02\x02\u01B6\u01B7\x079\x02\x02\u01B7\u01B8\x05F$\x02\u01B8" +
		"\u01B9\x07:\x02\x02\u01B9\u01BA\x05*\x16\x02\u01BAE\x03\x02\x02\x02\u01BB" +
		"\u01BE\x05~@\x02\u01BC\u01BD\x07\x19\x02\x02\u01BD\u01BF\x05z>\x02\u01BE" +
		"\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BFG\x03\x02\x02" +
		"\x02\u01C0\u01C1\x07\x1F\x02\x02\u01C1\u01C3\x079\x02\x02\u01C2\u01C4" +
		"\x05J&\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C5\x03\x02\x02\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6\u01C8\x05T+\x02" +
		"\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03" +
		"\x02\x02\x02\u01C9\u01CB\x07\x04\x02\x02\u01CA\u01CC\x05L\'\x02\u01CB" +
		"\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x03\x02" +
		"\x02\x02\u01CD\u01CE\x07:\x02\x02\u01CE\u01CF\x058\x1D\x02\u01CFI\x03" +
		"\x02\x02\x02\u01D0\u01D3\x05.\x18\x02\u01D1\u01D3\x05L\'\x02\u01D2\u01D0" +
		"\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3K\x03\x02\x02\x02\u01D4" +
		"\u01D9\x05T+\x02\u01D5\u01D6\x07;\x02\x02\u01D6\u01D8\x05T+\x02\u01D7" +
		"\u01D5\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03\x02" +
		"\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DAM\x03\x02\x02\x02\u01DB\u01D9" +
		"\x03\x02\x02\x02\u01DC\u01DD\x07-\x02\x02\u01DDO\x03\x02\x02\x02\u01DE" +
		"\u01DF\x070\x02\x02\u01DFQ\x03\x02\x02\x02\u01E0\u01E4\x05d3\x02\u01E1" +
		"\u01E4\x05N(\x02\u01E2\u01E4\x05P)\x02\u01E3\u01E0\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4S\x03\x02\x02" +
		"\x02\u01E5\u01E6\b+\x01\x02\u01E6\u01E7\x07T\x02\x02\u01E7\u0205\x05T" +
		"+\x11\u01E8\u01E9\x07U\x02\x02\u01E9\u0205\x05T+\x10\u01EA\u01EB\x07D" +
		"\x02\x02\u01EB\u0205\x05T+\x0F\u01EC\u01ED\x07E\x02\x02\u01ED\u0205\x05" +
		"T+\x0E\u01EE\u01EF\x07R\x02\x02\u01EF\u0205\x05T+\r\u01F0\u01F1\x07S\x02" +
		"\x02\u01F1\u0205\x05T+\f\u01F2\u01F3\x079\x02\x02\u01F3\u01F4\x05T+\x02" +
		"\u01F4\u01F5\x07:\x02\x02\u01F5\u0205\x03\x02\x02\x02\u01F6\u01FB\x05" +
		"\x10\t\x02\u01F7\u01F8\x06+\x02\x02\u01F8\u01FC\x05V,\x02\u01F9\u01FC" +
		"\x05X-\x02\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F7\x03\x02\x02\x02\u01FB" +
		"\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u0205\x03\x02" +
		"\x02\x02\u01FD\u0205\x05\x80A\x02\u01FE\u0205\x05x=\x02\u01FF\u0205\x05" +
		"h5\x02\u0200\u0205\x05j6\x02\u0201\u0202\x07/\x02\x02\u0202\u0203\x07" +
		"\x03\x02\x02\u0203\u0205\x07\x07\x02\x02\u0204\u01E5\x03\x02\x02\x02\u0204" +
		"\u01E8\x03\x02\x02\x02\u0204\u01EA\x03\x02\x02\x02\u0204\u01EC\x03\x02" +
		"\x02\x02\u0204\u01EE\x03\x02\x02\x02\u0204\u01F0\x03\x02\x02\x02\u0204" +
		"\u01F2\x03\x02\x02\x02\u0204\u01F6\x03\x02\x02\x02\u0204\u01FD\x03\x02" +
		"\x02\x02\u0204\u01FE\x03\x02\x02\x02\u0204\u01FF\x03\x02\x02\x02\u0204" +
		"\u0200\x03\x02\x02\x02\u0204\u0201\x03\x02\x02\x02\u0205\u0248\x03\x02" +
		"\x02\x02\u0206\u0207\f\x1F\x02\x02\u0207\u0208\x07\x05\x02\x02\u0208\u0209" +
		"\x05T+\x02\u0209\u020A\x07\x06\x02\x02\u020A\u020B\x05T+ \u020B\u0247" +
		"\x03\x02\x02\x02\u020C\u020D";
	private static readonly _serializedATNSegment1: string =
		"\f\x1E\x02\x02\u020D\u020E\t\x03\x02\x02\u020E\u0247\x05T+\x1F\u020F\u0210" +
		"\f\x1D\x02\x02\u0210\u0211\t\x04\x02\x02\u0211\u0247\x05T+\x1E\u0212\u0213" +
		"\f\x1C\x02\x02\u0213\u0214\x07=\x02\x02\u0214\u0247\x05T+\x1D\u0215\u0216" +
		"\f\x1B\x02\x02\u0216\u0217\x07P\x02\x02\u0217\u0247\x05T+\x1C\u0218\u0219" +
		"\f\x1A\x02\x02\u0219\u021A\x07A\x02\x02\u021A\u0247\x05T+\x1B\u021B\u021C" +
		"\f\x19\x02\x02\u021C\u021D\t\x05\x02\x02\u021D\u0247\x05T+\x1A\u021E\u021F" +
		"\f\x16\x02\x02\u021F\u0220\x05\\/\x02\u0220\u0221\x05T+\x17\u0221\u0247" +
		"\x03\x02\x02\x02\u0222\u0223\f\x15\x02\x02\u0223\u0224\x05^0\x02\u0224" +
		"\u0225\x05T+\x16\u0225\u0247\x03\x02\x02\x02\u0226\u0227\f\x14\x02\x02" +
		"\u0227\u0228\t\x02\x02\x02\u0228\u0247\x05T+\x15\u0229\u022A\f\x13\x02" +
		"\x02\u022A\u022B\t\x06\x02\x02\u022B\u0247\x05T+\x14\u022C\u022D\f\x12" +
		"\x02\x02\u022D\u022E\x05`1\x02\u022E\u022F\x05T+\x13\u022F\u0247\x03\x02" +
		"\x02\x02\u0230\u0231\f\v\x02\x02\u0231\u0232\x07F\x02\x02\u0232\u0247" +
		"\x05T+\v\u0233\u0234\f\n\x02\x02\u0234\u0235\x05Z.\x02\u0235\u0236\x05" +
		"T+\n\u0236\u0247\x03\x02\x02\x02\u0237\u0238\f\"\x02\x02\u0238\u0247\x07" +
		"D\x02\x02\u0239\u023A\f!\x02\x02\u023A\u0247\x07E\x02\x02\u023B\u023C" +
		"\f \x02\x02\u023C\u023D\x077\x02\x02\u023D\u023E\x05T+\x02\u023E\u023F" +
		"\x078\x02\x02\u023F\u0247\x03\x02\x02\x02\u0240\u0241\f\x18\x02\x02\u0241" +
		"\u0242\x07\x1A\x02\x02\u0242\u0247\x05x=\x02\u0243\u0244\f\x17\x02\x02" +
		"\u0244\u0245\x07\x19\x02\x02\u0245\u0247\x05z>\x02\u0246\u0206\x03\x02" +
		"\x02\x02\u0246\u020C\x03\x02\x02\x02\u0246\u020F\x03\x02\x02\x02\u0246" +
		"\u0212\x03\x02\x02\x02\u0246\u0215\x03\x02\x02\x02\u0246\u0218\x03\x02" +
		"\x02\x02\u0246\u021B\x03\x02\x02\x02\u0246\u021E\x03\x02\x02\x02\u0246" +
		"\u0222\x03\x02\x02\x02\u0246\u0226\x03\x02\x02\x02\u0246\u0229\x03\x02" +
		"\x02\x02\u0246\u022C\x03\x02\x02\x02\u0246\u0230\x03\x02\x02\x02\u0246" +
		"\u0233\x03\x02\x02\x02\u0246\u0237\x03\x02\x02\x02\u0246\u0239\x03\x02" +
		"\x02\x02\u0246\u023B\x03\x02\x02\x02\u0246\u0240\x03\x02\x02\x02\u0246" +
		"\u0243\x03\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02" +
		"\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249U\x03\x02\x02\x02\u024A\u0248" +
		"\x03\x02\x02\x02\u024B\u024C\x07\x03\x02\x02\u024C\u024D\x07\x07\x02\x02" +
		"\u024DW\x03\x02\x02\x02\u024E\u024F\x07\x03\x02\x02\u024F\u0253\x07\\" +
		"\x02\x02\u0250\u0251\x07\x03\x02\x02\u0251\u0253\x07.\x02\x02\u0252\u024E" +
		"\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02" +
		"\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x05f4\x02\u0255Y\x03\x02\x02" +
		"\x02\u0256\u0268\x07I\x02\x02\u0257\u0268\x07J\x02\x02\u0258\u0268\x07" +
		"K\x02\x02\u0259\u0268\x07L\x02\x02\u025A\u0268\x07M\x02\x02\u025B\u0268" +
		"\x07N\x02\x02\u025C\u0268\x07O\x02\x02\u025D\u025E\x07>\x02\x02\u025E" +
		"\u025F\x07>\x02\x02\u025F\u0268\x07F\x02\x02\u0260\u0261\x07?\x02\x02" +
		"\u0261\u0262\x07?\x02\x02\u0262\u0263\x07?\x02\x02\u0263\u0268\x07F\x02" +
		"\x02\u0264\u0265\x07?\x02\x02\u0265\u0266\x07?\x02\x02\u0266\u0268\x07" +
		"F\x02\x02\u0267\u0256\x03\x02\x02\x02\u0267\u0257\x03\x02\x02\x02\u0267" +
		"\u0258\x03\x02\x02\x02\u0267\u0259\x03\x02\x02\x02\u0267\u025A\x03\x02" +
		"\x02\x02\u0267\u025B\x03\x02\x02\x02\u0267\u025C\x03\x02\x02\x02\u0267" +
		"\u025D\x03\x02\x02\x02\u0267\u0260\x03\x02\x02\x02\u0267\u0264\x03\x02" +
		"\x02\x02\u0268[\x03\x02\x02\x02\u0269\u026A\x07>\x02\x02\u026A\u0270\x07" +
		"F\x02\x02\u026B\u026C\x07?\x02\x02\u026C\u0270\x07F\x02\x02\u026D\u0270" +
		"\x07>\x02\x02\u026E\u0270\x07?\x02\x02\u026F\u0269\x03\x02\x02\x02\u026F" +
		"\u026B\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02" +
		"\x02\x02\u0270]\x03\x02\x02\x02\u0271\u0272\x07>\x02\x02\u0272\u0279\x07" +
		">\x02\x02\u0273\u0274\x07?\x02\x02\u0274\u0275\x07?\x02\x02\u0275\u0279" +
		"\x07?\x02\x02\u0276\u0277\x07?\x02\x02\u0277\u0279\x07?\x02\x02\u0278" +
		"\u0271\x03\x02\x02\x02\u0278\u0273\x03\x02\x02\x02\u0278\u0276\x03\x02" +
		"\x02\x02\u0279_\x03\x02\x02\x02\u027A\u027B\t\x07\x02\x02\u027Ba\x03\x02" +
		"\x02\x02\u027C\u027D\x07\x03\x02\x02\u027D\u027E\x05d3\x02\u027Ec\x03" +
		"\x02\x02\x02\u027F\u0280\x05~@\x02\u0280e\x03\x02\x02\x02\u0281\u0282" +
		"\x05p9\x02\u0282g\x03\x02\x02\x02\u0283\u0284\x07\n\x02\x02\u0284\u0285" +
		"\x05\x10\t\x02\u0285\u0287\x05p9\x02\u0286\u0288\x05\x14\v\x02\u0287\u0286" +
		"\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288i\x03\x02\x02\x02\u0289" +
		"\u028A\x07\n\x02\x02\u028A\u028B\x077\x02\x02\u028B\u028C\x05T+\x02\u028C" +
		"\u028D\x078\x02\x02\u028D\u029C\x03\x02\x02\x02\u028E\u0297\x077\x02\x02" +
		"\u028F\u0294\x05T+\x02\u0290\u0291\x07;\x02\x02\u0291\u0293\x05T+\x02" +
		"\u0292\u0290\x03\x02\x02\x02\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03" +
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296" +
		"\u0294\x03\x02\x02\x02\u0297\u028F\x03\x02\x02\x02\u0297\u0298\x03\x02" +
		"\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029C\x078\x02\x02\u029A\u029C" +
		"\x05l7\x02\u029B\u0289\x03\x02\x02\x02\u029B\u028E\x03\x02\x02\x02\u029B" +
		"\u029A\x03\x02\x02\x02\u029Ck\x03\x02\x02\x02\u029D\u029E\x07\n\x02\x02" +
		"\u029E\u029F\x075\x02\x02\u029F\u02AD\x076\x02\x02\u02A0\u02A9\x075\x02" +
		"\x02\u02A1\u02A6\x05n8\x02\u02A2\u02A3\x07;\x02\x02\u02A3\u02A5\x05n8" +
		"\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4" +
		"\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02" +
		"\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02A1\x03\x02\x02\x02\u02A9\u02AA\x03" +
		"\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x076\x02\x02\u02AC" +
		"\u029D\x03\x02\x02\x02\u02AC\u02A0\x03\x02\x02\x02\u02ADm\x03\x02\x02" +
		"\x02\u02AE\u02AF\x05T+\x02\u02AF\u02B0\x07@\x02\x02\u02B0\u02B1\x05T+" +
		"\x02\u02B1o\x03\x02\x02\x02\u02B2\u02B4\x079\x02\x02\u02B3\u02B5\x05r" +
		":\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6" +
		"\x03\x02\x02\x02\u02B6\u02B7\x07:\x02\x02\u02B7q\x03\x02\x02\x02\u02B8" +
		"\u02BD\x05T+\x02\u02B9\u02BA\x07;\x02\x02\u02BA\u02BC\x05T+\x02\u02BB" +
		"\u02B9\x03\x02\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02" +
		"\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BEs\x03\x02\x02\x02\u02BF\u02BD" +
		"\x03\x02\x02\x02\u02C0\u02C2\x05v<\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1" +
		"\u02C2\x03\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C5\x07\x18" +
		"\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5" +
		"\u02C7\x03\x02\x02\x02\u02C6\u02C8\t\b\x02\x02\u02C7\u02C6\x03\x02\x02" +
		"\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8u\x03\x02\x02\x02\u02C9\u02CA\x07" +
		"9\x02\x02\u02CA\u02CB\x05x=\x02\u02CB\u02CC\x07:\x02\x02\u02CCw\x03\x02" +
		"\x02\x02\u02CD\u02CE\x07\x06\x02\x02\u02CE\u02CF\x05d3\x02\u02CFy\x03" +
		"\x02\x02\x02\u02D0\u02D5\x05|?\x02\u02D1\u02D2\x07\x03\x02\x02\u02D2\u02D4" +
		"\x05|?\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5" +
		"\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6{\x03\x02\x02" +
		"\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02D9\x05~@\x02\u02D9}\x03\x02" +
		"\x02\x02\u02DA\u02DB\x07\\\x02\x02\u02DB\x7F\x03\x02\x02\x02\u02DC\u02DD" +
		"\t\t\x02\x02\u02DD\x81\x03\x02\x02\x02B\x85\x92\x98\xA8\xB1\xB7\xBF\xCA" +
		"\xD2\xDC\xE2\xE9\xF0\xFB\u0107\u0111\u0118\u0121\u0129\u0133\u0138\u013C" +
		"\u0144\u0147\u014A\u0156\u0172\u017B\u0180\u0186\u018C\u0191\u0198\u01A1" +
		"\u01AC\u01B2\u01BE\u01C3\u01C7\u01CB\u01D2\u01D9\u01E3\u01FB\u0204\u0246" +
		"\u0248\u0252\u0267\u026F\u0278\u0287\u0294\u0297\u029B\u02A6\u02A9\u02AC" +
		"\u02B4\u02BD\u02C1\u02C4\u02C7\u02D5";
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
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
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
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
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
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.LPAREN, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.RPAREN, 0); }
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
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
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
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
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
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
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


export class ThisExpressionContext extends ParserRuleContext {
	public SELF(): TerminalNode { return this.getToken(MonkeyCParser.SELF, 0); }
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


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PLUSPLUS(): TerminalNode { return this.getToken(MonkeyCParser.PLUSPLUS, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public SUBSUB(): TerminalNode { return this.getToken(MonkeyCParser.SUBSUB, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
}
export class ElementAccessExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LBRACKET(): TerminalNode { return this.getToken(MonkeyCParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(MonkeyCParser.RBRACKET, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterElementAccessExpression) {
			listener.enterElementAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitElementAccessExpression) {
			listener.exitElementAccessExpression(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QUES(): TerminalNode { return this.getToken(MonkeyCParser.QUES, 0); }
	public COLON(): TerminalNode { return this.getToken(MonkeyCParser.COLON, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BARBAR(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.BARBAR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.OR, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public AMPAMP(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.AMPAMP, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.AND, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BAR(): TerminalNode { return this.getToken(MonkeyCParser.BAR, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(MonkeyCParser.CARET, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public AMP(): TerminalNode { return this.getToken(MonkeyCParser.AMP, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQEQ, 0); }
	public BANGEQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.BANGEQ, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class HasExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public HAS(): TerminalNode { return this.getToken(MonkeyCParser.HAS, 0); }
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class InstanceofExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(MonkeyCParser.INSTANCEOF, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterInstanceofExpression) {
			listener.enterInstanceofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitInstanceofExpression) {
			listener.exitInstanceofExpression(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public relationalOp(): RelationalOpContext {
		return this.getRuleContext(0, RelationalOpContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public shiftOp(): ShiftOpContext {
		return this.getRuleContext(0, ShiftOpContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PLUS, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUB, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PERCENT, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class BitwiseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public bitwiseOperator(): BitwiseOperatorContext {
		return this.getRuleContext(0, BitwiseOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
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
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public PLUS(): TerminalNode { return this.getToken(MonkeyCParser.PLUS, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public SUB(): TerminalNode { return this.getToken(MonkeyCParser.SUB, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PLUSPLUS(): TerminalNode { return this.getToken(MonkeyCParser.PLUSPLUS, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public SUBSUB(): TerminalNode { return this.getToken(MonkeyCParser.SUBSUB, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public TILDE(): TerminalNode { return this.getToken(MonkeyCParser.TILDE, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public BANG(): TerminalNode { return this.getToken(MonkeyCParser.BANG, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(MonkeyCParser.EQ, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(MonkeyCParser.LPAREN, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MonkeyCParser.RPAREN, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
}
export class GeneralFullyQualifiedReferenceExpressionContext extends SingleExpressionContext {
	public fullyQualifiedReferenceExpression(): FullyQualifiedReferenceExpressionContext {
		return this.getRuleContext(0, FullyQualifiedReferenceExpressionContext);
	}
	public classAccess(): ClassAccessContext | undefined {
		return this.tryGetRuleContext(0, ClassAccessContext);
	}
	public methodInvocationExpression(): MethodInvocationExpressionContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterGeneralFullyQualifiedReferenceExpression) {
			listener.enterGeneralFullyQualifiedReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitGeneralFullyQualifiedReferenceExpression) {
			listener.exitGeneralFullyQualifiedReferenceExpression(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
}
export class SymbolExpressionContext extends SingleExpressionContext {
	public symbol(): SymbolContext {
		return this.getRuleContext(0, SymbolContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterSymbolExpression) {
			listener.enterSymbolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitSymbolExpression) {
			listener.exitSymbolExpression(this);
		}
	}
}
export class ObjectCreatorExpressionContext extends SingleExpressionContext {
	public objectCreator(): ObjectCreatorContext {
		return this.getRuleContext(0, ObjectCreatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterObjectCreatorExpression) {
			listener.enterObjectCreatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitObjectCreatorExpression) {
			listener.exitObjectCreatorExpression(this);
		}
	}
}
export class ArrayCreatorExpressionContext extends SingleExpressionContext {
	public arrayCreator(): ArrayCreatorContext {
		return this.getRuleContext(0, ArrayCreatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterArrayCreatorExpression) {
			listener.enterArrayCreatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitArrayCreatorExpression) {
			listener.exitArrayCreatorExpression(this);
		}
	}
}
export class VoidDotClassExpressionContext extends SingleExpressionContext {
	public VOID(): TerminalNode { return this.getToken(MonkeyCParser.VOID, 0); }
	public DOT(): TerminalNode { return this.getToken(MonkeyCParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(MonkeyCParser.CLASS, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterVoidDotClassExpression) {
			listener.enterVoidDotClassExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitVoidDotClassExpression) {
			listener.exitVoidDotClassExpression(this);
		}
	}
}


export class ClassAccessContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(MonkeyCParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(MonkeyCParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_classAccess; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterClassAccess) {
			listener.enterClassAccess(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitClassAccess) {
			listener.exitClassAccess(this);
		}
	}
}


export class MethodInvocationExpressionContext extends ParserRuleContext {
	public methodInvocation(): MethodInvocationContext {
		return this.getRuleContext(0, MethodInvocationContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.DOT, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.IDENTIFIER, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_methodInvocationExpression; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterMethodInvocationExpression) {
			listener.enterMethodInvocationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitMethodInvocationExpression) {
			listener.exitMethodInvocationExpression(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
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
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.EQ, 0); }
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


export class MethodInvocationContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MonkeyCParser.RULE_methodInvocation; }
	// @Override
	public enterRule(listener: MonkeyCListener): void {
		if (listener.enterMethodInvocation) {
			listener.enterMethodInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: MonkeyCListener): void {
		if (listener.exitMethodInvocation) {
			listener.exitMethodInvocation(this);
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
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
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
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public EQGT(): TerminalNode { return this.getToken(MonkeyCParser.EQGT, 0); }
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
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
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
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.STATIC, 0); }
	public HIDDEN_TOKEN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.HIDDEN_TOKEN, 0); }
	public PUBLIC_TOKEN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PUBLIC_TOKEN, 0); }
	public PROTECTED_TOKEN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PROTECTED_TOKEN, 0); }
	public PRIVATE_TOKEN(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.PRIVATE_TOKEN, 0); }
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
	public STRING(): TerminalNode | undefined { return this.tryGetToken(MonkeyCParser.STRING, 0); }
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


