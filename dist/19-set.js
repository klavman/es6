'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var set = new Set();

set.add('a');
console.log(set.has('a'));

console.log(set.entries());

// forEach
set.forEach(function (v) {
  return console.log(v);
});

// for...of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;
    console.log(item);
  } // Array to Set
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

var myArray = ['1', '2', '3'];
var mySet = new Set(myArray);
console.log(mySet.has('1'));

// populate set to array
console.log([].concat(_toConsumableArray(mySet)));

// strong sets

var strongSet = new Set();
var key = {};

strongSet.add(key);
console.log(strongSet.size);

key = null;
console.log(strongSet.size);

key = [].concat(_toConsumableArray(strongSet))[0];
console.log(key);

// weak sets

var weakSet = new WeakSet();
var weakKey = {};

weakSet.add(weakKey);
console.log(weakSet.has(weakKey));

weakSet.delete(weakKey);
console.log(weakSet.has(weakKey));