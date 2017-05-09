var obj = {
	foo: function () {
		console.log(this == obj);	
	}
};

obj.foo();

function bar () {
	console.log(this);	
}

bar();

new bar();