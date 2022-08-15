const add = document.querySelector(".plus");
const subtract = document.querySelector(".minus");
const showNumber = document.querySelector(".result");

add.addEventListener("click", adding);
subtract.addEventListener("click", subtracting);

let number = 0;
function adding() {
  number++;
  showNumber.innerHTML = number;
}

function subtracting() {
  number--;
  showNumber.innerHTML = number;
}
