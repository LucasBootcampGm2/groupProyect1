import { points } from "../questionBank.js";

let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");

let pWrongAnswers = document.getElementById("paragraph-wrong-answers");
let pCorrectAnswers = document.getElementById("paragraph-correct-answers");

let user = JSON.parse(localStorage.getItem("user"));

let selectedDifficulty = localStorage.getItem("difficulty");

let correctAnswers = user.correctAnswers;
let wrongAnswers = user.wrongAnswers;
let skippedAnswers = user.skippedAnswers;

let totalQuestions = correctAnswers + wrongAnswers + skippedAnswers;
let correctValue = points.valuesCorrect[selectedDifficulty];
let wrongValue = points.valuesIncorrect[selectedDifficulty];

function numberOfQuestions(correct, wrong, skip) {
  document.querySelector(".correct-number").textContent = correct;
  document.querySelector(".wrong-number").textContent = wrong;
  document.querySelector(".skip-number").textContent = skip;
}

function finalScore(correct, wrong) {
  let finalScore = 0;

  finalScore += correctValue * correct;
  finalScore += wrongValue * wrong;

  if (finalScore < 0) {
    finalScore = 0;
  }
  score.textContent = `${finalScore} / ${totalQuestions * correctValue}`;

  user.totalPoints = finalScore;
  localStorage.setItem("user", JSON.stringify(user));
}

crown.style.display = "none";

function showCrown() {
  if (correctAnswers >= totalQuestions - 5) {
    crown.style.display = "block";
  }
}

function changeValuePoints() {
  pCorrectAnswers.textContent = `Correct Answers (+${correctValue} pts)`;
  pWrongAnswers.textContent = `Wrong Answers (${wrongValue} pts)`;
}

window.addEventListener("load", function () {
  numberOfQuestions(correctAnswers, wrongAnswers, skippedAnswers);
  finalScore(correctAnswers, wrongAnswers);
  showCrown();
  changeValuePoints();
});
