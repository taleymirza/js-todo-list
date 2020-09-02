function TodoListController() {
    this.renderList = function () {
        document.querySelector(".list").innerHTML =
            `
                    <li>
                        <span></span>
                        Learn Ember.js
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        ...
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        Profit
                        <span></span>
                    </li>
        `
    }
    this.addTodo = function (text) {
        // const listItem = `
        // <li>
        //     <span></span>${text}<span></span>
        // </li>
        // `;
        // document.querySelector('.list').innerHTML += listItem;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
             <span></span>${text}<span></span>
         `;
        document.querySelector('.list').append(listItem);
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

}

const todoList = new TodoListController();

todoList.renderList();
todoList.checkForInput();
