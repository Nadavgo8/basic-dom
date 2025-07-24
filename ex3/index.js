const container = document.getElementById("container");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 20; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.onmouseenter = function () {
    box.style.backgroundColor = getRandomColor(); 
  };

  container.appendChild(box);
}
