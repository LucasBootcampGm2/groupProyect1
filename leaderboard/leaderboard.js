let button = document.querySelector(".buttonSubmit");
let h1 = document.getElementById("h1");
let main = document.querySelector(".main");
let modal = document.getElementById("modal");
let header = document.querySelector(".header");
let leaderboard = [
  // {
  //     userName: ,
  //     correctAnswers: ,
  //     wrongAnswers: ,
  //     skipedAnswers: ,
  //     totalPoints: ,
  // }
];
localStorage.setItem("leaderboard", "[]");
button.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("show");
  setTimeout(function () {
    main.style.display = "flex";
    h1.style.display = "flex";
    header.style.display = "flex";
    modal.style.display = "none";
  }, 1000);
});

// function completeLeaderTable(user, corrects, wrong, skip) {
//   leaderboard.push({
//     userName: user,
//     correctAnswers: corrects,
//     wrongAnswers: wrong,
//     skipedAnswers: skip,
//   });
// }

window.onload = function () {
  setTimeout(function () {
    document.getElementById("modal").classList.add("show");
  }, 200);
};
