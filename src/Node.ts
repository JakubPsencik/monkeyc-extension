import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, Lexer, ListTokenSource, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from './MonkeyCLexer';
import {MonkeycErrorListener} from '../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from './MonkeyCParser';
import { MonkeyCListener } from './MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { parse } from 'path';

export { Node, Leaf };

class Node {

    private context : ParserRuleContext | undefined ;
    private parent : ParserRuleContext | Node | undefined;
    private child : Node[] | undefined;
    private value: string | undefined;

    constructor(context: ParserRuleContext | undefined, parent : ParserRuleContext | Node | undefined, child : Node[] | undefined, value : string | undefined) {
        this.context = context;
        this.parent = parent;
        this.child = child;
        this.value = value;
    }

    getContext() { return this.context; }
        
    getParent() { return this.parent; }

    getChildren() { return this.child; }
    
    getValue() {return this.value; }

    addChild(child : Node) : void{
        this.child?.push(child);
    }
}

class Leaf {

    private value : string;
    private parent : ParserRuleContext | Node | undefined;

    constructor(value: string, parent : ParserRuleContext | Node | undefined) {
        this.value = value;
        this.parent = parent;
    }

    getContext() {
        return this.value;
    }

    getParent() {
        return this.parent;
    }
}