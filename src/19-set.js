let set = new Set();


set.add('a');
console.log(set.has('a'));

console.log(set.entries());

// forEach
set.forEach(v => console.log(v))

// for...of
for (let item of set) console.log(item);

// Array to Set
var myArray = ['1', '2', '3'];
var mySet = new Set(myArray);
console.log(mySet.has('1'));

// populate set to array
console.log([...mySet]);

// strong sets

let strongSet = new Set();
let key = {};

strongSet.add(key);
console.log(strongSet.size);

key = null;
console.log(strongSet.size);

key = [...strongSet][0];
console.log(key);

// weak sets

let weakSet = new WeakSet();
let weakKey = {};

weakSet.add(weakKey);
console.log(weakSet.has(weakKey));

weakSet.delete(weakKey);
console.log(weakSet.has(weakKey));
