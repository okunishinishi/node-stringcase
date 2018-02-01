/**
 * Convert string cases between camel case, pascal case, snake case etc...
 * @module stringcase
 */

'use strict'

const d = (module) => module && module.default || module

const camelcase = d(require('./camelcase'))
const capitalcase = d(require('./capitalcase'))
const constcase = d(require('./constcase'))
const cramcase = d(require('./cramcase'))
const decapitalcase = d(require('./decapitalcase'))
const dotcase = d(require('./dotcase'))
const enumcase = d(require('./enumcase'))
const lowercase = d(require('./lowercase'))
const pascalcase = d(require('./pascalcase'))
const pathcase = d(require('./pathcase'))
const sentencecase = d(require('./sentencecase'))
const snakecase = d(require('./snakecase'))
const spacecase = d(require('./spacecase'))
const spinalcase = d(require('./spinalcase'))
const titlecase = d(require('./titlecase'))
const trimcase = d(require('./trimcase'))
const uppercase = d(require('./uppercase'))

module.exports = {
  camelcase,
  capitalcase,
  constcase,
  cramcase,
  decapitalcase,
  dotcase,
  enumcase,
  lowercase,
  pascalcase,
  pathcase,
  sentencecase,
  snakecase,
  spacecase,
  spinalcase,
  titlecase,
  trimcase,
  uppercase
}


exports.camelcase = camelcase
exports.capitalcase = capitalcase
exports.constcase = constcase
exports.cramcase = cramcase
exports.decapitalcase = decapitalcase
exports.dotcase = dotcase
exports.enumcase = enumcase
exports.lowercase = lowercase
exports.pascalcase = pascalcase
exports.pathcase = pathcase
exports.sentencecase = sentencecase
exports.snakecase = snakecase
exports.spacecase = spacecase
exports.spinalcase = spinalcase
exports.titlecase = titlecase
exports.trimcase = trimcase
exports.uppercase = uppercase
