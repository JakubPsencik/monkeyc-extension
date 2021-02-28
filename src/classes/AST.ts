import * as vscode from 'vscode';
import * as path from 'path';
import { ANTLRInputStream, CommonTokenStream, Lexer, ListTokenSource, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { MonkeyCLexer } from '../MonkeyCLexer';
import {MonkeycErrorListener} from '../../ErrorListener/MonkeycErrorListener';
import { ArgumentsContext, BlockContext, ClassBodyContext, ClassDeclarationContext, CompilationUnitContext, FieldDeclarationContext, FunctionDeclarationContext, MonkeyCParser, ProgramContext, UsingDeclarationContext, VariableDeclarationContext, VarOrFieldDeclarationContext } from '../MonkeyCParser';
import { MonkeyCListener } from '../MonkeyCListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { readFileSync } from 'fs';
import * as os from "os";
import { spawn } from 'child_process';
import * as c3 from 'antlr4-c3';
import { CodeCompletionCore, ScopedSymbol } from 'antlr4-c3';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { parse } from 'path';
import { Node } from './Node';

export class AST {

    static nodeCount: number = 0; 
    private parseTree : Node[];

    public documentName: string;
    public currentNode : Node;
    public root : Node;

    constructor(documentName: string) {
        
        this.parseTree = [];
        this.documentName = documentName;
        this.currentNode = new Node(undefined,undefined,undefined,undefined,undefined);
        this.root= new Node(undefined,undefined,undefined,undefined,undefined);

    }

    getParseTree() {
        return this.parseTree;
    }

    addNode(node : Node) : void {
        this.parseTree.push(node);
    }

    findNode(ruleNumber: number) : Node | undefined {

        for(let i = this.parseTree.length-1; i >= 0; i--) {
            if(this.parseTree[i] != null && this.parseTree[i].getContext()?.ruleIndex === ruleNumber) {
                return this.parseTree[i];
            }
        }
        return undefined;
    }
}