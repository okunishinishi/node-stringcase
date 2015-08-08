/**
 * Test case for module:stringcase/lib/string.spinalcase
 * Runs with nodeunit
 */

"use strict";

var spinalcase = require('../lib/spinalcase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(spinalcase('fooBar'), 'foo-bar');
    test.equal(spinalcase('foo_bar'), 'foo-bar');
    test.equal(spinalcase('foo-bar'), 'foo-bar');
    test.equal(spinalcase('foo.bar'), 'foo-bar');
    test.equal(spinalcase('_bar_baz'), '-bar-baz');
    test.equal(spinalcase('.bar_baz'), '-bar-baz');
    test.equal(spinalcase(''), '');
    test.strictEqual(spinalcase(null), 'null');
    test.strictEqual(spinalcase(undefined), 'undefined');
    test.done();

};