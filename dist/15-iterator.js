'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colors = ['red', 'white', 'yellow'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

/* 

iterators

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators

*/

var numbers = [1, 2, 3, 4, 5];
var numberIterator = numbers[Symbol.iterator]();

console.log(numberIterator.next());

// ex1

var LoremIpsum = function () {
	function LoremIpsum(text) {
		_classCallCheck(this, LoremIpsum);

		this._text = text;
	}

	_createClass(LoremIpsum, [{
		key: Symbol.iterator,
		value: function value() {

			var re = /\S+/g;
			var text = this._text;
			return {
				next: function next() {
					var match = re.exec(text);

					if (match) {
						return { value: match[0], done: false };
					}
					return { value: undefined, done: true };
				}
			};
		}
	}]);

	return LoremIpsum;
}();

var lorem = new LoremIpsum('Maecenas sagittis imperdiet risus sit amet ultrices. Etiam rutrum tempus libero');

// for...of

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = lorem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var word = _step.value;

		console.log(word);
	}

	// populate with prepend
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

console.log([].concat(_toConsumableArray(lorem)));