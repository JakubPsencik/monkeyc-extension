import {MonkeycErrorListener} from '../../ErrorListener/MonkeycErrorListener';
import { RecognitionException, Recognizer } from 'antlr4ts';
import { DocumentHandler } from '../classes/DocumentHandler';

export interface ErrorDescription {
	document: string;
	offendingSymbol: any;
	line: number;
	charPositionInLine: number;
	msg : string
	e: RecognitionException | undefined
}

export class MyErrorListener extends MonkeycErrorListener {

	syntaxErrors: ErrorDescription[] = [];


	getSyntaxErrors() {

		this.syntaxErrors.forEach(err => {
			console.log('document: ', err.document, ' | ', 'line: ', err.line, '\n');
		});
		return this.syntaxErrors;
	}

	clearSyntaxErrors() {
		for (let i = (this.syntaxError.length); i >= 0; i--) {
			this.syntaxErrors.pop();
		}
	}

	printSyntaxErrors() {
		console.log('List of syntax errors: ');
		this.syntaxErrors.forEach(err => {
			console.log(err.offendingSymbol.toString(),' ',err.line.toString(),' ',err.charPositionInLine.toString(),' ',err.msg.toString());
		});
		console.log('-------------------------------------------------------------');
	}

	syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		console.error(`line ${line}:${charPositionInLine} ${msg}`);

		let temp : ErrorDescription = { 
			document: DocumentHandler.currentDocumentName,
			offendingSymbol: offendingSymbol,
			line: line,
			charPositionInLine: charPositionInLine,
			msg: msg,
			e: e
		};

		this.syntaxErrors.push(temp);
	}
}