const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (email.value === "" || password.value === "") {
    alert("Потрібно заповнити всі поля");
  } else {
    console.log({ email: email.value, password: password.value });
    event.target.reset();
  }
}
