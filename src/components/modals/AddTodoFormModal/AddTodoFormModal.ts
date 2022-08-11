import { tTodoValues } from "../../../js/types";
import { Form } from "../../../js/lib/form/Form";
import { InputTypes } from "../../../js/enums";
import { Modal } from "../../../js/lib/modal";
import { TodoList } from "../../../js/TodoList";

class AddTodoFormModal {
	private todoList!: TodoList;

	constructor(todoList: TodoList) {
		this.todoList = todoList;
	}

	init() {
		const btnTest = document.querySelector("#btn-test");
		Modal.create("modal-wrapper", this.createForm());
		btnTest?.addEventListener("click", () => Modal.open());
	}

	createForm() {
		const form = new Form();
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
		return form.create(this.handleSubmitForm.bind(this));
	}

	handleSubmitForm(values: tTodoValues) {
		this.addToList(values);
		Modal.close();
	}

	addToList(todoValue: tTodoValues) {
		this.todoList.addTodo(todoValue);
	}
}

export { AddTodoFormModal };
