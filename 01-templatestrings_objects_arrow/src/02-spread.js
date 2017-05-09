const values = [1, 2, 3, 4];

console.log(...values);

function fspread (...args) {
	return args.length;
}

console.log(fspread(1, 2, 3));

function suma(x, y, z) {
	return x + y + z;
}

console.log(suma(...[1, 2, 3]));

// objects

const worker = {
	id: 1337,
	name: 'John',
	surname: 'Woo',
	age: 35,
	job: 'UI designer'
};

const customize = function(worker_out){
	return {
		...worker_out,
		fullName: `Mr./Mrs. ${worker_out.surname}, ${worker_out.name}`,
		age: `${worker_out.age} years old`
	};
};

console.log(customize(worker));