import { InputTypes } from "../../../enums";
import { IInput } from "./IInput";

class InputText extends IInput {
	constructor(id: string, name: string) {
		super(id, name);
		this.type = InputTypes.text;
	}
}

export { InputText };
