import { InputTypes, TodoStates } from "../enums";

export type Index = {
	[key: string]: string;
};

export type InputDataCreate = {
	type: InputTypes;
	id: string;
	label: string;
};

export type TodoValues = {
	id: string;
	title: string;
	description: string;
	dateToEnd: string;
};

export type TodoJSON = {
	data: TodoValues;
	state: TodoStates;
};
