/**
 * Test case for module:stringcase/lib/string.titlecase
 * Runs with nodeunit
 */

"use strict";

var titlecase = require('../lib/titlecase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(titlecase('fooBar'), 'Foo Bar');
    test.equal(titlecase('foo_bar'), 'Foo Bar');
    test.equal(titlecase('foo_for_bar'), 'Foo for Bar');
    test.equal(titlecase('foo-bar'), 'Foo Bar');
    test.equal(titlecase('foo.bar'), 'Foo Bar');
    test.equal(titlecase('_bar_baz'), ' Bar Baz');
    test.equal(titlecase('.bar_baz'), ' Bar Baz');
    test.equal(titlecase(''), '');
    test.strictEqual(titlecase(null), 'Null');
    test.strictEqual(titlecase(undefined), 'Undefined');
    test.done();

};