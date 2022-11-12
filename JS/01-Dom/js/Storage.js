/*
localStorage.setItem('todo', 'free the cat') 
// store a key, value pair in local storage


sessionStorage.setItem("todoList", 'cats are evil')
// stores a key, value pair in session storage
// after commenting the above line and
// closing browser, removes the session storage

localStorage.clear();
// clears the local storage
*/

/*
localStorage.setItem('user', 'Driptanil')
localStorage.setItem('pwd', 'secret')

// getting the storage items
const user = localStorage.getItem('user');

console.log(user);
*/

/*
const list = ['wake up early', 'take a shower', 'brush your teeth', 'have breakfast']

localStorage.setItem('todoList', list);

const retrieved = localStorage.getItem('todoList')

console.log(retrieved)
// output: wake up early,take a shower,brush your teeth,have breakfast
*/ 

const list = ['wake up early', 'take a shower', 'brush your teeth', 'have breakfast']

localStorage.setItem('todoList', JSON.stringify(list));

const retrieved = JSON.parse(localStorage.getItem('todoList'))

console.log(retrieved)
// output: ["wake up early","take a shower","brush your teeth","have breakfast"] 
