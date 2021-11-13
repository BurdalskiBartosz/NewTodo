import { InputTypes } from "../../../enums";

abstract class IInput {
	public element!: HTMLElement;
	public name: string;
	protected type!: InputTypes;

	get value() {
		// const element = this.element.querySelector("input") as HTMLInputElement;
		// console.log(element);
		return `${this.name} name`;
	}

	constructor(name: string) {
		this.name = name;
		console.log(this);
	}

	create(id: string) {
		const element = document.createElement("div");
		element.innerHTML = `
			<label for="${id}">${this.name}</label>
			<input id="${id}" type="${this.type}"/>
		`;
		this.element = element;
	}
}
export { IInput };
