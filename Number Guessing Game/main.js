const guessedNumber = document.querySelector(".number-input");
const button = document.querySelector(".btn");
const guesses = document.querySelector(".previous-guesses");
const result = document.querySelector(".alert");
const hightLow = document.querySelector(".hight-low");

button.addEventListener("click", gamePlay);

// const randomNumber = Math.floor(Math.random() * 100);
const randomNumber = 5;

let turnsCount = 0;

function gamePlay(e) {
  e.preventDefault();
  const guessValue = Number(guessedNumber.value);

  turnsCount++;

  guesses.textContent += ` ${guessValue}`;

  if (turnsCount === 11) {
    gameOver();
  }

  if (randomNumber === guessValue) {
    result.classList.remove("d-none");

    if (result.classList.contains("alert-danger")) {
      result.classList.remove("alert-danger");
    }

    result.textContent = "CONGRATULATIONS! that was currect. ";
    result.classList.add("alert-success");
    gameOver();
  } else {
    result.classList.remove("d-none");

    if (result.classList.contains("alert-success")) {
      result.classList.remove("alert-success");
    }

    result.textContent = "WRONG! Try again.";
    result.classList.add("alert-danger");
  }

  if (guessValue > randomNumber) {
    hightLow.textContent = "hight!";
  } else {
    hightLow.textContent = "low!";
  }

  guessedNumber.value = "";
}

function gameOver() {
  guessedNumber.setAttribute("disabled", "");
  const previous = document.querySelector(".previous");
  previous.classList.add("d-none");

  const lastGuess = document.querySelector(".last-guess");
  lastGuess.classList.add("d-none");
}
// function gameOver() {
//   const modalContainer = new bootstrap.Modal(document.querySelector(".modal"));
//   modalContainer.show();
// }
