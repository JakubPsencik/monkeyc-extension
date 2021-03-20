import { ParserRuleContext } from 'antlr4ts';
import {AST} from './AST';

export class Node {  

    private id : number;
    private context : ParserRuleContext | undefined ;
    private parent : Node | undefined;
    private child : Node[] | undefined;
    private value: string | undefined;
    private _type : number | undefined;

    constructor(context: ParserRuleContext | undefined, parent : Node | undefined, child : Node[] | undefined, value : string | undefined, _type: number | undefined) 
               
    {
        this.id = AST.nodeCount;
        this.context = context;
        this.parent = parent;
        this.child = child;
        this.value = value;
        this._type = _type;

        AST.nodeCount++;

    }

    getId() { return this.id; }
    getContext() { return this.context; } 
    getParent() { return this.parent; }
    getChildren() { return this.child; }
    getValue() {return this.value; }
    getType() {return this._type; }
    addChild(child : Node) : void{ this.child?.push(child); }

}