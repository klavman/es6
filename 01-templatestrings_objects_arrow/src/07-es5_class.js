var Person = function Person (name, age) {
	this.name = name;
	this.age = age;
};

Person.prototype = {
	whoami: function whoami() {
		return "I'm " + this.name;
	}
};

var p1 = new Person('Charles', '80');

console.log(p1.whoami());


// inherence es5

var Elve = function Elve () {
	
};

Elve.prototype = new Person('Jonny', '219');
Elve.prototype.sing = function sing(){
	return 'UUOOOOOOO LOLOLOLO LOLOLO!!';
};

var e1 = new Elve();
console.log(e1.whoami());
console.log(e1.sing());

