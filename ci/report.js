#!/usr/bin/env node

/**
 * Send reports.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeReporting = require('ape-reporting');

apeTasking.runTasks([
    function (callback) {
        var lcov = path.resolve(basedir, 'docs/coverage/lcov.info');
        apeReporting.sendToCodeclimate(lcov, callback);
    }
], true);
