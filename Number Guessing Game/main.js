const guessedNumber = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const guesses = document.querySelector(".previous-guesses");
const result = document.querySelector(".alert");
const hightLow = document.querySelector(".hight-low");

button.addEventListener("click", gamePlay);

// const randomNumber = Math.floor(Math.random() * 100);
const randomNumber = 25;

let turnsCount = 0;

function gamePlay(e) {
  e.preventDefault();
  const guessValue = Number(guessedNumber.value);

  turnsCount++;

  if (turnsCount === 10) {
    gameLost();
  } else if (randomNumber === guessValue) {
    gameWin();
  } else {
    guesses.textContent += ` ${guessValue}`;
    result.classList.remove("d-none");
    result.classList.add("alert-danger");
    result.textContent = "WRONG! Try again.";
    if (guessValue < randomNumber) {
      hightLow.textContent = "LOW!";
    } else {
      hightLow.textContent = "HIGHT!";
    }
    guessedNumber.value = "";
  }
}

function gameWin() {
  guessedNumber.setAttribute("disabled", "");
  const lastGuess = document.querySelector(".last-guess");
  lastGuess.classList.add("d-none");

  if (result.classList.contains("alert-danger")) {
    result.classList.remove("alert-danger");
  }

  result.textContent = `CONGRATULATIONS YOU WIN.. in ${turnsCount} guesses`;

  result.classList.add("alert-success");

  const playAgainButton = document.querySelector(".play-again");
  playAgainButton.classList.remove("d-none");
}

function gameLost() {
  guessedNumber.setAttribute("disabled", "");

  const lastGuess = document.querySelector(".last-guess");
  lastGuess.classList.add("d-none");

  result.textContent = `SORRY YOU LOST.. in ${turnsCount} guesses`;
  result.classList.add("alert-danger");

  const playAgainButton = document.querySelector(".play-again");
  playAgainButton.classList.remove("d-none");
}
// function gameOver() {
//   const modalContainer = new bootstrap.Modal(document.querySelector(".modal"));
//   modalContainer.show();
// }
