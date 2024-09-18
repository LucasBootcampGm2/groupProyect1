let crown = document.querySelector(".fa-crown");
let score = document.querySelector(".score");
let user = JSON.parse(localStorage.getItem("user"));
function getCorrecAnswers() {
  let correctAnswers = user.correctAnswers;
  return correctAnswers;
}
function getWrongAnswers() {
  let wrongAnswers = user.wrongAnswers;
  return wrongAnswers;
}
function getSkippedAnswers() {
  let skippedAnswers = user.skippedAnswers;
  return skippedAnswers;
}
function numberOfQuestions(correct, wrong, skip) {
  document.querySelector(".correct-number").textContent + correct;
  document.querySelector(".wrong-number").textContent = wrong;
  document.querySelector(".skip-number").textContent = skip;
}
crown.style.display = "none";
function substractPoints(wrong) {
  let substract;
  switch (localStorage.getItem("difficulty")) {
    case "easy":
      substract = 2;
      break;
    case "medium":
      substract = 5;
      break;
    case "hard":
      substract = 7;
      break;
  }
  return substract;
}
function addPoints() {
  let multiply;
  switch (localStorage.getItem("difficulty")) {
    case "easy":
      multiply = 5;
      break;
    case "medium":
      multiply = 10;
      break;
    case "hard":
      multiply = 15;
      break;
  }
  return multiply;
}
function finalScore(correct, wrong) {
  let totalPoints = addPoints() * correct - substractPoints() * wrong;
  if (totalPoints < 0) {
    totalPoints = 0;
  }
  score.textContent = totalPoints;
  user.totalPoints = totalPoints;
  localStorage.setItem("user", JSON.stringify(user));
}
window.addEventListener("load", function () {
  numberOfQuestions(getCorrecAnswers(), getWrongAnswers(), getSkippedAnswers());
  finalScore(getCorrecAnswers(), getWrongAnswers());
  if (getCorrecAnswers() >= 7) {
    crown.style.display = "block";
  }
});
