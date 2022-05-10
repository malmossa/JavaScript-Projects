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
  const guessValue = Number(guessedNumber.value);

  turnsCount++;
  guesses.textContent += ` ${guessValue}`;

  if (randomNumber === guessValue) {
    result.classList.remove("d-none");

    if (result.classList.contains("alert-danger")) {
      result.classList.remove("alert-danger");
    }

    result.textContent = "CONGRATULATIONS! that was currect. ";
    result.classList.add("alert-success");
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

// function gameOver() {
//   const modalContainer = new bootstrap.Modal(document.querySelector(".modal"));
//   modalContainer.show();
// }
