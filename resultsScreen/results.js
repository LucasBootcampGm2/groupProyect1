import { points } from "../questionBank.js";
import { colors } from "../questionBank.js";

let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");

let pWrongAnswers = document.getElementById("paragraph-wrong-answers");
let pCorrectAnswers = document.getElementById("paragraph-correct-answers");
let backgroundColor = document.querySelector(".background-color");


let user = JSON.parse(localStorage.getItem("user"));

let selectedDifficulty = localStorage.getItem("difficulty");
let selectedCategory = localStorage.getItem("category");

function pageError (){
  if (localStorage.length === 0){
    window.location.replace("../notFoundPage/notFoundPage.html");
  }
}
pageError();


let correctAnswers = user.answers.filter(function(answer) {
  return answer === "correct";
}).length;
let wrongAnswers = user.answers.filter(function(answer) {
  return answer === "incorrect";
}).length;
let skippedAnswers = user.answers.filter(function(answer) {
  return answer === "skipped";
}).length;

let totalQuestions = correctAnswers + wrongAnswers + skippedAnswers;
let correctValue = points.valuesCorrect[selectedDifficulty];
let wrongValue = points.valuesIncorrect[selectedDifficulty];


function numberOfQuestions(correct, wrong, skip) {
  document.querySelector(".correct-number").textContent = correct;
  document.querySelector(".wrong-number").textContent = wrong;
  document.querySelector(".skipped-number").textContent = skip;
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
  pCorrectAnswers.textContent = `+${correctValue} pts`;
  pWrongAnswers.textContent = `${wrongValue} pts`;
}
function changeColorCategory() {
  backgroundColor.style.backgroundColor = colors[selectedCategory];
}


window.addEventListener("load", function () {
  numberOfQuestions(correctAnswers, wrongAnswers, skippedAnswers);
  finalScore(correctAnswers, wrongAnswers);
  showCrown();
  changeValuePoints();
  changeColorCategory();
});
