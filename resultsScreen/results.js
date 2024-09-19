import { points } from "../questionBank.js";

let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");

let pWrongAnswers = document.getElementById("paragraph-wrong-answers");
let pCorrectAnswers = document.getElementById("paragraph-correct-answers");

let correctAnswers = localStorage.getItem("correctAnswers");
let wrongAnswers = localStorage.getItem("wrongAnswers");
let skipedAnswers = localStorage.getItem("skipedAnswers");

function numberOfQuestions(correct, wrong, skiped) {
  document.querySelector(".correct-number").textContent + correct;
  document.querySelector(".wrong-number").textContent = wrong;
  document.querySelector(".skip-number").textContent = skiped;
}

let selectedDifficulty = "easy";
let totalQuestions = correctAnswers + wrongAnswers + skipedAnswers;
let correctValue = points.valuesCorrect[selectedDifficulty];
let wrongValue = points.valuesIncorrect[selectedDifficulty];

function finalScore(correct, wrong) {
  let finalScore = 0;

  finalScore += correctValue * correct;
  finalScore -= wrongValue * wrong;

  score.textContent = `${finalScore} / ${totalQuestions * correctValue}`;
}

crown.style.display = "none";

function showCrown() {
  if (correctAnswers >= totalQuestions - 5) {
    crown.style.display = "block";
  }
}

function changeValuePoints() {
  pCorrectAnswers.textContent = `Correct Answers (${correctValue} pts)`;
  pWrongAnswers.textContent = `Wrong Answers (${wrongValue} pts)`;
}

window.addEventListener("load", function () {
  numberOfQuestions(correctAnswers, wrongAnswers, skipedAnswers);
  finalScore(correctAnswers, wrongAnswers);
  showCrown();
  changeValuePoints();
});
