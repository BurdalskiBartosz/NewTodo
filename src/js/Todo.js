class Todo {
	state = null;
	data = {
		title: "",
		description: "",
		dateToEnd: ""
	};

	constructor(data) {
		this.state = data.state;
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

	changeState() {
		this.state = !this.state;
	}

	static create(data) {
		return new Todo(data);
	}
}

export { Todo };
