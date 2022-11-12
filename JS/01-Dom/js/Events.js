const button = document.querySelector('#submit')
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todoNr = document.querySelector(".todo-nr b")
const mainTitle = document.querySelector('.main-title')
const submit = document.querySelector('#submit')
const nameInput = document.querySelector('.nameInput')
/*
// attach a event listener
button.addEventListener('click', function() {
    const newItem = document.createElement('li')
    newItem.classList.add('item')
    newItem.innerText = `item ${items.length + 1}`
    todoList.appendChild(newItem) 

    console.log(items)
    todoNr.innerText = items.length
    // inside the loop as it updates the value
})
*/

/*
button.addEventListener("click", function() {
    mainTitle.style.color = 'magenta'
    mainTitle.style.fontSize = '5rem'
})
*/

// /*
button.addEventListener("click", function(EVENT) {
    // mainTitle.classList.add('spectacular')
    // console.log(EVENT);
    mainTitle.classList.toggle('spectacular')
    // css class to html element
})
// */

button.addEventListener('mouseenter', function() {
    submit.classList.add('hover');
})

button.addEventListener('mouseleave', function() {
    submit.classList.remove('hover');
})


// attach a event listener
button.addEventListener('click', function(event) {
    // prevent default HTML properties, therefore stops auto reload
    event.preventDefault()

    const newItem = document.createElement('li')
    // creating html element

    newItem.classList.add('item')
    // adding class to html element

    newItem.innerText = nameInput.value
    // adding text inside html tag
    todoList.appendChild(newItem) 
    // console.log(items)

    // delete the present value in input box
    nameInput.value = ""

    todoNr.innerText = items.length
    // inside the loop as it updates the value


    newItem.addEventListener('click',function deleteItem(event) {
        // only actives the top most event listener
        event.stopPropagation();
        event.target.remove();
    })
    // remove items on click on the item

    // console.log(nameInput.value);
})

todoList.addEventListener('click', function() {
    todoList.classList.toggle('fade')
})