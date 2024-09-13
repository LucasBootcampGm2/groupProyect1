let crown = document.querySelector(".fa-crown");
let correctNumber = document.querySelector(".correct-number");
let wrongNumber = document.querySelector(".wrong-number");
let skipNumber = document.querySelector(".skip-number");
let score = document.querySelector(".score");

let correctAnswers = localStorage.getItem("correctAnswers");
let wrongAnswers = localStorage.getItem("wrongAnswers");
let skipAnswers = localStorage.getItem("skipAnswers");

function numberOfQuestions(correct, wrong, skip) {
  correctNumber.textContent = correct;
  wrongNumber.textContent = wrong;
  skipNumber.textContent = skip;
}

crown.style.display = "none";



function finalScore(correct, skip) {
  let finalScore = 0;

  finalScore += correct * 10;
  finalScore -= skip * -(-5);

  score.textContent = `${finalScore}/100`;
}

window.addEventListener("load", function () {
  numberOfQuestions(correctAnswers, wrongAnswers, skipAnswers);
  finalScore(correctAnswers, skipAnswers);
  if (correctAnswers >= 7) {
    crown.style.display = "block";
  }
});
