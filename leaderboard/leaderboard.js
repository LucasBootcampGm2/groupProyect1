let button = document.querySelector(".buttonSubmit");
let h1 = document.getElementById("h1");
let main = document.querySelector(".main");
let modal = document.getElementById("modal");
let header = document.querySelector(".header");
let username = document.getElementById("username");

let leaderboardList = [];

let leaderboard = localStorage.getItem("leaderboard");

function leaderboardVerification() {
  let actualLeaderboard;
  if (leaderboard) {
    actualLeaderboard = localStorage.getItem("leaderboard");
  } else {
    actualLeaderboard = localStorage.setItem("leaderboard", "[]");
  }
  return JSON.parse(actualLeaderboard);
}

let userObject = JSON.parse(localStorage.getItem("user"));

console.log("useObject from localstorage", userObject);

function addUserName() {
  userObject.userName = username.value;
  console.log(userObject);
  localStorage.setItem("user", JSON.stringify(userObject));
}

function completeLocalStorageTable() {
  leaderboardList.push(userObject);
  console.log(leaderboardList);
  let newLeaderboard = [...leaderboardList, ...leaderboardVerification()];
  console.log(newLeaderboard);
  localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
}

function completeHtmlTable() {
  let localLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  let table = document.createElement("table");
  table.setAttribute("id", "leaderboard-table");
  main.append(table);
  localLeaderboard.forEach((user) => {
    let newTr = document.createElement("tr");
    let newTdPosition = document.createElement("td");
    newTdPosition.classList.add("ranking");
    // newTdPosition.textContent = user.ranking
    let newTdName = document.createElement("td");
    newTdName.classList.add("user");
    newTdName.textContent = user.userName;
    let newTdPoints = document.createElement("td");
    newTdPoints.classList.add("points");
    // newTdPoints.textContent = user.totalPoints
    newTr.append(newTdPosition);
    newTr.append(newTdName);
    newTr.append(newTdPoints);
    table.append(newTr);
  });
}

function createPageButtons() {
  let containerButtons = document.createElement("div");
  containerButtons.classList.add("buttons");
  let newHomeButton = document.createElement("button");
  newHomeButton.textContent = "Home";
  newHomeButton.classList.add("button");
  containerButtons.append(newHomeButton);
  let newResultsButton = document.createElement("button");
  newResultsButton.textContent = "Results";
  newResultsButton.classList.add("button");
  containerButtons.append(newResultsButton);
  let newRestartbutton = document.createElement("button");
  newRestartbutton.textContent = "Restart";
  newRestartbutton.classList.add("button");
  containerButtons.append(newHomeButton);
  containerButtons.append(newRestartbutton);
  containerButtons.append(newResultsButton);
  main.append(containerButtons);
}

button.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show");
  setTimeout(function () {
    main.style.display = "flex";
    h1.style.display = "flex";
    header.style.display = "flex";
    modal.style.display = "none";
    console.log(userObject);
    addUserName();
    completeLocalStorageTable();
    completeHtmlTable();
    createPageButtons();
  }, 1000);
});

window.onload = function () {
  setTimeout(function () {
    document.getElementById("modal").classList.add("show");
  }, 200);
};
