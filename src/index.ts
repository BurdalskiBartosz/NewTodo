import "./scss/index.scss";
import { TodoList } from "./js/TodoList";
import { AddTodoFormModal } from "./components/AddTodoFormModal";

class Application {
	private todoList!: TodoList;
	private addTaskFormModal!: AddTodoFormModal;

	init() {
		this.todoList = new TodoList();
		this.todoList.init();
		this.addTaskFormModal = new AddTodoFormModal(this.todoList);
		this.addTaskFormModal.init();
	}
}
const app = new Application();
app.init();
