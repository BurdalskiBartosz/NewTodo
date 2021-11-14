import { IInput } from "./IInput";

class InputTextarea extends IInput {
	constructor(id: string, name: string) {
		super(id, name);
	}

	get input() {
		return `<textarea class="input" id="${this.id}"></textarea>`;
	}
}
export { InputTextarea };
