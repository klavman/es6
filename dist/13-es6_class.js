'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
	function Point() {
		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref$x = _ref.x,
		    x = _ref$x === undefined ? 0 : _ref$x,
		    _ref$y = _ref.y,
		    y = _ref$y === undefined ? 0 : _ref$y;

		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	_createClass(Point, [{
		key: 'toFormat1',
		value: function toFormat1() {
			return '(' + this.x + ', ' + this.y + ')';
		}
	}, {
		key: 'prototypeMethod1',
		value: function prototypeMethod1() {}
	}], [{
		key: 'staticMethod1',
		value: function staticMethod1() {}
	}]);

	return Point;
}();

var p1 = new Point(8, 9);
// var p1 = new Point(); // (0, 0)
console.log(p1.toFormat1());

console.log(typeof Point === 'undefined' ? 'undefined' : _typeof(Point));

// subclass

var ColorPoint = function (_Point) {
	_inherits(ColorPoint, _Point);

	function ColorPoint(x, y, color) {
		_classCallCheck(this, ColorPoint);

		var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

		_this.color = color;
		return _this;
	}

	_createClass(ColorPoint, [{
		key: 'toFormat1',
		value: function toFormat1() {
			return '(' + this.x + ', ' + this.y + ', ' + this.color + ')';

			// super.toFormat1
		}
	}]);

	return ColorPoint;
}(Point);

var cp1 = new ColorPoint(10, 10, 'white');
console.log(cp1.toFormat1());