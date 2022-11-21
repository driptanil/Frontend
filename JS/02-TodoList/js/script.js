// Selectors
const input = document.querySelector('.todo__form__input')

const button = document.querySelector('.todo__form__button')

const containerList = document.querySelector('.todo__container__list')

const filterOption = document.querySelector('.todo__form__select__filter')


// Event Listeners
document.addEventListener('DOMContentLoaded', reloadItems);

button.addEventListener('click', userAdd);

containerList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filter);

function userAdd(event) {
    todo = input.value
    add(event, todo)
    saveLocal(event, todo)
}

// Functions
function add(event, todo) {
    // prevent form from submitting and reloading
    event.preventDefault()
    /*
    <div class="todo__container__point">
        <li></li>
        <button></button>
        <button></button>
    </div>
    */
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo__container__list__point')

    // creating li

    const todoPoint = document.createElement('li')
    todoPoint.innerText = todo;
    todoPoint.classList.add('todo__container__list__point__item')
    
    todoDiv.appendChild(todoPoint)

    // check button
    const checkedButton = document.createElement('button');
    checkedButton.classList.add('fa', 'fa-check', 'todo__container__list__point__check')
    todoDiv.appendChild(checkedButton)

    // trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('fas', 'fa-trash', 'todo__container__list__point__trash')
    todoDiv.appendChild(trashButton)

    // append to list
    containerList.appendChild(todoDiv);

    // clear todo input
    input.value = '';

}

function deleteCheck(event) {
    const item = event.target;
    // delete todo
    if (item.classList[2] === 'todo__container__list__point__trash') {
        const todo = item.parentElement;
        // adds animation class to todo item
        todo.classList.add('fall')
        // remove the todo item
        remove(todo)
        // waits for the animation to complete before removal
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }

    // check todo
    if (item.classList[2] === 'todo__container__list__point__check') {
        
        // styles for selected button
        item.classList.toggle('todo__container__list__point__checked')
        const todo = item.parentElement.children[0];
        checked(todo.innerText)
        todo.classList.toggle('todo__container__list__point__item__stricken')
        const parent = item.parentElement;
        parent.classList.toggle('todo__container__list__point__complete')
    }
}

function filter(event) {
    const todoList = containerList.children;
    for (const todo of todoList) {
        // console.log(event.target.value)
        // console.log(todo)
        switch(event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'complete':
                if (todo.classList.contains('todo__container__list__point__complete')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'notComplete':
                if (!todo.classList.contains('todo__container__list__point__complete')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    }   
}

function saveLocal(event, todo) {
    let todoList = [];
    let check = [];
    // check if the todo exists in local storage

    if (localStorage.getItem('Todo List') === null) {
        
    } else {
        todoList = JSON.parse(localStorage.getItem('Todo List'));
        check = JSON.parse(localStorage.getItem('Todo Check'));
    }
    todoList.push(todo);
    check.push(false);
    localStorage.setItem('Todo List', JSON.stringify(todoList));
    localStorage.setItem('Todo Check', JSON.stringify(check));
}

function reloadItems(event) {
    let todoList;
    let check;
    
    if (localStorage.getItem('Todo List') === null) {
        todoList = [];
        check = [];
        return
    }
    else {
        todoList = JSON.parse(localStorage.getItem('Todo List'));
        check = JSON.parse(localStorage.getItem('Todo Check'));
    }

    for (const index in todoList) {
        add(event, todoList[index])
        if (check[index] === true) {
            const item = containerList.children[index].children[1]
            item.classList.toggle('todo__container__list__point__checked')
            const todo = item.parentElement.children[0];
            todo.classList.toggle('todo__container__list__point__item__stricken')
            const parent = item.parentElement;
            parent.classList.toggle('todo__container__list__point__complete')
        }
    }
}

function checked(todo) {
    let todoList = [];
    let check = [];
    
    if (localStorage.getItem('Todo List') !== null) {
        todoList = JSON.parse(localStorage.getItem('Todo List'));
        check = JSON.parse(localStorage.getItem('Todo Check'));
    }
    const index = todoList.indexOf(todo)
    if (check[index] === true) {
        check[index] = false;
    } else {
        check[index] = true;
    }
    localStorage.setItem("Todo Check", JSON.stringify(check))
}

function remove(todo) {
    let todoList;
    let check;

    if (localStorage.getItem('Todo List') === null) {
        todoList = [];
        check = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('Todo List'))
        check = JSON.parse(localStorage.getItem('Todo Check'))
    }

    const todoText = todo.children[0].innerText;
    const index = todoList.indexOf(todoText)
    todoList.splice(index, 1)
    check.splice(index, 1)
    localStorage.setItem("Todo List", JSON.stringify(todoList))
    localStorage.setItem("Todo Check", JSON.stringify(check))
}

