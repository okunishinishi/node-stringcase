/**
 * Test case for module:stringcase/lib/string.snakecase
 * Runs with nodeunit
 */

"use strict";

var snakecase = require('../lib/snakecase.js');


exports['Convert to camel case.'] = function (test) {
    test.equal(snakecase('FooBar'), 'foo_bar');
    test.equal(snakecase('FOO_BAR'), 'foo_bar');
    test.equal(snakecase('fooBar'), 'foo_bar');
    test.equal(snakecase('foo_bar'), 'foo_bar');
    test.equal(snakecase('foo-bar'), 'foo_bar');
    test.equal(snakecase('foo.bar'), 'foo_bar');
    test.equal(snakecase('_bar_baz'), '_bar_baz');
    test.equal(snakecase('.bar_baz'), '_bar_baz');
    test.equal(snakecase(''), '');
    test.strictEqual(snakecase(null), 'null');
    test.strictEqual(snakecase(undefined), 'undefined');
    test.done();

};


exports['Check snakecase or not.'] = function (test) {
    test.equal(snakecase.isSnakecase('foo'), true);
    test.equal(snakecase.isSnakecase('foo_bar'), true);
    test.equal(snakecase.isSnakecase('fooBar'), false);
    test.equal(snakecase.isSnakecase('FOO_BAR'), false);
    test.done();
};