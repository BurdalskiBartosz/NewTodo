import { tIndex, tInputDataCreate } from "../../types";
import { IInput } from "./InputFactory/IInput";
import { InputFactory } from "./InputFactory/InputFactory";

class Form {
	public inputs: IInput[];

	constructor() {
		this.inputs = [];
	}

	addInput(data: tInputDataCreate) {
		const input = InputFactory.create(data);
		this.inputs.push(input);
		return this;
	}

	getValues(e: Event) {
		e.preventDefault();
		return this.inputs.reduce((previous, current) => {
			previous[current.id] = current.value;
			return previous;
		}, {} as tIndex);
	}

	create(cb: Function) {
		const form = document.createElement("form") as HTMLFormElement;
		form.classList.add("form");
		for (const input of this.inputs) {
			input.create();
			form.appendChild(input.element);
		}
		const button = document.createElement("button");
		button.innerHTML = "Dodaj zadanie";
		form.appendChild(button);
		form.addEventListener("submit", (e) => cb(this.getValues(e)));
		return form;
	}
}

export { Form };
