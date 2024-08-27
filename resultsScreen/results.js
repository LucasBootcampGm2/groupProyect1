let crown = document.querySelector(".fa-crown");
let correctNumber = document.querySelector(".correct-number");
let wrongNumber = document.querySelector(".wrong-number");
let skipNumber = document.querySelector(".skip-number");

function numberOfQuestions() {
  let correctAnswers = localStorage.getItem("correctAnswers");
  let wrongAnswers = localStorage.getItem("wrongAnswers");
  let skipAnswers = localStorage.getItem("skipAnswers");

  correctNumber.textContent = correctAnswers;
  wrongNumber.textContent = wrongAnswers;
  skipNumber.textContent = skipAnswers;
}

numberOfQuestions();

crown.style.display = "none";

crown.addEventListener("load", function () {
  if (correctAnswers >= 7) {
    crown.style.display = "block";
  }
});
