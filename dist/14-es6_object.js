'use strict';

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// es5

var obj1 = {
	name: 'Carl',
	age: 50,
	married: true,
	location: {
		x: 89.00,
		y: 25.00
	},
	move: function move(x, y) {
		this.location.x += x;
		this.location.y += y;
	}
};

// es6

var obj2 = {
	foo: function foo() {
		//...
	},
	bar: function bar() {
		//...
	}
};

var propertyKey = 'mykey';
var keyword = 'vi';
var methodKey = 'hi';

var obj3 = (_obj = {}, _defineProperty(_obj, propertyKey, true), _defineProperty(_obj, 'e' + keyword + 'l', 'evil'), _defineProperty(_obj, methodKey, function () {
	return 'Hello!!';
}), _obj);

console.log(obj3.mykey);
console.log(obj3.evil);
console.log(obj3.hi());