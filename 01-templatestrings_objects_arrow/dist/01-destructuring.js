'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var numbers = ['1', '2', '3'];

var one = numbers[0],
    two = numbers[1],
    three = numbers[2];


console.log(one, two, three);

var uno = void 0,
    dos = void 0,
    tres = void 0;

uno = 1;
dos = 2;
tres = 3;


console.log(uno, dos, tres);

function names() {
	return ['anna-0', 'frank-1', 'cristine-3'];
}

var _names = names(),
    _names2 = _slicedToArray(_names, 3),
    anna = _names2[0],
    frank = _names2[1],
    cristine = _names2[2];

console.log(anna, frank, cristine);

// objects

var object = { o: 1, t: 2 };
var o = object.o,
    t = object.t;


console.log(o, t);

function suma() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    a = _ref.a,
	    b = _ref.b;

	return a + b;
}

var five = 5;
var six = 6;
console.log(suma({ b: five, a: six }));

// alias

var person = {
	nombre: 'Charlie',
	apellidos: 'Sheen'
};

var name = person.nombre,
    surname = person.apellidos;