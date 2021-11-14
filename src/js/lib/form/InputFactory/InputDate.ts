import { InputTypes } from "../../../enums";
import { IInput } from "./IInput";

class InputDate extends IInput {
	constructor(id: string, name: string) {
		super(id, name);
		this.type = InputTypes.date;
	}
}
export { InputDate };
