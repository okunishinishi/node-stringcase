#!/usr/bin/env node

/**
 * Generate docs.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    coz = require('coz'),
    apiguide = require('apiguide');

apeTasking.runTasks('doc', [
    function (callback) {
        apiguide([
            'lib/**/*.js',
            'README.md'
        ], {
            destination: "docs/apiguide",
            verbose: true,
            templates: {
                color: '#00AAC1',
                systemName: 'stringcase',
                copyright: "okunishitaka.com Copyright © 2015"
            }
        }, callback);
    }
], true);