function addTodo() {
    let input = document.getElementById("todoInput");
    let todoText = input.value;

    if (todoText === "") {
        alert("Please enter a todo");
        return;
    }

    // Create li element
    let li = document.createElement("li");
    li.className = "list-group-item";

    // Create span for text
    let span = document.createElement("span");
    span.innerText = todoText;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    // Remove todo using remove()
    deleteBtn.onclick = function () {
        li.remove();
    };

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("todoList").appendChild(li);

    // Clear input
    input.value = "";
}