import TodoModel from './TodoModel.js';

export default function TodoListController() {
    this.todoList = [];
    this.renderList = function () {
        document.querySelector(".list").innerHTML = this.todoList.map((item) => {
            return `
            <li>
                <input type="checkbox" id=${item.id} class="checkbox" />
                <label for=${item.id}>${item.text}</label>
                <span></span>
            </li>
            `
        }).join("");
    }

    this.addTodo = function (text) {
        const todoListItem = new TodoModel(text);
        this.todoList.push(todoListItem);
        this.renderList();

    }

    this.checkForInput = () => {
        const inputElement = document.querySelector('.todo-text');
        inputElement.addEventListener('keyup', (event) => {
            if (event.keyCode === 13 && event.target.value !== '') {
                const value = event.target.value;
                this.addTodo(value);
            }
        })
    }

};