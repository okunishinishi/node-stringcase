/**
 * Convert string into upper case.
 * @memberof module:stringcase/lib
 * @function uppercase
 * @param {string} str - String to convert.
 * @returns {string} Upper case string.
 */

"use strict";

/** @lends uppercase */
function uppercase(str) {
    str = String(str);
    if (!str) {
        return str;
    }
    return str.toUpperCase();
}

module.exports = uppercase;