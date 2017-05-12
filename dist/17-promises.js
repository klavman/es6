'use strict';

// ex1

function runAnimation(pos) {
	console.log('Moving to position...', pos);
}

function delay(interval) {
	return new Promise(function (resolve) {
		setTimeout(resolve, interval);
	});
}

runAnimation(0);
delay(1000).then(function () {
	runAnimation(1);
	return delay(1000);
}).then(function () {
	runAnimation(2);
});

// ex2

function getRandomTimeout() {
	return Math.floor(Math.random() * (1 - 5) + 5) * 1000;
}

function animation(pos) {
	console.log('Moving to position: ', pos);
	return new Promise(function (resolve) {
		console.log(resolve);
		setTimeout(resolve, getRandomTimeout());
	});
}

Promise.all([animation(1), animation(2)]).then(function () {
	animation(3);
});