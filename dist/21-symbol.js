'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log(_typeof(Symbol('foo')));
console.log(Symbol('foo').toString());

var obj1 = {};
var sym1 = Symbol('foo');
var sym2 = Symbol('bar');

obj1['foo'] = 'bar';
obj1[sym1] = 'bing';
obj1[sym2] = 'bang';

console.log(obj1.foo === 'bar');
console.log(obj1[sym1] === 'bing');
console.log(obj1[sym2] === 'bang');

console.log(Object.keys(obj1));
console.log(Object.getOwnPropertySymbols(obj1));
console.log(Object.getOwnPropertySymbols(obj1)[0] === sym1);