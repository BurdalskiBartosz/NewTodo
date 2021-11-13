import { TodoStates } from "../enums";

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
