/**
 * Test case for module:stringcase/lib.pathcase.
 * Runs with nodeunit.
 */

var pathcase = require('../lib/pathcase.js');

exports['Pathcase'] = function (test) {
    test.equal(pathcase('fooBar'), 'foo/bar');
    test.equal(pathcase('foo_bar'), 'foo/bar');
    test.equal(pathcase('foo-bar'), 'foo/bar');
    test.equal(pathcase('foo.bar'), 'foo/bar');
    test.equal(pathcase('_bar_baz'), '/bar/baz');
    test.equal(pathcase('.bar_baz'), '/bar/baz');
    test.equal(pathcase(''), '');
    test.strictEqual(pathcase(null), 'null');
    test.strictEqual(pathcase(undefined), 'undefined');
    test.done();
};

