import type { Todo } from "../Todo";

class TodoListView {
	private toDoListWrapper: HTMLDivElement;
	private doneListWrapper: HTMLDivElement;

	constructor() {
		this.toDoListWrapper = document.querySelector(
			"#task-to-do"
		) as HTMLDivElement;
		this.doneListWrapper = document.querySelector(
			"#done-task"
		) as HTMLDivElement;
	}

	create(todos: Todo[]) {
		todos.forEach((todo) => {
			this.addToList(todo);
		});
	}

	addToList(todo: Todo) {
		const html = this.createHTML(todo);
		this.toDoListWrapper.appendChild(html);
	}

	update(todos: Todo[]) {
		this.doneListWrapper.innerHTML = "";
		this.toDoListWrapper.innerHTML = "";
		this.create(todos);
	}

	createHTML(todo: Todo) {
		const wrapper = document.createElement("div");
		wrapper.innerHTML = `<div class="todo">
			<h3 class="todo-title">${todo.data.title}</h3>
			<div class="todo-buttons buttons">
				<button class="buttons-button edit-button">Edytuj</button>
				<button class="buttons-button delete-button">Usuń</button>
			</div>
		</div>`;

		const deleteButton = wrapper.querySelector(
			".delete-button"
		) as HTMLButtonElement;
		deleteButton.addEventListener("click", () => todo.delete());
		return wrapper;
	}
}

export { TodoListView };
