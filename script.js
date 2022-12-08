
const todoList = [];

const todoListElement = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addTodo);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addTodo()
  }
});

//getting input and arranging it into array
function addTodo() {
  const todoText = document.querySelector("#myInput").value;

  if (todoText == "") {
    alert("You did not enter any item");
  } else {
    const todoObject = {
      id: todoList.length,
      todoText: todoText,
      isDone: false,
    };

    //unshift adds new element to the beginning of the array, newly added item is shown at the top
    todoList.unshift(todoObject);
    displayTodos();
  }
}

//the isdone value is changed to true when the element is clicked, if you click again, it changes it False
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);

  todoList[selectedTodoIndex].isDone
    ? (todoList[selectedTodoIndex].isDone = false)
    : (todoList[selectedTodoIndex].isDone = true);
  displayTodos();
}

//adding function to delete items from the list
function deleteItem(x) {
  todoList.splice(
    todoList.findIndex((item) => item.id == x),
    1
  );
  displayTodos();
}

//adding function to display the items added onto the screen
function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.todoText;
    listElement.setAttribute("data", item.id);

    delBtn.setAttribute("data", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data");
      doneTodo(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data");
      deleteItem(delId);
    });

    todoListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}