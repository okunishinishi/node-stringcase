#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCompiling = require('ape-compiling')
const filedel = require('filedel')

apeTasking.runTasks('browser', [
  () => filedel('browser/**/*.js'),
  () => apeCompiling.compileToEs5('**/*.js', {
    cwd: 'lib',
    out: 'browser'
  })
], true)
