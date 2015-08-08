/**
 * Test case for module:stringcase/lib/string.pascalcase
 * Runs with nodeunit
 */

"use strict";

var pascalcase = require('../lib/pascalcase.js');


exports['Convert to pascal case.'] = function (test) {
    test.equal(pascalcase('foo_bar'), 'FooBar');
    test.equal(pascalcase('foo-bar'), 'FooBar');
    test.equal(pascalcase('foo.bar'), 'FooBar');
    test.equal(pascalcase('_bar_baz'), 'BarBaz');
    test.equal(pascalcase('.bar_baz'), 'BarBaz');
    test.equal(pascalcase(''), '');
    test.strictEqual(pascalcase(null), 'Null');
    test.strictEqual(pascalcase(undefined), 'Undefined');
    test.done();

};