var stringcase = require('stringcase');

//------------------------
// Convert to camelcase
//------------------------
stringcase.camelcase('foo_bar_baz'); // => "fooBarBaz"
stringcase.camelcase('FOO_BAR_BAZ'); // => "fOOBARBAZ"
stringcase.camelcase('fooBarBaz'); // => "fooBarBaz"
stringcase.camelcase('FooBarBaz'); // => "fooBarBaz"


//------------------------
// Convert to capitalcase
//------------------------
stringcase.capitalcase('foo_bar_baz'); // => "Foo_bar_baz"
stringcase.capitalcase('FOO_BAR_BAZ'); // => "FOO_BAR_BAZ"
stringcase.capitalcase('fooBarBaz'); // => "FooBarBaz"
stringcase.capitalcase('FooBarBaz'); // => "FooBarBaz"


//------------------------
// Convert to constcase
//------------------------
stringcase.constcase('foo_bar_baz'); // => "FOO_BAR_BAZ"
stringcase.constcase('FOO_BAR_BAZ'); // => "F_O_O_B_A_R_B_A_Z"
stringcase.constcase('fooBarBaz'); // => "FOO_BAR_BAZ"
stringcase.constcase('FooBarBaz'); // => "FOO_BAR_BAZ"


//------------------------
// Convert to decapitalcase
//------------------------
stringcase.decapitalcase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.decapitalcase('FOO_BAR_BAZ'); // => "fOO_BAR_BAZ"
stringcase.decapitalcase('fooBarBaz'); // => "fooBarBaz"
stringcase.decapitalcase('FooBarBaz'); // => "fooBarBaz"


//------------------------
// Convert to lowercase
//------------------------
stringcase.lowercase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.lowercase('FOO_BAR_BAZ'); // => "foo_bar_baz"
stringcase.lowercase('fooBarBaz'); // => "foobarbaz"
stringcase.lowercase('FooBarBaz'); // => "foobarbaz"


//------------------------
// Convert to pascalcase
//------------------------
stringcase.pascalcase('foo_bar_baz'); // => "FooBarBaz"
stringcase.pascalcase('FOO_BAR_BAZ'); // => "FOOBARBAZ"
stringcase.pascalcase('fooBarBaz'); // => "FooBarBaz"
stringcase.pascalcase('FooBarBaz'); // => "FooBarBaz"


//------------------------
// Convert to pathcase
//------------------------
stringcase.pathcase('foo_bar_baz'); // => "foo/bar/baz"
stringcase.pathcase('FOO_BAR_BAZ'); // => "f/o/o/b/a/r/b/a/z"
stringcase.pathcase('fooBarBaz'); // => "foo/bar/baz"
stringcase.pathcase('FooBarBaz'); // => "foo/bar/baz"


//------------------------
// Convert to sentencecase
//------------------------
stringcase.sentencecase('foo_bar_baz'); // => "Foo bar baz"
stringcase.sentencecase('FOO_BAR_BAZ'); // => "F o o  b a r  b a z"
stringcase.sentencecase('fooBarBaz'); // => "Foo bar baz"
stringcase.sentencecase('FooBarBaz'); // => "Foo bar baz"


//------------------------
// Convert to snakecase
//------------------------
stringcase.snakecase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.snakecase('FOO_BAR_BAZ'); // => "f_o_o_b_a_r_b_a_z"
stringcase.snakecase('fooBarBaz'); // => "foo_bar_baz"
stringcase.snakecase('FooBarBaz'); // => "foo_bar_baz"


//------------------------
// Convert to spinalcase
//------------------------
stringcase.spinalcase('foo_bar_baz'); // => "foo-bar-baz"
stringcase.spinalcase('FOO_BAR_BAZ'); // => "f-o-o-b-a-r-b-a-z"
stringcase.spinalcase('fooBarBaz'); // => "foo-bar-baz"
stringcase.spinalcase('FooBarBaz'); // => "foo-bar-baz"


//------------------------
// Convert to titlecase
//------------------------
stringcase.titlecase('foo_bar_baz'); // => "Foo Bar Baz"
stringcase.titlecase('FOO_BAR_BAZ'); // => "F O O B A R B A Z"
stringcase.titlecase('fooBarBaz'); // => "Foo Bar Baz"
stringcase.titlecase('FooBarBaz'); // => "Foo Bar Baz"


//------------------------
// Convert to trimcase
//------------------------
stringcase.trimcase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.trimcase('FOO_BAR_BAZ'); // => "FOO_BAR_BAZ"
stringcase.trimcase('fooBarBaz'); // => "fooBarBaz"
stringcase.trimcase('FooBarBaz'); // => "FooBarBaz"


//------------------------
// Convert to uppercase
//------------------------
stringcase.uppercase('foo_bar_baz'); // => "FOO_BAR_BAZ"
stringcase.uppercase('FOO_BAR_BAZ'); // => "FOO_BAR_BAZ"
stringcase.uppercase('fooBarBaz'); // => "FOOBARBAZ"
stringcase.uppercase('FooBarBaz'); // => "FOOBARBAZ"


