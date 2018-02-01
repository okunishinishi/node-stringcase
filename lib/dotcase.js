/**
 * Convert string into dot case.
 * Join punctuation with slash.
 * @memberof module:stringcase/lib
 * @function dotcase
 * @param {string} str - String to convert.
 * @returns {string} Path cased string.
 */

'use strict'

const snakecase = require('./snakecase')

/** @lends dotcase */
function dotcase (str) {
  return snakecase(str).replace(/_/g, '.')
}

module.exports = dotcase
