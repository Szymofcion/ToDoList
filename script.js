let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTask

const main = () => {
  prepereDOMEvents;
  prepareDOMElements;
};
const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todoList ul");
};
const addNewTask = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement('li')
    newTask.textContent = todoInput.value
    ulList.append(newTask)

    todoInput.value = ''
    errorInfo.textContent = ''
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const prepereDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
};

const createToolsArea = () => {
  const toolsPanel = document.createElement('div')
  toolsPanel.classList.add('tools')

  const completeBtn = document.createElement('button')
  commpleteBtn
  const editBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')
}

console.log(addBtn);
document.addEventListener('DOMContentLoaded', main)
