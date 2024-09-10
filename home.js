import { questions } from "./questionBank.js";

let sectionQuizMode = document.getElementById("section-quiz-mode");

let categories = Object.keys(questions);
console.log(categories)

function saveDifficulties() {
  let difficulties = {};
  categories.forEach(function (category) {
    difficulties[category] = Object.keys(questions[category]);
    console.log(questions[category])
  });
  return difficulties
}

let difficulties =  saveDifficulties()

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
          attributeValue: `images/${category.toLowerCase()}Img.svg`,
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

// let categorys = {
//   science: {
//     easy: [
//       {
//         question:
//           "¿Qué parte de la planta absorbe agua y nutrientes del suelo?",
//         correct: "Las raíces",
//         incorrect: ["Las hojas", "El tallo", "Las flores"],
//         explanation:
//           "Las raíces son responsables de absorber agua y nutrientes del suelo.",
//       },

function addDifficultyButtons() {
  Object.values(difficulties.science).forEach(function (difficulty) {
    let newButton = createCompleteElement(
      "button",
      ["quiz-difficulty-buttons", "quiz-button"],
      [
        {
          attributeName: "id",
          attributeValue: `${difficulty}-button`,
        },
      ]
    );

    let newImg = createCompleteElement(
      "img",
      ["quiz-img"],
      [
        {
          attributeName: "id",
          attributeValue: `${difficulty}-Img`,
        },
        {
          attributeName: "src",
          attributeValue: `images/${difficulty}Img.svg`,
        },
        {
          attributeName: "alt",
          attributeValue: `${difficulty}Img`,
        },
      ]
    );

    newButton.append(newImg);

    let newH4 = createCompleteElement("h4", ["quiz-h4"], [], difficulty);

    newButton.append(newH4);

    sectionQuizMode.append(newButton);
  });
}

function appearCategoryButtons() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    sectionQuizMode.style.display = "flex";
    category.style.display = "block";
  });
}

function appearDifficultyButtons() {
  getElementByQuery(".quiz-difficulty-buttons").forEach(function (difficulty) {
    difficulty.style.display = "block";
  });
}

function disappearDifficultyButtons() {
  getElementByQuery(".quiz-difficulty-buttons").forEach(function (difficulty) {
    difficulty.style.display = "none";
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
    disappearDifficultyButtons();
    console.log("click");
  });
}

function clickDiffilcultyButton() {
  let difficultyButton = document.getElementById("difficulty-button");
  difficultyButton.addEventListener("click", function () {
    appearDifficultyButtons();
    disappearCategoryButtons();
    console.log("click");
  });
}

function setCategory() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    category.addEventListener("click", function () {
      localStorage.setItem("category", `${category.textContent}`);
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
  this.localStorage.clear();
  addDifficultyButtons();
  addCategoryButtons();
  clickCategoryButton();
  clickDiffilcultyButton();
  setDifficulty();
  setCategory();
});
