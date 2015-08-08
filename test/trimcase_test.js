/**
 * Test case for trimcase.
 * Runs with nodeunit.
 */

var trimcase = require('../lib/trimcase.js');

exports['Trimcase'] = function(test){
    test.equal(trimcase(' foo bar baz '), 'foo bar baz');
    test.equal(trimcase(''), '');
    test.done();
};

