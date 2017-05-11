// ex1

function runAnimation(pos){
	console.log('Moving to position...', pos);
}

function delay(interval){
	return new Promise((resolve) => {
		setTimeout(resolve, interval)
	});
} 

runAnimation(0);
delay(1000)
	.then(() => {
		runAnimation(1);
		return delay(1000);
	})
	.then( () => {
		runAnimation(2);
	})

// ex2

function getRandomTimeout() {
	return Math.floor(Math.random() * (1 - 5) + 5) * 1000;
}

function animation(pos){
	console.log('Moving to position: ', pos);
	return new Promise((resolve) => {
		console.log(resolve);
		setTimeout(resolve, getRandomTimeout());
	});
}

Promise.all([
	animation(1),
	animation(2)
]).then(() => {
	animation(3)
})