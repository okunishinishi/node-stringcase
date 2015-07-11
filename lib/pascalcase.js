/**
 * Convert string into pascal case.
 * @memberof module:stringcase/lib
 * @function pascalcase
 * @param {string} str - String to convert.
 * @returns {string} str - Pascal case string.
 */

"use strict";

var camelcase = require('./camelcase'),
    capitalcase = require('./capitalcase');

/** @lends pascalcase */
function pascalcase(str) {
    str = camelcase(str);
    if (!str) {
        return str;
    }
    return capitalcase(str);

}

module.exports = pascalcase;