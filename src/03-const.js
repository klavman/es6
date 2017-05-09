const N_ABC = 15;
console.log(N_ABC);

N_ABC = 10;

console.log(N_ABC);


const USER = {
	name: 'Charlie',
	surname: 'Sheen',
	age: null
};

USER.name = 'Charles';
USER.age = 50;

USER.height = 187;

delete USER.age;

console.log(USER);