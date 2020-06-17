# make-async-generator-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Returns an arbitrary async generator function, or undefined if async generator syntax is unsupported.

## Example
```js
var asyncGeneratorFunctions = require('make-async-generator-function');
assert(typeof asyncGeneratorFunctions === 'function');

var funcs = asyncGeneratorFunctions();
assert(Array.isArray(funcs), true);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/make-async-generator-function
[npm-version-svg]: http://versionbadg.es/ljharb/make-async-generator-function.svg
[travis-svg]: https://travis-ci.org/ljharb/make-async-generator-function.svg
[travis-url]: https://travis-ci.org/ljharb/make-async-generator-function
[deps-svg]: https://david-dm.org/ljharb/make-async-generator-function.svg
[deps-url]: https://david-dm.org/ljharb/make-async-generator-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-async-generator-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-async-generator-function#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/make-async-generator-function.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/make-async-generator-function.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/make-async-generator-function.svg
[downloads-url]: http://npm-stat.com/charts.html?package=make-async-generator-function

