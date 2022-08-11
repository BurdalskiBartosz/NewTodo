import { InputTypes } from "../../../js/enums";
import { Form } from "../../../js/lib/form/Form";
import { tTodoValues } from "../../../js/types";

class AddTodoForm {
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
	}

	addToList(todoValue: tTodoValues) {
		// this.todoList.addTodo(todoValue);
	}
}

export { AddTodoForm };
