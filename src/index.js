import "./scss/index.scss";
import { TodoList } from "./js/TodoList.js";

class Application {
	form;
	todoList;

	init() {
		this.todoList = new TodoList();
		this.todoList.init();
		this.form = document.querySelector(".form");
	}

	addListeners() {
		this.form.addEventListener("submit", this.handleSubmitForm.bind(this));
	}

	handleSubmitForm(e) {
		e.preventDefault();
		const values = this.getValuesFromForm();
		this.addToList(values);
	}

	getValuesFromForm() {
		const items = [...this.form.elements];
		const values = {};
		for (let item of items) {
			if (!item.name) break;
			else values[item.name] = item.value;
		}
		return values;
	}

	addToList(values) {
		this.todoList.addTodo(values);
	}
}
const app = new Application();
app.init();
app.addListeners();
