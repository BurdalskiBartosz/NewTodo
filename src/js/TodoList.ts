import { Todo } from "./Todo";
import { TodoJSON, TodoStates, TodoValues } from "./types";
import { TodoListView } from "./view/TodoListView";

class TodoList {
	public todos: Todo[];
	private todoListView: TodoListView;

	constructor() {
		this.todoListView = new TodoListView();
		this.todos = [];
	}

	get isTodosLocalStorageExists() {
		return !!localStorage.getItem("todos");
	}

	init() {
		this.getSavedTodos();
		this.createList();
	}

	createList() {
		this.todoListView.create(this.todos);
	}

	addTodo(data: TodoValues) {
		const todo: Todo = Todo.create(data, TodoStates.todo, this);
		this.todos.push(todo);
		this.saveTodoToLocalStorage();
		this.todoListView.update(this.todos);
	}

	deleteTodo(id: string) {
		const todoId = this.todos.findIndex((todo) => todo.data.id === id);
		this.todos.splice(todoId, 1);
		this.todoListView.update(this.todos);
		this.saveTodoToLocalStorage();
	}

	saveTodoToLocalStorage() {
		const todoData = this.todos.map((todo) => ({
			state: todo.state,
			data: todo.data
		}));
		localStorage.setItem("todos", JSON.stringify(todoData));
	}

	getSavedTodos() {
		if (!this.isTodosLocalStorageExists) return;
		const todosString = localStorage.getItem("todos") as string;
		const todos = JSON.parse(todosString);
		this.todos = todos.map((todo: TodoJSON) =>
			Todo.create(todo.data, todo.state, this)
		);
	}
}

export { TodoList };
