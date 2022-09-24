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

const Easy = 30;
const Meduim = 20;
const Hard = 10;

let startButton = document.querySelector("#start");
let theWord = document.querySelector("#words");
let theInput = document.querySelector("#input");
let timeLeft = document.querySelector("#sec");
let scoreGot = document.querySelector("#got");
let scoreTotal = document.querySelector("#total");
let gpaScore = document.querySelector("#gpa");
let levelEasy = document.querySelector("#easy");
let levelMeduim = document.querySelector("#meduim");
let levelHard = document.querySelector("#hard");
let againButton = document.querySelector("#again");
let diffLevels = document.querySelectorAll("button");

timeLeft.innerHTML = Meduim;
scoreTotal.innerHTML = theWords.length;
againButton.disabled = "none";
// To Start The Game
startButton.onclick = function () {
  this.remove();
  theInput.focus();
  theOpreation();
  startPlay();
  addEventListener("input", setWord);
  levelEasy.disabled = false;
  levelMeduim.disabled = false;
  levelHard.disabled = false;
};
// To You Try Again
againButton.onclick = function () {
  theInput.focus();
  theOpreation();
  startPlay();
  addEventListener("input", setWord);
  theInput.disabled = false;
  againButton.disabled = "none";
  timeLeft.innerHTML = Meduim;
  scoreGot.innerHTML = 0;
  scoreGot.innerHTML = window.localStorage.getItem(scoreGot);
};
// Get Random Word
function theOpreation() {
  let randWord = theWords[Math.floor(Math.random() * theWords.length)];
  let wordIndex = theWords.indexOf(randWord);
  // Delete The Word In The Array
  theWords.splice(wordIndex, 1);
  theWord.innerHTML = randWord;
}
// Set The Time
function startPlay() {
  let start = setInterval(() => {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML === "0") {
      clearInterval(start);
      theInput.disabled = "none";
      againButton.disabled = false;
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
