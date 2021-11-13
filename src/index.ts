import "./scss/index.scss";
import { TodoList } from "./js/TodoList";
import { TodoValues } from "./js/types";

class Application {
	private form: HTMLFormElement;
	private todoList!: TodoList;

	constructor() {
		this.form = document.querySelector(".form") as HTMLFormElement;
	}

	init() {
		this.todoList = new TodoList();
		this.todoList.init();
	}

	addListeners() {
		this.form.addEventListener("submit", this.handleSubmitForm.bind(this));
	}

	handleSubmitForm(e: Event) {
		e.preventDefault();
		const todoValue = this.getValuesFromForm();
		this.addToList(todoValue);
	}

	getValuesFromForm() {
		const items = [...this.form.elements] as HTMLInputElement[];
		const todoValue: TodoValues = {
			id: "",
			title: "",
			description: "",
			dateToEnd: ""
		};
		for (const item of items) {
			if (!item.name) break;
			else todoValue[item.name as keyof TodoValues] = item.value;
		}
		return todoValue;
	}

	addToList(todoValue: TodoValues) {
		this.todoList.addTodo(todoValue);
	}
}
const app = new Application();
app.init();
app.addListeners();
