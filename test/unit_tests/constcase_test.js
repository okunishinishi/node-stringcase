/**
 * Test case for module:stringcase/lib/string.constcase.
 * Runs with nodeunit.
 */

var constcase = require('../../lib/constcase.js');

exports['Constcase'] = function (test) {
    test.equal(constcase('fooBar'), 'FOO_BAR');
    test.equal(constcase('foo_bar'), 'FOO_BAR');
    test.equal(constcase('foo-bar'), 'FOO_BAR');
    test.equal(constcase('foo.bar'), 'FOO_BAR');
    test.equal(constcase('_bar_baz'), '_BAR_BAZ');
    test.equal(constcase('.bar_baz'), '_BAR_BAZ');
    test.equal(constcase(''), '');
    test.strictEqual(constcase(null), 'NULL');
    test.strictEqual(constcase(undefined), 'UNDEFINED');
    test.done();
};

