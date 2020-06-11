const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greeting");
const greetingTitle = greeting.querySelector("h3");
const removeName = greeting.querySelector(".js-removename");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function remover() {
  localStorage.removeItem(USER_LS);
  location.reload(true);
}

function takingX() {
  removeName.addEventListener("click", remover);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function printGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greetingTitle.classList.add(SHOWING_CN);
  greetingTitle.innerText = `Hello ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  currentValue = input.value;
  printGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}

function init() {
  loadName();
  takingX();
}

init();
