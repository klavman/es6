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

	// ex2
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

var arr_people = [{ sex: 'M', name: 'Charles' }, { sex: 'W', name: 'Cristine' }];

var Users = function () {
	function Users(people) {
		_classCallCheck(this, Users);

		this._people = people;
	}

	_createClass(Users, [{
		key: 'alias',
		value: regeneratorRuntime.mark(function alias() {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, person;

			return regeneratorRuntime.wrap(function alias$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_iteratorNormalCompletion2 = true;
							_didIteratorError2 = false;
							_iteratorError2 = undefined;
							_context4.prev = 3;
							_iterator2 = this._people[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
								_context4.next = 12;
								break;
							}

							person = _step2.value;
							_context4.next = 9;
							return person.sex === 'M' ? 'Mr. ' + person.name : 'Mrs. ' + person.name;

						case 9:
							_iteratorNormalCompletion2 = true;
							_context4.next = 5;
							break;

						case 12:
							_context4.next = 18;
							break;

						case 14:
							_context4.prev = 14;
							_context4.t0 = _context4['catch'](3);
							_didIteratorError2 = true;
							_iteratorError2 = _context4.t0;

						case 18:
							_context4.prev = 18;
							_context4.prev = 19;

							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}

						case 21:
							_context4.prev = 21;

							if (!_didIteratorError2) {
								_context4.next = 24;
								break;
							}

							throw _iteratorError2;

						case 24:
							return _context4.finish(21);

						case 25:
							return _context4.finish(18);

						case 26:
						case 'end':
							return _context4.stop();
					}
				}
			}, alias, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		})
	}]);

	return Users;
}();

var users = new Users(arr_people);

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = users.alias()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var person = _step3.value;

		console.log(person);
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}