var Vehicle = function Vehicle () {
	console.log('constructor function');
}

var motorcycle = new Vehicle();

console.log(typeof Vehicle);
console.log(typeof Vehicle());
console.log(typeof new Vehicle()); // object


console.log(motorcycle.constructor === Vehicle);
console.log(motorcycle instanceof Vehicle);
console.log(motorcycle);


var Person = function Person () {
	
};

motorcycle.constructor = Person;

console.log(motorcycle);

console.log(motorcycle.constructor === Person);
console.log(motorcycle instanceof Vehicle); // wtf??
console.log(motorcycle instanceof Person);