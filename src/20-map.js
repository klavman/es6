// Maps

let book = new Map();

book.set('title', 'Cappuccino');
book.set('chapters', 12);

console.log(book.get('title'));

// ex1

let book2 = new Map()
let key1 = key2 = {};

map.set(key1, 10);
map.set(key2, 20);

console.log(map.get(key1));


// weakMaps

let weakMap = new WeakMap();
let element = {};

weakMap.set(element, 'Original');

let value = weakMap.get(element);

element = null;

console.log(weakMap.get(element));