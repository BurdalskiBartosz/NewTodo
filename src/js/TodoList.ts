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
		const todo = Todo.create(data, false, this);
		this.todos.push(todo);
		this.saveTodoToLocalStorage();
		this.todoListView.update(this.todos);
	}

	deleteTodo(id) {
		const todoId = this.todos.findIndex((todo) => todo.id === id);
		this.todos.splice(todoId, 1);
		this.todoListView.update(this.todos);
		this.saveTodoToLocalStorage();
	}

	saveTodoToLocalStorage() {
		const todoData = this.todos.map((todo) => ({
			state: todo.state,
			data: {
				title: todo.title,
				description: todo.description,
				dateToEnd: todo.dateToEnd
			}
		}));
		localStorage.setItem("todos", JSON.stringify(todoData));
	}

	getSavedTodos() {
		if (!this.isTodosLocalStorageExists) return;
		const todosString = localStorage.getItem("todos");
		const todos = JSON.parse(todosString);
		this.todos = todos.map((todo) =>
			Todo.create(todo.data, todo.state, this)
		);
	}
}

export { TodoList };
