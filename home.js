// <!-- <button class="quiz-mode-button">
//           <img class="quiz-mode-img" src="" alt="" />
//           <h4 class="quiz-mode-h4"></h4>
//         </button> -->
let sectionQuizMode = document.getElementById("section-quiz-mode");

let categories = [
  "Geography",
  "Science",
  "Entretainment",
  "History",
  "Sport",
  "Art",
];
let categoriesImgs = [
  "geographyImg",
  "scienceImg",
  "artImg",
  "historyImg",
  "sportImg",
  "EntretainmentImg",
];

function getElementByQuery(element) {
  return document.querySelectorAll(element);
}

function addCategoryButtons() {
  categories.forEach(function (category) {
    let newButton = document.createElement("button");
    newButton.classList.add("quiz-category-button");
    newButton.classList.add("quiz-button");
    newButton.setAttribute("id", `${category.toLowerCase()}-button`);

    let newImg = document.createElement("img");
    newImg.setAttribute("id", `${category.toLowerCase()}-img`);
    newImg.classList.add("quiz-img");
    newImg.setAttribute("src", `images/${category.toLowerCase()}Img.svg`);
    newImg.setAttribute("alt", `${category.toLowerCase()}Img`);
    newButton.append(newImg);

    let newH4 = document.createElement("h4");
    newH4.classList.add("quiz-h4");
    newH4.textContent = category;
    newButton.append(newH4);

    sectionQuizMode.append(newButton);
  });
}

function addDifficultyButtons() {
  let difficulties = ["Easy", "Medium", "Hard"];
  difficulties.forEach(function (difficulty) {
    let newButton = document.createElement("button");
    newButton.classList.add("quiz-button");
    newButton.classList.add("quiz-difficulty-buttons");
    newButton.setAttribute("id", `${difficulty.toLowerCase()}-button`);

    let newImg = document.createElement("img");
    newImg.setAttribute("id", `${difficulty.toLowerCase()}-Img`);
    newImg.classList.add("quiz-img");
    newImg.setAttribute("src", `images/${difficulty.toLowerCase()}Img.svg`);
    newImg.setAttribute("alt", `${difficulty.toLowerCase()}Img`);
    newButton.append(newImg);

    let newH4 = document.createElement("h4");
    newH4.classList.add("quiz-h4");
    newH4.textContent = difficulty;
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

function saveCategory() {
  getElementByQuery(".quiz-category-button").forEach(function (category) {
    category.addEventListener("click", function () {
      localStorage.setItem("category", `${category.textContent}`);
      appearStartButton()

    });
  });
}

function saveDifficulty() {
  getElementByQuery(".quiz-difficulty-buttons").forEach(function (difficulty) {
    difficulty.addEventListener("click", function () {
      let text = difficulty.querySelector(".quiz-h4");
      localStorage.setItem("difficulty", `${text.textContent}`);
      appearStartButton()
    });
  });
}

function appearStartButton(){
  if (localStorage.getItem('category')&& localStorage.getItem('difficulty')){
    getElementByQuery('.start-button')[0].style.display = 'flex'
  }
}


window.addEventListener("load", function () {
  this.localStorage.clear()
  addDifficultyButtons();
  addCategoryButtons();
  clickCategoryButton();
  clickDiffilcultyButton();
  saveDifficulty();
  saveCategory();
});
