import { InputDate } from "./InputDate";
import { InputText } from "./InputText";

class InputFactory {
	static create(type) {
		switch (type) {
			case "text":
				return new InputText();
			case "date":
				return new InputDate();
		}
	}
}
export { InputFactory };
