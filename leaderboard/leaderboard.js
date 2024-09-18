import { questions } from "../questionBank.js"
let button = document.querySelector(".buttonSubmit")
let h1 = document.getElementById("h1")
let main = document.querySelector(".main")
let modal = document.getElementById("modal")
let header = document.querySelector(".header")
let username = document.getElementById("username")

let leaderboard

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

function setLeaderboard() {
  let leaderboard = {}
  let difficultiesObject = {}

  let categories = Object.keys(questions)
  categories.forEach(function (category) {
    let difficulties = Object.keys(questions[category])
    difficulties.forEach(function (difficulty) {
      difficultiesObject[difficulty] = []
    })
    leaderboard[category] = difficultiesObject
  })

  return leaderboard
}

function leaderboardVerification() {
  if (leaderboard) {
    leaderboard = localStorage.getItem("leaderboard")
  } else {
    localStorage.setItem("leaderboard", JSON.stringify(setLeaderboard()))
    leaderboard = localStorage.getItem("leaderboard")
  }
  return JSON.parse(leaderboard)
}

let userObject = JSON.parse(localStorage.getItem("user"))

console.log("useObject from localstorage", userObject)

function addUserName() {
  userObject.userName = username.value
  console.log(userObject)
  localStorage.setItem("user", JSON.stringify(userObject))
}

function completeLocalStorageTable() {
  let newLeaderboard = leaderboardVerification()
  newLeaderboard[localStorage.getItem("category")][
    localStorage.getItem("difficulty")
  ].push(userObject)
  localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard))
}

function createPodiumHtml() {
  let rankingContainer = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "rankings" }],
    [],
    ""
  )

  let rankingImg2 = createCompleteElements(
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

  let rankingP2 = createCompleteElements("p", [], [], "#2")

  let rankingUsername2 = createCompleteElements("p", [], [], "user name")

  let ranking2 = createCompleteElements("div", [], ["ranking", "two"], "")

  appendElements(ranking2, [rankingImg2, rankingP2, rankingUsername2])

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

  let rankingUsername1 = createCompleteElements("p", [], [], "user name")

  let ranking1 = createCompleteElements("div", [], ["ranking", "one"], "")

  appendElements(ranking1, [rankingImg1, rankingP1, rankingUsername1])

  let rankingImg3 = createCompleteElements(
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

  let rankingP3 = createCompleteElements("p", [], [], "#3")

  let rankingUsername3 = createCompleteElements("p", [], [], "user name")

  let ranking3 = createCompleteElements("div", [], ["ranking", "three"], "")

  appendElements(ranking3, [rankingImg3, rankingP3, rankingUsername3])

  appendElements(rankingContainer, [ranking2, ranking1, ranking3])

  main.append(rankingContainer)
}

function completeHtmlTable() {
  let localLeaderboard = leaderboardVerification()

  let table = createCompleteElements(
    "table",
    [{ attributeName: "id", attributeValue: "leaderboard-table" }],
    [],
    ""
  )

  main.append(table)

  let allUsers = []

  for (let category in localLeaderboard) {
    for (let difficulty in localLeaderboard[category]) {
      allUsers.push(...localLeaderboard[category][difficulty])
    }
  }

  allUsers.sort((a, b) => b.totalPoints - a.totalPoints);

  allUsers.forEach((user, idx) => {
    let newTr = document.createElement("tr")

    let newTdPosition = createCompleteElements(
      "td",
      [],
      ["ranking"],
      `# ${idx + 1}`
    )

    let newTdName = createCompleteElements("td", [], ["user"], user.userName)

    let newTdPoints = createCompleteElements(
      "td",
      [],
      ["points"],
      user.totalPoints
    )

    appendElements(newTr, [newTdPosition, newTdName, newTdPoints])

    table.append(newTr)
  })
}

function createPageButtons() {
  let containerButtons = createCompleteElements("div", [], ["buttons"], "")

  let newHomeButton = createCompleteElements("button", [], ["button"], "Home")

  let newResultsButton = createCompleteElements(
    "button",
    [],
    ["button"],
    "Results"
  )

  let newRestartbutton = createCompleteElements(
    "button",
    [],
    ["button"],
    "Restart"
  )

  appendElements(containerButtons, [
    newHomeButton,
    newRestartbutton,
    newResultsButton,
  ])

  main.append(containerButtons)
}

button.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show")
  setTimeout(function () {
    main.style.display = "flex"
    h1.style.display = "flex"
    header.style.display = "flex"
    modal.style.display = "none"
    console.log(userObject)
    addUserName()
    completeLocalStorageTable()
    createPodiumHtml()
    completeHtmlTable()
    createPageButtons()
  }, 1000)
})

window.onload = function () {
  leaderboardVerification()
  setTimeout(function () {
    document.getElementById("modal").classList.add("show")
  }, 200)
}
