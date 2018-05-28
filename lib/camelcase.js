/**
 * Convert string into camel case.
 * @memberof module:stringcase/lib
 * @function camelcase
 * @param {string} str - String to convert.
 * @returns {string} Camel case string.
 */

'use strict'

const lowercase = require('./lowercase')
const uppercase = require('./uppercase')

const replacing = {
  from: /[\-_:\.\s]([a-zA-Z])([a-zA-Z]*)/g,
  to: function (match, $1, $2, offset, src) {
    const len = $1.length
    return uppercase($1) + $2
  }
}

/** @lends camelcase */
function camelcase (str) {
  if (camelcase.isCamelcase(str)) {
    return str
  }
  str = String(str).replace(/^[\-_:\.\s]/, '')
  if (!str) {
    return str
  }
  if (uppercase.isUppercase(str)) {
    str = lowercase(str)
  }
  return lowercase(str[0]) + str.replace(replacing.from, replacing.to).slice(1)
    .replace(/^([A-Z]+)([A-Z])/, (match, $1, $2) => lowercase($1) + $2)
}

/**
 * Checks whether the string are camelcase.
 * @memberof module:stringcase/lib
 * @function camelcase.isCamelcase
 * @param {string} str - String to check
 * @returns {boolean} - True if the string are camelcase.
 */
camelcase.isCamelcase = function (str) {
  return str && /^[a-zA-Z]+$/.test(str) && (lowercase(str[0]) === str[0])
}

module.exports = camelcase
