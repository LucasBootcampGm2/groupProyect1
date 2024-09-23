import { questions } from "../questionBank.js";
let h1 = document.getElementById("h1");
let main = document.querySelector(".main");
let header = document.querySelector(".header");
let username = document.getElementById("username");

let leaderboard = localStorage.getItem("leaderboard");
let allUsers = [];

function addAttributes(element, attributes) {
  attributes.forEach(function (attribute) {
    element.setAttribute(attribute.attributeName, attribute.attributeValue);
  });
}

function addClasses(element, classes) {
  classes.forEach(function (classs) {
    element.classList.add(classs);
  });
}

function addText(element, text) {
  element.textContent = text;
}

function appendElements(father, appends) {
  appends.forEach(function (appendElement) {
    father.append(appendElement);
  });
}

function createCompleteElements(type, attributes, classes, text) {
  let newElement = document.createElement(type);
  addAttributes(newElement, attributes);
  addClasses(newElement, classes);
  addText(newElement, text);
  return newElement;
}

function leaderboardVerification() {
  leaderboard = localStorage.getItem("leaderboard");
  return JSON.parse(leaderboard);
}

let userObject = JSON.parse(localStorage.getItem("user"));

console.log("userObject from localstorage", userObject);

function saveAllUsers() {
  let leaderboardData = leaderboardVerification();
  allUsers = [];
  for (let category in leaderboardData) {
    for (let difficulty in leaderboardData[category]) {
      allUsers = allUsers.concat(leaderboardData[category][difficulty]);
    }
  }
  allUsers.sort((a, b) => b.totalPoints - a.totalPoints);

  console.log(allUsers);
}

function createPodiumHtml() {
  let rankingContainer = createCompleteElements(
    "div",
    [{ attributeName: "id", attributeValue: "rankings" }],
    [],
    ""
  );

  let ranking2;
  let rankingImg2;
  let rankingP2;
  let rankingUsername2;

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
    );

    rankingP2 = createCompleteElements("p", [], [], "#2");

    rankingUsername2 = createCompleteElements(
      "p",
      [],
      [],
      allUsers[1].userName
    );

    ranking2 = createCompleteElements("div", [], ["ranking", "two"], "");
    appendElements(ranking2, [rankingImg2, rankingP2, rankingUsername2]);
    rankingContainer.append(ranking2);
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
  );

  let rankingP1 = createCompleteElements("p", [], [], "#1");

  let rankingUsername1 = createCompleteElements(
    "p",
    [],
    [],
    allUsers[0].userName
  );

  let ranking1 = createCompleteElements("div", [], ["ranking", "one"], "");

  appendElements(ranking1, [rankingImg1, rankingP1, rankingUsername1]);
  rankingContainer.append(ranking1);

  let ranking3;
  let rankingImg3;
  let rankingP3;
  let rankingUsername3;

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
    );

    rankingP3 = createCompleteElements("p", [], [], "#3");

    rankingUsername3 = createCompleteElements(
      "p",
      [],
      [],
      allUsers[2].userName
    );

    ranking3 = createCompleteElements("div", [], ["ranking", "three"], "");
    appendElements(ranking3, [rankingImg3, rankingP3, rankingUsername3]);
    rankingContainer.append(ranking3);
  }

  main.append(rankingContainer);
}

function completeHtmlTable() {
  let table = createCompleteElements(
    "table",
    [{ attributeName: "id", attributeValue: "leaderboard-table" }],
    [],
    ""
  );

  main.append(table);

  allUsers.forEach((user, idx) => {
    let newTr = document.createElement("tr");

    let newTdPosition = createCompleteElements(
      "td",
      [],
      ["ranking"],
      `# ${idx + 1}`
    );

    let newTdName = createCompleteElements("td", [], ["user"], user.userName);

    let newTdPoints = createCompleteElements(
      "td",
      [],
      ["points"],
      user.totalPoints
    );

    appendElements(newTr, [newTdPosition, newTdName, newTdPoints]);

    table.append(newTr);
  });

  return allUsers;
}

function createPageButtons() {
  let containerLinks = createCompleteElements("div", [], ["buttons"], "");

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
  );

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
  );

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
  );

  appendElements(containerLinks, [newHomeLink, newRestartLink, newResultsLink]);

  main.append(containerLinks);
}

window.onload = function () {
  setTimeout(function () {
    main.style.display = "flex";
    h1.style.display = "flex";
    header.style.display = "flex";
    leaderboard = leaderboardVerification();
    saveAllUsers();
    console.log("Usuarios después de guardar:", allUsers);

    if (allUsers.length > 0) {
      createPodiumHtml();
      completeHtmlTable();
    }

    createPageButtons();
  }, 1000);
};
