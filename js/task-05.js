const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput (event) {
    const outPutValue = event.target.value === "" ? "Anonymous" : event.target.value;
    output.textContent = outPutValue;
}