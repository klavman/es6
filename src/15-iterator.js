
var colors = ['red', 'white', 'yellow'];

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);		
}

/* 

iterators

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators

*/

var numbers = [1, 2, 3, 4, 5];
const numberIterator = numbers[Symbol.iterator]();

console.log(numberIterator.next());

// ex1
class LoremIpsum {
	constructor(text) {
		this._text = text;
	}

	[Symbol.iterator]() {

		const re = /\S+/g;
		const text = this._text;
		return {
			next() {
				const match = re.exec(text);

				if(match) {
					return { value: match[0], done: false };
				}
				return { value: undefined, done: true };
			}
		}
	}
}

const lorem = new LoremIpsum('Maecenas sagittis imperdiet risus sit amet ultrices. Etiam rutrum tempus libero');

// for...of

for (let word of lorem) {
	console.log(word);
}

// populate with prepend

console.log([...lorem]);