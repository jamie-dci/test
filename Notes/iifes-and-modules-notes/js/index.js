// Use an alias to import EVERYTHING from a file
import * as variables from "./variables.js";
import respondToGuess from "./game.js";

// Run a "for" loop 6 times
// Each time get a different square element from the "squares" array
// Then set the square's background-color to one of the colors in the "colorsArray"
for (let i = 0; i < variables.squares.length; i++) {
    variables.squares[i].style.backgroundColor = variables.colorsArray[i];
}

// Update the "color-display" span with this color
variables.colorDisplay.textContent = variables.colorToGuess;

// Set event listeners to listen for clicks on the squares
// When a square is clicked, the "respondToGuess" function will execute
variables.squares.forEach(square => {
    square.addEventListener("click", respondToGuess);
});