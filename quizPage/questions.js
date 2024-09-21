import { questions } from "../questionBank.js"
import { colors } from "../questionBank.js"

let questionsCount
let selectedCategory = localStorage.getItem("category")
let selectedDifficulty = localStorage.getItem("difficulty")

let alreadyAsked = []
let alreadyAnswered = false

let stopTimer = false
let seconds = 20
let timerId = 0

let continueBtn = document.getElementById("continue-button")
let explanationContainer = document.querySelector(".answer-explanation")

let containerProgressBar = document.getElementById("container-progress-bar")
let progressBar = document.getElementById("progress-bar")
let progress = 0

let userObject = JSON.parse(localStorage.getItem("user"))
userObject.answers = []

function getCategory() {
  return questions[selectedCategory]
}

function getDifficulty(questionsByCategory) {
  return questionsByCategory[selectedDifficulty]
}

let filteredQuestions = getDifficulty(getCategory())
let shuffledQuestions = []
localStorage.setItem("shuffledQuestions", JSON.stringify(shuffledQuestions))

function resetBtnColors() {
  let buttons = document.querySelectorAll(".answer")
  buttons.forEach(function (button) {
    button.classList.remove("answer-correct")
    button.classList.remove("answer-incorrect")
  })
}

function showAllButtons() {
  let buttons = document.querySelectorAll(".answer")
  buttons.forEach(function (button) {
    button.classList.remove("hide-button")
  })
}

function nextQuestion() {
  let nextQuestionIndex = shuffledQuestions.findIndex(
    (question, index) => !alreadyAsked.includes(index)
  )
  alreadyAsked.push(nextQuestionIndex)
  console.log(alreadyAsked)
  return shuffledQuestions[nextQuestionIndex]
}

function showQuestion(question) {
  let container = document.querySelector(".question")
  container.textContent = question.question
}

function showAnswers(question) {
  let correctAnswer = question.correct
  let incorrectAnswers = question.incorrect
  let allAnswers = [correctAnswer, ...incorrectAnswers]
  allAnswers = shuffleAnswers(allAnswers)
  for (let i = 0; i < allAnswers.length; i++) {
    let answerDiv = document.getElementById("answer-" + (i + 1))
    answerDiv.querySelector("p").textContent = allAnswers[i]
  }
}

function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))
    let temporary = answers[i]
    answers[i] = answers[rand]
    answers[rand] = temporary
  }
  return answers
}

function shuffleQuestions(questions) {
  for (
    let i = questions.length - 1;
    i >= questions.length - questionsCount;
    i--
  ) {
    let rand = Math.floor(Math.random() * (i + 1))
    let temporary = questions[i]
    questions[i] = questions[rand]
    questions[rand] = temporary
  }
  return questions.slice(questions.length - questionsCount)
}

function loadButtons() {
  let buttons = document.querySelectorAll(".answer")
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (!alreadyAnswered) {
        alreadyAnswered = true
        let answer = button.textContent
        let question = findQuestion()
        isCorrect(answer, question, button)
        showExplanation(question)
        stopTimer = true
        changeButton()
      }
    })
  })
}

function isCorrect(answer, question, button) {
  if (answer.trim() === question.correct.trim()) {
    button.classList.add("answer-correct")
    userObject.answers.push("correct")
  } else {
    let correctBtn = findCorrectBtn(question.correct)
    correctBtn.classList.add("answer-correct")
    button.classList.add("answer-incorrect")
    userObject.answers.push("incorrect")
  }
  countAnswersVerification()
}

function findCorrectBtn(correctAnswer) {
  let buttonsAnswers = document.querySelectorAll(".answer p")
  for (let i = 0; i < buttonsAnswers.length; i++) {
    if (buttonsAnswers[i].textContent.trim() === correctAnswer.trim()) {
      return buttonsAnswers[i].parentElement
    }
  }
}

function loadQuiz() {
  if (countAnswersVerification()) {
    stopTimer = true
    document.getElementById("container-question").style.display = "none"
    document.getElementById("container-answers").style.display = "none"
    return
  }
  let question = nextQuestion()
  showQuestion(question)
  showAnswers(question)
  showAllButtons()
  alreadyAnswered = false
}

function runOutOfTime() {
  alreadyAnswered = true
  userObject.answers.push("incorrect")
  let question = findQuestion()
  let correctBtn = findCorrectBtn(question.correct)
  correctBtn.classList.add("answer-correct")
  showExplanation(question)
  changeButton()
  if (countAnswersVerification()) {
    document.getElementById("container-question").style.display = "none"
    document.getElementById("container-answers").style.display = "none"
    return
  }
}

function restartTime() {
  stopTimer = false
  seconds = 20
  clearTimeout(timerId)
  setTimer()
}

function setTimer() {
  let timer = document.getElementById("timer")
  if (seconds > 0 && !stopTimer) {
    timer.textContent = seconds
    seconds--
    timerId = setTimeout(setTimer, 1000)
  } else if (!stopTimer) {
    timer.textContent = seconds
    runOutOfTime()
  }
}

function findQuestion() {
  let questionText = document.querySelector(".question").textContent
  return shuffledQuestions.find(function (q) {
    return q.question === questionText
  })
}

function changeButton() {
  continueBtn.classList.toggle("next-answer-button")
  continueBtn.classList.toggle("skip-answer-button")
  continueBtn.textContent = "Next"
}

continueBtn.addEventListener("click", function () {
  explanationContainer.classList.add("hide-explanation")
  if (continueBtn.textContent.trim() === "Skip") {
    userObject.answers.push("skipped")
  }
  if (continueBtn.textContent.trim() === "Next") {
    changeButton()
    continueBtn.textContent = "Skip"
  }
  resetBtnColors()
  restartTime()
  loadQuiz()
  progressBarFunctionability()
})

function showExplanation(question) {
  explanationContainer.classList.remove("hide-explanation")
  let explanationText = document.getElementById("explanation")
  explanationText.textContent = question.explanation
  console.log(userObject)
}

let percent = ""
function progressBarFunctionability() {
  progress = (alreadyAsked.length / questionsCount) * 100
  percent = `${Math.round(progress)}%`
  if (containerProgressBar && progressBar) {
    progressBar.style.width = percent
  }
}

function countAnswersVerification() {
  if (alreadyAsked.length === questionsCount) {
    continueBtn.style.display = "none"
    let resultsAndLeaderboardBtn = document.querySelectorAll(".page-buttons")
    resultsAndLeaderboardBtn.forEach(function (button) {
      button.style.display = "block"
    })
    localStorage.setItem("user", JSON.stringify(userObject))
    return true
  }
  return false
}

export function changeColorsByCategory(objectsArray) {
  objectsArray.forEach(function (element) {
    element.styles.forEach(function (styleType) {
      element.elementType.style[styleType] =
        colors[localStorage.getItem("category")]
    })
  })
}

window.addEventListener("load", function () {
  switch (selectedDifficulty) {
    case "easy":
      questionsCount = 10
      break
    case "medium":
      questionsCount = 20
      break
    case "hard":
      questionsCount = 25
      break
  }
  shuffledQuestions = shuffleQuestions(filteredQuestions)
  setTimer()
  loadButtons()
  loadQuiz()
  progressBarFunctionability()
  changeColorsByCategory([
    {
      elementType: document.querySelector(".purple-background"),
      styles: ["backgroundColor"],
    },
    {
      elementType: document.getElementById("container-timer"),
      styles: ["borderTopColor", "borderBottomColor"],
    },
  ])
})
