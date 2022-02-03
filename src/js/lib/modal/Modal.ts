class Modal {
	private static root: HTMLElement;
	private static wrapper: HTMLElement;

	static create(id: string = "modal-wrapper", content: HTMLElement) {
		this.root = document.querySelector(`#${id}`) as HTMLDivElement;
		this.wrapper = document.createElement("div");
		this.wrapper.classList.add("modal");
		this.root?.appendChild(this.wrapper);
		this.wrapper.appendChild(content);
	}

	static open() {
		console.log("test");
		this.root.classList.add("open");
	}

	static close() {
		this.root.classList.remove("open");
	}
}
export { Modal };
