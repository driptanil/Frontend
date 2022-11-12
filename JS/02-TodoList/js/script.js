// Selectors
const todoInput = document.querySelector('.todo__form__input')

const todoButton = document.querySelector('.todo__form__button')

const todoList = document.querySelector('.todo__container__list')

const filterOption = document.querySelector('.todo__form__select__filter')


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event) {
    // prevent form from submitting
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
    todoPoint.innerText = todoInput.value;
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
    todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = '';

}

function deleteCheck(event) {
    const item = event.target;
    // delete todo
    if (item.classList[2] === 'todo__container__list__point__trash') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }

    // check todo
    if (item.classList[2] === 'todo__container__list__point__check') {
        item.classList.toggle('todo__container__list__point__checked')
        const todo = item.parentElement.children[0];
        todo.classList.toggle('todo__container__list__point__item__stricken')
        const parent = item.parentElement;
        parent.classList.toggle('todo__container__list__point__complete')
    }
}

function filterTodo(event) {
    const todos = todoList.children;
    for (const todo of todos) {
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
