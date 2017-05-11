function* generatorFunction() {
	console.log('Hi');
	yield;
	console.log('Bye');
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());

function* counter() {
	let i = 0;
	while(i < 10) {
		i += 1;
		yield i;
	}
}

const counterObject = counter();

console.log(...counterObject);

// ex1

class LoremIpsum {
	constructor(text) {
		this._text = text;
	}

	*words() {
		const re = /\S+/g;
		let match;
		while (match = re.exec(this._text)) {
			yield match[0];
		}
	}
}

const lorem = new LoremIpsum('Maecenas sagittis imperdiet risus sit amet ultrices. Etiam rutrum tempus libero');

for (let word of lorem.words()) {
	console.log(word);
}


// ex2

var arr_people = [
	{ sex: 'M', name: 'Charles'},
	{ sex: 'W', name: 'Cristine'}
]

class Users {
	constructor(people) {
		this._people = people;
	}

	*alias() {
		for (let person of this._people) {
			yield person.sex === 'M' ? `Mr. ${person.name}`
									 : `Mrs. ${person.name}`;
		}
	}
}

const users = new Users(arr_people);


for (let person of users.alias()) {
	console.log(person);
}