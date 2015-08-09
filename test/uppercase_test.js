/**
 * Test case for uppercase.
 * Runs with nodeunit.
 */

var uppercase = require('../lib/uppercase.js');

exports['Uppercase'] = function (test) {
    test.equal(uppercase(""), "");
    test.equal(uppercase("foo"), "FOO");
    test.done();
};


exports['Is uppercase.'] = function (test) {
    test.equal(uppercase.isUppercase("foo"), false);
    test.equal(uppercase.isUppercase("fooBar"), false);
    test.equal(uppercase.isUppercase("FOO"), true);
    test.equal(uppercase.isUppercase("FOO_BAR"), true);
    test.done();
};

