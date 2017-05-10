var Person = function Person (name) {
	this.name = name;
};

var me = new Person('Charlie');

// console.log(name);
console.log(me.name);

// function no constructor, context global
Person('Iniesta');
console.log(name);