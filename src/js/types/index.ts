export type TodoValues = {
	[key: string]: string;
};

export type TodoJSON = {
	data: TodoValues;
	state: TodoStates;
};

export enum TodoStates {
	todo = "TODO",
	done = "DONE",
	inProgress = "INPROGRESS"
}
