var a = "global";

function foo () {
	var b = "local";	
	console.log('foo', a);
	console.log('foo', b);

	if (true) {
		var c = 'inside if';
	}

	console.log('exists c out if??', c, !!c);

	for (let d = 0; d < 10 ; d++) {

		// ...

	}

	// console.log('exists d out for??', d, !!d);

}

foo();

console.log(a);
// console.log(b); // error

