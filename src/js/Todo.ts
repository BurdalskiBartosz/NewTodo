import { InputTypes, TodoStates } from "./enums";
import { Form } from "./lib/form";
import { TodoList } from "./TodoList";
import { TodoValues } from "./types";

class Todo {
	public state: TodoStates;
	public parent: TodoList;
	public data: TodoValues;

	constructor(data: TodoValues, state: TodoStates, parent: TodoList) {
		this.data = data;
		this.state = state;
		this.parent = parent;
	}

	delete() {
		this.parent.deleteTodo(this.data.id);
	}

	static create(data: TodoValues, state: TodoStates, parent: TodoList) {
		data.id = Math.random().toString(16).slice(2);
		return new Todo(data, state, parent);
	}
}

export { Todo };
