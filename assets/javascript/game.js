// Variables
// ==========================================================================
var letter = "x";

// We start the game with 0 wins.
var wins = 0;

// We start the game with 0 losses.
var losses = 0;

// Provide fewer guesses to make it more difficult.
var guessesLeft = 13;

var guessesSoFar = [];


// Functions
// ==============================================================================

function displayWins() {
  // document.write("Wins: " + wins);
  var winsString = document.getElementById("wins");
  winsString.innerHTML = "Wins: " + wins;
  }

function displayLosses() {
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
  }

function displayGuessesLeft() {
  // document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

  var guessesLeftString = document.getElementById("guessesLeft");
  guessesLeftString.innerHTML = "Guesses left: " + guessesLeft;
}


// Add guessed letter to the array
// function trackGuessesSoFar() {
//     guessesSoFar.push(guess);
// }

function displayGuessesSoFar() {
    document.querySelector("#alreadyGuessed").innerHTML = "Guesses so Far: " + guessesSoFar;
}

document.onkeyup = function(event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    // alert("The user pressed: " + guess);

    if (guess === "x") {
        wins++;
        displayWins();

    }

    else {
        displayGuessesLeft();
        // Add guessed letter to the array
        guessesSoFar.push(guess);

        guessesLeft--;
        
        displayGuessesSoFar();
    }
};


// Main Process
// ==============================================================================

    // console.log("This is from the game.js file");

    displayWins();

    displayLosses();

    displayGuessesLeft();

    displayGuessesSoFar();

    // getInput();