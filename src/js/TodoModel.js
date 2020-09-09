function TodoModel(todoText) {
    this.todoText = todoText;
    this.isChecked = false;
    this.id = Date.now();


    return {
        id: this.id,
        text: this.todoText,
        isChecked: this.isChecked
    }
}

export default TodoModel;