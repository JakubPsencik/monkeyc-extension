/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { ANTLRErrorListener } from "../node_modules/antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "../node_modules/antlr4ts/RecognitionException";
import { Recognizer } from "../node_modules/antlr4ts/Recognizer";
/**
 *
 * @author Sam Harwell
 */
export declare class MonkeycErrorListener implements ANTLRErrorListener<any> {
    /**
     * Provides a default instance of {@link ConsoleErrorListener}.
     */
    static readonly INSTANCE: MonkeycErrorListener;
    /**
     * {@inheritDoc}
     *
     * This implementation prints messages to {@link System#err} containing the
     * values of `line`, `charPositionInLine`, and `msg` using
     * the following format.
     *
     * <pre>
     * line *line*:*charPositionInLine* *msg*
     * </pre>
     */
     syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void;

}