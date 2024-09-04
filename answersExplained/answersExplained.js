// // let answer = localStorage.getItem("answer");

let selectedCategory = "science";
let selectedDifficulty = "easy";

function getCategory() {
  let questionsByCategory = { ...categorys[selectedCategory] };
  return questionsByCategory;
}

function getDifficulty(questionsByCategory) {
  let questionsByDifficulty = [...questionsByCategory[selectedDifficulty]];
  return questionsByDifficulty;
}

let finalQuestions = getDifficulty(getCategory());
let question = finalQuestions[1].question;

let buttonNextAnswers = document.getElementById("button-next-answer");
let answers = document.getElementById("container-answers");

function loadAnswersButton(finalQuestions, finalAnswer) {
  let alreadyAsked = [];
  let index = 0;

  if (alreadyAsked.includes(finalQuestions[index].question === false)) {
    alreadyAsked.push(finalQuestions[index].question);
  }

  let divContent = document.createElement("div");
  divContent.classList.add("div-content");

  let title = document.createElement("h3");
  title.textContent = `Question #${index + 1}`;

  let question = document.createElement("p");
  question.textContent = `Pregunta: ${finalQuestions[index].question}`;

  let correctAnswer = document.createElement("p");
  correctAnswer.textContent = `Respuesta correcta: ${finalQuestions[index].correct}`;

  let explanation = document.createElement("p");
  explanation.textContent = `Explicacion: ${finalQuestions[index].explanation}`;

  let youAnswer = document.createElement("p");
  youAnswer.textContent = `Tu respuesta: ${finalAnswer}`;

  if (finalAnswer === "Correct") {
    youAnswer.style.color = "green";
    placeWhereTheAnswerIs = answers;
  } else if (finalAnswer === "Wrong") {
    youAnswer.style.color = "red";
    placeWhereTheAnswerIs = answers;
  } else if (finalAnswer === "Skip") {
    youAnswer.style.color = "grey";
    placeWhereTheAnswerIs = answers;
  }

  placeWhereTheAnswerIs.append(divContent);
  divContent.append(title);
  divContent.append(question);
  divContent.append(correctAnswer);
  divContent.append(explanation);
  divContent.append(youAnswer);

  index++;

  buttonNextAnswers.addEventListener("click", function () {
    if (alreadyAsked.includes(finalQuestions[index].question === false)) {
      alreadyAsked.push(finalQuestions[index].question);
    }

    title.textContent = `Question #${index + 1}`;

    question.textContent = `Pregunta: ${finalQuestions[index].question}`;

    correctAnswer.textContent = `Respuesta correcta: ${finalQuestions[index].correct}`;

    explanation.textContent = `Explicacion: ${finalQuestions[index].explanation}`;

    youAnswer.textContent = `Tu respuesta: ${finalAnswer}`;

    if (finalAnswer === "Correct") {
      youAnswer.style.color = "green";
      placeWhereTheAnswerIs = answers;
    } else if (finalAnswer === "Wrong") {
      youAnswer.style.color = "red";
      placeWhereTheAnswerIs = answers;
    } else if (finalAnswer === "Skip") {
      youAnswer.style.color = "grey";
      placeWhereTheAnswerIs = answers;
    }

    index++;
  });
}

loadAnswersButton(finalQuestions, "Wrong");
