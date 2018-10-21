/**
 * Convert string cases between camel case, pascal case, snake case etc...
 * @module stringcase
 */

'use strict'

const _d = (module) => module && module.default || module

const camelcase = _d(require('./camelcase'))
const capitalcase = _d(require('./capitalcase'))
const constcase = _d(require('./constcase'))
const cramcase = _d(require('./cramcase'))
const decapitalcase = _d(require('./decapitalcase'))
const dotcase = _d(require('./dotcase'))
const enumcase = _d(require('./enumcase'))
const lowercase = _d(require('./lowercase'))
const pascalcase = _d(require('./pascalcase'))
const pathcase = _d(require('./pathcase'))
const sentencecase = _d(require('./sentencecase'))
const snakecase = _d(require('./snakecase'))
const spacecase = _d(require('./spacecase'))
const spinalcase = _d(require('./spinalcase'))
const titlecase = _d(require('./titlecase'))
const trimcase = _d(require('./trimcase'))
const uppercase = _d(require('./uppercase'))

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
