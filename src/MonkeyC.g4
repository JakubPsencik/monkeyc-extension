// Define a grammar called Hello
grammar MonkeyC;




    DOT : '.';
    SEMI : ';';
    QUES : '?';
    COLON : ':';
    CLASS : 'class';
    FUNCTION : 'function';
    RETURN : 'return';
    NEW : 'new';
    VAR : 'var';
    CONST : 'const';
    MODULE : 'module';
    USING : 'using';
    AS : 'as';
    ENUM : 'enum';
    EXTENDS : 'extends';
    NULL : 'null';
    NATIVE : 'native';
    HIDDEN_TOKEN : 'hidden';
    STATIC : 'static';
    PRIVATE: 'private';
    PROTECTED: 'protected';
    PUBLIC: 'public';
    INSTANCEOF : 'instanceof';
    HAS : 'has';
    IF : 'if';
    ELSE : 'else';
    DO : 'do';
    WHILE : 'while';
    FOR : 'for';
    BREAK : 'break';
    CONTINUE : 'continue';
    SWITCH : 'switch';
    DEFAULT : 'default';
    CASE : 'case';
    TRY : 'try';
    CATCH : 'catch';
    FINALLY : 'finally';
    THROW : 'throw';
    AND : 'and';
    OR : 'or';
    TRUE : 'true';
    FALSE : 'false';

    // https://forums.garmin.com/showthread.php?180989-Monkey-C-grammar-questions
    //  Both 'self' and 'me' both refer to 'this'. 'me' is just a holdover and might be removed in the future.
    THIS : 'this';
    SELF : 'self';

    SUPER: 'super';
    VOID: 'void';

    // reference to the global scope
    BLING : '$';

    //SINGLE_LINE_COMMENT = "//"
    MULTI_LINE_COMMENT_START : '/*';
    MULTI_LINE_COMMENT_END : '*/';
    STRING_A : '"';
    STRING_B : '\'';

    LBRACE : '{';
    RBRACE : '}';

    LBRACKET : '[';
    RBRACKET : ']';

    LPAREN : '(';
    RPAREN : ')';
    COMMA : ',';
    STAR : '*';
    BAR : '|';
    LT : '<';
    GT : '>';

    EQGT : '=>';

    AMP : '&';

    BARBAR : '||';
    AMPAMP : '&&';
    PLUSPLUS : '++';
    SUBSUB : '--';
    EQ : '=';

    EQEQ : '==';
    BANGEQ : '!=';

    PLUSEQ : '+=';
    SUBEQ : '-=';
    STAREQ : '*=';
    SLASHEQ : '/=';
    AMPEQ : '&=';
    CARETEQ : '|=';
    PERCENTEQ : '%=';

    CARET : '^';
    PERCENT : '%';
    TILDE : '~';
    BANG : '!';

    PLUS : '+';
    SUB : '-';
    SLASH : '/';

    // WHITE_SPACE is overwritten by JFlex, this here is only for Live Preview
    WHITE_SPACE: [\r\n\t\f ]+ -> skip;
    SINGLE_LINE_COMMENT :  '//' ~('!')~[\r\n\u2028\u2029]* -> channel(HIDDEN);
    //SINGLE_LINE_COMMENT='regexp://[^!].*'
    SINGLE_LINE_DOC_COMMENT : '//!' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);
    //SINGLE_LINE_DOC_COMMENT='regexp://\!(.*)'

    BLOCK_COMMENT : '/*' .*? '*/' -> channel(HIDDEN);
    //BLOCK_COMMENT='regexp:/\*([^*]|\*+[^*/])*(\*+/)?'

    IDENTIFIER : [a-zA-Z$_][a-zA-Z0-9$_]*;
    //IDENTIFIER = 'regexp:[a-zA-Z$_][a-zA-Z0-9$_]*'

    LONGLITERAL : [0-9]+('l'|'L');
    //LONGLITERAL = 'regexp:\d+[lL]'
    INTLITERAL : [0-9]+;
    //INTLITERAL = 'regexp:\d+'

    HEX_LITERAL : '0'('X'|'x')[0-9a-fA-F]*;

    // 0 can be omitted before dot
    // either: x[fF] or (x).y and in the end optionally [fF]
    FLOATLITERAL : [0-9]+[fF]|[0-9]*'.'[0-9]+('f'|'F')?;
    //FLOATLITERAL = 'regexp:(\d+[fF]|(\d+)?\.\d+[fF]?)'
    
    DOUBLELITERAL : [0-9]+|([0-9]*'.'[0-9]+)('d'|'D')?;
    //DOUBLELITERAL = 'regexp:(\d+)?(\.\d+)?[dD]'

fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]
    ;

fragment EscapeSequence
    : CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    | HexEscapeSequence
    | UnicodeEscapeSequence
    | ExtendedUnicodeEscapeSequence
    ;

fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;
fragment HexEscapeSequence
    : 'x' HexDigit HexDigit
    ;
fragment UnicodeEscapeSequence
    : 'u' HexDigit HexDigit HexDigit HexDigit
    | 'u' '{' HexDigit HexDigit+ '}'
    ;
fragment ExtendedUnicodeEscapeSequence
    : 'u' '{' HexDigit+ '}'
    ;
fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment HexDigit
    : [_0-9a-fA-F]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;


    //string = "regexp:(\"([^\"\\]|\\.)*\")"
    CHARLITERAL : '\''[^']*'\'';
    // CHARLITERAL = "regexp:'[^']*'"
  

  //extends(".*Expression")="expression"



// ----

program : compilationUnit* EOF;


string : '"' DoubleStringCharacter* '"';//'"'([^\"\]|\\.)*\'"';

compilationUnit : usingDeclaration
                          | moduleDeclaration
                          | classDeclaration
                          | enumDeclaration
                          | constDeclaration
                          | fieldDeclarationList
                          | functionDeclaration
                          | blockStatement;
//{recoverWhile="#auto"}

// {recoverWhile="compilationUnitRecover"}
// private compilationUnitRecover ::= !(CLASS | ENUM | HIDDEN | LPAREN | STATIC | USING)

// You can bring a module into your scoping level with the using keyword.
// using allows a module to be imported into another class or module by a symbol.
// using statements are scoped to the class or module in which they are defined.
usingDeclaration : USING fullyQualifiedReferenceExpression (AS componentName)? SEMI;// {pin=2}

// module
// TODO: can a module have static/hidden modifiers?
moduleDeclaration : modifiers MODULE componentName moduleBody;// {
//pin=2
//mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyComponentImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyComponent"
//}

moduleBody : LBRACE moduleBodyMembers RBRACE;// {pin=1}
moduleBodyMembers : moduleBodyMember*; //{implements="io.github.liias.monkey.lang.psi.MonkeyExecutionScope"}
moduleBodyMember : constDeclaration | fieldDeclarationList | functionDeclaration | classDeclaration | enumDeclaration | moduleDeclaration;

fullyQualifiedReferenceExpression : referenceOrThisExpression qualifiedReferenceExpression*;

// class
classDeclaration : modifiers CLASS componentName (EXTENDS fullyQualifiedReferenceExpression)? classBody;
//{pin=2 mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyPsiClass" implements="io.github.liias.monkey.lang.psi.MonkeyClass"}

classBody : LBRACE classBodyMembers RBRACE;// {pin=1}
classBodyMembers : classBodyMember*;// {implements="io.github.liias.monkey.lang.psi.MonkeyExecutionScope"}

classBodyMember : constDeclaration | fieldDeclarationList | functionDeclaration | classDeclaration | enumDeclaration;

// Enums must be declared at the module or class level; they cannot be declared within a function.
enumDeclaration : modifiers ENUM LBRACE enumConstant (COMMA enumConstant)* RBRACE;

maybeSignedInteger : (PLUS|SUB)? INTLITERAL;

enumConstant : componentName (EQ maybeSignedInteger)?;// {
//pin=1
//mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyComponentImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyComponent"
//}

// Constants must be declared at the module or class level; they cannot be declared within a function.
constDeclaration : modifiers CONST componentName (EQ expression)? SEMI;// {
//pin=2
//mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyComponentImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyComponent"
//}

// field
fieldDeclarationList : modifiers VAR fieldDeclaration (COMMA fieldDeclaration)* SEMI;
fieldDeclaration : varOrFieldDeclaration;

// function
functionDeclaration : modifiers FUNCTION componentName
 LPAREN formalParameterDeclarations? RPAREN block;// {
//pin=3
//mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyComponentImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyComponent"
//}

formalParameterDeclarations : componentName (COMMA componentName)*;

block : LBRACE blockStatement* RBRACE;

blockStatement : variableDeclarationList SEMI
                 | statement;

variableDeclarationList : VAR variableDeclaration (COMMA variableDeclaration)*;
variableDeclaration : varOrFieldDeclaration;

varOrFieldDeclaration : componentName (LBRACKET RBRACKET)* (EQ variableInitializer)?;// {
//pin=1
//mixin="io.github.liias.monkey.lang.psi.impl.AbstractMonkeyComponentImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyComponent"
//}

variableInitializer : arrayInitializer | expression;

arrayInitializer : LBRACE (variableInitializer (COMMA variableInitializer)*)? COMMA? RBRACE;

statement : block
            | IF parExpression statement (ELSE statement)?
            | forStatement
            | WHILE parExpression statement
            | DO statement WHILE parExpression SEMI
            | tryStatement
            | SWITCH parExpression LBRACE switchBlockStatementGroups RBRACE
            | RETURN expression? SEMI
            | THROW expression SEMI
            | BREAK referenceExpression? SEMI
            | CONTINUE referenceExpression? SEMI
            | expression SEMI
            | IDENTIFIER COLON statement
            | SEMI;

switchBlockStatementGroups : (switchBlockStatementGroup)*;

switchBlockStatementGroup : switchLabel (blockStatement)*;

switchLabel : CASE expression COLON | DEFAULT COLON;

tryStatement : TRY block (catches FINALLY block | catches | FINALLY block);

catches : catchClause (catchClause)*;

catchClause : CATCH LPAREN catchParameter RPAREN block;

catchParameter : id (INSTANCEOF qualifiedName)?;

forStatement : FOR LPAREN forInit? SEMI expression? SEMI expressionList? RPAREN statement;

forInit : variableDeclarationList
          | expressionList;

// expressions
expressionList : expression (COMMA expression)*;

parExpression : LPAREN expression RPAREN;

thisExpression : THIS | SELF;// {
//mixin="io.github.liias.monkey.lang.psi.impl.MonkeyReferenceImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyReference"
//}

blingExpression : BLING;// {
//mixin="io.github.liias.monkey.lang.psi.impl.MonkeyReferenceImpl"
//implements="io.github.liias.monkey.lang.psi.MonkeyReference"
//}

referenceOrThisExpression : referenceExpression
                                    | thisExpression
                                    | blingExpression;

expression : conditionalExpression (assignmentOperator expression)?;

assignmentOperator : EQ
                     | PLUSEQ
                     | SUBEQ
                     | STAREQ
                     | SLASHEQ
                     | AMPEQ
                     | CARETEQ
                     | PERCENTEQ
                     | LT LT EQ
                     | GT GT GT EQ
                     | GT GT EQ;

// optional ternary operator in the end
conditionalExpression : conditionalOrExpression (QUES expression COLON conditionalExpression)?;

conditionalOrExpression : conditionalAndExpression ((BARBAR | OR) conditionalAndExpression)*;

conditionalAndExpression : inclusiveOrExpression ((AMPAMP | AND) inclusiveOrExpression)*;

inclusiveOrExpression : exclusiveOrExpression (BAR exclusiveOrExpression)*;

exclusiveOrExpression : andExpression (CARET andExpression)*;

andExpression : equalityExpression (AMP equalityExpression)*;

equalityExpression : hasExpression ((EQEQ | BANGEQ) hasExpression)*;

hasExpression : instanceOfExpression (HAS symbol)?;

instanceOfExpression : relationalExpression (INSTANCEOF qualifiedName)?;

relationalExpression : shiftExpression (relationalOp shiftExpression)*;

relationalOp : LT EQ | GT EQ | LT | GT;

shiftExpression : additiveExpression (shiftOp additiveExpression)*;

shiftOp : LT LT | GT GT GT | GT GT;

additiveExpression : multiplicativeExpression ((PLUS | SUB) multiplicativeExpression)*;

multiplicativeExpression : bitwiseExpression ((STAR | SLASH | PERCENT) unaryExpression)*;

bitwiseExpression : unaryExpression (bitwiseOperator unaryExpression)*;

bitwiseOperator : AMP | CARET| BAR;

/**
 * NOTE: for '+' and '-', if the next token is int or long integral, then it's not a unary expression.
 *       it's a literal with signed value. INTLITERAL AND LONG LITERAL are added here for this.
 */
unaryExpression : PLUS unaryExpression
                  | SUB unaryExpression
                  | PLUSPLUS unaryExpression
                  | SUBSUB unaryExpression
                  | unaryExpressionNotPlusMinus;

unaryExpressionNotPlusMinus : TILDE unaryExpression
                                      | BANG unaryExpression
                                      | primary selector* (PLUSPLUS | SUBSUB)?;

primary : parExpression
                  | fullyQualifiedReferenceExpression identifierSuffix?
                  | literal
                  | symbol
                  | creator
                  | VOID DOT CLASS;

qualifiedReferenceExpression : DOT referenceExpression;// {elementType="referenceExpression"}

referenceExpression : id;// {
//  mixin="io.github.liias.monkey.lang.psi.impl.MonkeyReferenceImpl"
//  implements="io.github.liias.monkey.lang.psi.MonkeyReference"
//}

identifierSuffix : (LBRACKET expression RBRACKET)+
                   | arguments
                   | DOT CLASS
                   | DOT IDENTIFIER arguments
                   | DOT SUPER arguments;

selector : DOT IDENTIFIER arguments?
           | LBRACKET expression RBRACKET;

creator : objectCreator | arrayCreator;
objectCreator : NEW fullyQualifiedReferenceExpression arguments classBody?;// {pin=2}

arrayCreator : NEW LBRACKET expression RBRACKET // new [expression evaluating to integer]
               | LBRACKET (expression (COMMA expression)* )? RBRACKET // [expression1, expression2, ...]
               | dictionaryCreator;

dictionaryCreator : NEW LBRACE RBRACE // new {}
                    | LBRACE (keyValueInitializer (COMMA keyValueInitializer)* )? RBRACE; // {"a"=> exp, :b => exp2, ...}

keyValueInitializer : primary EQGT expression;

// When invoking parameter info (Ctrl+P) the children are counted here
// by ParameterInfoUtils.getCurrentParameterIndex(ASTNode, int, IElementType)
arguments : LPAREN argumentsList? RPAREN;// {
//pin=1
//}

argumentsList : expression (COMMA expression)*;// {
//recoverWhile="argumentsList_recover"
//}
//private argumentsList_recover : !(RPAREN);

// hidden is the same as "protected" in Java -  it says that a variable or function is only accessible to a class or its subclasses:
modifiers : annotation? PRIVATE? PROTECTED? PUBLIC? STATIC? HIDDEN_TOKEN?;

annotation : LPAREN symbol RPAREN;// {pin=2}

symbol : COLON referenceExpression;// {pin=1}

qualifiedName : componentName (DOT componentName)*;

componentName : id;
//{mixin="io.github.liias.monkey.lang.psi.impl.MonkeyNamedElementImpl" implements="io.github.liias.monkey.lang.psi.MonkeyNamedElement"}

// see strictID
id : IDENTIFIER;

literal : INTLITERAL
          | LONGLITERAL
          | FLOATLITERAL
          | DOUBLELITERAL
          | HEX_LITERAL
          | CHARLITERAL
          | string
          | TRUE
          | FALSE
          | NULL;
