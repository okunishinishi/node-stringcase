#!/usr/bin/env node

/**
 * Version up this package.
 */

"use strict";


var filename = require.resolve('../../../package.json'),
    fs = require('fs');

function _incrementVersion(version) {
    var versions = version.split('.');
    versions.push(Number(versions.pop()) + 1);
    return versions.join('.');
}

function updateVersion(filename, callback) {
    var data = require(filename);
    data.version = _incrementVersion(data.version);
    var content = JSON.stringify(data, null, 4);
    fs.writeFile(filename, content, function (err) {
        callback(err, data);
    });
}

updateVersion(filename, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Package version incremented to:', data.version);
    }
});
