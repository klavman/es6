// ex1

function doSomething() {
	console.log(arguments);
	console.log(typeof arguments);

	// es6
	let args = Array.from(arguments);
	console.log(args.map(a => a));
}

doSomething('a', 'b', 'c', 'd', 'e', 'f');

// ex2

let numbers = [25, 26, 27, 28, 29];

const f_numbers = numbers.find( n => n > 27 );
const findex_numbers = numbers.findIndex( n => n > 27 );

console.log(f_numbers);
console.log(findex_numbers);