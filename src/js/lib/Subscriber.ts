import { Observer } from "./Observer";

type Data = number | string | object | undefined;

class Subject {
	private subscribers: Observer[];

	constructor() {
		this.subscribers = [];
	}

	registerSubscriber(subscriber: Observer) {
		this.subscribers.push(subscriber);
	}

	unregisterSubscriber(subscriber: Observer) {
		this.subscribers = this.subscribers.filter((obs) => obs !== subscriber);
	}

	notifySubscribers(data: Data) {
		this.subscribers.forEach((obs) => obs.notify(data));
	}
}

export { Subject };
