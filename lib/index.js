/**
 * Convert string cases between camel case, pascal case, snake case etc...
 * @module stringcase
 */

'use strict'


const camelcase = require('./camelcase')
const capitalcase = require('./capitalcase')
const constcase = require('./constcase')
const cramcase = require('./cramcase')
const decapitalcase = require('./decapitalcase')
const dotcase = require('./dotcase')
const enumcase = require('./enumcase')
const lowercase = require('./lowercase')
const pascalcase = require('./pascalcase')
const pathcase = require('./pathcase')
const sentencecase = require('./sentencecase')
const snakecase = require('./snakecase')
const spacecase = require('./spacecase')
const spinalcase = require('./spinalcase')
const titlecase = require('./titlecase')
const trimcase = require('./trimcase')
const uppercase = require('./uppercase')

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
