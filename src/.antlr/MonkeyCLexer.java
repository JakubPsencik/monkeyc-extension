// Generated from e:\GitHub\monkeyc-extension\src\MonkeyC.g4 by ANTLR 4.8

import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MonkeyCLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DOT", "SEMI", "QUES", "COLON", "CLASS", "FUNCTION", "RETURN", "NEW", 
			"VAR", "CONST", "MODULE", "USING", "AS", "ENUM", "EXTENDS", "NULL", "NATIVE", 
			"HIDDEN_TOKEN", "PUBLIC_TOKEN", "PRIVATE_TOKEN", "PROTECTED_TOKEN", "STATIC", 
			"INSTANCEOF", "HAS", "IF", "ELSE", "DO", "WHILE", "FOR", "BREAK", "CONTINUE", 
			"SWITCH", "DEFAULT", "CASE", "TRY", "CATCH", "FINALLY", "THROW", "AND", 
			"OR", "TRUE", "FALSE", "SELF", "SUPER", "VOID", "BLING", "MULTI_LINE_COMMENT_START", 
			"MULTI_LINE_COMMENT_END", "STRING_A", "STRING_B", "LBRACE", "RBRACE", 
			"LBRACKET", "RBRACKET", "LPAREN", "RPAREN", "COMMA", "STAR", "BAR", "LT", 
			"GT", "EQGT", "AMP", "BARBAR", "AMPAMP", "PLUSPLUS", "SUBSUB", "EQ", 
			"EQEQ", "BANGEQ", "PLUSEQ", "SUBEQ", "STAREQ", "SLASHEQ", "AMPEQ", "CARETEQ", 
			"PERCENTEQ", "CARET", "PERCENT", "TILDE", "BANG", "PLUS", "SUB", "SLASH", 
			"WhiteSpaces", "LineTerminator", "SINGLE_LINE_COMMENT", "SINGLE_LINE_DOC_COMMENT", 
			"BLOCK_COMMENT", "IDENTIFIER", "LONGLITERAL", "INTLITERAL", "HEX_LITERAL", 
			"FLOATLITERAL", "DOUBLELITERAL", "DoubleStringCharacter", "LineContinuation", 
			"EscapeSequence", "CharacterEscapeSequence", "HexEscapeSequence", "UnicodeEscapeSequence", 
			"ExtendedUnicodeEscapeSequence", "SingleEscapeCharacter", "HexDigit", 
			"NonEscapeCharacter", "CHARLITERAL", "STRING"
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


	public MonkeyCLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MonkeyC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2c\u02f3\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3"+
		"\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3"+
		"\22\3\22\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3"+
		"\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3"+
		"\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\34\3"+
		"\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\37\3\37\3"+
		"\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3 \3 \3 \3!\3!\3!\3!\3!\3!\3!\3\""+
		"\3\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3%\3%\3%\3%\3"+
		"%\3%\3&\3&\3&\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3)\3"+
		")\3)\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3"+
		"-\3.\3.\3.\3.\3.\3/\3/\3\60\3\60\3\60\3\61\3\61\3\61\3\62\3\62\3\63\3"+
		"\63\3\64\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3"+
		"<\3<\3=\3=\3>\3>\3?\3?\3?\3@\3@\3A\3A\3A\3B\3B\3B\3C\3C\3C\3D\3D\3D\3"+
		"E\3E\3F\3F\3F\3G\3G\3G\3H\3H\3H\3I\3I\3I\3J\3J\3J\3K\3K\3K\3L\3L\3L\3"+
		"M\3M\3M\3N\3N\3N\3O\3O\3P\3P\3Q\3Q\3R\3R\3S\3S\3T\3T\3U\3U\3V\6V\u0236"+
		"\nV\rV\16V\u0237\3V\3V\3W\3W\3W\3W\3X\3X\3X\3X\3X\7X\u0245\nX\fX\16X\u0248"+
		"\13X\3X\3X\3Y\3Y\3Y\3Y\3Y\7Y\u0251\nY\fY\16Y\u0254\13Y\3Y\3Y\3Z\3Z\3Z"+
		"\3Z\7Z\u025c\nZ\fZ\16Z\u025f\13Z\3Z\3Z\3Z\3Z\3Z\3[\3[\7[\u0268\n[\f[\16"+
		"[\u026b\13[\3\\\6\\\u026e\n\\\r\\\16\\\u026f\3\\\3\\\3]\6]\u0275\n]\r"+
		"]\16]\u0276\3^\3^\3^\7^\u027c\n^\f^\16^\u027f\13^\3_\6_\u0282\n_\r_\16"+
		"_\u0283\3_\3_\7_\u0288\n_\f_\16_\u028b\13_\3_\3_\6_\u028f\n_\r_\16_\u0290"+
		"\3_\5_\u0294\n_\5_\u0296\n_\3`\6`\u0299\n`\r`\16`\u029a\3`\7`\u029e\n"+
		"`\f`\16`\u02a1\13`\3`\3`\6`\u02a5\n`\r`\16`\u02a6\3`\5`\u02aa\n`\5`\u02ac"+
		"\n`\3a\3a\3a\3a\5a\u02b2\na\3b\3b\3b\3c\3c\3c\3c\3c\5c\u02bc\nc\3d\3d"+
		"\5d\u02c0\nd\3e\3e\3e\3e\3f\3f\3f\3f\3f\3f\3f\3f\3f\3f\6f\u02d0\nf\rf"+
		"\16f\u02d1\3f\3f\5f\u02d6\nf\3g\3g\3g\6g\u02db\ng\rg\16g\u02dc\3g\3g\3"+
		"h\3h\3i\3i\3j\3j\3k\3k\3k\3k\3l\3l\7l\u02ed\nl\fl\16l\u02f0\13l\3l\3l"+
		"\3\u025d\2m\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65"+
		"i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008b"+
		"G\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\u009dP\u009f"+
		"Q\u00a1R\u00a3S\u00a5T\u00a7U\u00a9V\u00abW\u00adX\u00afY\u00b1Z\u00b3"+
		"[\u00b5\\\u00b7]\u00b9^\u00bb_\u00bd`\u00bfa\u00c1\2\u00c3\2\u00c5\2\u00c7"+
		"\2\u00c9\2\u00cb\2\u00cd\2\u00cf\2\u00d1\2\u00d3\2\u00d5b\u00d7c\3\2\22"+
		"\6\2\13\13\r\16\"\"\u00a2\u00a2\5\2\f\f\17\17\u202a\u202b\3\2##\6\2&&"+
		"C\\aac|\7\2&&\62;C\\aac|\3\2\62;\4\2NNnn\4\2ZZzz\5\2\62;CHch\4\2HHhh\4"+
		"\2FFff\6\2\f\f\17\17$$^^\13\2$$))^^ddhhppttvvxx\6\2\62;CHaach\16\2\f\f"+
		"\17\17$$))\62;^^ddhhppttvxzz\b\2\f\f\17\17))^^\u0087\u0087\u202a\u202b"+
		"\2\u0305\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2"+
		"\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2"+
		"\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2"+
		"\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2"+
		"\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S"+
		"\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2"+
		"\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2"+
		"\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y"+
		"\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3"+
		"\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2"+
		"\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095"+
		"\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d\3\2\2"+
		"\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2\2\2\u00a5\3\2\2\2\2\u00a7"+
		"\3\2\2\2\2\u00a9\3\2\2\2\2\u00ab\3\2\2\2\2\u00ad\3\2\2\2\2\u00af\3\2\2"+
		"\2\2\u00b1\3\2\2\2\2\u00b3\3\2\2\2\2\u00b5\3\2\2\2\2\u00b7\3\2\2\2\2\u00b9"+
		"\3\2\2\2\2\u00bb\3\2\2\2\2\u00bd\3\2\2\2\2\u00bf\3\2\2\2\2\u00d5\3\2\2"+
		"\2\2\u00d7\3\2\2\2\3\u00d9\3\2\2\2\5\u00db\3\2\2\2\7\u00dd\3\2\2\2\t\u00df"+
		"\3\2\2\2\13\u00e1\3\2\2\2\r\u00e7\3\2\2\2\17\u00f0\3\2\2\2\21\u00f7\3"+
		"\2\2\2\23\u00fb\3\2\2\2\25\u00ff\3\2\2\2\27\u0105\3\2\2\2\31\u010c\3\2"+
		"\2\2\33\u0112\3\2\2\2\35\u0115\3\2\2\2\37\u011a\3\2\2\2!\u0122\3\2\2\2"+
		"#\u0127\3\2\2\2%\u012e\3\2\2\2\'\u0135\3\2\2\2)\u013c\3\2\2\2+\u0144\3"+
		"\2\2\2-\u014e\3\2\2\2/\u0155\3\2\2\2\61\u0160\3\2\2\2\63\u0164\3\2\2\2"+
		"\65\u0167\3\2\2\2\67\u016c\3\2\2\29\u016f\3\2\2\2;\u0175\3\2\2\2=\u0179"+
		"\3\2\2\2?\u017f\3\2\2\2A\u0188\3\2\2\2C\u018f\3\2\2\2E\u0197\3\2\2\2G"+
		"\u019c\3\2\2\2I\u01a0\3\2\2\2K\u01a6\3\2\2\2M\u01ae\3\2\2\2O\u01b4\3\2"+
		"\2\2Q\u01b8\3\2\2\2S\u01bb\3\2\2\2U\u01c0\3\2\2\2W\u01c6\3\2\2\2Y\u01cb"+
		"\3\2\2\2[\u01d1\3\2\2\2]\u01d6\3\2\2\2_\u01d8\3\2\2\2a\u01db\3\2\2\2c"+
		"\u01de\3\2\2\2e\u01e0\3\2\2\2g\u01e2\3\2\2\2i\u01e4\3\2\2\2k\u01e6\3\2"+
		"\2\2m\u01e8\3\2\2\2o\u01ea\3\2\2\2q\u01ec\3\2\2\2s\u01ee\3\2\2\2u\u01f0"+
		"\3\2\2\2w\u01f2\3\2\2\2y\u01f4\3\2\2\2{\u01f6\3\2\2\2}\u01f8\3\2\2\2\177"+
		"\u01fb\3\2\2\2\u0081\u01fd\3\2\2\2\u0083\u0200\3\2\2\2\u0085\u0203\3\2"+
		"\2\2\u0087\u0206\3\2\2\2\u0089\u0209\3\2\2\2\u008b\u020b\3\2\2\2\u008d"+
		"\u020e\3\2\2\2\u008f\u0211\3\2\2\2\u0091\u0214\3\2\2\2\u0093\u0217\3\2"+
		"\2\2\u0095\u021a\3\2\2\2\u0097\u021d\3\2\2\2\u0099\u0220\3\2\2\2\u009b"+
		"\u0223\3\2\2\2\u009d\u0226\3\2\2\2\u009f\u0228\3\2\2\2\u00a1\u022a\3\2"+
		"\2\2\u00a3\u022c\3\2\2\2\u00a5\u022e\3\2\2\2\u00a7\u0230\3\2\2\2\u00a9"+
		"\u0232\3\2\2\2\u00ab\u0235\3\2\2\2\u00ad\u023b\3\2\2\2\u00af\u023f\3\2"+
		"\2\2\u00b1\u024b\3\2\2\2\u00b3\u0257\3\2\2\2\u00b5\u0265\3\2\2\2\u00b7"+
		"\u026d\3\2\2\2\u00b9\u0274\3\2\2\2\u00bb\u0278\3\2\2\2\u00bd\u0295\3\2"+
		"\2\2\u00bf\u02ab\3\2\2\2\u00c1\u02b1\3\2\2\2\u00c3\u02b3\3\2\2\2\u00c5"+
		"\u02bb\3\2\2\2\u00c7\u02bf\3\2\2\2\u00c9\u02c1\3\2\2\2\u00cb\u02d5\3\2"+
		"\2\2\u00cd\u02d7\3\2\2\2\u00cf\u02e0\3\2\2\2\u00d1\u02e2\3\2\2\2\u00d3"+
		"\u02e4\3\2\2\2\u00d5\u02e6\3\2\2\2\u00d7\u02ea\3\2\2\2\u00d9\u00da\7\60"+
		"\2\2\u00da\4\3\2\2\2\u00db\u00dc\7=\2\2\u00dc\6\3\2\2\2\u00dd\u00de\7"+
		"A\2\2\u00de\b\3\2\2\2\u00df\u00e0\7<\2\2\u00e0\n\3\2\2\2\u00e1\u00e2\7"+
		"e\2\2\u00e2\u00e3\7n\2\2\u00e3\u00e4\7c\2\2\u00e4\u00e5\7u\2\2\u00e5\u00e6"+
		"\7u\2\2\u00e6\f\3\2\2\2\u00e7\u00e8\7h\2\2\u00e8\u00e9\7w\2\2\u00e9\u00ea"+
		"\7p\2\2\u00ea\u00eb\7e\2\2\u00eb\u00ec\7v\2\2\u00ec\u00ed\7k\2\2\u00ed"+
		"\u00ee\7q\2\2\u00ee\u00ef\7p\2\2\u00ef\16\3\2\2\2\u00f0\u00f1\7t\2\2\u00f1"+
		"\u00f2\7g\2\2\u00f2\u00f3\7v\2\2\u00f3\u00f4\7w\2\2\u00f4\u00f5\7t\2\2"+
		"\u00f5\u00f6\7p\2\2\u00f6\20\3\2\2\2\u00f7\u00f8\7p\2\2\u00f8\u00f9\7"+
		"g\2\2\u00f9\u00fa\7y\2\2\u00fa\22\3\2\2\2\u00fb\u00fc\7x\2\2\u00fc\u00fd"+
		"\7c\2\2\u00fd\u00fe\7t\2\2\u00fe\24\3\2\2\2\u00ff\u0100\7e\2\2\u0100\u0101"+
		"\7q\2\2\u0101\u0102\7p\2\2\u0102\u0103\7u\2\2\u0103\u0104\7v\2\2\u0104"+
		"\26\3\2\2\2\u0105\u0106\7o\2\2\u0106\u0107\7q\2\2\u0107\u0108\7f\2\2\u0108"+
		"\u0109\7w\2\2\u0109\u010a\7n\2\2\u010a\u010b\7g\2\2\u010b\30\3\2\2\2\u010c"+
		"\u010d\7w\2\2\u010d\u010e\7u\2\2\u010e\u010f\7k\2\2\u010f\u0110\7p\2\2"+
		"\u0110\u0111\7i\2\2\u0111\32\3\2\2\2\u0112\u0113\7c\2\2\u0113\u0114\7"+
		"u\2\2\u0114\34\3\2\2\2\u0115\u0116\7g\2\2\u0116\u0117\7p\2\2\u0117\u0118"+
		"\7w\2\2\u0118\u0119\7o\2\2\u0119\36\3\2\2\2\u011a\u011b\7g\2\2\u011b\u011c"+
		"\7z\2\2\u011c\u011d\7v\2\2\u011d\u011e\7g\2\2\u011e\u011f\7p\2\2\u011f"+
		"\u0120\7f\2\2\u0120\u0121\7u\2\2\u0121 \3\2\2\2\u0122\u0123\7p\2\2\u0123"+
		"\u0124\7w\2\2\u0124\u0125\7n\2\2\u0125\u0126\7n\2\2\u0126\"\3\2\2\2\u0127"+
		"\u0128\7p\2\2\u0128\u0129\7c\2\2\u0129\u012a\7v\2\2\u012a\u012b\7k\2\2"+
		"\u012b\u012c\7x\2\2\u012c\u012d\7g\2\2\u012d$\3\2\2\2\u012e\u012f\7j\2"+
		"\2\u012f\u0130\7k\2\2\u0130\u0131\7f\2\2\u0131\u0132\7f\2\2\u0132\u0133"+
		"\7g\2\2\u0133\u0134\7p\2\2\u0134&\3\2\2\2\u0135\u0136\7r\2\2\u0136\u0137"+
		"\7w\2\2\u0137\u0138\7d\2\2\u0138\u0139\7n\2\2\u0139\u013a\7k\2\2\u013a"+
		"\u013b\7e\2\2\u013b(\3\2\2\2\u013c\u013d\7r\2\2\u013d\u013e\7t\2\2\u013e"+
		"\u013f\7k\2\2\u013f\u0140\7x\2\2\u0140\u0141\7c\2\2\u0141\u0142\7v\2\2"+
		"\u0142\u0143\7g\2\2\u0143*\3\2\2\2\u0144\u0145\7r\2\2\u0145\u0146\7t\2"+
		"\2\u0146\u0147\7q\2\2\u0147\u0148\7v\2\2\u0148\u0149\7g\2\2\u0149\u014a"+
		"\7e\2\2\u014a\u014b\7v\2\2\u014b\u014c\7g\2\2\u014c\u014d\7f\2\2\u014d"+
		",\3\2\2\2\u014e\u014f\7u\2\2\u014f\u0150\7v\2\2\u0150\u0151\7c\2\2\u0151"+
		"\u0152\7v\2\2\u0152\u0153\7k\2\2\u0153\u0154\7e\2\2\u0154.\3\2\2\2\u0155"+
		"\u0156\7k\2\2\u0156\u0157\7p\2\2\u0157\u0158\7u\2\2\u0158\u0159\7v\2\2"+
		"\u0159\u015a\7c\2\2\u015a\u015b\7p\2\2\u015b\u015c\7e\2\2\u015c\u015d"+
		"\7g\2\2\u015d\u015e\7q\2\2\u015e\u015f\7h\2\2\u015f\60\3\2\2\2\u0160\u0161"+
		"\7j\2\2\u0161\u0162\7c\2\2\u0162\u0163\7u\2\2\u0163\62\3\2\2\2\u0164\u0165"+
		"\7k\2\2\u0165\u0166\7h\2\2\u0166\64\3\2\2\2\u0167\u0168\7g\2\2\u0168\u0169"+
		"\7n\2\2\u0169\u016a\7u\2\2\u016a\u016b\7g\2\2\u016b\66\3\2\2\2\u016c\u016d"+
		"\7f\2\2\u016d\u016e\7q\2\2\u016e8\3\2\2\2\u016f\u0170\7y\2\2\u0170\u0171"+
		"\7j\2\2\u0171\u0172\7k\2\2\u0172\u0173\7n\2\2\u0173\u0174\7g\2\2\u0174"+
		":\3\2\2\2\u0175\u0176\7h\2\2\u0176\u0177\7q\2\2\u0177\u0178\7t\2\2\u0178"+
		"<\3\2\2\2\u0179\u017a\7d\2\2\u017a\u017b\7t\2\2\u017b\u017c\7g\2\2\u017c"+
		"\u017d\7c\2\2\u017d\u017e\7m\2\2\u017e>\3\2\2\2\u017f\u0180\7e\2\2\u0180"+
		"\u0181\7q\2\2\u0181\u0182\7p\2\2\u0182\u0183\7v\2\2\u0183\u0184\7k\2\2"+
		"\u0184\u0185\7p\2\2\u0185\u0186\7w\2\2\u0186\u0187\7g\2\2\u0187@\3\2\2"+
		"\2\u0188\u0189\7u\2\2\u0189\u018a\7y\2\2\u018a\u018b\7k\2\2\u018b\u018c"+
		"\7v\2\2\u018c\u018d\7e\2\2\u018d\u018e\7j\2\2\u018eB\3\2\2\2\u018f\u0190"+
		"\7f\2\2\u0190\u0191\7g\2\2\u0191\u0192\7h\2\2\u0192\u0193\7c\2\2\u0193"+
		"\u0194\7w\2\2\u0194\u0195\7n\2\2\u0195\u0196\7v\2\2\u0196D\3\2\2\2\u0197"+
		"\u0198\7e\2\2\u0198\u0199\7c\2\2\u0199\u019a\7u\2\2\u019a\u019b\7g\2\2"+
		"\u019bF\3\2\2\2\u019c\u019d\7v\2\2\u019d\u019e\7t\2\2\u019e\u019f\7{\2"+
		"\2\u019fH\3\2\2\2\u01a0\u01a1\7e\2\2\u01a1\u01a2\7c\2\2\u01a2\u01a3\7"+
		"v\2\2\u01a3\u01a4\7e\2\2\u01a4\u01a5\7j\2\2\u01a5J\3\2\2\2\u01a6\u01a7"+
		"\7h\2\2\u01a7\u01a8\7k\2\2\u01a8\u01a9\7p\2\2\u01a9\u01aa\7c\2\2\u01aa"+
		"\u01ab\7n\2\2\u01ab\u01ac\7n\2\2\u01ac\u01ad\7{\2\2\u01adL\3\2\2\2\u01ae"+
		"\u01af\7v\2\2\u01af\u01b0\7j\2\2\u01b0\u01b1\7t\2\2\u01b1\u01b2\7q\2\2"+
		"\u01b2\u01b3\7y\2\2\u01b3N\3\2\2\2\u01b4\u01b5\7c\2\2\u01b5\u01b6\7p\2"+
		"\2\u01b6\u01b7\7f\2\2\u01b7P\3\2\2\2\u01b8\u01b9\7q\2\2\u01b9\u01ba\7"+
		"t\2\2\u01baR\3\2\2\2\u01bb\u01bc\7v\2\2\u01bc\u01bd\7t\2\2\u01bd\u01be"+
		"\7w\2\2\u01be\u01bf\7g\2\2\u01bfT\3\2\2\2\u01c0\u01c1\7h\2\2\u01c1\u01c2"+
		"\7c\2\2\u01c2\u01c3\7n\2\2\u01c3\u01c4\7u\2\2\u01c4\u01c5\7g\2\2\u01c5"+
		"V\3\2\2\2\u01c6\u01c7\7u\2\2\u01c7\u01c8\7g\2\2\u01c8\u01c9\7n\2\2\u01c9"+
		"\u01ca\7h\2\2\u01caX\3\2\2\2\u01cb\u01cc\7u\2\2\u01cc\u01cd\7w\2\2\u01cd"+
		"\u01ce\7r\2\2\u01ce\u01cf\7g\2\2\u01cf\u01d0\7t\2\2\u01d0Z\3\2\2\2\u01d1"+
		"\u01d2\7x\2\2\u01d2\u01d3\7q\2\2\u01d3\u01d4\7k\2\2\u01d4\u01d5\7f\2\2"+
		"\u01d5\\\3\2\2\2\u01d6\u01d7\7&\2\2\u01d7^\3\2\2\2\u01d8\u01d9\7\61\2"+
		"\2\u01d9\u01da\7,\2\2\u01da`\3\2\2\2\u01db\u01dc\7,\2\2\u01dc\u01dd\7"+
		"\61\2\2\u01ddb\3\2\2\2\u01de\u01df\7$\2\2\u01dfd\3\2\2\2\u01e0\u01e1\7"+
		")\2\2\u01e1f\3\2\2\2\u01e2\u01e3\7}\2\2\u01e3h\3\2\2\2\u01e4\u01e5\7\177"+
		"\2\2\u01e5j\3\2\2\2\u01e6\u01e7\7]\2\2\u01e7l\3\2\2\2\u01e8\u01e9\7_\2"+
		"\2\u01e9n\3\2\2\2\u01ea\u01eb\7*\2\2\u01ebp\3\2\2\2\u01ec\u01ed\7+\2\2"+
		"\u01edr\3\2\2\2\u01ee\u01ef\7.\2\2\u01eft\3\2\2\2\u01f0\u01f1\7,\2\2\u01f1"+
		"v\3\2\2\2\u01f2\u01f3\7~\2\2\u01f3x\3\2\2\2\u01f4\u01f5\7>\2\2\u01f5z"+
		"\3\2\2\2\u01f6\u01f7\7@\2\2\u01f7|\3\2\2\2\u01f8\u01f9\7?\2\2\u01f9\u01fa"+
		"\7@\2\2\u01fa~\3\2\2\2\u01fb\u01fc\7(\2\2\u01fc\u0080\3\2\2\2\u01fd\u01fe"+
		"\7~\2\2\u01fe\u01ff\7~\2\2\u01ff\u0082\3\2\2\2\u0200\u0201\7(\2\2\u0201"+
		"\u0202\7(\2\2\u0202\u0084\3\2\2\2\u0203\u0204\7-\2\2\u0204\u0205\7-\2"+
		"\2\u0205\u0086\3\2\2\2\u0206\u0207\7/\2\2\u0207\u0208\7/\2\2\u0208\u0088"+
		"\3\2\2\2\u0209\u020a\7?\2\2\u020a\u008a\3\2\2\2\u020b\u020c\7?\2\2\u020c"+
		"\u020d\7?\2\2\u020d\u008c\3\2\2\2\u020e\u020f\7#\2\2\u020f\u0210\7?\2"+
		"\2\u0210\u008e\3\2\2\2\u0211\u0212\7-\2\2\u0212\u0213\7?\2\2\u0213\u0090"+
		"\3\2\2\2\u0214\u0215\7/\2\2\u0215\u0216\7?\2\2\u0216\u0092\3\2\2\2\u0217"+
		"\u0218\7,\2\2\u0218\u0219\7?\2\2\u0219\u0094\3\2\2\2\u021a\u021b\7\61"+
		"\2\2\u021b\u021c\7?\2\2\u021c\u0096\3\2\2\2\u021d\u021e\7(\2\2\u021e\u021f"+
		"\7?\2\2\u021f\u0098\3\2\2\2\u0220\u0221\7~\2\2\u0221\u0222\7?\2\2\u0222"+
		"\u009a\3\2\2\2\u0223\u0224\7\'\2\2\u0224\u0225\7?\2\2\u0225\u009c\3\2"+
		"\2\2\u0226\u0227\7`\2\2\u0227\u009e\3\2\2\2\u0228\u0229\7\'\2\2\u0229"+
		"\u00a0\3\2\2\2\u022a\u022b\7\u0080\2\2\u022b\u00a2\3\2\2\2\u022c\u022d"+
		"\7#\2\2\u022d\u00a4\3\2\2\2\u022e\u022f\7-\2\2\u022f\u00a6\3\2\2\2\u0230"+
		"\u0231\7/\2\2\u0231\u00a8\3\2\2\2\u0232\u0233\7\61\2\2\u0233\u00aa\3\2"+
		"\2\2\u0234\u0236\t\2\2\2\u0235\u0234\3\2\2\2\u0236\u0237\3\2\2\2\u0237"+
		"\u0235\3\2\2\2\u0237\u0238\3\2\2\2\u0238\u0239\3\2\2\2\u0239\u023a\bV"+
		"\2\2\u023a\u00ac\3\2\2\2\u023b\u023c\t\3\2\2\u023c\u023d\3\2\2\2\u023d"+
		"\u023e\bW\2\2\u023e\u00ae\3\2\2\2\u023f\u0240\7\61\2\2\u0240\u0241\7\61"+
		"\2\2\u0241\u0242\3\2\2\2\u0242\u0246\n\4\2\2\u0243\u0245\n\3\2\2\u0244"+
		"\u0243\3\2\2\2\u0245\u0248\3\2\2\2\u0246\u0244\3\2\2\2\u0246\u0247\3\2"+
		"\2\2\u0247\u0249\3\2\2\2\u0248\u0246\3\2\2\2\u0249\u024a\bX\2\2\u024a"+
		"\u00b0\3\2\2\2\u024b\u024c\7\61\2\2\u024c\u024d\7\61\2\2\u024d\u024e\7"+
		"#\2\2\u024e\u0252\3\2\2\2\u024f\u0251\n\3\2\2\u0250\u024f\3\2\2\2\u0251"+
		"\u0254\3\2\2\2\u0252\u0250\3\2\2\2\u0252\u0253\3\2\2\2\u0253\u0255\3\2"+
		"\2\2\u0254\u0252\3\2\2\2\u0255\u0256\bY\2\2\u0256\u00b2\3\2\2\2\u0257"+
		"\u0258\7\61\2\2\u0258\u0259\7,\2\2\u0259\u025d\3\2\2\2\u025a\u025c\13"+
		"\2\2\2\u025b\u025a\3\2\2\2\u025c\u025f\3\2\2\2\u025d\u025e\3\2\2\2\u025d"+
		"\u025b\3\2\2\2\u025e\u0260\3\2\2\2\u025f\u025d\3\2\2\2\u0260\u0261\7,"+
		"\2\2\u0261\u0262\7\61\2\2\u0262\u0263\3\2\2\2\u0263\u0264\bZ\2\2\u0264"+
		"\u00b4\3\2\2\2\u0265\u0269\t\5\2\2\u0266\u0268\t\6\2\2\u0267\u0266\3\2"+
		"\2\2\u0268\u026b\3\2\2\2\u0269\u0267\3\2\2\2\u0269\u026a\3\2\2\2\u026a"+
		"\u00b6\3\2\2\2\u026b\u0269\3\2\2\2\u026c\u026e\t\7\2\2\u026d\u026c\3\2"+
		"\2\2\u026e\u026f\3\2\2\2\u026f\u026d\3\2\2\2\u026f\u0270\3\2\2\2\u0270"+
		"\u0271\3\2\2\2\u0271\u0272\t\b\2\2\u0272\u00b8\3\2\2\2\u0273\u0275\t\7"+
		"\2\2\u0274\u0273\3\2\2\2\u0275\u0276\3\2\2\2\u0276\u0274\3\2\2\2\u0276"+
		"\u0277\3\2\2\2\u0277\u00ba\3\2\2\2\u0278\u0279\7\62\2\2\u0279\u027d\t"+
		"\t\2\2\u027a\u027c\t\n\2\2\u027b\u027a\3\2\2\2\u027c\u027f\3\2\2\2\u027d"+
		"\u027b\3\2\2\2\u027d\u027e\3\2\2\2\u027e\u00bc\3\2\2\2\u027f\u027d\3\2"+
		"\2\2\u0280\u0282\t\7\2\2\u0281\u0280\3\2\2\2\u0282\u0283\3\2\2\2\u0283"+
		"\u0281\3\2\2\2\u0283\u0284\3\2\2\2\u0284\u0285\3\2\2\2\u0285\u0296\t\13"+
		"\2\2\u0286\u0288\t\7\2\2\u0287\u0286\3\2\2\2\u0288\u028b\3\2\2\2\u0289"+
		"\u0287\3\2\2\2\u0289\u028a\3\2\2\2\u028a\u028c\3\2\2\2\u028b\u0289\3\2"+
		"\2\2\u028c\u028e\7\60\2\2\u028d\u028f\t\7\2\2\u028e\u028d\3\2\2\2\u028f"+
		"\u0290\3\2\2\2\u0290\u028e\3\2\2\2\u0290\u0291\3\2\2\2\u0291\u0293\3\2"+
		"\2\2\u0292\u0294\t\13\2\2\u0293\u0292\3\2\2\2\u0293\u0294\3\2\2\2\u0294"+
		"\u0296\3\2\2\2\u0295\u0281\3\2\2\2\u0295\u0289\3\2\2\2\u0296\u00be\3\2"+
		"\2\2\u0297\u0299\t\7\2\2\u0298\u0297\3\2\2\2\u0299\u029a\3\2\2\2\u029a"+
		"\u0298\3\2\2\2\u029a\u029b\3\2\2\2\u029b\u02ac\3\2\2\2\u029c\u029e\t\7"+
		"\2\2\u029d\u029c\3\2\2\2\u029e\u02a1\3\2\2\2\u029f\u029d\3\2\2\2\u029f"+
		"\u02a0\3\2\2\2\u02a0\u02a2\3\2\2\2\u02a1\u029f\3\2\2\2\u02a2\u02a4\7\60"+
		"\2\2\u02a3\u02a5\t\7\2\2\u02a4\u02a3\3\2\2\2\u02a5\u02a6\3\2\2\2\u02a6"+
		"\u02a4\3\2\2\2\u02a6\u02a7\3\2\2\2\u02a7\u02a9\3\2\2\2\u02a8\u02aa\t\f"+
		"\2\2\u02a9\u02a8\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02ac\3\2\2\2\u02ab"+
		"\u0298\3\2\2\2\u02ab\u029f\3\2\2\2\u02ac\u00c0\3\2\2\2\u02ad\u02b2\n\r"+
		"\2\2\u02ae\u02af\7^\2\2\u02af\u02b2\5\u00c5c\2\u02b0\u02b2\5\u00c3b\2"+
		"\u02b1\u02ad\3\2\2\2\u02b1\u02ae\3\2\2\2\u02b1\u02b0\3\2\2\2\u02b2\u00c2"+
		"\3\2\2\2\u02b3\u02b4\7^\2\2\u02b4\u02b5\t\3\2\2\u02b5\u00c4\3\2\2\2\u02b6"+
		"\u02bc\5\u00c7d\2\u02b7\u02bc\7\62\2\2\u02b8\u02bc\5\u00c9e\2\u02b9\u02bc"+
		"\5\u00cbf\2\u02ba\u02bc\5\u00cdg\2\u02bb\u02b6\3\2\2\2\u02bb\u02b7\3\2"+
		"\2\2\u02bb\u02b8\3\2\2\2\u02bb\u02b9\3\2\2\2\u02bb\u02ba\3\2\2\2\u02bc"+
		"\u00c6\3\2\2\2\u02bd\u02c0\5\u00cfh\2\u02be\u02c0\5\u00d3j\2\u02bf\u02bd"+
		"\3\2\2\2\u02bf\u02be\3\2\2\2\u02c0\u00c8\3\2\2\2\u02c1\u02c2\7z\2\2\u02c2"+
		"\u02c3\5\u00d1i\2\u02c3\u02c4\5\u00d1i\2\u02c4\u00ca\3\2\2\2\u02c5\u02c6"+
		"\7w\2\2\u02c6\u02c7\5\u00d1i\2\u02c7\u02c8\5\u00d1i\2\u02c8\u02c9\5\u00d1"+
		"i\2\u02c9\u02ca\5\u00d1i\2\u02ca\u02d6\3\2\2\2\u02cb\u02cc\7w\2\2\u02cc"+
		"\u02cd\7}\2\2\u02cd\u02cf\5\u00d1i\2\u02ce\u02d0\5\u00d1i\2\u02cf\u02ce"+
		"\3\2\2\2\u02d0\u02d1\3\2\2\2\u02d1\u02cf\3\2\2\2\u02d1\u02d2\3\2\2\2\u02d2"+
		"\u02d3\3\2\2\2\u02d3\u02d4\7\177\2\2\u02d4\u02d6\3\2\2\2\u02d5\u02c5\3"+
		"\2\2\2\u02d5\u02cb\3\2\2\2\u02d6\u00cc\3\2\2\2\u02d7\u02d8\7w\2\2\u02d8"+
		"\u02da\7}\2\2\u02d9\u02db\5\u00d1i\2\u02da\u02d9\3\2\2\2\u02db\u02dc\3"+
		"\2\2\2\u02dc\u02da\3\2\2\2\u02dc\u02dd\3\2\2\2\u02dd\u02de\3\2\2\2\u02de"+
		"\u02df\7\177\2\2\u02df\u00ce\3\2\2\2\u02e0\u02e1\t\16\2\2\u02e1\u00d0"+
		"\3\2\2\2\u02e2\u02e3\t\17\2\2\u02e3\u00d2\3\2\2\2\u02e4\u02e5\n\20\2\2"+
		"\u02e5\u00d4\3\2\2\2\u02e6\u02e7\7)\2\2\u02e7\u02e8\n\21\2\2\u02e8\u02e9"+
		"\7)\2\2\u02e9\u00d6\3\2\2\2\u02ea\u02ee\7$\2\2\u02eb\u02ed\5\u00c1a\2"+
		"\u02ec\u02eb\3\2\2\2\u02ed\u02f0\3\2\2\2\u02ee\u02ec\3\2\2\2\u02ee\u02ef"+
		"\3\2\2\2\u02ef\u02f1\3\2\2\2\u02f0\u02ee\3\2\2\2\u02f1\u02f2\7$\2\2\u02f2"+
		"\u00d8\3\2\2\2\34\2\u0237\u0246\u0252\u025d\u0269\u026f\u0276\u027d\u0283"+
		"\u0289\u0290\u0293\u0295\u029a\u029f\u02a6\u02a9\u02ab\u02b1\u02bb\u02bf"+
		"\u02d1\u02d5\u02dc\u02ee\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}