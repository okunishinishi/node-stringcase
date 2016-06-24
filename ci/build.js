#!/usr/bin/env node

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const coz = require('coz')

apeTasking.runTasks('build', [
  () => coz.render([
    '.*.bud',
    'doc/**/.*.bud',
    'example/**/.*.bud',
    'lib/.*.bud',
    'test/.*.bud'
  ])
], true)

