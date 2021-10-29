class Subject {
	constructor() {
		this.subscribers = [];
	}

	registerSubscriber(subscriber) {
		this.subscribers.push(subscriber);
	}

	unregisterSubscriber(subscriber) {
		this.subscribers = this.subscribers.filter((obs) => obs !== subscriber);
	}

	notifySubscribers(data) {
		this.subscribers.forEach((obs) => obs.notify(data));
	}
}

export { Subject };
