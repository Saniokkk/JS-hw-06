function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(input.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const arrBoxes = [];
  for(let i = 1; i <= amount; i +=1){
    const box = document.createElement("div");
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor()
    size += 10;
    arrBoxes.push(box)
  }
  boxes.append(...arrBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = ""
}
