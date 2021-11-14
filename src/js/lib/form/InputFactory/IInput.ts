import { InputTypes } from "../../../enums";

abstract class IInput {
	public element!: HTMLDivElement;
	public id: string;
	public label: string;
	protected type!: InputTypes;

	get value() {
		const element = this.element.querySelector(
			".input"
		) as HTMLInputElement;
		return element.value;
	}

	get input() {
		return `<input class="input" id="${this.id}" type="${this.type}"/>`;
	}

	constructor(id: string, name: string) {
		this.id = id;
		this.label = name;
	}

	create() {
		const element = document.createElement("div");
		element.innerHTML = `
			<label for="${this.id}">${this.label}</label>
			${this.input}
		`;
		this.element = element;
	}
}
export { IInput };
