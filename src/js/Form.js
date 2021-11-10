import { InputFactory } from "./lib/InputFactory/InputFactory";

class Form {
	get form() {
		return this.formElement;
	}

	init() {
		this.formElement = document.createElement("form");
		this.formElement.classList.add("form");
	}
	createInput() {
		const html = `<div class="input-wrapper">
			<label class="label" for="title">Tytuł zadania</label>
			<input class="input" name="title" id="title" type="text" />
		</div>`;
		this.formElement.appendChild(html);
	}
}

export { Form };
