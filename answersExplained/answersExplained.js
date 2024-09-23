
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

let userObject = JSON.parse(localStorage.getItem("user"))
console.log(userObject)

let askedQuestions = JSON.parse(localStorage.getItem("askedQuestions"))
console.log(askedQuestions)

let finalAnswer = userObject.answers

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
  numberQuestion.textContent = `Number #${index + 1}`;
  textQuestion.textContent = askedQuestions[index].question;
  correctAnswer.textContent = askedQuestions[index].correct;
  explanationAnswer.textContent = askedQuestions[index].explanation;
  colorAnswer()
  youAnswer.textContent = userObject.answers[index]
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
  if (finalAnswer[index] === "correct") {
    youAnswer.style.backgroundColor = "#2bbc2b";
    youAnswer.style.boxShadow = "1px 2px 25px #59754e"
  } else if (finalAnswer[index] === "incorrect") {
    youAnswer.style.backgroundColor = "#c21616";
    youAnswer.style.boxShadow = "1px 2px 25px #614141"
  } else if (finalAnswer[index] === "skipped") {
    youAnswer.style.backgroundColor = "#6f6b6b";
    youAnswer.style.boxShadow = "1px 2px 25px #8a6868"
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
