/*

DOM is Document Object Model, which allows use to access,
HTML and CSS code through JavaScript.

Window:
    - Console    
    - Document
        - head tag
        - body tag

*/

/*
console.log(document)
// display the whole html code in the browser console

const headers = document.getElementsByTagName('h2')
console.log(headers)
// output: [h2.hello, h2]

const items = document.getElementsByClassName('item')
console.log(items)
// output: [item, item, item, item, item]

const buttons = document.getElementById('submit')
console.log(buttons)
*/

/*
const collectionItems = document.getElementsByClassName("item");
// HTML collections

const nodeItems = document.querySelectorAll(".item");
// Node Items

console.log(collectionItems, nodeItems);
*/

/*
const nodeItems = document.querySelector("#todo-list");
console.log(nodeItems.childNodes);
// prints all the childNodes of the selected node

console.log(nodeItems.children);
// prints all the children elements of the selected node

for (item of nodeItems.children) {
    console.log(item);
}
*/

/*
// ADD HTML ELEMENTS USING HTML COLLECTIONS

const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById('todo-list');

for (i = 1; i < 7; i++) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.innerText = 'Item ' + i;

    todoList.appendChild(newItem);
}
// add li tags with innerText with Item

const todoNr = document.getElementsByClassName('todo-nr')[0];
todoNr.innerText = "Length: " + collectionItems.length;
// using html collection the length gets updated, it become 6
*/

/*
// ADD HTML ELEMENTS USING NODE LISTS

const nodeItems = document.querySelectorAll(".item");
// using node items the length does not get updated, it remains 0

const todoList = document.querySelector("#todo-list");
const items = todoList.children;
// using node item children, the length updated

for (i = 1; i < 7; i++) {
    const newItem = document.createElement('li');
    newItem.classList.add('specialItem')
    newItem.innerText = 'Special Item ' + i
    
    todoList.appendChild(newItem);
}
const todoNr = document.getElementsByClassName('todo-nr')[0];
const newItem = document.createElement('li')
newItem.innerText = "Node querySelectorAll: " + nodeItems.length;
todoNr.appendChild(newItem)

const newItem2 = document.createElement('li')
newItem2.innerText = "Node children: " + items.length;
todoNr.appendChild(newItem2)
*/

