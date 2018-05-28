/**
 * Convert string into snake case.
 * Join punctuation with underscore.
 * @memberof module:stringcase/lib
 * @function snakecase
 * @param {string} str - String to convert.
 * @returns {string} Snake cased string.
 */

'use strict'

const lowercase = require('./lowercase')
const uppercase = require('./uppercase')

const JOINER = '_'

const replacing = {
  from: /([A-Z]+)/g,
  to (match, $1, offset, src) {
    const prefix = offset === 0 ? '' : JOINER
    const len = $1.length
    if (len === 1) {
      return prefix + lowercase($1)
    }
    const next = src.slice(offset + $1.length)
    const isOneWord = uppercase.isUppercase($1) && next[0] === JOINER
    if (isOneWord) {
      return prefix + lowercase($1)
    }
    const replaced =
      lowercase($1.substr(0, len - 1)) + JOINER + lowercase($1[len - 1])
    return prefix + replaced
  }
}

/** @lends snakecase */
function snakecase (str) {
  if (snakecase.isSnakecase(str)) {
    return str
  }
  str = String(str).replace(/[\-.:\s]/g, JOINER)
  if (!str) {
    return str
  }
  if (uppercase.isUppercase(str)) {
    str = lowercase(str)
  }
  return str.replace(replacing.from, replacing.to).replace(/_+/g, '_')
}

/**
 * Checks whether the string are snakecase.
 * @memberof module:stringcase/lib
 * @function snakecase.isSnakecase
 * @param {string} str - String to check.
 * @returns {boolean} - True if the string are snakecase.
 */
snakecase.isSnakecase = function (str) {
  return str && /^[a-z_]+$/.test(str)
}

module.exports = snakecase
