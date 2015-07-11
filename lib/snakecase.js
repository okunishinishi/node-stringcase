/**
 * Convert string into snake case.
 * Join punctuation with underscore.
 * @memberof module:stringcase/lib
 * @function snakecase
 * @param {string} str - String to convert.
 * @returns {string} str - Snake cased string.
 */

"use strict";

var lowercase = require('./lowercase');

var JOINER = '_';

var replacing = {
    from: /([A-Z])/g,
    to: function ($1) {
        return JOINER + lowercase($1)
    }
};

/** @lends snakecase */
function snakecase(str) {
    str = String(str).replace(/[\-\.\s]/g, JOINER);
    if (!str) {
        return str;
    }
    return str.replace(replacing.from, replacing.to);
}

module.exports = snakecase;
