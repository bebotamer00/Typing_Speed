let theWords = [
  "Hello",
  "Structure",
  "Pharmacy",
  "Programing",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  "Magic",
  "Hi",
  "Hard",
  "Yesterday",
  "Today",
  "Calendar",
  "Facebook",
  "Google",
  "Phone",
  "Calculator",
  "Beautiful",
  "Difficult",
  "Minute",
  "Delicious",
  "Goodbye",
  "Water",
  "Beef",
  "Foot",
];
//Diffiulty Levels
const Easy = 30;
const Meduim = 20;
const Hard = 10;
// Catch The Elements
let screenLock = document.querySelector(".screen-lock");
let counter = document.querySelector(".counter");
let count = document.querySelector(".count");
let startButton = document.querySelector(".start");
let theWord = document.querySelector("#words");
let theInput = document.querySelector("#input");
let timeLeft = document.querySelector("#sec");
let scoreGot = document.querySelector("#got");
let scoreTotal = document.querySelector("#total");
let gpaScore = document.querySelector("#gpa");
let levelEasy = document.querySelector("#easy");
let levelMeduim = document.querySelector("#meduim");
let levelHard = document.querySelector("#hard");
let high = document.querySelector(".high");
let againButton = document.getElementById("again");
let diffLevels = document.querySelectorAll("button");
let overlay = document.querySelector(".overlay-page");
let noButton = document.querySelector(".no");
overlay.remove();
timeLeft.innerHTML = Meduim;
scoreTotal.innerHTML = theWords.length;
// To Start The Game
startButton.onclick = function () {
  counterGame();
  this.remove();
  screenLock.remove();
  setTimeout(startPlay, 4000);
  addEventListener("input", setWord);
};
// Counter To Start The Game
function counterGame() {
  let start = setInterval(() => {
    count.innerHTML--;
    if (count.innerHTML === "0") {
      clearInterval(start);
      counter.remove();
      theInput.focus();
      theOpreation();
      theInput.disabled = false;
    }
  }, 1000);
}
// To You Try Again
againButton.onclick = function () {
  overlay.remove();
  document.body.appendChild(screenLock);
};
// Thanks
noButton.onclick = function () {
  overlay.remove();
  let overlayPage = document.createElement("div");
  overlayPage.classList = "overlay";
  document.body.appendChild(overlayPage);
  let thanksDiv = document.createElement("div");
  thanksDiv.classList = "thanks-div";
  overlayPage.appendChild(thanksDiv);
  let thanksP = document.createElement("p");
  thanksP.classList = "thanks-p";
  thanksP.innerHTML = `Thanks For Trying The Game <br /> <i class="fa-solid fa-heart"></i>`;
  thanksDiv.appendChild(thanksP);
  setTimeout(window.close, 3000);
};
// Get Random Word
function theOpreation() {
  let randWord = theWords[Math.floor(Math.random() * theWords.length)];
  let wordIndex = theWords.indexOf(randWord);
  theWord.innerHTML = randWord;
  // Delete The Word In The Array
  theWords.splice(wordIndex, 1);
}
// Set The Time
function startPlay() {
  let start = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML === "0") {
      clearInterval(start);
      theInput.value = "End Game";
      theInput.disabled = "none";
      document.body.appendChild(overlay);
      high.innerHTML = scoreGot.innerHTML;
    }
  }, 1000);
}
// Set The Cases Of Word
function setWord() {
  if (theInput.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
    theInput.value = "";
    scoreGot.innerHTML++;
    if (theWords.length > 0) theOpreation();
    else {
      theInput.disabled = "none";
      gpaScore.innerHTML = "Very Good";
    }
  }
}
// Local Storage To Save The Data In The Browser
diffLevels.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    window.localStorage.setItem("checkValue", e.currentTarget.value);
  });
});
if (window.localStorage.getItem("checkValue")) {
  if (window.localStorage.getItem("checkValue") === "easy") {
    timeLeft.innerHTML = Easy;
  } else if (window.localStorage.getItem("checkValue") === "meduim") {
    timeLeft.innerHTML = Meduim;
  } else if (window.localStorage.getItem("checkValue") === "hard") {
    timeLeft.innerHTML = Hard;
  }
} else {
  timeLeft.innerHTML = Meduim;
}
