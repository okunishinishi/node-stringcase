/**
 * Test case for lowercase.
 * Runs with nodeunit.
 */

var lowercase = require('../lib/lowercase.js');

exports['Lowercase'] = function (test) {
    test.equal(lowercase(""), "");
    test.equal(lowercase("Foo"), "foo");
    test.done();
};

exports['Is lowercase.'] = function (test) {
    test.equal(lowercase.isLowercase("foo"), true);
    test.equal(lowercase.isLowercase("fooBar"), false);
    test.equal(lowercase.isLowercase("FOO"), false);
    test.equal(lowercase.isLowercase("FOO_BAR"), false);
    test.done();
};
