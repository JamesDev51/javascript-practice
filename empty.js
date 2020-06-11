const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function printToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "x";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDos(currentValue);
  toDoInput.value = "";
}
function something(toDo) {
  printToDos(toDo.text);
}

function loadToDos() {
  const loadedToDo = localStorage.getItem(TODOS_LS);
  if (loadedToDo !== null) {
    const parsedToDos = JSON.parse(loadedToDo);
    parsedToDos.forEach(something);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
