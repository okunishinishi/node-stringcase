#!/usr/bin/env node

/**
 * Run test
 */

'use strict'

process.chdir(__dirname + '/..')

const apeTasking = require('ape-tasking')
const apeTesting = require('ape-testing');

apeTasking.runTasks('test', [
  () => apeTesting.runMocha('test/**/*_test.js')
], true)