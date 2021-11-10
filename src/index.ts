import "./scss/index.scss";
import { TodoList } from "./js/TodoList";

interface InputsValue {
	[key: string]: string;
}

class Application {
	private form: HTMLFormElement;
	private todoList: TodoList;

	constructor() {
		this.form = document.querySelector(".form") as HTMLFormElement;
		this.todoList = new TodoList();
	}

	init() {
		this.todoList.init();
	}

	addListeners() {
		this.form.addEventListener("submit", this.handleSubmitForm.bind(this));
	}

	handleSubmitForm(e: Event) {
		e.preventDefault();
		const values = this.getValuesFromForm();
		console.log(values);
		this.addToList(values);
	}

	getValuesFromForm() {
		const items = [...this.form.elements] as HTMLInputElement[];
		const values: InputsValue = {};
		for (const item of items) {
			if (!item.name) break;
			else values[item.name] = item.value;
		}
		return values;
	}

	addToList(values: InputsValue) {
		this.todoList.addTodo(values);
	}
}
const app = new Application();
app.init();
app.addListeners();
