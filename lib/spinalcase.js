/**
 * Convert string into spinal case.
 * Join punctuation with hyphen.
 * @memberof module:stringcase/lib
 * @function spinalcase
 * @param {string} str - String to convert.
 * @returns {string} str - Snake cased string.
 */

"use strict";

var lowercase = require('./lowercase');

var JOINER = '-';

var replacing = {
    from: /([A-Z])/g,
    to: function ($1) {
        return JOINER + lowercase($1)
    }
};

/** @lends spinalcase */
function spinalcase(str) {
    str = String(str).replace(/[_\.\s]/g, JOINER);
    if (!str) {
        return str;
    }
    return str.replace(replacing.from, replacing.to);
}

module.exports = spinalcase;
