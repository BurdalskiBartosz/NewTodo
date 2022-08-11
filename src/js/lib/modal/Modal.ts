class Modal {
	private static root: HTMLElement;
	private static wrapper: HTMLElement;

	static get closeIcon() {
		const wrapper = document.createElement("div");
		wrapper.innerHTML = `<button class="modal-close">Zamknij modal</button>`;
		const btn = wrapper.querySelector(".modal-close");
		btn?.addEventListener("click", () => this.close());
		return wrapper;
	}

	static create(id: string = "modal-wrapper", content: HTMLElement) {
		this.root = document.querySelector(`#${id}`) as HTMLDivElement;
		this.wrapper = document.createElement("div");
		this.wrapper.classList.add("modal");
		this.root?.appendChild(this.wrapper).appendChild(this.closeIcon);
		this.wrapper.appendChild(content);
	}

	static open() {
		this.root.classList.add("open");
	}

	static close() {
		this.root.classList.remove("open");
	}
}
export { Modal };
