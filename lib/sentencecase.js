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
    capitalcase = require('./capitalcase');

var JOINER = ' ';
var replacing = {
    from: /([A-Z])/g,
    to: function ($1) {
        return JOINER + lowercase($1)
    }
};

/** @lends sentencecase*/
function sentencecase(str) {
    str = String(str).replace(/[\-_\.\s]/g, JOINER);
    if (!str) {
        return str;
    }
    return capitalcase(trimcase(str.replace(replacing.from, replacing.to)));
}

module.exports = sentencecase;
