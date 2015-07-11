stringcase
=====

Convert string cases between camel case, pascal case, snake case etc...

<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![dependencies][my_gemnasium_badge_url]][my_gemnasium_url]
[![npm version][my_npm_budge_url]][my_npm_url]
[![Gratipay][my_gratipay_budge_url]][my_gratipay_url]

<!-- Badge end -->


<!-- Table start -->

Table of Contents
-----
- [How to](#01-howto)
    - [Usage](#01-howto--usage)
    - [Install](#01-howto--install)
- [Links](#09-links)
    - [Website](#09-links--website)
    - [Documents](#09-links--documents)
    - [Reports](#09-links--reports)
- [License](#10-license)
- [About this project](#11-project)
    - [Author](#11-project--author)
    - [Donation](#11-project--donation)

<!-- Table end -->


<!-- Sections start -->

<a name="01-howto"></a>
How to
-------

<a name="01-howto--usage"></a>
### Usage


```Javascript
var stringcase = require('stringcase');
stringcase.camelcase('foo_bar_baz'); // => "fooBarBaz" 
stringcase.camelcase('FooBarBaz'); // => "fooBarBaz" 
stringcase.capitalcase('foo_bar_baz'); // => "Foo_bar_baz" 
stringcase.capitalcase('FooBarBaz'); // => "FooBarBaz" 
stringcase.constcase('foo_bar_baz'); // => "FOO_BAR_BAZ" 
stringcase.constcase('FooBarBaz'); // => "_FOO_BAR_BAZ" 
stringcase.lowercase('foo_bar_baz'); // => "foo_bar_baz" 
stringcase.lowercase('FooBarBaz'); // => "foobarbaz" 
stringcase.pascalcase('foo_bar_baz'); // => "FooBarBaz" 
stringcase.pascalcase('FooBarBaz'); // => "FooBarBaz" 
stringcase.pathcase('foo_bar_baz'); // => "foo/bar/baz" 
stringcase.pathcase('FooBarBaz'); // => "/foo/bar/baz" 
stringcase.sentencecase('foo_bar_baz'); // => "Foo bar baz" 
stringcase.sentencecase('FooBarBaz'); // => "Foo bar baz" 
stringcase.snakecase('foo_bar_baz'); // => "foo_bar_baz" 
stringcase.snakecase('FooBarBaz'); // => "_foo_bar_baz" 
stringcase.spinalcase('foo_bar_baz'); // => "foo-bar-baz" 
stringcase.spinalcase('FooBarBaz'); // => "-foo-bar-baz" 
stringcase.titlecase('foo_bar_baz'); // => "Foo Bar Baz" 
stringcase.titlecase('FooBarBaz'); // => " Foo Bar Baz" 
stringcase.trimcase('foo_bar_baz'); // => "foo_bar_baz" 
stringcase.trimcase('FooBarBaz'); // => "FooBarBaz" 
stringcase.uppercase('foo_bar_baz'); // => "FOO_BAR_BAZ" 
stringcase.uppercase('FooBarBaz'); // => "FOOBARBAZ" 

```

Fore more detail, see [API Guide of stringcase functions][my_lib_apiguide_url].


<a name="01-howto--install"></a>
### Install

```
$ npm install stringcase --save
```

<a name="09-links"></a>
Links
------

<a name="09-links--website"></a>
### Website

+ [stringcase](https://github.com/okunishinishi/node-stringcase#readme)
+ [stringcase @npm][my_npm_url]
+ [stringcase @github][my_repo_url]


<a name="09-links--documents"></a>
### Documents

+ [API Guide][my_apiguide_url]

<a name="09-links--reports"></a>
### Reports

+ [Build Status @travis][my_travis_url]
+ [Analysis Result @codeclimate][my_codeclimate_url]
+ [Issues @github](https://github.com/okunishinishi/node-stringcase/issues)
+ [Coverage Report][my_coverage_url]

<a name="10-license"></a>
License
-------
This software is released under the [MIT License][my_license_url].

<a name="11-project"></a>
About this project
--------

[![Bitdeli Badge][my_bitdeli_badge_url]][bitdeli_url]

<a name="11-project--author"></a>
### Author

+ [Taka Okunishi](http://okunishitaka.com)

<a name="11-project--donation"></a>
### Donation

Support this project and [others by okunishinishi][my_gratipay_url] via [gratipay][my_gratipay_url].

[<img src="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.svg" alt="Support via Gratipay"/>][my_gratipay_url]


<!-- Sections end -->


<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-stringcase/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-stringcase
[my_travis_url]: http://travis-ci.org/okunishinishi/node-stringcase
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-stringcase.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-stringcase/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-stringcase
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-stringcase.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-stringcase.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/stringcase/apiguide/module-stringcase.html
[my_lib_apiguide_url]: http://okunishinishi.github.io/stringcase/apiguide/module-stringcase_lib.html
[my_coverage_url]: http://okunishinishi.github.io/stringcase/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/stringcase/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/stringcase
[my_npm_budge_url]: http://img.shields.io/npm/v/stringcase.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-stringcase/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-stringcase.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/node-stringcase
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/node-stringcase.svg?style=flat

<!-- Links end-->

