import { Todo } from "./Todo";
import { TodoListView } from "./view/TodoListView";

class TodoList {
	todos = [];

	get isTodosLocalStorageExists() {
		return !!localStorage.getItem("todos");
	}

	init() {
		this.getSavedTodos();
		this.createList();
	}

	createList() {
		this.todoListView = new TodoListView();
		this.todoListView.create(this.todos);
	}

	addTodo(data) {
		const todo = Todo.create(data);
		this.todos.push(todo);
		this.saveTodoToLocalStorage();
		this.todoListView.update(this.todos);
	}

	deleteTodo(id) {
		const todoId = this.todos.findIndex((todo) => todo.id === id);
		this.todos.splice(todoId, 1);
	}

	saveTodoToLocalStorage() {
		localStorage.setItem("todos", JSON.stringify(this.todos));
	}

	getSavedTodos() {
		if (!this.isTodosLocalStorageExists) return;
		const todosString = localStorage.getItem("todos");
		const todos = JSON.parse(todosString);
		this.todos = todos;
	}
}

export { TodoList };
