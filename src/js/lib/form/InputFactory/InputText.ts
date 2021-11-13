import { InputTypes } from "../../../enums";
import { IInput } from "./IInput";

class InputText extends IInput {
	constructor(name: string) {
		super(name);
		this.type = InputTypes.text;
	}
}

export { InputText };
