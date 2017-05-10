'use strict';

var h1 = function h1(text) {
	var h1 = document.createElement('h1');
	h1.appendChild(document.createTextNode(text));
	return h1;
};

document.body.appendChild(h1('Hello world!!'));