/**
 * Test case for module:stringcase/lib/string.capitalcase
 * Runs with nodeunit
 */

"use strict";

var capitalcase = require('../lib/capitalcase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(capitalcase(""), "");
    test.equal(capitalcase('FooBar'), 'FooBar');
    test.equal(capitalcase('fooBar'), 'FooBar');
    test.done();

};