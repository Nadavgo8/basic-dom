const playingField = document.getElementById("playing-field");
console.log(playingField);
const down = document.getElementById("down");
console.log(down);
down.innerHTML = "Down";
console.log(playingField.innerHTML);
playingField.style.backgroundColor = "blue";
const ball = document.getElementById("ball");
ball.style.backgroundColor = "yellow";
ball.style.left = "0px"; // make sure it starts at 0

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);
const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: Nadav";

subHeader.classList.add("sub-header");
document.body.appendChild(subHeader);

const moveRight = function () {
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + "px";
};

const moveLeft = function () {
  let left = parseInt(ball.style.left) || 0;
  left -= 15;
  ball.style.left = left + "px";
};
const moveUp = function () {
  let top = parseInt(ball.style.top) || 0;
  top -= 15;
  ball.style.top = top + "px";
};
const moveDown = function () {
  let top = parseInt(ball.style.top) || 0;
  top += 15;
  ball.style.top = top + "px";
};
