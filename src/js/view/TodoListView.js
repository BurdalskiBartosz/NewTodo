class TodoListView {
	constructor() {
		this.toDoListWrapper = document.querySelector("#task-to-do");
		this.doneListWrapper = document.querySelector("#done-task");
		this.doneTasksList = [];
	}

	create(todos) {
		todos.forEach((todo) => this.addToList(todo));
	}

	addToList(todo) {
		const html = this.createHTML(todo);
		this.toDoListWrapper.appendChild(html);
	}

	update(todos) {
		this.doneListWrapper.innerHTML = "";
		this.toDoListWrapper.innerHTML = "";
		this.create(todos);
	}

	createHTML(todo) {
		console.log(todo);
		const wrapper = document.createElement("div");
		wrapper.innerHTML = `<div class="todo">
			<h3 class="todo-title">${todo.title}</h3>
			<div class="todo-buttons buttons">
				<button class="buttons-button edit-button">Edytuj</button>
				<button class="buttons-button delete-button">Usuń</button>
			</div>
		</div>`;

		return wrapper;
	}
}

export { TodoListView };
