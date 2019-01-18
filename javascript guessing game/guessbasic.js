//the correct answer
var answer = 4;

//user's guess
var stringGuess = prompt("Guess a number");
numberGuess = Number(stringGuess);

if (numberGuess === answer) {
    alert("You are correct.");
}

else if (numberGuess > answer) {
    alert("Incorrect. You guessed too high.");
}

else {
    alert("Incorrect. You guessed too low.");
}