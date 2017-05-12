// ES5

Function.prototype.apply.call(Math.floor, undefined, [9.50]);

// ES6

Reflect.apply(Math.floor, undefined, [9.50]);


/*
more examples:

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Reflect
*/