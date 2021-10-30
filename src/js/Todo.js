class Todo {
	state = null;

	constructor(data, state, parent) {
		this.id = Math.random().toString(16).slice(2);
		this.title = data.title;
		this.description = data.description;
		this.dateToEnd = data.dateToEnd;
		this.state = state;
		this.parent = parent;
	}

	edit(data) {
		this.data = {
			...this.data,
			...data
		};
	}

	delete() {
		this.parent.deleteTodo(this.id);
	}

	changeState() {
		this.state = !this.state;
	}

	static create(data, state, parent) {
		return new Todo(data, state, parent);
	}
}

export { Todo };
