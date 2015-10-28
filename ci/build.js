#!/usr/bin/env node

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    coz = require('coz');

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud',
            'doc/**/.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    }
], true);

