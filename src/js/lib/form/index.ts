import { InputTypes } from "../../enums";
import { IInput } from "./InputFactory/IInput";
import { InputFactory } from "./InputFactory/InputFactory";

type Indexes<T> = {
	[key: string]: T;
};

class Form {
	public inputs!: IInput[];

	constructor() {
		this.inputs = [];
	}
	addInput(type: InputTypes, name: string) {
		const input = InputFactory.create(type, name);
		this.inputs.push(input);
	}

	getValues() {
		const test = this.inputs.reduce((previous, current) => {
			return (previous[current.name] = current.value);
		}, {});
		console.log(test);
	}
}

export { Form };
