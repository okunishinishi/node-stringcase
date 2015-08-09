/**
 * Convert string into sentence case.
 * First letter capped and each punctuations are joined with space.
 * @memberof module:stringcase/lib
 * @function sentencecase
 * @param {string} str - String to convert.
 * @returns {string} Sentence cased string.
 */

"use strict";


var lowercase = require('./lowercase'),
    trimcase = require('./trimcase'),
    snakecase = require('./snakecase'),
    capitalcase = require('./capitalcase');

var JOINER = ' ';

/** @lends sentencecase*/
function sentencecase(str) {
    str = String(str).replace(/^[\-_\.\s]/g, JOINER);
    if (!str) {
        return str;
    }
    return capitalcase(snakecase(trimcase(str)).replace(/_/g, JOINER));
}

module.exports = sentencecase;
