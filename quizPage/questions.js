import { questions } from "../questionBank.js";

let questionsCount;

let selectedCategory = localStorage.getItem("category");
let selectedDifficulty = localStorage.getItem("difficulty");
let alreadyAsked = [];

let stopTimer = false;
let seconds = 20;

let continueButtonsContainer = document.getElementById(
  "container-answer-buttons"
);
let continueBtn = document.getElementById("continue-button");
let explanationContainer = document.querySelector(".answer-explanation");

let corrects = 0;
let incorrects = 0;
let skipped = 0;
let alreadyAnswered = false;
let timerId = 0;

function getCategory() {
  return questions[selectedCategory];
}

function getDifficulty(questionsByCategory) {
  return questionsByCategory[selectedDifficulty];
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
  countAnswersVerification();
  switch (selectedDifficulty) {
    case "easy":
      questionsCount = 10;
    case "medium":
      questionsCount = 15;
    case "hard":
      questionsCount = 20;
  }
  let random = 0;
  do {
    random = Math.floor(Math.random() * questionsCount);
  } while (alreadyAsked.includes(random));
  alreadyAsked.push(random);
  let question = finalQuestions[random];
  return question;
}

function countAnswersVerification() {
  if (alreadyAsked.length === questionsCount) {
    createResultsButton();
    createAnswersExplainedButton();
  }
}

function createResultsButton() {
  let resultsButton = document.createElement("button");
  let resultsPage = document.createElement("a");
  resultsPage.setAttribute("href", "../resultsScreen/results.html");
  resultsPage.textContent = "Your Results";
  resultsButton.append(resultsPage);
  continueButtonsContainer.append(resultsButton);
}

function createAnswersExplainedButton() {
  let answersButton = document.createElement("button");
  let answersPage = document.createElement("a");
  answersPage.setAttribute("href", "../answersExplained/answersExplained.html");
  answersPage.textContent = "Answers Explanation";
  answersButton.append(answersPage);
  continueButtonsContainer.append(answersButton);
}

function showQuestion(question) {
  let container = document.querySelector(".question");
  container.textContent = question.question;
}

function showAnswers(question) {
  let correctAnswer = question.correct;
  let incorrectAnswers = question.incorrect;
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
        let questionText = document.querySelector(".question").textContent;
        let question = finalQuestions.find(function (q) {
          return q.question === questionText;
        });
        isCorrect(answer, question, button);
        showExplanation(question);
        stopTimer = true;
        changeButton();
      }
    });
  });
}

function isCorrect(answer, question, button) {
  if (answer.trim() === question.correct.trim()) {
    button.classList.add("answer-correct");
    hideNotSelectedAnswers();
    corrects++;
  } else {
    let correctBtn = findCorrectBtn(question.correct);
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
  let questionText = document.querySelector(".question").textContent;
  let question = finalQuestions.find(function (q) {
    return q.question === questionText;
  });
  let correctBtn = findCorrectBtn(question.correct);
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
  explanationContainer.classList.add("hide-explanation");
  if (continueBtn.textContent.trim() === "Skip") {
    skipped++;
  }
  if (continueBtn.textContent.trim() === "Next") {
    changeButton();
    continueBtn.textContent = "Skip";
  }
  progressBarFunctionability();
});

function showExplanation(question) {
  explanationContainer.classList.remove("hide-explanation");
  let explanationText = document.getElementById("explanation");
  explanationText.textContent = question.explanation;
}

let containerProgressBar = document.getElementById("container-progress-bar");
let progressBar = document.getElementById("progress-bar");
let progressCount = document.getElementById("progress-count");
let progress = 0;
let percent = "0%";
function progressBarFunctionability() {
  let divisor
  progress += 10;
  percent = `${progress}%`;
  switch (questionsCount){
    case 10: 
      divisor = 100
    case 15:
      divisor = 150
    case 20:
      divisor = 200
    break
  }
  progressBar.style.width =
    (containerProgressBar.offsetWidth * progress) / divisor + "px";
  console.log(containerProgressBar.offsetWidth);
  progressCount.innerHTML = percent;
}

window.addEventListener("load", function () {
  setTimer();
  loadButtons();
  loadQuiz();
});
