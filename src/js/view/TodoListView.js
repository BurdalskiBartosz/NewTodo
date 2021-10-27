class TodoListView {
	constructor() {
		this.toDoListWrapper = document.querySelector("#task-to-do");
		this.doneListWrapper = document.querySelector("#done-task");
	}

	create(todos) {
		console.log(todos);
		todos.forEach((todo) => this.addToList(todo));
	}

	addToList(todo) {
		const todoState = todo.state;
		if (todoState) {
			const wrapper = document.createElement("div");
			wrapper.innerHTML = `<div>${todo.title}</div>`;
			this.doneListWrapper.appendChild(wrapper);
		} else {
			const wrapper = document.createElement("div");
			wrapper.innerHTML = `<div>${todo.title}</div>`;
			this.toDoListWrapper.appendChild(wrapper);
		}
	}

	update(todos) {
		this.doneListWrapper.innerHTML = "";
		this.toDoListWrapper.innerHTML = "";
		this.create(todos);
	}

	createHTML(data) {}
}

export { TodoListView };
