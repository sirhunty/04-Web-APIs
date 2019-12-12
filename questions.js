var timer = 45;
var questionTitle = document.querySelector("#question");
var generate = document.querySelector("#generate");
var buttonOne = document.querySelector("#btn-1");
var buttonTwo = document.querySelector("#btn-2");
var buttonThree = document.querySelector("#btn-3");
var buttonFour = document.querySelector("#btn-4");
var questionContainer = document.querySelector("#question-container");
var questionRound = 0;
var intervalId;




var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  ///etc.
];




function secondDown() {
  timer--;
  document.getElementById("timerContent").innerHTML = timer;
}

function startGame() {
  questionContainer.hidden = false;
  console.log(startGame);
  timer = questions.length * 15;
  document.getElementById("timerContent").innerHTML = timer;
  intervalId = setInterval(secondDown, 1000);
  setnextQuestion(0);
  questionRound = 0;
  generate.hidden = true;
}

function setnextQuestion(index) {
  questionTitle.innerHTML = questions[index].title;
  buttonOne.innerHTML = questions[index].choices[0];
  buttonTwo.innerHTML = questions[index].choices[1];
  buttonThree.innerHTML = questions[index].choices[2];
  buttonFour.innerHTML = questions[index].choices[3];
}


function selectAnswer() {
  questionRound++;
  if (questionRound >= questions.length) {
    questionContainer.hidden = true;
    clearInterval(intervalId);
    generate.hidden = false;
  } else {
    setnextQuestion(questionRound);
  }

}

document.querySelector("#generate").addEventListener("click", startGame);
buttonOne.addEventListener("click", selectAnswer);
buttonTwo.addEventListener("click", selectAnswer);
buttonThree.addEventListener("click", selectAnswer);
buttonFour.addEventListener("click", selectAnswer);




