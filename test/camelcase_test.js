/**
 * Test case for module:stringcase/lib/string.camelcase
 * Runs with nodeunit
 */

"use strict";

var camelcase = require('../lib/camelcase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(camelcase('FOO'), 'foo');
    test.equal(camelcase('FOO_BAR'), 'fooBar');
    test.equal(camelcase('FooBar'), 'fooBar');
    test.equal(camelcase('foo_bar'), 'fooBar');
    test.equal(camelcase('foo-bar'), 'fooBar');
    test.equal(camelcase('foo.bar'), 'fooBar');
    test.equal(camelcase('_bar_baz'), 'barBaz');
    test.equal(camelcase('.bar_baz'), 'barBaz');
    test.equal(camelcase(''), '');
    test.strictEqual(camelcase(null), 'null');
    test.strictEqual(camelcase(undefined), 'undefined');
    test.done();

};