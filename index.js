'use strict';

module.exports = function getAsyncGeneratorFunctions() {
	var generatorFuncs = [];
	try {
		generatorFuncs.push(Function('return async function* () { var x = yield; return x || 42; }')());
	} catch (e) {}
	try {
		generatorFuncs.push(Function('return async function* gen() { var x = yield; return x || 42; }')());
	} catch (e) {}
	try {
		generatorFuncs.push(Function('return { async *       concise(  ){ var x = yield; return x || 42; } }.concise;')());
	} catch (e) {}

	return generatorFuncs;
};
