'use strict';

var test = require('tape');
var map = require('array.prototype.map');
var asyncGenerators = require('../')();

test('async generators supported', { skip: asyncGenerators.length === 0 }, function (t) {
	return Promise.all(map(asyncGenerators, function (asyncGenFunction) {
		t.comment('asyncGenFunction: `' + asyncGenFunction + '`');
		t.equal(typeof asyncGenFunction, 'function', 'asyncGenFunction is function');
		var count = 0;
		var iterator = asyncGenFunction();
		var promise = iterator.next();
		var callback = function (result) {
			if (result.done) {
				t.deepEqual(result, { value: result.value, done: true }, 'iteration is done');
				t.equal(count, 1, 'iteration yields expected number of results');
				return null;
			}

			t.deepEqual(result, { value: result.value, done: false }, 'iteration works');
			count += 1;
			return iterator.next().then(callback);
		};
		return promise.then(callback);
	}));
});

test('async generators not supported', { skip: asyncGenerators.length > 0 }, function (t) {
	t.deepEqual(asyncGenerators, [], 'no async generator functions');
	t.end();
});
