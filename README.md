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
stringcase.camelcase('foo_bar_baz'); // => "fooBarBaz"
stringcase.camelcase('FooBarBaz'); // => "fooBarBaz"
stringcase.capitalcase('foo_bar_baz'); // => "Foo_bar_baz"
stringcase.capitalcase('FooBarBaz'); // => "FooBarBaz"
stringcase.constcase('foo_bar_baz'); // => "FOO_BAR_BAZ"
stringcase.constcase('FooBarBaz'); // => "FOO_BAR_BAZ"
stringcase.lowercase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.lowercase('FooBarBaz'); // => "foobarbaz"
stringcase.pascalcase('foo_bar_baz'); // => "FooBarBaz"
stringcase.pascalcase('FooBarBaz'); // => "FooBarBaz"
stringcase.pathcase('foo_bar_baz'); // => "foo/bar/baz"
stringcase.pathcase('FooBarBaz'); // => "foo/bar/baz"
stringcase.sentencecase('foo_bar_baz'); // => "Foo bar baz"
stringcase.sentencecase('FooBarBaz'); // => "Foo bar baz"
stringcase.snakecase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.snakecase('FooBarBaz'); // => "foo_bar_baz"
stringcase.spinalcase('foo_bar_baz'); // => "foo-bar-baz"
stringcase.spinalcase('FooBarBaz'); // => "foo-bar-baz"
stringcase.titlecase('foo_bar_baz'); // => "Foo Bar Baz"
stringcase.titlecase('FooBarBaz'); // => "Foo Bar Baz"
stringcase.trimcase('foo_bar_baz'); // => "foo_bar_baz"
stringcase.trimcase('FooBarBaz'); // => "FooBarBaz"
stringcase.uppercase('foo_bar_baz'); // => "FOO_BAR_BAZ"
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


