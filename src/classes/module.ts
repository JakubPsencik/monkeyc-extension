import { ParserRuleContext } from 'antlr4ts';
import {AST} from './AST';
import {Node} from './Node';

export class module {  
    
    private name : string;
    private variables : Node[] = [];
    private functions : Node[] = [];
    private classes : Node[] = [];
    private modules : module[] = [];

    constructor(name : string) {

        this.name = name;

    }

}