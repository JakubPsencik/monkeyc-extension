"use strict";
/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @author Sam Harwell
 */
class MonkeycErrorListener {
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
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {       
        console.error(`line ${line}:${charPositionInLine} ${msg}`);
    }
}
/**
 * Provides a default instance of {@link MonkeycErrorListener}.
 */
MonkeycErrorListener.INSTANCE = new MonkeycErrorListener();
exports.MonkeycErrorListener = MonkeycErrorListener;
//# sourceMappingURL=MonkeycErrorListener.js.map