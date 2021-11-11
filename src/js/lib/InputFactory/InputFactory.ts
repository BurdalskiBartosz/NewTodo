import { InputDate } from "./InputDate";
import { InputText } from "./InputText";

type InputType = "text" | "date";

class InputFactory {
	static create(type: InputType) {
		switch (type) {
			case "text":
				return new InputText();
			case "date":
				return new InputDate();
		}
	}
}
export { InputFactory };
