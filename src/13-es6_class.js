class Point {
	constructor({x = 0, y = 0} = {}) {
		this.x = x;
		this.y = y;
	}

	toFormat1(){
		return `(${this.x}, ${this.y})`;
	}

	static staticMethod1() {

	}

	prototypeMethod1() {

	}
}

var p1 = new Point(8, 9);
// var p1 = new Point(); // (0, 0)
console.log(p1.toFormat1());

console.log(typeof Point);

// subclass

class ColorPoint extends Point {
	constructor (x, y, color) {
		super(x, y);
		this.color = color;
	}

	toFormat1(){
		return `(${this.x}, ${this.y}, ${this.color})`;

		// super.toFormat1
	}	
}

const cp1 = new ColorPoint(10, 10, 'white');
console.log(cp1.toFormat1());
