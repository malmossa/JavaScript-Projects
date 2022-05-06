const guessedNumber = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const guesses = document.querySelector(".previous-guesses");
const result = document.querySelector(".alert");
const hightLow = document.querySelector(".hight-low");

button.addEventListener("click", play);

const randomNumber = Math.floor(Math.random() * 100);
let turnsCount = 0;

function play() {
  const guessValue = guessedNumber.value;
}
