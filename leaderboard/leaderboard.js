import { questions } from "../questionBank.js"

let h1 = document.getElementById("h1")
let main = document.querySelector(".main")
let header = document.querySelector(".header")

let leaderboard = localStorage.getItem("leaderboard")
let allUsers = []

function saveDifficulties() {
  let categories = Object.keys(questions)
  let difficulties = []

  categories.forEach(function (category) {
    Object.keys(questions[category]).forEach(function (_, idx) {
      if (!difficulties.includes(Object.keys(questions[category])[idx])) {
        difficulties.push(Object.keys(questions[category])[idx])
      }
    })
  })
  return difficulties
}

function addAttributes(element, attributes) {
  attributes.forEach(function (attribute) {
    element.setAttribute(attribute.attributeName, attribute.attributeValue)
  })
}

function addClasses(element, classes) {
  classes.forEach(function (classs) {
    element.classList.add(classs)
  })
}

function addText(element, text) {
  element.textContent = text
}

function appendElements(father, appends) {
  appends.forEach(function (appendElement) {
    father.append(appendElement)
  })
}

function createCompleteElements(type, attributes, classes, text) {
  let newElement = document.createElement(type)
  addAttributes(newElement, attributes)
  addClasses(newElement, classes)
  addText(newElement, text)
  return newElement
}

function leaderboardVerification() {
  leaderboard = localStorage.getItem("leaderboard")
  return JSON.parse(leaderboard)
}

let userObject = JSON.parse(localStorage.getItem("user"))

console.log("userObject from localstorage", userObject)

function saveAllUsers() {
  let leaderboardData = leaderboardVerification()
  allUsers = []
  for (let category in leaderboardData) {
    for (let difficulty in leaderboardData[category]) {
      leaderboardData[category][difficulty].forEach(function (user) {
        user.category = category
        user.difficulty = difficulty
        allUsers.push(user)
      })
    }
  }
  allUsers.sort((a, b) => b.totalPoints - a.totalPoints)
}

function createPodiumHtml() {
  let rankingContainer = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "rankings" }],
    [],
    ""
  )

  let ranking2
  let rankingImg2
  let rankingP2
  let rankingUsername2

  if (allUsers.length >= 2) {
    rankingImg2 = createCompleteElements(
      "img",
      [
        { attributeName: "id", attributeValue: "img-2" },
        {
          attributeName: "src",
          attributeValue: "./images/trophy_2nd_place.svg",
        },
      ],
      ["trophies"],
      ""
    )

    rankingP2 = createCompleteElements("p", [], [], "#2")

    rankingUsername2 = createCompleteElements("p", [], [], allUsers[1].userName)

    ranking2 = createCompleteElements("div", [], ["ranking", "two"], "")
    appendElements(ranking2, [rankingImg2, rankingP2, rankingUsername2])
    rankingContainer.append(ranking2)
  }

  let rankingImg1 = createCompleteElements(
    "img",
    [
      { attributeName: "id", attributeValue: "img-1" },
      {
        attributeName: "src",
        attributeValue: "./images/trophy_1st_place.svg",
      },
    ],
    ["trophies"],
    ""
  )

  let rankingP1 = createCompleteElements("p", [], [], "#1")

  let rankingUsername1 = createCompleteElements(
    "p",
    [],
    [],
    allUsers[0].userName
  )

  let ranking1 = createCompleteElements("div", [], ["ranking", "one"], "")

  appendElements(ranking1, [rankingImg1, rankingP1, rankingUsername1])
  rankingContainer.append(ranking1)

  let ranking3
  let rankingImg3
  let rankingP3
  let rankingUsername3

  if (allUsers.length >= 3) {
    rankingImg3 = createCompleteElements(
      "img",
      [
        { attributeName: "id", attributeValue: "img-3" },
        {
          attributeName: "src",
          attributeValue: "./images/trophy_3rd_place.svg",
        },
      ],
      ["trophies"],
      ""
    )

    rankingP3 = createCompleteElements("p", [], [], "#3")

    rankingUsername3 = createCompleteElements("p", [], [], allUsers[2].userName)

    ranking3 = createCompleteElements("div", [], ["ranking", "three"], "")
    appendElements(ranking3, [rankingImg3, rankingP3, rankingUsername3])
    rankingContainer.append(ranking3)
  }

  main.append(rankingContainer)
}

function completeHtmlTable() {
  let table = createCompleteElements(
    "table",
    [{ attributeName: "id", attributeValue: "leaderboard-table" }],
    [],
    ""
  )

  // Añadir las cabeceras de la tabla
  let headerRow = document.createElement("tr")
  const headers = ["Range", "Name", "Category", "Difficulty", "Points"]
  headers.forEach((header) => {
    let th = document.createElement("th")
    th.textContent = header
    headerRow.appendChild(th)
  })
  table.appendChild(headerRow)

  // Añadir la fila inicial con los datos del usuario
  if (userObject) {
    allUsers.forEach((user, idx) => {
      console.log(user)
      let newTr = document.createElement("tr")
    
      let newTdPosition = createCompleteElements(
        "td",
        [],
        ["ranking"],
        `# ${idx + 1}` // Incrementa en 2 para que no colisione con la fila inicial
      )
  
      let newTdName = createCompleteElements("td", [], ["user"], user.userName)
      let newTdCategory = createCompleteElements("td", [], [], user.category)
      let newTdDifficulty = createCompleteElements("td", [], [], user.difficulty)
      let newTdPoints = createCompleteElements(
        "td",
        [],
        ["points"],
        user.totalPoints
      )
  
      appendElements(newTr, [
        newTdPosition,
        newTdName,
        newTdCategory,
        newTdDifficulty,
        newTdPoints,
      ])
      table.append(newTr)
    })
  
    main.append(table)
    return allUsers
  }
  else{
    window.location.href = "../notFoundPage/notFoundPage.html"
  }
}

function createPageButtons() {
  let containerLinks = createCompleteElements("div", [], ["buttons"], "")

  let newHomeLink = createCompleteElements(
    "a",
    [
      {
        attributeName: "href",
        attributeValue: "../index.html",
      },
    ],
    ["links"],
    "Home"
  )

  let newResultsLink = createCompleteElements(
    "a",
    [
      {
        attributeName: "href",
        attributeValue: "../resultsScreen/results.html",
      },
    ],
    ["links"],
    "Results"
  )

  let newRestartLink = createCompleteElements(
    "a",
    [
      {
        attributeName: "href",
        attributeValue: "../quizPage/questions.html",
      },
    ],
    ["links"],
    "Restart"
  )

  appendElements(containerLinks, [newHomeLink, newRestartLink, newResultsLink])

  main.append(containerLinks)
}
function createButtonFilters() {
  let containerFilters = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "container-filters" }],
    [],
    ""
  )

  let categoryButton = createCompleteElements(
    "button",
    [{ attributeName: "id", attributeValue: "category-button" }],
    ["filter-buttons"],
    "Filter by Category"
  )

  let categoryOptions = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "category-content" }],
    ["content"],
    ""
  )

  let categories = Object.keys(JSON.parse(leaderboard))
  categories.forEach(function (category) {
    let newOption = createCompleteElements(
      "div",
      [{ attributeName: "name", attributeValue: category }],
      ["options"],
      ""
    )

    let newCategoryCheckbox = createCompleteElements(
      "input",
      [
        { attributeName: "type", attributeValue: "checkbox" },
        { attributeName: "id", attributeValue: `${category}-checkbox` },
      ],
      [],
      ""
    )
    let newCategoryLabel = createCompleteElements("span", [], [], category)
    newCategoryCheckbox.addEventListener("change", filterUsers)
    newOption.append(newCategoryCheckbox)
    newOption.append(newCategoryLabel)
    categoryOptions.append(newOption)
  })
  categoryButton.append(categoryOptions)

  let difficultyButton = createCompleteElements(
    "button",
    [{ attributeName: "id", attributeValue: "difficulty-button" }],
    ["filter-buttons"],
    "Filter by Difficulty"
  )

  let difficultyOptions = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "difficulty-content" }],
    ["content"],
    ""
  )

  let difficulties = saveDifficulties()
  difficulties.forEach(function (difficulty) {
    let newOption = createCompleteElements(
      "div",
      [{ attributeName: "name", attributeValue: difficulty }],
      ["options"],
      ""
    )

    let newDifficultyCheckbox = createCompleteElements(
      "input",
      [
        { attributeName: "type", attributeValue: "checkbox" },
        { attributeName: "id", attributeValue: `${difficulty}-difficulty` },
      ],
      [],
      ""
    )

    let newDifficultyLable = createCompleteElements("span", [], [], difficulty)
    newDifficultyCheckbox.addEventListener("change", filterUsers)
    newOption.append(newDifficultyCheckbox)
    newOption.append(newDifficultyLable)
    difficultyOptions.append(newOption)
  })

  difficultyButton.append(difficultyOptions)
  containerFilters.append(categoryButton)
  containerFilters.append(difficultyButton)
  main.append(containerFilters)
}

function filterUsers() {
  const selectedCategories = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked[id$="-checkbox"]')
  ).map((checkbox) => checkbox.id.replace("-checkbox", ""))

  const selectedDifficulties = Array.from(
    document.querySelectorAll(
      'input[type="checkbox"]:checked[id$="-difficulty"]'
    )
  ).map((checkbox) => checkbox.id.replace("-difficulty", ""))

  const filteredUsers = allUsers.filter((user) => {
    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(user.category)
      : true
    const difficultyMatch = selectedDifficulties.length
      ? selectedDifficulties.includes(user.difficulty)
      : true
    return categoryMatch && difficultyMatch
  })
  const table = document.getElementById("leaderboard-table")
  table.innerHTML = ""

  // Re-add the header row
  let headerRow = document.createElement("tr")
  const headers = ["Range", "Name", "Category", "Difficulty", "Points"]
  headers.forEach((header) => {
    let th = document.createElement("th")
    th.textContent = header
    headerRow.appendChild(th)
  })
  table.appendChild(headerRow)

  filteredUsers.forEach((user, idx) => {
    const newTr = document.createElement("tr")
    const newTdPosition = createCompleteElements(
      "td",
      [],
      ["ranking"],
      `# ${idx + 1}`
    )
    const newTdName = createCompleteElements("td", [], ["user"], user.userName)
    const newTdCategory = createCompleteElements("td", [], [], user.category)
    const newTdDifficulty = createCompleteElements(
      "td",
      [],
      [],
      user.difficulty
    )
    const newTdPoints = createCompleteElements(
      "td",
      [],
      ["points"],
      user.totalPoints
    )
    appendElements(newTr, [
      newTdPosition,
      newTdName,
      newTdCategory,
      newTdDifficulty,
      newTdPoints,
    ])
    table.append(newTr)
  })
}

function appearFilterOptins() {
  let categoryFilter = document.getElementById("category-button")
  let difficultyFilter = document.getElementById("difficulty-button")

  categoryFilter.addEventListener("click", function () {
    let categoryContent = document.getElementById("category-content")
    categoryContent.classList.toggle("show-content")
  })

  difficultyFilter.addEventListener("click", function () {
    let difficultyContent = document.getElementById("difficulty-content")
    difficultyContent.classList.toggle("show-content")
  })
}

window.onload = function () {
  setTimeout(function () {
    main.style.display = "flex"
    h1.style.display = "flex"
    header.style.display = "flex"
    leaderboard = leaderboardVerification()
    saveAllUsers()
    console.log("Usuarios después de guardar:", allUsers)

    if (allUsers.length > 0) {
      createPodiumHtml()
      createButtonFilters()
      completeHtmlTable()
    }

    createPageButtons()
    appearFilterOptins()
  }, 1000)
}
