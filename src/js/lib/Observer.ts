type Data = number | string | object | undefined;

class Observer {
	notify(data: Data) {
		console.log(data);
	}
}

export { Observer };
