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

let selectedCategory = "science";
let selectedDifficulty = "easy";

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
  textQuestion.textContent = `Pregunta: ${finalQuestions[index].question}`;
  correctAnswer.textContent = `Respuesta correcta: ${finalQuestions[index].correct}`;
  explanationAnswer.textContent = `Explicacion: ${finalQuestions[index].explanation}`;
  youAnswer.textContent = `Tu respuesta: ${finalAnswer}`;
}

function addOrQuitClass() {
  containerContent.classList.toggle("flex");
  numberQuestion.classList.toggle("center");
  textQuestion.classList.toggle("hide");
  correctAnswer.classList.toggle("hide");
  explanationAnswer.classList.toggle("hide");
  youAnswer.classList.toggle("hide");
  buttonNextAnswers.classList.toggle("hide");
}

function loadAnswers() {
  console.log({ index, finalQuestions });
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
    showInformation();
    appendInformation();
  } else if (index < finalQuestions.length) {
    buttonPrevAnswers.style.display = "block";
    showInformation();
    appendInformation();
  } else if (index === 10) {
    addOrQuitClass();
    numberQuestion.textContent = "NO HAY MAS PREGUNTAS :((";
  }
}

function loadPrevAnswers() {
  console.log({ index, finalQuestions });
  if (index === 0) {
    buttonPrevAnswers.style.display = "none";
    buttonNextAnswers.style.display = "block";
  } else if (index > 0 && index < 9) {
    buttonNextAnswers.style.display = "block";
  } else if (index === 9) {
    addOrQuitClass();
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
