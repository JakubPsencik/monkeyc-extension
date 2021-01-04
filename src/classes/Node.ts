import { ParserRuleContext } from 'antlr4ts';
import {AST} from './AST';

export class Node {  
    private id : number;
    private context : ParserRuleContext | undefined ;
    private parent : Node | undefined;
    private child : Node[] | undefined;
    private value: string | undefined;

    constructor(context: ParserRuleContext | undefined, parent : Node | undefined, child : Node[] | undefined, value : string | undefined) {
        this.id = AST.nodeCount;
        this.context = context;
        this.parent = parent;
        this.child = child;
        this.value = value;

        AST.nodeCount++;
    }

    getId() { return this.id; }

    getContext() { return this.context; }
        
    getParent() { return this.parent; }

    getChildren() { return this.child; }
    
    getValue() {return this.value; }

    addChild(child : Node) : void{
        this.child?.push(child);
    }
}