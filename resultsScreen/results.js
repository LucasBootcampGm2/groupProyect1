let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");

function getCorrecAnswers() {
  let user = JSON.parse(localStorage.getItem("user"));
  let correctAnswers = user.correctAnswers;
  return correctAnswers;
}

function getWrongAnswers() {
  let user = JSON.parse(localStorage.getItem("user"));
  let wrongAnswers = user.wrongAnswers;
  return wrongAnswers;
}

function getSkippedAnswers() {
  let user = JSON.parse(localStorage.getItem("user"));
  let skippedAnswers = user.skippedAnswers;
  return skippedAnswers;
}

function numberOfQuestions(correct, wrong, skip) {
  document.querySelector(".correct-number").textContent + correct;
  document.querySelector(".wrong-number").textContent = wrong;
  document.querySelector(".skip-number").textContent = skip;
}

crown.style.display = "none";

function finalScore(correct, wrong) {
  let finalScore = 0;

  finalScore += correct * 120;
  finalScore -= wrong * -10;

  score.textContent = `${finalScore}/100`;
}

window.addEventListener("load", function () {
  numberOfQuestions(getCorrecAnswers(), getWrongAnswers(), getSkippedAnswers());
  finalScore(getCorrecAnswers(), getSkippedAnswers());
  if (getCorrecAnswers() >= 7) {
    crown.style.display = "block";
  }
});
