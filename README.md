# make-async-generator-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
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
[deps-svg]: https://david-dm.org/ljharb/make-async-generator-function.svg
[deps-url]: https://david-dm.org/ljharb/make-async-generator-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-async-generator-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-async-generator-function#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/make-async-generator-function.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/make-async-generator-function.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/make-async-generator-function.svg
[downloads-url]: http://npm-stat.com/charts.html?package=make-async-generator-function
[codecov-image]: https://codecov.io/gh/ljharb/make-async-generator-function/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/make-async-generator-function/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/make-async-generator-function
[actions-url]: https://github.com/ljharb/make-async-generator-function/actions
