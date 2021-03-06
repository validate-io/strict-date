Date Object
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a Date object.


## Installation

``` bash
$ npm install validate.io-strict-date
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isDate = require( 'validate.io-strict-date' );
```

#### isDate( value )

Validates if a `value` is a `Date` object.

``` javascript
var value = new Date();

var bool = isDate( value );
// returns true
```


## Examples

``` javascript
console.log( isDate( new Date() ) );
// returns true

console.log( isDate( Date.now() ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-strict-date.svg
[npm-url]: https://npmjs.org/package/validate.io-strict-date

[travis-image]: http://img.shields.io/travis/validate-io/strict-date/master.svg
[travis-url]: https://travis-ci.org/validate-io/strict-date

[coveralls-image]: https://img.shields.io/coveralls/validate-io/strict-date/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/strict-date?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/strict-date.svg
[dependencies-url]: https://david-dm.org/validate-io/strict-date

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/strict-date.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/strict-date

[github-issues-image]: http://img.shields.io/github/issues/validate-io/strict-date.svg
[github-issues-url]: https://github.com/validate-io/strict-date/issues
