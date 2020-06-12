const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./js-imgs/${imgNumber + 1}.jpg`;
  image.classList.add("bgimage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();
