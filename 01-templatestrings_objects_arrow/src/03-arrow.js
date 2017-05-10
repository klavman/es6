const echo = (text) => text;

console.log(echo('Hello'));

const suma = (a, b, c) => a + b + c;

console.log(suma(7, 8, 9));

// spread and arrow

const concat = (...args) => args.join(' - ');
console.log(concat('one', 'two', 'three', 'four', 'five'));

const resize = ({x, y}, ratio) => {
	console.log(ratio);
	return {
		x: x * ratio,
		y: y * ratio
	};
};

console.log(resize({x: 5, y: 7}, 100));


// arrow_this 

// ES5

const randomWinner = function (drivers) {
	const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
	return drivers[winner];
};

const F1Race = {

	drivers: [
	'Alonso',
	'Vettel',
	'Button',
	'Massa'
	],

	init: function () {
		console.log('Pilotos que van a comenzar la carrera: ', this.drivers);
		setTimeout((function () {
			console.log('El ganador es ', randomWinner(this.drivers));
		}).bind(this), 1000);
	}
};

// F1Race.init();

// ES6

F1Race.init =  function() {
	console.log('Pilotos que van a comenzar la carrera: ', this.drivers);
	setTimeout( () => console.log('El ganador es ', randomWinner(this.drivers)), 1000);

};

F1Race.init();
