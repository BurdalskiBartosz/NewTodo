class Form {
	public formElement!: HTMLFormElement;

	get form() {
		return this.formElement;
	}

	init() {
		this.formElement = document.createElement("form");
		this.formElement.classList.add("form");
	}
	createInput() {
		const wrapper = document.createElement("div");
		wrapper.innerHTML = `<div class="input-wrapper">
			<label class="label" for="title">Tytuł zadania</label>
			<input class="input" name="title" id="title" type="text" />
		</div>`;
		this.formElement.appendChild(wrapper);
	}
}

export { Form };
