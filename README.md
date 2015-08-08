stringcase
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-stringcase
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-stringcase
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-stringcase.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-stringcase/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-stringcase
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-stringcase.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-stringcase.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-stringcase
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-stringcase.svg
[bd_npm_url]: http://www.npmjs.org/package/stringcase
[bd_npm_shield_url]: http://img.shields.io/npm/v/stringcase.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Convert string cases between camel case, pascal case, snake case etc...

<!-- Description End -->



<!-- Sections Start -->
<a name="sections"></a>

Installation
-----

```bash
npm install stringcase --save-dev
```

Usage
-------

```Javascript
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



```

Fore more detail, see [API Guide of stringcase functions](http://okunishinishi.github.io/node-stringcase/apiguide/module-stringcase_lib.html).



<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-stringcase/blob/master/LICENSE).

<!-- LICENSE End -->


