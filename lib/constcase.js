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

var JOINER = '_';

var replacing = {
    from: /([A-Z])/g,
    to: function ($1) {
        return JOINER + lowercase($1)
    }
};

/** @lends constcase */
function constcase(str) {
    return uppercase(snakecase(str));
}

module.exports = constcase;
