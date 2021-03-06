import { TodoStates } from "./enums";
import { TodoList } from "./TodoList";
import { tTodoValues } from "./types";

class Todo {
	public state: TodoStates;
	public parent: TodoList;
	public data: tTodoValues;

	constructor(data: tTodoValues, state: TodoStates, parent: TodoList) {
		this.data = data;
		this.state = state;
		this.parent = parent;
	}

	delete() {
		this.parent.deleteTodo(this.data.id);
	}

	static create(data: tTodoValues, state: TodoStates, parent: TodoList) {
		data.id = Math.random().toString(16).slice(2);
		return new Todo(data, state, parent);
	}
}

export { Todo };
