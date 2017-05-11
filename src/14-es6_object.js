// es5

var obj1 = {
	name: 'Carl',
	age: 50,
	married: true,
	location: {
		x: 89.00,
		y: 25.00
	},
	move: function (x, y) {
		this.location.x += x;
		this.location.y += y;
	}
};

// es6

const obj2 = {
	foo(){
		//...
	},

	bar(){
		//...
	}
};

const propertyKey = 'mykey';
const keyword = 'vi';
const methodKey = 'hi';

const obj3 = {
	[propertyKey]: true,
	[`e${keyword}l`]: 'evil',
	[methodKey]() {
		return 'Hello!!';
	}

};

console.log(obj3.mykey);
console.log(obj3.evil);
console.log(obj3.hi());