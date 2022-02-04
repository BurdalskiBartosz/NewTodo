import { InputTypes, TodoStates } from "../enums";

export type tIndex = {
	[key: string]: string;
};

export type tInputDataCreate = {
	type: InputTypes;
	id: string;
	label: string;
};

export type tTodoValues = {
	id: string;
	title: string;
	description: string;
	dateToEnd: string;
};

export type tTodoJSON = {
	data: tTodoValues;
	state: TodoStates;
};
