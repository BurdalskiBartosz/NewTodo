import "./scss/index.scss";
import { TodoList } from "./js/TodoList";
import { TodoValues } from "./js/types";
import { Form } from "./js/lib/form";
import { InputTypes } from "./js/enums";

class Application {
	private todoList!: TodoList;

	constructor() {}

	init() {
		this.todoList = new TodoList();
		this.todoList.init();
	}

	createForm() {
		const form = new Form();
		const formWrapper = document.querySelector(".form-wrapper");
		form.addInput({
			type: InputTypes.text,
			id: "title",
			label: "Tytuł zadania"
		})
			.addInput({
				type: InputTypes.textarea,
				id: "description",
				label: "Treść zadania"
			})
			.addInput({
				type: InputTypes.date,
				id: "dateToEnd",
				label: "Data deadlinu"
			});
		const formData = form.create(this.handleSubmitForm.bind(this));
		formWrapper?.appendChild(formData);
	}

	handleSubmitForm(values: TodoValues) {
		this.addToList(values);
	}

	addToList(todoValue: TodoValues) {
		this.todoList.addTodo(todoValue);
	}
}
const app = new Application();
app.init();
app.createForm();
