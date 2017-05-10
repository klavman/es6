// factory 

function clone (parent) {
	var Clone = function() {};
	Clone.prototype = parent;
	return new Clone();
}

var car = { color: 'white'};
var ibiza = clone(car);
var toledo = clone(car);

toledo.color = 'dark-blue';

console.log(ibiza.color);
console.log(toledo.color);

car.color = 'black';

console.log(ibiza.color);
console.log(toledo.color);