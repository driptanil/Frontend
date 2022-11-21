/*
// PRIMITIVE Types

const name = 'Ed'
name = "Bd" 
// Error 
*/

/*
// REFERENCE Types

const names = ['ab', 'bc', 'cd', 'de']
names[0] = 'zy'
console.log(names) // [ 'zy', 'bc', 'cd', 'de' ]

names.push('xy')
console.log(names) // [ 'zy', 'bc', 'cd', 'de', 'xy' ]

names = ['12', '23', '34']
// error
*/

/*
// PRIMITIVES Types

let bank = 500
let newBank = bank;

newBank = 250
console.log(bank, newBank) // 500 250
*/

/*
// REFERENCE Types
const names = [1, 2, 3]
// const newNames = names
const newNames = [1, 2, 3]

newNames.push(4)

// console.log(names, newNames) // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
console.log(names, newNames) // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]

*/

/*
// OBJECT Types
const user = {
	name: "Driptanil",
	age: 19,
};
// const newUser = user;
const newUser = {
	name: "Driptanil",
	age: 19,
};
newUser.age = 20;

// console.log(user, newUser); // { name: 'Driptanil', age: 20 } { name: 'Driptanil', age: 20 }
console.log(user, newUser); // { name: 'Driptanil', age: 19 } { name: 'Driptanil', age: 20 }
*/

