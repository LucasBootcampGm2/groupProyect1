import { categories } from "../questionBank.js";

let selectedCategory = "sport";
let selectedDifficulty = "hard";
let alreadyAsked = [];

let stopTimer = false;
let seconds = 20;
let continueBtn = document.getElementById("continue-button");
let explanationContainer = document.querySelector(".answer-explanation");
// explanationContainer.classList.add("hide-explanation");
// explanationContainer.classList.remove("hide-explanation");
let corrects = 0;
let incorrects = 0;
let skipped = 0;
let alreadyAnswered = false;
let timerId = 0;

function getCategory() {
  let questionsByCategory = { ...categories[selectedCategory] };
  return questionsByCategory;
}
function getDifficulty(questionsByCategory) {
  let questionsByDifficulty = [...questionsByCategory[selectedDifficulty]];
  return questionsByDifficulty;
}
let finalQuestions = getDifficulty(getCategory());

function resetBtnColors() {
  let buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    button.classList.remove("answer-correct");
    button.classList.remove("answer-incorrect");
  });
}

function hideNotSelectedAnswers() {
  let buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    if (
      !button.classList.contains("answer-correct") &&
      !button.classList.contains("answer-incorrect")
    ) {
      button.classList.add("hide-button");
    }
  });
}
function showAllButtons() {
  let buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    button.classList.remove("hide-button");
  });
}

function selectRandomQuestion() {
  let cantidadPreguntas = finalQuestions.length;
  let random = 0;
  do {
    random = Math.floor(Math.random() * cantidadPreguntas);
  } while (alreadyAsked.includes(random));
  alreadyAsked.push(random);
  let question = Object.keys(finalQuestions[random])[0];
  return question;
}

function showQuestion(question) {
  let container = document.querySelector(".question");
  container.textContent = question;
}

function showAnswers(question) {
  let questionData = getQuestion(question);
  let correctAnswer = questionData[question].correct;
  let incorrectAnswers = questionData[question].incorrect;
  let allAnswers = [correctAnswer, ...incorrectAnswers];

  allAnswers = shuffle(allAnswers);

  for (let i = 0; i < allAnswers.length; i++) {
    let answerDiv = document.getElementById("answer-" + (i + 1));
    answerDiv.querySelector("p").textContent = allAnswers[i];
  }
}

function shuffle(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let temporary = answers[i];
    answers[i] = answers[rand];
    answers[rand] = temporary;
  }
  return answers;
}

function loadButtons() {
  let buttons = document.querySelectorAll(".answer");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!alreadyAnswered) {
        alreadyAnswered = true;
        let answer = button.textContent;
        let question = document.querySelector(".question").textContent;
        isCorrect(answer, question, button);
        stopTimer = true;
        changeButton();
      }
    });
  });
}
function getQuestion(question) {
  let questionData = finalQuestions.find(function (searchedQuestion) {
    return Object.keys(searchedQuestion)[0] === question;
  });
  return questionData;
}
function isCorrect(answer, question, button) {
  let questionData = getQuestion(question);
  let index = finalQuestions.indexOf(questionData);
  if (answer.trim() === finalQuestions[index][question].correct.toString()) {
    button.classList.add("answer-correct");
    hideNotSelectedAnswers();
    corrects++;
  } else {
    let correctBtn = findCorrectBtn(
      finalQuestions[index][question].correct.toString()
    );
    correctBtn.classList.add("answer-correct");
    button.classList.add("answer-incorrect");
    hideNotSelectedAnswers();
    incorrects++;
  }
}
function findCorrectBtn(correctAnswer) {
  let buttonsAnswers = document.querySelectorAll(".answer p");
  for (let i = 0; i < buttonsAnswers.length; i++) {
    if (buttonsAnswers[i].textContent.trim() === correctAnswer.trim()) {
      return buttonsAnswers[i].parentElement;
    }
  }
}
function loadQuiz() {
  let question = selectRandomQuestion();
  showQuestion(question);
  showAnswers(question);
  showAllButtons();
  alreadyAnswered = false;
}

function runOutOfTime() {
  alreadyAnswered = true;
  incorrects++;
  let question = document.querySelector(".question").textContent;
  let questionData = getQuestion(question);
  let index = finalQuestions.indexOf(questionData);
  let correctAnswer = finalQuestions[index][question].correct.toString();
  let correctBtn = findCorrectBtn(correctAnswer);
  correctBtn.classList.add("answer-correct");
  hideNotSelectedAnswers();
  changeButton();
}
function restartTime() {
  stopTimer = false;
  seconds = 20;
  clearTimeout(timerId);
  setTimer();
}
function setTimer() {
  let timer = document.getElementById("timer");
  if (seconds > 0 && !stopTimer) {
    timer.textContent = seconds;
    seconds--;
    timerId = setTimeout(setTimer, 1000);
  } else if (!stopTimer) {
    timer.textContent = seconds;
    runOutOfTime();
  }
}

function changeButton() {
  continueBtn.classList.toggle("next-answer-button");
  continueBtn.classList.toggle("skip-answer-button");
  continueBtn.textContent = "Next";
}

continueBtn.addEventListener("click", function () {
  loadQuiz();
  resetBtnColors();
  restartTime();
  if (continueBtn.textContent.trim() === "Skip") {
    skipped++;
    console.log("skipeada");
  }
  if (continueBtn.textContent.trim() === "Next") {
    changeButton();
    continueBtn.textContent = "Skip";
  }
});

window.addEventListener("load", function () {
  setTimer();
  loadButtons();
  loadQuiz();
});
