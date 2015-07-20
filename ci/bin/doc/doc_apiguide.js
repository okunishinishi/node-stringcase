#!/usr/bin/env node

var apiguide = require('apiguide'),
    path = require('path');

var basedir = path.resolve(__dirname, '../../..');

process.chdir(basedir);

apiguide([
    "lib/**/*.js",
    "README.md"
], {
    destination: "docs/apiguide",
    verbose: true,
    templates: {
        color: '#00AAC1',
        systemName: 'stringcase'
    }
});