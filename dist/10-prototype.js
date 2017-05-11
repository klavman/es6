'use strict';

var Vehicle = function Vehicle() {
	console.log('constructor function');
};

Vehicle.prototype.wheels = 4;

// inherence prottotype
var truck = new Vehicle();
console.log(truck.wheels);

// !!
Vehicle.prototype.wheels = 6;
console.log(truck.wheels);

truck.wheels = 8;
Vehicle.prototype.wheels = 10;
console.log(truck.wheels);