// Generated from src/MonkeyC.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MonkeyCLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"DOT", "SEMI", "QUES", "COLON", "CLASS", "FUNCTION", "RETURN", "NEW", 
		"VAR", "CONST", "MODULE", "USING", "AS", "ENUM", "EXTENDS", "NULL", "NATIVE", 
		"HIDDEN_TOKEN", "STATIC", "PRIVATE", "PROTECTED", "PUBLIC", "INSTANCEOF", 
		"HAS", "IF", "ELSE", "DO", "WHILE", "FOR", "BREAK", "CONTINUE", "SWITCH", 
		"DEFAULT", "CASE", "TRY", "CATCH", "FINALLY", "THROW", "AND", "OR", "TRUE", 
		"FALSE", "THIS", "SELF", "SUPER", "VOID", "BLING", "MULTI_LINE_COMMENT_START", 
		"MULTI_LINE_COMMENT_END", "STRING_A", "STRING_B", "LBRACE", "RBRACE", 
		"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COMMA", "STAR", "BAR", "LT", 
		"GT", "EQGT", "AMP", "BARBAR", "AMPAMP", "PLUSPLUS", "SUBSUB", "EQ", "EQEQ", 
		"BANGEQ", "PLUSEQ", "SUBEQ", "STAREQ", "SLASHEQ", "AMPEQ", "CARETEQ", 
		"PERCENTEQ", "CARET", "PERCENT", "TILDE", "BANG", "PLUS", "SUB", "SLASH", 
		"WHITE_SPACE", "SINGLE_LINE_COMMENT", "SINGLE_LINE_DOC_COMMENT", "BLOCK_COMMENT", 
		"IDENTIFIER", "LONGLITERAL", "INTLITERAL", "HEX_LITERAL", "FLOATLITERAL", 
		"DOUBLELITERAL", "DoubleStringCharacter", "LineContinuation", "EscapeSequence", 
		"CharacterEscapeSequence", "HexEscapeSequence", "UnicodeEscapeSequence", 
		"ExtendedUnicodeEscapeSequence", "SingleEscapeCharacter", "HexDigit", 
		"NonEscapeCharacter", "CHARLITERAL",
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
		"DOUBLELITERAL", "CHARLITERAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MonkeyCLexer._LITERAL_NAMES, MonkeyCLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MonkeyCLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MonkeyCLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MonkeyC.g4"; }

	// @Override
	public get ruleNames(): string[] { return MonkeyCLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MonkeyCLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MonkeyCLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MonkeyCLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02b\u02EE\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#" +
		"\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x030\x030\x031\x031\x03" +
		"1\x032\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x03" +
		"8\x038\x039\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03" +
		"?\x03?\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03" +
		"D\x03D\x03E\x03E\x03E\x03F\x03F\x03G\x03G\x03G\x03H\x03H\x03H\x03I\x03" +
		"I\x03I\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x03L\x03M\x03M\x03M\x03" +
		"N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03" +
		"T\x03T\x03U\x03U\x03V\x03V\x03W\x06W\u0239\nW\rW\x0EW\u023A\x03W\x03W" +
		"\x03X\x03X\x03X\x03X\x03X\x07X\u0244\nX\fX\x0EX\u0247\vX\x03X\x03X\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x07Y\u0250\nY\fY\x0EY\u0253\vY\x03Y\x03Y\x03Z\x03" +
		"Z\x03Z\x03Z\x07Z\u025B\nZ\fZ\x0EZ\u025E\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"[\x03[\x07[\u0267\n[\f[\x0E[\u026A\v[\x03\\\x06\\\u026D\n\\\r\\\x0E\\" +
		"\u026E\x03\\\x03\\\x03]\x06]\u0274\n]\r]\x0E]\u0275\x03^\x03^\x03^\x07" +
		"^\u027B\n^\f^\x0E^\u027E\v^\x03_\x06_\u0281\n_\r_\x0E_\u0282\x03_\x03" +
		"_\x07_\u0287\n_\f_\x0E_\u028A\v_\x03_\x03_\x06_\u028E\n_\r_\x0E_\u028F" +
		"\x03_\x05_\u0293\n_\x05_\u0295\n_\x03`\x06`\u0298\n`\r`\x0E`\u0299\x03" +
		"`\x07`\u029D\n`\f`\x0E`\u02A0\v`\x03`\x03`\x06`\u02A4\n`\r`\x0E`\u02A5" +
		"\x03`\x05`\u02A9\n`\x05`\u02AB\n`\x03a\x03a\x03a\x03a\x05a\u02B1\na\x03" +
		"b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x05c\u02BB\nc\x03d\x03d\x05d\u02BF" +
		"\nd\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x06f\u02CF\nf\rf\x0Ef\u02D0\x03f\x03f\x05f\u02D5\nf\x03g\x03g\x03g\x06" +
		"g\u02DA\ng\rg\x0Eg\u02DB\x03g\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x03k" +
		"\x03k\x07k\u02E8\nk\fk\x0Ek\u02EB\vk\x03k\x03k\x03\u025C\x02\x02l\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S" +
		"\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x02" +
		"6k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02" +
		"A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02" +
		"I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02" +
		"Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02" +
		"Y\xB1\x02Z\xB3\x02[\xB5\x02\\\xB7\x02]\xB9\x02^\xBB\x02_\xBD\x02`\xBF" +
		"\x02a\xC1\x02\x02\xC3\x02\x02\xC5\x02\x02\xC7\x02\x02\xC9\x02\x02\xCB" +
		"\x02\x02\xCD\x02\x02\xCF\x02\x02\xD1\x02\x02\xD3\x02\x02\xD5\x02b\x03" +
		"\x02\x12\x05\x02\v\f\x0E\x0F\"\"\x03\x02##\x05\x02\f\f\x0F\x0F\u202A\u202B" +
		"\x06\x02&&C\\aac|\x07\x02&&2;C\\aac|\x03\x022;\x04\x02NNnn\x04\x02ZZz" +
		"z\x05\x022;CHch\x04\x02HHhh\x04\x02FFff\x06\x02\f\f\x0F\x0F$$^^\v\x02" +
		"$$))^^ddhhppttvvxx\x06\x022;CHaach\x0E\x02\f\f\x0F\x0F$$))2;^^ddhhppt" +
		"tvxzz\x04\x02))``\x02\u0300\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02" +
		"[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02" +
		"\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02" +
		"\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03" +
		"\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02" +
		"\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02" +
		"}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02" +
		"\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02" +
		"\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02" +
		"\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02" +
		"\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02" +
		"\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02" +
		"\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02" +
		"\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB\x03\x02\x02\x02\x02" +
		"\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1\x03\x02\x02\x02\x02" +
		"\xB3\x03\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7\x03\x02\x02\x02\x02" +
		"\xB9\x03\x02\x02\x02\x02\xBB\x03\x02\x02\x02\x02\xBD\x03\x02\x02\x02\x02" +
		"\xBF\x03\x02\x02\x02\x02\xD5\x03\x02\x02\x02\x03\xD7\x03\x02\x02\x02\x05" +
		"\xD9\x03\x02\x02\x02\x07\xDB\x03\x02\x02\x02\t\xDD\x03\x02\x02\x02\v\xDF" +
		"\x03\x02\x02\x02\r\xE5\x03\x02\x02\x02\x0F\xEE\x03\x02\x02\x02\x11\xF5" +
		"\x03\x02\x02\x02\x13\xF9\x03\x02\x02\x02\x15\xFD\x03\x02\x02\x02\x17\u0103" +
		"\x03\x02\x02\x02\x19\u010A\x03\x02\x02\x02\x1B\u0110\x03\x02\x02\x02\x1D" +
		"\u0113\x03\x02\x02\x02\x1F\u0118\x03\x02\x02\x02!\u0120\x03\x02\x02\x02" +
		"#\u0125\x03\x02\x02\x02%\u012C\x03\x02\x02\x02\'\u0133\x03\x02\x02\x02" +
		")\u013A\x03\x02\x02\x02+\u0142\x03\x02\x02\x02-\u014C\x03\x02\x02\x02" +
		"/\u0153\x03\x02\x02\x021\u015E\x03\x02\x02\x023\u0162\x03\x02\x02\x02" +
		"5\u0165\x03\x02\x02\x027\u016A\x03\x02\x02\x029\u016D\x03\x02\x02\x02" +
		";\u0173\x03\x02\x02\x02=\u0177\x03\x02\x02\x02?\u017D\x03\x02\x02\x02" +
		"A\u0186\x03\x02\x02\x02C\u018D\x03\x02\x02\x02E\u0195\x03\x02\x02\x02" +
		"G\u019A\x03\x02\x02\x02I\u019E\x03\x02\x02\x02K\u01A4\x03\x02\x02\x02" +
		"M\u01AC\x03\x02\x02\x02O\u01B2\x03\x02\x02\x02Q\u01B6\x03\x02\x02\x02" +
		"S\u01B9\x03\x02\x02\x02U\u01BE\x03\x02\x02\x02W\u01C4\x03\x02\x02\x02" +
		"Y\u01C9\x03\x02\x02\x02[\u01CE\x03\x02\x02\x02]\u01D4\x03\x02\x02\x02" +
		"_\u01D9\x03\x02\x02\x02a\u01DB\x03\x02\x02\x02c\u01DE\x03\x02\x02\x02" +
		"e\u01E1\x03\x02\x02\x02g\u01E3\x03\x02\x02\x02i\u01E5\x03\x02\x02\x02" +
		"k\u01E7\x03\x02\x02\x02m\u01E9\x03\x02\x02\x02o\u01EB\x03\x02\x02\x02" +
		"q\u01ED\x03\x02\x02\x02s\u01EF\x03\x02\x02\x02u\u01F1\x03\x02\x02\x02" +
		"w\u01F3\x03\x02\x02\x02y\u01F5\x03\x02\x02\x02{\u01F7\x03\x02\x02\x02" +
		"}\u01F9\x03\x02\x02\x02\x7F\u01FB\x03\x02\x02\x02\x81\u01FE\x03\x02\x02" +
		"\x02\x83\u0200\x03\x02\x02\x02\x85\u0203\x03\x02\x02\x02\x87\u0206\x03" +
		"\x02\x02\x02\x89\u0209\x03\x02\x02\x02\x8B\u020C\x03\x02\x02\x02\x8D\u020E" +
		"\x03\x02\x02\x02\x8F\u0211\x03\x02\x02\x02\x91\u0214\x03\x02\x02\x02\x93" +
		"\u0217\x03\x02\x02\x02\x95\u021A\x03\x02\x02\x02\x97\u021D\x03\x02\x02" +
		"\x02\x99\u0220\x03\x02\x02\x02\x9B\u0223\x03\x02\x02\x02\x9D\u0226\x03" +
		"\x02\x02\x02\x9F\u0229\x03\x02\x02\x02\xA1\u022B\x03\x02\x02\x02\xA3\u022D" +
		"\x03\x02\x02\x02\xA5\u022F\x03\x02\x02\x02\xA7\u0231\x03\x02\x02\x02\xA9" +
		"\u0233\x03\x02\x02\x02\xAB\u0235\x03\x02\x02\x02\xAD\u0238\x03\x02\x02" +
		"\x02\xAF\u023E\x03\x02\x02\x02\xB1\u024A\x03\x02\x02\x02\xB3\u0256\x03" +
		"\x02\x02\x02\xB5\u0264\x03\x02\x02\x02\xB7\u026C\x03\x02\x02\x02\xB9\u0273" +
		"\x03\x02\x02\x02\xBB\u0277\x03\x02\x02\x02\xBD\u0294\x03\x02\x02\x02\xBF" +
		"\u02AA\x03\x02\x02\x02\xC1\u02B0\x03\x02\x02\x02\xC3\u02B2\x03\x02\x02" +
		"\x02\xC5\u02BA\x03\x02\x02\x02\xC7\u02BE\x03\x02\x02\x02\xC9\u02C0\x03" +
		"\x02\x02\x02\xCB\u02D4\x03\x02\x02\x02\xCD\u02D6\x03\x02\x02\x02\xCF\u02DF" +
		"\x03\x02\x02\x02\xD1\u02E1\x03\x02\x02\x02\xD3\u02E3\x03\x02\x02\x02\xD5" +
		"\u02E5\x03\x02\x02\x02\xD7\xD8\x070\x02\x02\xD8\x04\x03\x02\x02\x02\xD9" +
		"\xDA\x07=\x02\x02\xDA\x06\x03\x02\x02\x02\xDB\xDC\x07A\x02\x02\xDC\b\x03" +
		"\x02\x02\x02\xDD\xDE\x07<\x02\x02\xDE\n\x03\x02\x02\x02\xDF\xE0\x07e\x02" +
		"\x02\xE0\xE1\x07n\x02\x02\xE1\xE2\x07c\x02\x02\xE2\xE3\x07u\x02\x02\xE3" +
		"\xE4\x07u\x02\x02\xE4\f\x03\x02\x02\x02\xE5\xE6\x07h\x02\x02\xE6\xE7\x07" +
		"w\x02\x02\xE7\xE8\x07p\x02\x02\xE8\xE9\x07e\x02\x02\xE9\xEA\x07v\x02\x02" +
		"\xEA\xEB\x07k\x02\x02\xEB\xEC\x07q\x02\x02\xEC\xED\x07p\x02\x02\xED\x0E" +
		"\x03\x02\x02\x02\xEE\xEF\x07t\x02\x02\xEF\xF0\x07g\x02\x02\xF0\xF1\x07" +
		"v\x02\x02\xF1\xF2\x07w\x02\x02\xF2\xF3\x07t\x02\x02\xF3\xF4\x07p\x02\x02" +
		"\xF4\x10\x03\x02\x02\x02\xF5\xF6\x07p\x02\x02\xF6\xF7\x07g\x02\x02\xF7" +
		"\xF8\x07y\x02\x02\xF8\x12\x03\x02\x02\x02\xF9\xFA\x07x\x02\x02\xFA\xFB" +
		"\x07c\x02\x02\xFB\xFC\x07t\x02\x02\xFC\x14\x03\x02\x02\x02\xFD\xFE\x07" +
		"e\x02\x02\xFE\xFF\x07q\x02\x02\xFF\u0100\x07p\x02\x02\u0100\u0101\x07" +
		"u\x02\x02\u0101\u0102\x07v\x02\x02\u0102\x16\x03\x02\x02\x02\u0103\u0104" +
		"\x07o\x02\x02\u0104\u0105\x07q\x02\x02\u0105\u0106\x07f\x02\x02\u0106" +
		"\u0107\x07w\x02\x02\u0107\u0108\x07n\x02\x02\u0108\u0109\x07g\x02\x02" +
		"\u0109\x18\x03\x02\x02\x02\u010A\u010B\x07w\x02\x02\u010B\u010C\x07u\x02" +
		"\x02\u010C\u010D\x07k\x02\x02\u010D\u010E\x07p\x02\x02\u010E\u010F\x07" +
		"i\x02\x02\u010F\x1A\x03\x02\x02\x02\u0110\u0111\x07c\x02\x02\u0111\u0112" +
		"\x07u\x02\x02\u0112\x1C\x03\x02\x02\x02\u0113\u0114\x07g\x02\x02\u0114" +
		"\u0115\x07p\x02\x02\u0115\u0116\x07w\x02\x02\u0116\u0117\x07o\x02\x02" +
		"\u0117\x1E\x03\x02\x02\x02\u0118\u0119\x07g\x02\x02\u0119\u011A\x07z\x02" +
		"\x02\u011A\u011B\x07v\x02\x02\u011B\u011C\x07g\x02\x02\u011C\u011D\x07" +
		"p\x02\x02\u011D\u011E\x07f\x02\x02\u011E\u011F\x07u\x02\x02\u011F \x03" +
		"\x02\x02\x02\u0120\u0121\x07p\x02\x02\u0121\u0122\x07w\x02\x02\u0122\u0123" +
		"\x07n\x02\x02\u0123\u0124\x07n\x02\x02\u0124\"\x03\x02\x02\x02\u0125\u0126" +
		"\x07p\x02\x02\u0126\u0127\x07c\x02\x02\u0127\u0128\x07v\x02\x02\u0128" +
		"\u0129\x07k\x02\x02\u0129\u012A\x07x\x02\x02\u012A\u012B\x07g\x02\x02" +
		"\u012B$\x03\x02\x02\x02\u012C\u012D\x07j\x02\x02\u012D\u012E\x07k\x02" +
		"\x02\u012E\u012F\x07f\x02\x02\u012F\u0130\x07f\x02\x02\u0130\u0131\x07" +
		"g\x02\x02\u0131\u0132\x07p\x02\x02\u0132&\x03\x02\x02\x02\u0133\u0134" +
		"\x07u\x02\x02\u0134\u0135\x07v\x02\x02\u0135\u0136\x07c\x02\x02\u0136" +
		"\u0137\x07v\x02\x02\u0137\u0138\x07k\x02\x02\u0138\u0139\x07e\x02\x02" +
		"\u0139(\x03\x02\x02\x02\u013A\u013B\x07r\x02\x02\u013B\u013C\x07t\x02" +
		"\x02\u013C\u013D\x07k\x02\x02\u013D\u013E\x07x\x02\x02\u013E\u013F\x07" +
		"c\x02\x02\u013F\u0140\x07v\x02\x02\u0140\u0141\x07g\x02\x02\u0141*\x03" +
		"\x02\x02\x02\u0142\u0143\x07r\x02\x02\u0143\u0144\x07t\x02\x02\u0144\u0145" +
		"\x07q\x02\x02\u0145\u0146\x07v\x02\x02\u0146\u0147\x07g\x02\x02\u0147" +
		"\u0148\x07e\x02\x02\u0148\u0149\x07v\x02\x02\u0149\u014A\x07g\x02\x02" +
		"\u014A\u014B\x07f\x02\x02\u014B,\x03\x02\x02\x02\u014C\u014D\x07r\x02" +
		"\x02\u014D\u014E\x07w\x02\x02\u014E\u014F\x07d\x02\x02\u014F\u0150\x07" +
		"n\x02\x02\u0150\u0151\x07k\x02\x02\u0151\u0152\x07e\x02\x02\u0152.\x03" +
		"\x02\x02\x02\u0153\u0154\x07k\x02\x02\u0154\u0155\x07p\x02\x02\u0155\u0156" +
		"\x07u\x02\x02\u0156\u0157\x07v\x02\x02\u0157\u0158\x07c\x02\x02\u0158" +
		"\u0159\x07p\x02\x02\u0159\u015A\x07e\x02\x02\u015A\u015B\x07g\x02\x02" +
		"\u015B\u015C\x07q\x02\x02\u015C\u015D\x07h\x02\x02\u015D0\x03\x02\x02" +
		"\x02\u015E\u015F\x07j\x02\x02\u015F\u0160\x07c\x02\x02\u0160\u0161\x07" +
		"u\x02\x02\u01612\x03\x02\x02\x02\u0162\u0163\x07k\x02\x02\u0163\u0164" +
		"\x07h\x02\x02\u01644\x03\x02\x02\x02\u0165\u0166\x07g\x02\x02\u0166\u0167" +
		"\x07n\x02\x02\u0167\u0168\x07u\x02\x02\u0168\u0169\x07g\x02\x02\u0169" +
		"6\x03\x02\x02\x02\u016A\u016B\x07f\x02\x02\u016B\u016C\x07q\x02\x02\u016C" +
		"8\x03\x02\x02\x02\u016D\u016E\x07y\x02\x02\u016E\u016F\x07j\x02\x02\u016F" +
		"\u0170\x07k\x02\x02\u0170\u0171\x07n\x02\x02\u0171\u0172\x07g\x02\x02" +
		"\u0172:\x03\x02\x02\x02\u0173\u0174\x07h\x02\x02\u0174\u0175\x07q\x02" +
		"\x02\u0175\u0176\x07t\x02\x02\u0176<\x03\x02\x02\x02\u0177\u0178\x07d" +
		"\x02\x02\u0178\u0179\x07t\x02\x02\u0179\u017A\x07g\x02\x02\u017A\u017B" +
		"\x07c\x02\x02\u017B\u017C\x07m\x02\x02\u017C>\x03\x02\x02\x02\u017D\u017E" +
		"\x07e\x02\x02\u017E\u017F\x07q\x02\x02\u017F\u0180\x07p\x02\x02\u0180" +
		"\u0181\x07v\x02\x02\u0181\u0182\x07k\x02\x02\u0182\u0183\x07p\x02\x02" +
		"\u0183\u0184\x07w\x02\x02\u0184\u0185\x07g\x02\x02\u0185@\x03\x02\x02" +
		"\x02\u0186\u0187\x07u\x02\x02\u0187\u0188\x07y\x02\x02\u0188\u0189\x07" +
		"k\x02\x02\u0189\u018A\x07v\x02\x02\u018A\u018B\x07e\x02\x02\u018B\u018C" +
		"\x07j\x02\x02\u018CB\x03\x02\x02\x02\u018D\u018E\x07f\x02\x02\u018E\u018F" +
		"\x07g\x02\x02\u018F\u0190\x07h\x02\x02\u0190\u0191\x07c\x02\x02\u0191" +
		"\u0192\x07w\x02\x02\u0192\u0193\x07n\x02\x02\u0193\u0194\x07v\x02\x02" +
		"\u0194D\x03\x02\x02\x02\u0195\u0196\x07e\x02\x02\u0196\u0197\x07c\x02" +
		"\x02\u0197\u0198\x07u\x02\x02\u0198\u0199\x07g\x02\x02\u0199F\x03\x02" +
		"\x02\x02\u019A\u019B\x07v\x02\x02\u019B\u019C\x07t\x02\x02\u019C\u019D" +
		"\x07{\x02\x02\u019DH\x03\x02\x02\x02\u019E\u019F\x07e\x02\x02\u019F\u01A0" +
		"\x07c\x02\x02\u01A0\u01A1\x07v\x02\x02\u01A1\u01A2\x07e\x02\x02\u01A2" +
		"\u01A3\x07j\x02\x02\u01A3J\x03\x02\x02\x02\u01A4\u01A5\x07h\x02\x02\u01A5" +
		"\u01A6\x07k\x02\x02\u01A6\u01A7\x07p\x02\x02\u01A7\u01A8\x07c\x02\x02" +
		"\u01A8\u01A9\x07n\x02\x02\u01A9\u01AA\x07n\x02\x02\u01AA\u01AB\x07{\x02" +
		"\x02\u01ABL\x03\x02\x02\x02\u01AC\u01AD\x07v\x02\x02\u01AD\u01AE\x07j" +
		"\x02\x02\u01AE\u01AF\x07t\x02\x02\u01AF\u01B0\x07q\x02\x02\u01B0\u01B1" +
		"\x07y\x02\x02\u01B1N\x03\x02\x02\x02\u01B2\u01B3\x07c\x02\x02\u01B3\u01B4" +
		"\x07p\x02\x02\u01B4\u01B5\x07f\x02\x02\u01B5P\x03\x02\x02\x02\u01B6\u01B7" +
		"\x07q\x02\x02\u01B7\u01B8\x07t\x02\x02\u01B8R\x03\x02\x02\x02\u01B9\u01BA" +
		"\x07v\x02\x02\u01BA\u01BB\x07t\x02\x02\u01BB\u01BC\x07w\x02\x02\u01BC" +
		"\u01BD\x07g\x02\x02\u01BDT\x03\x02\x02\x02\u01BE\u01BF\x07h\x02\x02\u01BF" +
		"\u01C0\x07c\x02\x02\u01C0\u01C1\x07n\x02\x02\u01C1\u01C2\x07u\x02\x02" +
		"\u01C2\u01C3\x07g\x02\x02\u01C3V\x03\x02\x02\x02\u01C4\u01C5\x07v\x02" +
		"\x02\u01C5\u01C6\x07j\x02\x02\u01C6\u01C7\x07k\x02\x02\u01C7\u01C8\x07" +
		"u\x02\x02\u01C8X\x03\x02\x02\x02\u01C9\u01CA\x07u\x02\x02\u01CA\u01CB" +
		"\x07g\x02\x02\u01CB\u01CC\x07n\x02\x02\u01CC\u01CD\x07h\x02\x02\u01CD" +
		"Z\x03\x02\x02\x02\u01CE\u01CF\x07u\x02\x02\u01CF\u01D0\x07w\x02\x02\u01D0" +
		"\u01D1\x07r\x02\x02\u01D1\u01D2\x07g\x02\x02\u01D2\u01D3\x07t\x02\x02" +
		"\u01D3\\\x03\x02\x02\x02\u01D4\u01D5\x07x\x02\x02\u01D5\u01D6\x07q\x02" +
		"\x02\u01D6\u01D7\x07k\x02\x02\u01D7\u01D8\x07f\x02\x02\u01D8^\x03\x02" +
		"\x02\x02\u01D9\u01DA\x07&\x02\x02\u01DA`\x03\x02\x02\x02\u01DB\u01DC\x07" +
		"1\x02\x02\u01DC\u01DD\x07,\x02\x02\u01DDb\x03\x02\x02\x02\u01DE\u01DF" +
		"\x07,\x02\x02\u01DF\u01E0\x071\x02\x02\u01E0d\x03\x02\x02\x02\u01E1\u01E2" +
		"\x07$\x02\x02\u01E2f\x03\x02\x02\x02\u01E3\u01E4\x07)\x02\x02\u01E4h\x03" +
		"\x02\x02\x02\u01E5\u01E6\x07}\x02\x02\u01E6j\x03\x02\x02\x02\u01E7\u01E8" +
		"\x07\x7F\x02\x02\u01E8l\x03\x02\x02\x02\u01E9\u01EA\x07]\x02\x02\u01EA" +
		"n\x03\x02\x02\x02\u01EB\u01EC\x07_\x02\x02\u01ECp\x03\x02\x02\x02\u01ED" +
		"\u01EE\x07*\x02\x02\u01EEr\x03\x02\x02\x02\u01EF\u01F0\x07+\x02\x02\u01F0" +
		"t\x03\x02\x02\x02\u01F1\u01F2\x07.\x02\x02\u01F2v\x03\x02\x02\x02\u01F3" +
		"\u01F4\x07,\x02\x02\u01F4x\x03\x02\x02\x02\u01F5\u01F6\x07~\x02\x02\u01F6" +
		"z\x03\x02\x02\x02\u01F7\u01F8\x07>\x02\x02\u01F8|\x03\x02\x02\x02\u01F9" +
		"\u01FA\x07@\x02\x02\u01FA~\x03\x02\x02\x02\u01FB\u01FC\x07?\x02\x02\u01FC" +
		"\u01FD";
	private static readonly _serializedATNSegment1: string =
		"\x07@\x02\x02\u01FD\x80\x03\x02\x02\x02\u01FE\u01FF\x07(\x02\x02\u01FF" +
		"\x82\x03\x02\x02\x02\u0200\u0201\x07~\x02\x02\u0201\u0202\x07~\x02\x02" +
		"\u0202\x84\x03\x02\x02\x02\u0203\u0204\x07(\x02\x02\u0204\u0205\x07(\x02" +
		"\x02\u0205\x86\x03\x02\x02\x02\u0206\u0207\x07-\x02\x02\u0207\u0208\x07" +
		"-\x02\x02\u0208\x88\x03\x02\x02\x02\u0209\u020A\x07/\x02\x02\u020A\u020B" +
		"\x07/\x02\x02\u020B\x8A\x03\x02\x02\x02\u020C\u020D\x07?\x02\x02\u020D" +
		"\x8C\x03\x02\x02\x02\u020E\u020F\x07?\x02\x02\u020F\u0210\x07?\x02\x02" +
		"\u0210\x8E\x03\x02\x02\x02\u0211\u0212\x07#\x02\x02\u0212\u0213\x07?\x02" +
		"\x02\u0213\x90\x03\x02\x02\x02\u0214\u0215\x07-\x02\x02\u0215\u0216\x07" +
		"?\x02\x02\u0216\x92\x03\x02\x02\x02\u0217\u0218\x07/\x02\x02\u0218\u0219" +
		"\x07?\x02\x02\u0219\x94\x03\x02\x02\x02\u021A\u021B\x07,\x02\x02\u021B" +
		"\u021C\x07?\x02\x02\u021C\x96\x03\x02\x02\x02\u021D\u021E\x071\x02\x02" +
		"\u021E\u021F\x07?\x02\x02\u021F\x98\x03\x02\x02\x02\u0220\u0221\x07(\x02" +
		"\x02\u0221\u0222\x07?\x02\x02\u0222\x9A\x03\x02\x02\x02\u0223\u0224\x07" +
		"~\x02\x02\u0224\u0225\x07?\x02\x02\u0225\x9C\x03\x02\x02\x02\u0226\u0227" +
		"\x07\'\x02\x02\u0227\u0228\x07?\x02\x02\u0228\x9E\x03\x02\x02\x02\u0229" +
		"\u022A\x07`\x02\x02\u022A\xA0\x03\x02\x02\x02\u022B\u022C\x07\'\x02\x02" +
		"\u022C\xA2\x03\x02\x02\x02\u022D\u022E\x07\x80\x02\x02\u022E\xA4\x03\x02" +
		"\x02\x02\u022F\u0230\x07#\x02\x02\u0230\xA6\x03\x02\x02\x02\u0231\u0232" +
		"\x07-\x02\x02\u0232\xA8\x03\x02\x02\x02\u0233\u0234\x07/\x02\x02\u0234" +
		"\xAA\x03\x02\x02\x02\u0235\u0236\x071\x02\x02\u0236\xAC\x03\x02\x02\x02" +
		"\u0237\u0239\t\x02\x02\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023A\x03" +
		"\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
		"\u023C\x03\x02\x02\x02\u023C\u023D\bW\x02\x02\u023D\xAE\x03\x02\x02\x02" +
		"\u023E\u023F\x071\x02\x02\u023F\u0240\x071\x02\x02\u0240\u0241\x03\x02" +
		"\x02\x02\u0241\u0245\n\x03\x02\x02\u0242\u0244\n\x04\x02\x02\u0243\u0242" +
		"\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02" +
		"\u0245\u0246\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247\u0245\x03" +
		"\x02\x02\x02\u0248\u0249\bX\x03\x02\u0249\xB0\x03\x02\x02\x02\u024A\u024B" +
		"\x071\x02\x02\u024B\u024C\x071\x02\x02\u024C\u024D\x07#\x02\x02\u024D" +
		"\u0251\x03\x02\x02\x02\u024E\u0250\n\x04\x02\x02\u024F\u024E\x03\x02\x02" +
		"\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252" +
		"\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02" +
		"\u0254\u0255\bY\x03\x02\u0255\xB2\x03\x02\x02\x02\u0256\u0257\x071\x02" +
		"\x02\u0257\u0258\x07,\x02\x02\u0258\u025C\x03\x02\x02\x02\u0259\u025B" +
		"\v\x02\x02\x02\u025A\u0259\x03\x02\x02\x02\u025B\u025E\x03\x02\x02\x02" +
		"\u025C\u025D\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02\u025D\u025F\x03" +
		"\x02\x02\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0260\x07,\x02\x02\u0260" +
		"\u0261\x071\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0263\bZ\x03\x02" +
		"\u0263\xB4\x03\x02\x02\x02\u0264\u0268\t\x05\x02\x02\u0265\u0267\t\x06" +
		"\x02\x02\u0266\u0265\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268" +
		"\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\xB6\x03\x02\x02" +
		"\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026D\t\x07\x02\x02\u026C\u026B" +
		"\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02" +
		"\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271\t" +
		"\b\x02\x02\u0271\xB8\x03\x02\x02\x02\u0272\u0274\t\x07\x02\x02\u0273\u0272" +
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\xBA\x03\x02\x02\x02\u0277\u0278\x07" +
		"2\x02\x02\u0278\u027C\t\t\x02\x02\u0279\u027B\t\n\x02\x02\u027A\u0279" +
		"\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02" +
		"\u027C\u027D\x03\x02\x02\x02\u027D\xBC\x03\x02\x02\x02\u027E\u027C\x03" +
		"\x02\x02\x02\u027F\u0281\t\x07\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281" +
		"\u0282\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02" +
		"\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0295\t\v\x02\x02\u0285\u0287" +
		"\t\x07\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02" +
		"\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028B\x03" +
		"\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028D\x070\x02\x02\u028C" +
		"\u028E\t\x07\x02\x02\u028D\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02" +
		"\x02\u028F\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292" +
		"\x03\x02\x02\x02\u0291\u0293\t\v\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292" +
		"\u0293\x03\x02\x02\x02\u0293\u0295\x03\x02\x02\x02\u0294\u0280\x03\x02" +
		"\x02\x02\u0294\u0288\x03\x02\x02\x02\u0295\xBE\x03\x02\x02\x02\u0296\u0298" +
		"\t\x07\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
		"\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u02AB\x03" +
		"\x02\x02\x02\u029B\u029D\t\x07\x02\x02\u029C\u029B\x03\x02\x02\x02\u029D" +
		"\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02" +
		"\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1" +
		"\u02A3\x070\x02\x02\u02A2\u02A4\t\x07\x02\x02\u02A3\u02A2\x03\x02\x02" +
		"\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6" +
		"\x03\x02\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A9\t\f\x02\x02\u02A8" +
		"\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9\u02AB\x03\x02" +
		"\x02\x02\u02AA\u0297\x03\x02\x02\x02\u02AA\u029E\x03\x02\x02\x02\u02AB" +
		"\xC0\x03\x02\x02\x02\u02AC\u02B1\n\r\x02\x02\u02AD\u02AE\x07^\x02\x02" +
		"\u02AE\u02B1\x05\xC5c\x02\u02AF\u02B1\x05\xC3b\x02\u02B0\u02AC\x03\x02" +
		"\x02\x02\u02B0\u02AD\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1" +
		"\xC2\x03\x02\x02\x02\u02B2\u02B3\x07^\x02\x02\u02B3\u02B4\t\x04\x02\x02" +
		"\u02B4\xC4\x03\x02\x02\x02\u02B5\u02BB\x05\xC7d\x02\u02B6\u02BB\x072\x02" +
		"\x02\u02B7\u02BB\x05\xC9e\x02\u02B8\u02BB\x05\xCBf\x02\u02B9\u02BB\x05" +
		"\xCDg\x02\u02BA\u02B5\x03\x02\x02\x02\u02BA\u02B6\x03\x02\x02\x02\u02BA" +
		"\u02B7\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02B9\x03\x02" +
		"\x02\x02\u02BB\xC6\x03\x02\x02\x02\u02BC\u02BF\x05\xCFh\x02\u02BD\u02BF" +
		"\x05\xD3j\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02" +
		"\u02BF\xC8\x03\x02\x02\x02\u02C0\u02C1\x07z\x02\x02\u02C1\u02C2\x05\xD1" +
		"i\x02\u02C2\u02C3\x05\xD1i\x02\u02C3\xCA\x03\x02\x02\x02\u02C4\u02C5\x07" +
		"w\x02\x02\u02C5\u02C6\x05\xD1i\x02\u02C6\u02C7\x05\xD1i\x02\u02C7\u02C8" +
		"\x05\xD1i\x02\u02C8\u02C9\x05\xD1i\x02\u02C9\u02D5\x03\x02\x02\x02\u02CA" +
		"\u02CB\x07w\x02\x02\u02CB\u02CC\x07}\x02\x02\u02CC\u02CE\x05\xD1i\x02" +
		"\u02CD\u02CF\x05\xD1i\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1" +
		"\u02D2\x03\x02\x02\x02\u02D2\u02D3\x07\x7F\x02\x02\u02D3\u02D5\x03\x02" +
		"\x02\x02\u02D4\u02C4\x03\x02\x02\x02\u02D4\u02CA\x03\x02\x02\x02\u02D5" +
		"\xCC\x03\x02\x02\x02\u02D6\u02D7\x07w\x02\x02\u02D7\u02D9\x07}\x02\x02" +
		"\u02D8\u02DA\x05\xD1i\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03" +
		"\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
		"\u02DD\x03\x02\x02\x02\u02DD\u02DE\x07\x7F\x02\x02\u02DE\xCE\x03\x02\x02" +
		"\x02\u02DF\u02E0\t\x0E\x02\x02\u02E0\xD0\x03\x02\x02\x02\u02E1\u02E2\t" +
		"\x0F\x02\x02\u02E2\xD2\x03\x02\x02\x02\u02E3\u02E4\n\x10\x02\x02\u02E4" +
		"\xD4\x03\x02\x02\x02\u02E5\u02E9\x07)\x02\x02\u02E6\u02E8\t\x11\x02\x02" +
		"\u02E7\u02E6\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03" +
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x03\x02\x02\x02\u02EB" +
		"\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07)\x02\x02\u02ED\xD6\x03\x02\x02" +
		"\x02\x1C\x02\u023A\u0245\u0251\u025C\u0268\u026E\u0275\u027C\u0282\u0288" +
		"\u028F\u0292\u0294\u0299\u029E\u02A5\u02A8\u02AA\u02B0\u02BA\u02BE\u02D0" +
		"\u02D4\u02DB\u02E9\x04\b\x02\x02\x02\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			MonkeyCLexer._serializedATNSegment0,
			MonkeyCLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MonkeyCLexer.__ATN) {
			MonkeyCLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MonkeyCLexer._serializedATN));
		}

		return MonkeyCLexer.__ATN;
	}

}

