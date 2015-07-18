/**
 * Convert string into lower case.
 * @memberof module:stringcase/lib
 * @function lowercase
 * @param {string} str - String to convert.
 * @returns {string} Lowercase case string.
 */

"use strict";

/** @lends lowercase */
function lowercase(str) {
    str = String(str);
    if (!str) {
        return str;
    }
    return str.toLowerCase();
}

module.exports = lowercase;