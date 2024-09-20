// if (alreadyAsked.includes(finalQuestions[index].question === false)) {
//   alreadyAsked.push(finalQuestions[index].question);
// }

// // let answer = localStorage.getItem("answer");
import { questions } from "../questionBank.js";

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

function getCategory() {
  return questions[selectedCategory];
}

function getDifficulty(questionsByCategory) {
  return questionsByCategory[selectedDifficulty];
}

let finalQuestions = getDifficulty(getCategory());

function appendInformation() {
  answers.append(containerContent);
  containerContent.append(numberQuestion);
  containerContent.append(textQuestion);
  containerContent.append(correctAnswer);
  containerContent.append(explanationAnswer);
  containerContent.append(youAnswer);
}

let finalAnswer = "Correct";
let index = 0;

function nextAnswer() {
  if (index >= 0 && index < finalQuestions.length) {
    index++;
  }
}

function prevAnswer() {
  if (index > 0 && index <= finalQuestions.length) {
    index--;
  }
}

function showInformation() {
  numberQuestion.textContent = `Question #${index + 1}`;
  textQuestion.textContent = `Question: ${finalQuestions[index].question}`;
  correctAnswer.textContent = `Correct answer: ${finalQuestions[index].correct}`;
  explanationAnswer.textContent = `Explanation: ${finalQuestions[index].explanation}`;
  youAnswer.textContent = `Your answer: ${finalAnswer}`;
}

function loadAnswers() {
  console.log({ index, finalQuestions });
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
  } else if (index < finalQuestions.length - 1) {
    buttonPrevAnswers.style.display = "block";
  } else if (index === finalQuestions.length - 1) {
    buttonNextAnswers.style.display = 'none'
  }
  showInformation();
  appendInformation();
}

function loadPrevAnswers() {
  console.log({ index, finalQuestions });
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
  } else if (index === finalQuestions.length - 2) {
    buttonNextAnswers.style.display = 'block'
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
  if (finalAnswer === "Correct") {
    youAnswer.style.color = "green";
  } else if (finalAnswer === "Wrong") {
    youAnswer.style.color = "red";
  } else if (finalAnswer === "Skip") {
    youAnswer.style.color = "grey";
  }
}

window.addEventListener("load", function () {
  loadAnswers();
  colorAnswer();
});
