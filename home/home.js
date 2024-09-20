import { questions } from "../questionBank.js";
let modal = document.getElementById("modal");
let button = document.querySelector(".buttonSubmit");
let header = document.querySelector(".header");
let sectionQuizMode = document.getElementById("section-quiz-mode");

let userObject = {};

let categories = Object.keys(questions);

console.log(categories);
let difficultyButton = document.getElementById("difficulty-button");

function addUserName() {
  let username = document.getElementById("username");
  userObject.userName = username.value;
  console.log(userObject);
  localStorage.setItem("user", JSON.stringify(userObject));
}

button.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show");
  console.log(addUserName());
  setTimeout(function () {
    main.style.display = "block";
    modal.style.display = "none";
  }, 1000);
});

function saveDifficulties() {
  let difficulties = {};
  categories.forEach(function (category) {
    difficulties[category] = Object.keys(questions[category]);
  });
  return difficulties;
}
let difficulties = saveDifficulties();
console.log(difficulties);

function getElementByQuery(element) {
  return document.querySelectorAll(element);
}

function createNewClasses(element, classes) {
  classes.forEach(function (newClass) {
    element.classList.add(newClass);
  });
}

function createNewAttributes(element, attributes) {
  attributes.forEach(function (newAttribute) {
    element.setAttribute(
      newAttribute.attributeName,
      newAttribute.attributeValue
    );
  });
}

function addTextToElement(element, text) {
  element.textContent = text;
}

function createCompleteElement(element, classes, attributes, text) {
  let newElement = document.createElement(element);
  createNewClasses(newElement, classes);
  createNewAttributes(newElement, attributes);
  addTextToElement(newElement, text);
  return newElement;
}

function addCategoryButtons() {
  categories.forEach(function (category) {
    let newButton = createCompleteElement(
      "button",
      ["quiz-category-button", "quiz-button"],
      [
        {
          attributeName: "id",
          attributeValue: `${category.toLowerCase()}-button`,
        },
      ]
    );

    let newImg = createCompleteElement(
      "img",
      ["quiz-img"],
      [
        {
          attributeName: "id",
          attributeValue: `${category.toLowerCase()}-img`,
        },
        {
          attributeName: "src",
          attributeValue: `../images/${category.toLowerCase()}Img.svg`,
        },
        {
          attributeName: "alt",
          attributeValue: `${category.toLowerCase()}Img`,
        },
      ]
    );

    let newH4 = createCompleteElement("h4", ["quiz-h4"], [""], category);

    newButton.append(newImg);
    newButton.append(newH4);
    sectionQuizMode.append(newButton);
  });
}

function addDifficultyButtons() {
  let categorySelected = localStorage.getItem("category");
  let categoryDifficulties = Object.values(difficulties[categorySelected]);
  console.log(difficulties[categorySelected]);

  categoryDifficulties.forEach(function (categoryDifficulty) {
    let newButton = createCompleteElement(
      "button",
      ["quiz-difficulty-buttons", "quiz-button"],
      [
        {
          attributeName: "id",
          attributeValue: `${categoryDifficulty}-button`,
        },
      ]
    );

    let newImg = createCompleteElement(
      "img",
      ["quiz-img"],
      [
        {
          attributeName: "id",
          attributeValue: `${categoryDifficulty}-Img`,
        },
        {
          attributeName: "src",
          attributeValue: `../images/${categoryDifficulty}Img.svg`,
        },
        {
          attributeName: "alt",
          attributeValue: `${categoryDifficulty}Img`,
        },
      ]
    );

    newButton.append(newImg);

    let newH4 = createCompleteElement(
      "h4",
      ["quiz-h4"],
      [],
      categoryDifficulty
    );

    newButton.append(newH4);

    sectionQuizMode.append(newButton);
  });
}

function removeDifficultyButtons() {
  getElementByQuery(".quiz-difficulty-buttons").forEach(function (difficulty) {
    difficulty.remove();
  });
}

function appearCategoryButtons() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    sectionQuizMode.style.display = "flex";
    category.style.display = "block";
  });
}

function disappearCategoryButtons() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    category.style.display = "none";
  });
}

function clickCategoryButton() {
  console.log("category");
  let categoryButton = document.getElementById("category-button");
  categoryButton.addEventListener("click", function () {
    appearCategoryButtons();
    removeDifficultyButtons();
    console.log("click");
    difficultyButton.removeAttribute("disabled");
  });
}

function clickDiffilcultyButton() {
  difficultyButton.addEventListener("click", function () {
    disappearCategoryButtons();
    addDifficultyButtons();
    setDifficulty();
    difficultyButton.setAttribute("disabled", "true");
  });
}

function setCategory() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    category.addEventListener("click", function () {
      localStorage.setItem("category", `${category.textContent}`);
      difficultyButton.style.display = "block";
      appearStartButton();
    });
  });
}

function setDifficulty() {
  getElementByQuery(".quiz-difficulty-buttons").forEach(function (difficulty) {
    difficulty.addEventListener("click", function () {
      let text = difficulty.querySelector(".quiz-h4");
      localStorage.setItem("difficulty", `${text.textContent}`);
      appearStartButton();
    });
  });
}

function appearStartButton() {
  if (localStorage.getItem("category") && localStorage.getItem("difficulty")) {
    getElementByQuery(".start-button")[0].style.display = "flex";
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    modal.classList.add("show");
    header.classList.add("show");
  }, 200);
  this.localStorage.clear();
  addCategoryButtons();
  clickCategoryButton();
  clickDiffilcultyButton();
  setDifficulty();
  setCategory();
});
