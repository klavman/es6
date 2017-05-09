const one = 'one';
const two = 'two';

const one_two = `${one}, ${two}`;

const suma = function (a, b) {
	return a + b;
};

const res = `suma: ${suma(2, 2)}`;

console.log(one_two);
console.log(res);


// tag function

const tag = function (strings, ...args) {
	console.log('strings: ', strings);
	console.log('args: ', args);
	return 'return tag function';
};

const one_two_tag = tag`${one}, ${two}`;

console.log(one_two_tag);

// raw function

const raw = function(strings, args){
	return strings.raw[0];
}

console.log(raw`Hello\n`);


// 

const dictionary = {
	es: {

		'days ago': 'hace %{count} días'

	},

	en: {

		'days ago': '%{count} days ago'
	}
};

const i18n = function(strings, args){
	const key = strings.join('').trim();
	return dictionary[culture][key].replace('%{count}', args);
}

let culture = 'es';

console.log(i18n`${8} days ago`);