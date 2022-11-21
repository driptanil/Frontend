function Todo(name, complete) {
	this.name = name;
	this.complete = complete;
}

Todo.prototype.getName = function () {
	console.log(this.name);
};

const todo = new Todo("Do HomeWork", false);

console.log(todo);
