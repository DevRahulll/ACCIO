let todo = document.getElementById("todo-value");
let todoList = document.getElementById("todo-list");
let addTodoBtn = document.getElementById("addBtn");
let message = document.getElementById("message");

// todo-> {id:Date.now*Math.random(),task, done}
let todos = [];
todos = JSON.parse(localStorage.getItem("todos")) || [];
showTodoList();

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (todo.value.trim() === "") {
        message.textContent = "Write something";
        message.style.color = "red";
        return;
    }

    let tempTodo = {
        id: Date.now() + Math.random(),
        task: todo.value.trim(),
        done: false,
    };

    todos.push(tempTodo);
    saveTodos();
    message.textContent = "Todo Added successfully";
    message.style.color = "green";

    //display here
    showTodoList();
    //clear the input box
    todo.value = "";
});

function showTodoList() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        let checkBox = document.createElement("input");
        let span = document.createElement("span");

        checkBox.type = "checkbox";
        checkBox.checked = todo.done;
        checkBox.addEventListener("change", () => handleToggle(todo.id));

        span.id = "taskBox";
        span.textContent = todo.task;

        if (todo.done) {
            span.classList.add("completed");
        }

        deleteBtn.id = "deleteBtn";
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => {
            handleDelete(todo.id);
        });

        li.append(checkBox, span, deleteBtn);
        todoList.append(li);
    });
}

function handleToggle(id) {
    // iterate throught array of todos and find the exact todo and make changes in that object done:true
    todos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
    );
    saveTodos();
    showTodoList();
}

function handleDelete(id) {
    //filter throught todos and remove wher id is matched and return the todo where id is not matched;

    todos = todos.filter((todo) => todo.id !== id);
    saveTodos();
    showTodoList();
}
