#!/usr/bin/env node

/**
 * Tag on github.
 */

"use strict";

var pkgPath = require.resolve('../../../package.json');

var fs = require('fs'),
    util = require('util'),
    async = require('async'),
    childProcess = require('child_process');

function _spawn(command, args, callback) {
    var spwaned = childProcess.spawn(command, args, {});
    spwaned.stdout.pipe(process.stdout);
    spwaned.stderr.pipe(process.stderr);
    spwaned.on('close', function (exitCode) {
        var success = exitCode === 0,
            err = success ? null : new Error(['Spawn', command, 'failed.'].join(' '));
        callback(err);
    });
    return spwaned;
}


function _readJsonFile(filename, callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(filename, callback);
        },
        function (buffer, callback) {
            var data = JSON.parse(buffer.toString());
            callback(null, data);
        }
    ], callback);
}

function _tagNameForPackage(packageJsonPath, callback) {
    async.waterfall([
        function (callback) {
            _readJsonFile(packageJsonPath, callback);
        },
        function (data, callback) {
            var tagName = 'v' + data.version;
            callback(null, tagName);
        }
    ], callback);
}

function _tagExists(tagName, callback) {
    var command = util.format('git tag -l %s', tagName);
    childProcess.exec(command, function (err, stdOut, stdErr) {
        callback(err || stdErr || null, !!stdOut);
    });
}

function _addTag(tagName, callback) {
    _spawn('git', ['tag', tagName], callback);
}

function _pushTags(callback) {
    _spawn('git', ['push', '--tags'], callback);
}

async.waterfall([
    function (callback) {
        _tagNameForPackage(pkgPath, callback);
    },
    function (tagName, callback) {
        async.waterfall([
            function (callback) {
                _tagExists(tagName, callback);
            },
            function (exists, callback) {
                var err = exists ? new Error('Tag already exists.') : null;
                callback(err);
            },
            function (callback) {
                _addTag(tagName, callback);
            },
            function (callback) {
                _pushTags(callback);
            }
        ], callback);
    }
], function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Tag on git done!');
    }
});