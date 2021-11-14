import { InputTypes } from "../../../enums";
import { InputDataCreate } from "../../../types";
import { InputDate } from "./InputDate";
import { InputText } from "./InputText";
import { InputTextarea } from "./InputTextarea";

class InputFactory {
	static create(data: InputDataCreate) {
		switch (data.type) {
			case InputTypes.text:
				return new InputText(data.id, data.label);
			case InputTypes.date:
				return new InputDate(data.id, data.label);
			case InputTypes.textarea:
				return new InputTextarea(data.id, data.label);
			default:
				return new InputText(data.id, (data.label = "deafult"));
		}
	}
}
export { InputFactory };
