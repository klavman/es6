const numbers = ['1', '2', '3'];

const [one, two, three] = numbers;

console.log(one, two, three);

let uno, dos, tres;

[uno, dos, tres] = [1, 2, 3];

console.log(uno, dos, tres);


function names() {
	return ['anna-0', 'frank-1', 'cristine-3'];
}

let [anna, frank, cristine] = names();

console.log(anna, frank, cristine);

// objects

let object = {o: 1, t: 2};
let {o, t} = object;

console.log(o, t);


function suma({a, b} = {}) {
	return a + b;
}

const five = 5;
const six = 6;
console.log(suma({b: five, a: six}));


// alias

const person = {
	nombre: 'Charlie',
	apellidos: 'Sheen'
};

const { nombre: name, apellidos: surname } = person;
