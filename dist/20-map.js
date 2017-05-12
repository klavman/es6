'use strict';

// Maps

var book = new Map();

book.set('title', 'Cappuccino');
book.set('chapters', 12);

console.log(book.get('title'));

// ex1

var book2 = new Map();
var key1 = key2 = {};

map.set(key1, 10);
map.set(key2, 20);

console.log(map.get(key1));

// weakMaps

var weakMap = new WeakMap();
var element = {};

weakMap.set(element, 'Original');

var value = weakMap.get(element);

element = null;

console.log(weakMap.get(element));