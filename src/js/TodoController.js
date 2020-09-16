import TodoModel from "./TodoModel.js";

export default function TodoListController() {
  this.todoList = [];

  // this.toggleCheck = function test() {
  //   console.log("item");
  // };

  this.renderList = function () {
    document.querySelector(".list").innerHTML = this.todoList
      .map((item) => {
        return `
            <li>
                <input type="checkbox" id=${
                  item.id
                } class="checkbox" onclick="${() => console.log("this")}" />
                <label for=${item.id}>${item.text}</label>
                <span></span>
            </li>
            `;
      })
      .join("");
  };

  this.addTodo = function (text) {
    const todoListItem = new TodoModel(text);
    this.todoList.push(todoListItem);
    console.log(this.todoList);
    this.renderList();
  };

  this.checkForInput = () => {
    const inputElement = document.querySelector(".todo-text");
    inputElement.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && event.target.value !== "") {
        const value = event.target.value;
        this.addTodo(value);
      }
    });
  };

  //   this.checkCompleted = () => {
  //       this.todoList.filter(listItem = > {
  //           if()
  //       })
  //   }
}
