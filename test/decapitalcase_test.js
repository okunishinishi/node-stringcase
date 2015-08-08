/**
 * Test case for decapitalcase.
 * Runs with nodeunit.
 */

var decapitalcase = require('../lib/decapitalcase.js');

exports['Decapitalcase'] = function(test){
    test.equal(decapitalcase(""), "");
    test.equal(decapitalcase('FooBar'), 'fooBar');
    test.equal(decapitalcase('fooBar'), 'fooBar');
    test.done();
};

