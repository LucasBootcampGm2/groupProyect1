let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");

let correctAnswers = localStorage.getItem("correctAnswers");
let wrongAnswers = localStorage.getItem("wrongAnswers");
let skipedAnswers = localStorage.getItem("skipedAnswers");


function numberOfQuestions(correct, wrong, skip) {
  document.querySelector(".correct-number").textContent+ correct
  document.querySelector(".wrong-number").textContent = wrong
  document.querySelector(".skip-number").textContent = skip;
}

crown.style.display = "none";

function finalScore(correct, skip) {
  let finalScore = 0;

  finalScore += correct * 10;
  finalScore -= skip * -(-5);

  score.textContent = `${finalScore}/100`;
}

window.addEventListener("load", function () {
  numberOfQuestions(localStorage.getItem("correctAnswers"), localStorage.getItem("wrongAnswers"), localStorage.getItem("skipedAnswers"));
  finalScore(correctAnswers, skipedAnswers);
  if (correctAnswers >= 7) {
    crown.style.display = "block";
  }
});
