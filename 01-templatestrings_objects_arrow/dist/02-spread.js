'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _console;

var values = [1, 2, 3, 4];

(_console = console).log.apply(_console, values);

function fspread() {
	return arguments.length;
}

console.log(fspread(1, 2, 3));

function suma(x, y, z) {
	return x + y + z;
}

console.log(suma.apply(undefined, [1, 2, 3]));

// objects

var worker = {
	id: 1337,
	name: 'John',
	surname: 'Woo',
	age: 35,
	job: 'UI designer'
};

var customize = function customize(worker_out) {
	return _extends({}, worker_out, {
		fullName: 'Mr./Mrs. ' + worker_out.surname + ', ' + worker_out.name,
		age: worker_out.age + ' years old'
	});
};

console.log(customize(worker));