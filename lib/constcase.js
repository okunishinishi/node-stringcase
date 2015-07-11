/**
 * Convert string into upper snake case.
 * Join punctuation with underscore and convert letters into uppercase.
 * @memberof module:stringcase/lib
 * @function constcase
 * @param {string} str - String to convert.
 * @returns {string} str - Const cased string.
 */

"use strict";

var uppercase = require('./uppercase'),
    snakecase = require('./snakecase');


/** @lends constcase */
function constcase(str) {
    return uppercase(snakecase(str));
}

module.exports = constcase;
