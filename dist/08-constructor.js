'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Vehicle = function Vehicle() {
	console.log('constructor function');
};

var motorcycle = new Vehicle();

console.log(typeof Vehicle === 'undefined' ? 'undefined' : _typeof(Vehicle));
console.log(_typeof(Vehicle()));
console.log(_typeof(new Vehicle())); // object


console.log(motorcycle.constructor === Vehicle);
console.log(motorcycle instanceof Vehicle);
console.log(motorcycle);

var Person = function Person() {};

motorcycle.constructor = Person;

console.log(motorcycle);

console.log(motorcycle.constructor === Person);
console.log(motorcycle instanceof Vehicle); // wtf??
console.log(motorcycle instanceof Person);