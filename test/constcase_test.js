/**
 * Test case for module:stringcase/lib/string.constcase.
 * Runs with nodeunit.
 */

var constcase = require('../lib/constcase.js');

exports['Constcase'] = function (test) {
    test.equal(constcase('FOO_BAR'), 'FOO_BAR');
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

exports['Is constcase.'] = function (test) {
    test.equal(constcase.isConstcase('foo'), false);
    test.equal(constcase.isConstcase('foo_bar'), false);
    test.equal(constcase.isConstcase('fooBar'), false);
    test.equal(constcase.isConstcase('FOO_BAR'), true);
    test.done();
};