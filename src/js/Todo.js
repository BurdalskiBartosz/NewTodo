class Todo {
	state = false;
	data = {
		title: "",
		description: "",
		dateToEnd: ""
	};

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
