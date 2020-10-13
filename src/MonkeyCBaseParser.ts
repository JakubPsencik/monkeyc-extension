import { TokenStream, Parser, RecognitionException, InputMismatchException, NoViableAltException, Recognizer, Token, ParserRuleContext } from "antlr4ts";
import { MonkeyCLexer } from "./parser/MonkeyCLexer";
import { ATNConfigSet } from "antlr4ts/atn";




export abstract class MonkeyCBaseParser extends Parser {
    constructor(input: TokenStream) {
        super(input);
    }
    

    public isClassAccess()
    {
        let lt1 = this._input.LT(1)?.type;
        if(lt1 == MonkeyCLexer.EOF) { return true; }

        return this._input.LT(3)?.type != MonkeyCLexer.IDENTIFIER
            && this._input.LT(2)?.type == MonkeyCLexer.CLASS
            && lt1 == MonkeyCLexer.DOT;
	}
}