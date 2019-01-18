var numSquares = 6;
var maxNumSquares = 6;
var colors = [];
var correctColor;

//displays
var displayColor = document.querySelector("#pickedColor");
var displayMessage = document.querySelector("#message");

//buttons
var resetButton = document.querySelector("#resetButton");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var squares = document.querySelectorAll(".square");
var modeButton = document.querySelectorAll(".modeButton");

initialize();

function initialize() {
    generateColors();
    selectCorrectColor();
}

//random rgb value
function randomRGB() {
    var rValue = Math.floor(Math.random()*(255+1));
    var gValue = Math.floor(Math.random()*(255+1));
    var bValue = Math.floor(Math.random()*(255+1));
    var rgbValue = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
    return rgbValue;
}

//populate color array
function generateColors() {
    for(var i = 0; i < numSquares; i++) {
        colors[i] = randomRGB();
        squares[i].style.backgroundColor = colors[i];
    }
}

//select the correct color
function selectCorrectColor(){
    correctColor = colors[Math.floor(Math.random()*numSquares)];
    displayColor.textContent = correctColor;
    return correctColor;
}

//assign event listeners to each square
for(var i = 0; i < numSquares; i++) {
    squares[i].addEventListener("click", function() {
        if(this.style.backgroundColor === correctColor) {
            displayMessage.textContent = "Correct";
            resetButton.textContent = "play again?";
            for(var j = 0; j < numSquares; j++) {
                squares[j].style.backgroundColor = correctColor;
            }
        } else {
            displayMessage.textContent = "Incorrect";
            this.style.background = "#232323";
        }
    });
}

//restart button
resetButton.addEventListener("click", function () {
    generateColors();
    selectCorrectColor();
    resetButton.textContent = "new colors";
    displayMessage.textContent = "";
});

//assign num squares based off of easy or hard selected
for(var i=0; i<modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
        if(this.textContent === "easy") {
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        generateColors();
        selectCorrectColor();
        resetButton.textContent = "new colors";
        displayMessage.textContent = "";
        changeDisplayedSquares();
    });
}

//change the number of squares that are shown on the screen
function changeDisplayedSquares() {
    for(var i = 0; i < maxNumSquares; i++) {
        squares[i].style.display = "none";
        if(i < numSquares) {
            squares[i].style.display = "block";
        }
    }
}
