const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const textElem = document.querySelector("#value");

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  textElem.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  textElem.textContent = counterValue;
}
