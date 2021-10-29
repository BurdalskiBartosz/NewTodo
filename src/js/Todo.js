class Todo {
	state = null;
	data = {
		title: "",
		description: "",
		dateToEnd: ""
	};

	constructor(data) {
		this.id = Math.random().toString(16).slice(2);
		this.title = data.title;
		this.description = data.description;
		this.dateToEnd = data.dateToEnd;
	}

	edit(data) {
		this.data = {
			...this.data,
			...data
		};
	}

	delete() {
		this.state = "deleted";
	}

	changeState() {
		this.state = !this.state;
	}

	static create(data) {
		return new Todo(data);
	}
}

export { Todo };
