'use strict';

var _templateObject = _taggedTemplateLiteral(['', ', ', ''], ['', ', ', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hello\n'], ['Hello\\n']),
    _templateObject3 = _taggedTemplateLiteral(['', ' days ago'], ['', ' days ago']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var one = 'one';
var two = 'two';

var one_two = one + ', ' + two;

var suma = function suma(a, b) {
	return a + b;
};

var res = 'suma: ' + suma(2, 2);

console.log(one_two);
console.log(res);

// tag function

var tag = function tag(strings) {
	console.log('strings: ', strings);

	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	console.log('args: ', args);
	return 'return tag function';
};

var one_two_tag = tag(_templateObject, one, two);

console.log(one_two_tag);

// raw function

var raw = function raw(strings, args) {
	return strings.raw[0];
};

console.log(raw(_templateObject2));

// 

var dictionary = {
	es: {

		'days ago': 'hace %{count} días'

	},

	en: {

		'days ago': '%{count} days ago'
	}
};

var i18n = function i18n(strings, args) {
	var key = strings.join('').trim();
	return dictionary[culture][key].replace('%{count}', args);
};

var culture = 'es';

console.log(i18n(_templateObject3, 8));