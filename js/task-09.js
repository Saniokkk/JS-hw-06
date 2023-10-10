const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector("button.change-color")

changeColorBtn.addEventListener("click", handleChangeBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeBgColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color;
}
