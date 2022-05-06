const guessedNumber = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const guesses = document.querySelector(".previous-guesses");
const result = document.querySelector(".alert");
const hightLow = document.querySelector(".hight-low");

button.addEventListener("click", play);

const randomNumber = Math.floor(Math.random() * 100);
let turnsCount = 0;

function play(e) {
  e.preventDefault();
  const guessValue = guessedNumber.value;
  turnsCount++;
  guesses.textContent += ` ${guessValue}`;

  if (randomNumber !== guessValue) {
    result.classList.remove("d-none");
    result.classList.add("alert-danger");
    result.textContent = "WRONG! Try again.";
  } else {
    result.classList.remove("d-none");
    result.classList.add("alert-success");
    result.textContent = "CONGRATULATIONS! that was currect. ";
  }

  if (guessValue > randomNumber) {
    hightLow.textContent = "hight!";
  } else {
    hightLow.textContent = "low!";
  }

  guessedNumber.value = "";
}
