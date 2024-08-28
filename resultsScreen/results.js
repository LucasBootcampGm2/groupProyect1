let crown = document.querySelector(".fa-crown");
let correctNumber = document.querySelector(".correct-number");
let wrongNumber = document.querySelector(".wrong-number");
let skipNumber = document.querySelector(".skip-number");

// let correctAnswers = localStorage.getItem("correctAnswers");
// let wrongAnswers = localStorage.getItem("wrongAnswers");
// let skipAnswers = localStorage.getItem("skipAnswers");
let correctAnswers = 8;
let wrongAnswers = 34;
let skipAnswers = 34;

function numberOfQuestions(correct, wrong, skip) {
  correctNumber.textContent = correct;
  wrongNumber.textContent = wrong;
  skipNumber.textContent = skip;
}

numberOfQuestions(correctAnswers, wrongAnswers, skipAnswers);

crown.style.display = "none";

window.addEventListener("load", function () {
  if (correctAnswers >= 7) {
    crown.style.display = "block";
  }
});
