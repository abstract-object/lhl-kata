var max = 101;
var min = 1;
var random = Math.floor(Math.random() * (max - min)) + min;

var numberOfGuesses = 0;
var guessed = [];
var repeat;

var prompt = require("prompt-sync")();
var answer = "";

while (answer != random) {
  answer = prompt("Guess a number: ");

  if (guessed.length > 0) {
    for (i = 0; i < guessed.length; i++) {
      if (guessed[i] == answer) {
        console.log("Already guessed!");
        repeat = true;
      }
    }
  }

  if (!repeat) {
    if (isNaN(answer)) {
      console.log("Not a number! Try again!");
    }
    else {
      numberOfGuesses++;
      guessed.push(answer);

      if (answer < random) {
        console.log("Too low!");
      }
      else if (answer > random) {
        console.log("Too high!");
      }
    }
  }

  repeat = false;
}

console.log("You got it! You took " + numberOfGuesses + " attempts!");