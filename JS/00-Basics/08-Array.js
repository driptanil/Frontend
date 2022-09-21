const listUsers = ['Abcd', 'Efgh', 'Ijkl'];

console.log(listUsers)

listUsers.pop() // removes the last element

listUsers.push('Mnop'); // appends the last index

listUsers.shift(); // removes the first element

listUsers.unshift('wxyz'); // inserts to the first index

console.log(listUsers);

console.log(listUsers.length);

console.log(listUsers.indexOf('Efgh')) // returns the index of given element in the array