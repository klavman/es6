'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _console;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [generatorFunction, counter].map(regeneratorRuntime.mark);

function generatorFunction() {
	return regeneratorRuntime.wrap(function generatorFunction$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log('Hi');
					_context.next = 3;
					return;

				case 3:
					console.log('Bye');

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

var generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());

function counter() {
	var i;
	return regeneratorRuntime.wrap(function counter$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					i = 0;

				case 1:
					if (!(i < 10)) {
						_context2.next = 7;
						break;
					}

					i += 1;
					_context2.next = 5;
					return i;

				case 5:
					_context2.next = 1;
					break;

				case 7:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this);
}

var counterObject = counter();

(_console = console).log.apply(_console, _toConsumableArray(counterObject));

// ex1

var LoremIpsum = function () {
	function LoremIpsum(text) {
		_classCallCheck(this, LoremIpsum);

		this._text = text;
	}

	_createClass(LoremIpsum, [{
		key: 'words',
		value: regeneratorRuntime.mark(function words() {
			var re, match;
			return regeneratorRuntime.wrap(function words$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							re = /\S+/g;
							match = void 0;

						case 2:
							if (!(match = re.exec(this._text))) {
								_context3.next = 7;
								break;
							}

							_context3.next = 5;
							return match[0];

						case 5:
							_context3.next = 2;
							break;

						case 7:
						case 'end':
							return _context3.stop();
					}
				}
			}, words, this);
		})
	}]);

	return LoremIpsum;
}();

var lorem = new LoremIpsum('Maecenas sagittis imperdiet risus sit amet ultrices. Etiam rutrum tempus libero');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = lorem.words()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var word = _step.value;

		console.log(word);
	}
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