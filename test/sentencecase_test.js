/**
 * Test case for module:stringcase/lib/string.sentencecase
 * Runs with nodeunit
 */

"use strict";

var sentencecase = require('../lib/sentencecase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(sentencecase('fooBar'), 'Foo bar');
    test.equal(sentencecase('foo_bar'), 'Foo bar');
    test.equal(sentencecase('foo-bar'), 'Foo bar');
    test.equal(sentencecase('foo.bar'), 'Foo bar');
    test.equal(sentencecase('_bar_baz'), 'Bar baz');
    test.equal(sentencecase('.bar_baz'), 'Bar baz');
    test.equal(sentencecase(''), '');
    test.strictEqual(sentencecase(null), 'Null');
    test.strictEqual(sentencecase(undefined), 'Undefined');
    test.done();

};