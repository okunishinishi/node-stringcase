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
var sc = require('stringcase');
sc.camelcase('foo_bar_baz'); // => "fooBarBaz" 
sc.camelcase('FooBarBaz'); // => "fooBarBaz" 
sc.capitalcase('foo_bar_baz'); // => "Foo_bar_baz" 
sc.capitalcase('FooBarBaz'); // => "FooBarBaz" 
sc.constcase('foo_bar_baz'); // => "FOO_BAR_BAZ" 
sc.constcase('FooBarBaz'); // => "_FOO_BAR_BAZ" 
sc.lowercase('foo_bar_baz'); // => "foo_bar_baz" 
sc.lowercase('FooBarBaz'); // => "foobarbaz" 
sc.pascalcase('foo_bar_baz'); // => "FooBarBaz" 
sc.pascalcase('FooBarBaz'); // => "FooBarBaz" 
sc.pathcase('foo_bar_baz'); // => "foo/bar/baz" 
sc.pathcase('FooBarBaz'); // => "/foo/bar/baz" 
sc.sentencecase('foo_bar_baz'); // => "Foo bar baz" 
sc.sentencecase('FooBarBaz'); // => "Foo bar baz" 
sc.snakecase('foo_bar_baz'); // => "foo_bar_baz" 
sc.snakecase('FooBarBaz'); // => "_foo_bar_baz" 
sc.spinalcase('foo_bar_baz'); // => "foo-bar-baz" 
sc.spinalcase('FooBarBaz'); // => "-foo-bar-baz" 
sc.titlecase('foo_bar_baz'); // => "Foo Bar Baz" 
sc.titlecase('FooBarBaz'); // => " Foo Bar Baz" 
sc.trimcase('foo_bar_baz'); // => "foo_bar_baz" 
sc.trimcase('FooBarBaz'); // => "FooBarBaz" 
sc.uppercase('foo_bar_baz'); // => "FOO_BAR_BAZ" 
sc.uppercase('FooBarBaz'); // => "FOOBARBAZ" 

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

+ [stringcase](https://github.com/okunishinishi/stringcase#readme)
+ [stringcase @npm][my_npm_url]
+ [stringcase @github][my_repo_url]


<a name="09-links--documents"></a>
### Documents

+ [API Guide][my_apiguide_url]

<a name="09-links--reports"></a>
### Reports

+ [Build Status @travis][my_travis_url]
+ [Analysis Result @codeclimate][my_codeclimate_url]
+ [Issues @github](https://github.com/okunishinishi/stringcase/issues)
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
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/stringcase/trend.png
[my_repo_url]: https://github.com/okunishinishi/stringcase
[my_travis_url]: http://travis-ci.org/okunishinishi/stringcase
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/stringcase.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/stringcase/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/stringcase
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/stringcase.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/stringcase.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/stringcase/apiguide/module-stringcase.html
[my_lib_apiguide_url]: http://okunishinishi.github.io/stringcase/apiguide/module-stringcase_lib.html
[my_coverage_url]: http://okunishinishi.github.io/stringcase/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/stringcase/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/stringcase
[my_npm_budge_url]: http://img.shields.io/npm/v/stringcase.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/stringcase/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/stringcase.svg?style=flat
[my_gemnasium_url]: http://gemnasium.com/okunishinishi/stringcase
[my_gemnasium_badge_url]: http://img.shields.io/gemnasium/okunishinishi/stringcase.svg?style=flat

<!-- Links end-->

