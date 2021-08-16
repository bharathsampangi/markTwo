var readlineSync = require('readline-sync')
var chalk = require("chalk")

function welcome() {
  console.log("Welcome!. Are you a MARVEL fan? Then check out this quiz")
}

questionBank = [
  {
    question: "Thor’s hammer Mjolnir is made of metal from the heart of a dying what?",
    options: ["Comet", "Planet", "Star", "Asteroid"],
    answer: "Star"
  },
  {
    question: "What is Loki's title?",
    options: ["God of Pranks", "God of Mischief", "God of Tricks", "God of Evil"],
    answer: "God of Mischief"
  },
  {
    question: "What is Captain America’s shield made of?",
    options: ["Adamantium", "Vibranium", "Promethium", "Carbonadium"],
    answer: "Vibranium"
  },
  {
    question: "What type of doctor is Stephen Strange?",
    options: ["Neurosurgeon", "Cardiothoracic Surgeon", "Trauma Surgeon", "Plastic Surgeon"],
    answer: "Neurosurgeon"
  },
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    options: ["2005", "2008", "2010", "2012"],
    answer: "2008"
  }
]

var score = 0;

function showQuestion() {
  for(i=0; i< questionBank.length; i++) {
    currentQuestion = questionBank[i]
    console.log('\n')
    console.log(currentQuestion.question)
    index = readlineSync.keyInSelect(currentQuestion.options, null);
    if(currentQuestion.options[index] === currentQuestion.answer) {
      score = score + 1;
      console.log(chalk.green("right!"))
    }else {
      console.log(chalk.red("wrong!")) 
    }
    console.log("current score: ",score)
    console.log("----------")
  }
}

welcome()
showQuestion()