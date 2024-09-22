import { questions } from "../questionBank.js";
import { colors } from "../questionBank.js";
import { subColors } from "../questionBank.js";

let backgroundColor = document.querySelector(".background-color");
let subBackgroundColor = document.getElementById("container-answers-button");

let answers = document.getElementById("container-answers");
let containerContent = document.getElementById("container-content");
let numberQuestion = document.querySelector(".number-question");
let textQuestion = document.querySelector(".text-question");
let correctAnswer = document.querySelector(".correct-answer");
let explanationAnswer = document.querySelector(".explanation-answer");
let youAnswer = document.querySelector(".you-answer");

let buttonNextAnswers = document.getElementById("button-next-answer");
let buttonPrevAnswers = document.getElementById("button-prev-answer");

let selectedCategory = localStorage.getItem("category");
let selectedDifficulty = localStorage.getItem("difficulty");
let userObject = JSON.parse(localStorage.getItem("user"))
console.log(userObject)
let askedQuestions = JSON.parse(localStorage.getItem("askedQuestions"))
console.log(askedQuestions)

function pageError (){
  if (localStorage.length === 0){
    window.location.replace("../notFoundPage/notFoundPage.html");
  }
}
pageError();

function appendInformation() {
  answers.append(containerContent);
  containerContent.append(numberQuestion);
  containerContent.append(textQuestion);
  containerContent.append(correctAnswer);
  containerContent.append(explanationAnswer);
  containerContent.append(youAnswer);
}

let index = 0;

function nextAnswer() {
  if (index >= 0 && index < askedQuestions.length) {
    index++;
  }
}

function prevAnswer() {
  if (index > 0 && index <= askedQuestions.length) {
    index--;
  }
}

function showInformation() {
  numberQuestion.textContent = `Question #${index + 1}`;
  textQuestion.textContent = `${askedQuestions[index].question}`;
  correctAnswer.textContent = `Correct answer: ${askedQuestions[index].correct}`;
  explanationAnswer.textContent = askedQuestions[index].explanation;
  colorAnswer()
  youAnswer.textContent = `Your answer: ${userObject.answers[index]}`;
}

function loadAnswers() {
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
  } else if (index < askedQuestions.length - 1) {
    buttonPrevAnswers.style.display = "block";
  } else if (index === askedQuestions.length - 1) {
    buttonNextAnswers.style.display = "none";
  }
  showInformation();
  appendInformation();
}

function loadPrevAnswers() {
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
  } else if (index === askedQuestions.length - 2) {
    buttonNextAnswers.style.display = "block";
  }
  showInformation();
  appendInformation();
}

buttonNextAnswers.addEventListener("click", function () {
  nextAnswer();
  loadAnswers();
});

buttonPrevAnswers.addEventListener("click", function () {
  prevAnswer();
  loadPrevAnswers();
});

function colorAnswer() {
  if (userObject.answers[index] === "correct") {
    youAnswer.style.color = "green";
  } else if (userObject.answers[index] === "incorrect") {
    youAnswer.style.color = "red";
  } else if (userObject.answers[index] === "skipped") {
    youAnswer.style.color = "grey";
  }
}

function changeColorCategory() {
  backgroundColor.style.backgroundColor = colors[selectedCategory];
}

function subChangeColorCategory() {
  subBackgroundColor.style.backgroundColor = subColors[selectedCategory];
}

window.addEventListener("load", function () {
  loadAnswers();
  colorAnswer();
  changeColorCategory();
  subChangeColorCategory();
});
