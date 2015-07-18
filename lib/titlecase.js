/**
 * Convert string into sentence case.
 * First letter capped and each punctuations is capitalcase and joined with space.
 * @memberof module:stringcase/lib
 * @function titlecase
 * @param {string} str - String to convert.
 * @returns {string} Title cased string.
 */

"use strict";

var snakecase = require('./snakecase'),
    lowercase = require('./lowercase'),
    capitalcase = require('./capitalcase');


/** @lends titlecase*/
function titlecase(str) {
    return snakecase(str).split(/_/g).map(capitalcase).join(' ');
}

module.exports = titlecase;


