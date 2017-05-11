'use strict';

var echo = function echo(text) {
	return text;
};

console.log(echo('Hello'));

var suma = function suma(a, b, c) {
	return a + b + c;
};

console.log(suma(7, 8, 9));

// spread and arrow

var concat = function concat() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args.join(' - ');
};
console.log(concat('one', 'two', 'three', 'four', 'five'));

var resize = function resize(_ref, ratio) {
	var x = _ref.x,
	    y = _ref.y;

	console.log(ratio);
	return {
		x: x * ratio,
		y: y * ratio
	};
};

console.log(resize({ x: 5, y: 7 }, 100));

// arrow_this 

// ES5

var randomWinner = function randomWinner(drivers) {
	var winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
	return drivers[winner];
};

var F1Race = {

	drivers: ['Alonso', 'Vettel', 'Button', 'Massa'],

	init: function init() {
		console.log('Pilotos que van a comenzar la carrera: ', this.drivers);
		setTimeout(function () {
			console.log('El ganador es ', randomWinner(this.drivers));
		}.bind(this), 1000);
	}
};

// F1Race.init();

// ES6

F1Race.init = function () {
	var _this = this;

	console.log('Pilotos que van a comenzar la carrera: ', this.drivers);
	setTimeout(function () {
		return console.log('El ganador es ', randomWinner(_this.drivers));
	}, 1000);
};

F1Race.init();