/**
 * Convert string into trimmed string.
 * @memberof module:stringcase/lib
 * @function trimcase
 * @param {string} str - String to convert.
 * @returns {string} str - Trimmed case string.
 */

"use strict";

/** @lends trimcase */
function trimcase(str) {
    str = String(str);
    if (!str) {
        return str;
    }
    return str.trim();
}

module.exports = trimcase;