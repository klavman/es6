"use strict";

var obj = {
	foo: function foo() {
		console.log(this == obj);
	}
};

obj.foo();

function bar() {
	console.log(this);
}

bar();

new bar();