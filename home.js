// <!-- <button class="quiz-mode-button">
//           <img class="quiz-mode-img" src="" alt="" />
//           <h4 class="quiz-mode-h4"></h4>
//         </button> -->
let sectionQuizMode = document.getElementById("section-quiz-mode")

let categories = ['Geography', 'Science', 'Math', 'History', 'Sport' ,'Language']
let categoriesImgs = ['geographyImg', 'scienceImg', 'mathImg', 'historyImg', 'sportImg' ,'languageImg']

let difficulties = ['Easy','Medium', 'Hard']

let categoryButtons = document.querySelectorAll('.quiz-category-button')

let difficultyButtons = document.querySelectorAll('.quiz-difficulty-buttons')

function addCategoryButtons(){
  categories.forEach(function(category){
    let newButton = document.createElement("button")
    newButton.classList.add("quiz-category-button")
    newButton.classList.add("quiz-button")
    newButton.setAttribute("id", `${category.toLowerCase()}-button`)

    let newImg = document.createElement('img')
    newImg.setAttribute('id', `${category.toLowerCase()}-img`)
    newImg.classList.add('quiz-img')
    newImg.setAttribute('src', `${category.toLowerCase()}Img`)
    newImg.setAttribute('alt', `${category.toLowerCase()}Img`)
    newButton.append(newImg)

    let newH4 = document.createElement("h4")
    newH4.classList.add("quiz-h4")
    newH4.textContent = category
    newButton.append(newH4)

    sectionQuizMode.append(newButton)
  })
}

function addDifficultyButtons(){
  difficulties.forEach(function(difficulty){
    
    let newButton = document.createElement("button")
    newButton.classList.add("quiz-button")
    newButton.classList.add("quiz-difficulty-buttons")
    newButton.setAttribute("id", `${difficulty.toLowerCase()}-button`)

    let newImg = document.createElement('img')
    newImg.setAttribute('id', `${difficulty.toLowerCase()}-img`)
    newImg.classList.add('quiz-img')
    newImg.setAttribute('src', `${difficulty.toLowerCase()}Img`)
    newImg.setAttribute('alt', `${difficulty.toLowerCase()}Img`)
    newButton.append(newImg)

    let newH4 = document.createElement("h4")
    newH4.classList.add("quiz-h4")
    newH4.textContent = difficulty
    newButton.append(newH4)

    sectionQuizMode.append(newButton)
  })
}


function appearCategoryButtons(){
  categoryButtons.forEach(function(mode){
    mode.style.display = 'flex'
  })
}

function appearDifficultyButtons(){
  difficultyButtons.forEach(function(difficulty){
    difficulty.style.display = 'flex'
  })
}

function disappearDifficultyButtons(){
  difficultyButtons.forEach(function(difficulty){
    difficulty.style.display = 'none'
  })
}

function disappearCategoryButtons(){
  categoryButtons.forEach(function(mode){
    mode.style.display = 'none'
  })
}


function clickCategoryButton(){
  let categoryButton = document.getElementById('category-button')
  categoryButton.addEventListener("click", function(){
    appearCategoryButtons()
    disappearDifficultyButtons()
  })
}

function clickDiffilcultyButton(){
  let difficultyButton = document.getElementById('difficulty-button')
  difficultyButton.addEventListener("click", function(){
    appearDifficultyButtons()
    disappearCategoryButtons()
  })
}

window.addEventListener("load", function(){
  addDifficultyButtons()
  addCategoryButtons()
  clickCategoryButton()
  clickDiffilcultyButton()
})