'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ex1

function doSomething() {
	console.log(arguments);
	console.log(typeof arguments === 'undefined' ? 'undefined' : _typeof(arguments));

	// es6
	var args = Array.from(arguments);
	console.log(args.map(function (a) {
		return a;
	}));
}

doSomething('a', 'b', 'c', 'd', 'e', 'f');

// ex2

var numbers = [25, 26, 27, 28, 29];

var f_numbers = numbers.find(function (n) {
	return n > 27;
});
var findex_numbers = numbers.findIndex(function (n) {
	return n > 27;
});

console.log(f_numbers);
console.log(findex_numbers);