import { InputTypes } from "../../../enums";
import { InputDate } from "./InputDate";
import { InputText } from "./InputText";

class InputFactory {
	static create(type: InputTypes, name: string) {
		switch (type) {
			case "text":
				return new InputText(name);
			case "datetime-local":
				return new InputDate(name);
			default:
				return new InputText((name = "deafult"));
		}
	}
}
export { InputFactory };
