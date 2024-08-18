let todoItemsContainer = document.getElementById("todoItemsContainer");

let addToButton = document.getElementById("addToButton");
let todoList = [

    {
        text: "learning DSA",
        uniqueNo: 1
    },
    {
        text: "learning JAVA",
        uniqueNo: 2
    },
    {
        text: "learning Spring Boot",
        uniqueNo: 3
    },
    {
        text: "learn React",
        uniqueNo: 4
    },
    {
        text: " Learn Node",
        uniqueNo: 5
    },
];



function onTodoStatusChange(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement = document.getElementById(labelId);

    /*if (checkboxElement.checked == true) {
        labelElement.classList.add("checked");
    } else {
        labelElement.classList.remove("checked");
    }*/
    labelElement.classList.add("checked");
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {

    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId);
    };

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);

    function onAddTodo() {

        let todosCount = todoList.length;
        todosCount = todosCount + 1;

        let userInputElement = document.getElementById("todoUserInput");
        let userInputValue = userInputElement.value;
        if (userInputValue === "") {
            alert("Enter valid text");
            return;
        }
        let newTodo = {
            text: userInputValue,
            uniqueNo: todosCount
        };

        createAndAppendTodo(newTodo);
        userInputElement.value = "";
    }
    addToButton.onclick = function() {
        onAddTodo();
    }


}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}