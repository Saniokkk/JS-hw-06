const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleInput);

function handleInput(event) {
  const currentInputLength = input.value.length;
  const validLength = Number(input.dataset.length);

  input.className = currentInputLength === validLength ? "valid" : "invalid";
}
