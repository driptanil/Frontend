function Todo(name, complete) {
	this.name = name;
	this.complete = complete;
	this.getName = function () {
		console.log(this.name);
	};
}

const todo = new Todo("Buy Hoodie", false);
const todo2 = new Todo("Do HomeWork", false);

console.log(todo);
// Todo { name: 'Buy Hoodie', complete: false }

console.log(todo2);
// Todo { name: 'Do HomeWork', complete: false }

todo.getName();
