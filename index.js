var readlineSync = require("readline-sync");
var chalk        = require("chalk");
var userName     = readlineSync.question("What's your name? ");
var score        = 0;

console.log(chalk.cyan("Welcome %s to HOW MUCH YOU KNOW AN ENGINEER?"), userName.toUpperCase());

function play(question, answer, options)
{
  var index = readlineSync.keyInSelect(options, question);
  if(index >= 0) {
  var userAnswer = options[index];

  if (answer.toUpperCase() === userAnswer.toUpperCase())
  {
    console.log(chalk.green("Wohoo! It's Correct"));
    score ++;
  }
  else 
  {
    console.log(chalk.red("Nope! It's Wrong"));
  }
  }
console.log(chalk.magenta("current score:" + score));
console.log(chalk.magenta("-------------"));
  
}

var questions = [{ question : "Bachelore of Engineering is for how much period of course?", 
answer : "Four",
options : ["Three", "Four", "Five"]
  },
  { question : "What CS stands for in B.E.?", 
answer : "Computer Science",
options : ["Civil Services", "Computer Science"]
  },
  { question : "Software Companies are open for every branch?", 
answer : "True",
options : ["False", "True", "None"]
  },
  { question : "Only IITians can go in Top Product Based Companies?", 
answer : "False",
options : ["False", "True", "May be"]
  },
{ question : "Engineer can pass their semester exams with last night study?", 
answer : "True",
options : ["True", "False", "Never"]
  }
]

for (var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer, questions[i].options)
}

var highestOnes = [{name : "Sawee", score : 6},
{name : "Mayur", score : 5}
]

console.log(chalk.green("\nYAY! You SCORED: "+ score));
console.log("Check out the high scores, if you should be there ping me and I'll update it")

for(var i=0; i<highestOnes.length; i++)
{
  console.log(chalk.magenta(highestOnes[i].name + ": "+ highestOnes[i].score));
}




