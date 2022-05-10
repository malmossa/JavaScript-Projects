const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const displayString = document.querySelector(".alert");

button.addEventListener("click", reverseString);

function reverseString(event) {
  event.preventDefault();

  const userInput = input.value;
  let stringInReverse = "";
  for (let i = userInput.length - 1; i >= 0; i--) {
    stringInReverse += userInput[i];
  }

  displayString.classList.remove("d-none");
  displayString.textContent = stringInReverse;
}
