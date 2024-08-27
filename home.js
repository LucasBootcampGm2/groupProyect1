let forms = document.querySelectorAll(".forms");

function hiddenForm() {
  event.preventDefault();
  forms.forEach((_, idx) => {
    forms[idx].classList.remove("appear-form");
  });
}

function appearCategory() {
  let appearButtons = document.querySelectorAll(".appear-buttons");
  appearButtons.forEach(function (button, idx) {
    button.addEventListener("click", function () {
      forms[idx].classList.add("appear-form");
    });
  });
}

function saveCategory() {
  let categories = document.querySelectorAll(".category-option-buttons");
  categories.forEach(function (category) {
    category.addEventListener("click", function (event) {
      localStorage.setItem("category", `${category.textContent}`);
      hiddenForm()
    });
  });
}

function saveDifficulty() {
  let difficulties = document.querySelectorAll(".difficulty-option-buttons");
  difficulties.forEach(function (difficulty) {
    difficulty.addEventListener("click", function (event) {
      localStorage.setItem("difficulty", `${difficulty.textContent}`);
      hiddenForm()
    });
  });
}

function startQuiz() {
  let startButton = document.querySelector(".start-button");
  startButton.disable = true;
  if (localStorage.getItem("category") && localStorage.getItem("difficulty")) {
    startbutton.setAttribute("href", "quizPage/questions.html");
    startbutton.classList.add("enable-button");
    startButton.disable = false;
  }
}

window.addEventListener("load", function () {
  localStorage.clear();
  appearCategory();
  saveCategory();
  saveDifficulty();
  startQuiz();
});
