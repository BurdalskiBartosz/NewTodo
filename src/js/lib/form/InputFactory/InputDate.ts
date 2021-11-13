import { InputTypes } from "../../../enums";
import { IInput } from "./IInput";

class InputDate extends IInput {
	constructor(name: string) {
		super(name);
		this.type = InputTypes.date;
	}
}
export { InputDate };
