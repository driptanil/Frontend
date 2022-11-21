const fruits = ["orange", "grape", "apple", "banana"];

const sortedFruits = [...fruits].sort();

console.log(fruits, sortedFruits);
// [ 'orange', 'grape', 'apple', 'banana' ] [ 'apple', 'banana', 'grape', 'orange' ]

const name = "driptanil";
const letters = [...name];

console.log(letters);
// [ 'd', 'r', 'i', 'p', 't', 'a', 'n', 'i', 'l' ]

const list1 = [1, 2, 4];
const list2 = [3, 6, 9];

const combList = [...list1, ...list2];
const concatList = list1.concat(list2);

console.log(combList);
// [ 1, 2, 4, 3, 6, 9 ]
console.log(list1, concatList);
// [ 1, 2, 4 ] [ 1, 2, 4, 3, 6, 9 ]
