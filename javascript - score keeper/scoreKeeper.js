//displays (text)
var p1DisplayScore = document.querySelector("#p1Score");
var p2DisplayScore = document.querySelector("#p2Score");
var maxScoreDisplay = document.querySelector("#maxScore");

//buttons
var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");
var maxScoreInput = document.querySelector("#maxScoreInput");

//javascript variables
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var maxScore = 5;

p1Button.addEventListener("click", function () {
    if (gameOver === false) {
        p1Score+=1;
        p1DisplayScore.textContent = p1Score;
        if (p1Score === maxScore) {
            gameOver = true;
            p1DisplayScore.classList.toggle("fontGreen");
        }        
    }  
});

p2Button.addEventListener("click", function () {
    if (gameOver === false) {
        p2Score+=1;
        p2DisplayScore.textContent = p2Score;
        if (p2Score === maxScore) {
            gameOver = true;
            p2DisplayScore.classList.toggle("fontGreen");
        }        
    }  
});

resetButton.addEventListener("click", function () {
    reset();
});

maxScoreInput.addEventListener("change", function () {
    reset();

    maxScore = Number(maxScoreInput.value);
    maxScoreDisplay.textContent = maxScore;
});

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1DisplayScore.textContent = p1Score;
    p2DisplayScore.textContent = p2Score;
    gameOver=false;
    p1DisplayScore.classList.remove("fontGreen");
    p2DisplayScore.classList.remove("fontGreen");
}

