/**
 * Convert string into camel case.
 * @memberof module:stringcase/lib
 * @function camelcase
 * @param {string} str - String to convert.
 * @returns {string} Camel case string.
 */

"use strict";

var lowercase = require('./lowercase'),
    uppercase = require('./uppercase');

var replacing = {
    from: /[\-_\.\s]([a-z])/g,
    to: function (a, b) {
        return uppercase(b);
    }
};

/** @lends camelcase */
function camelcase(str) {
    str = String(str).replace(/^[\-_\.]/, '');
    if (!str) {
        return str;
    }
    return lowercase(str[0]) + str.replace(replacing.from, replacing.to).slice(1);
}

module.exports = camelcase;
