import { colorToGuess } from "./variables.js";

// Check if the background color of the box the user clicked is the same as the color they need to guess
// Respond with an alert, whether they are correct or incorrect
const respondToGuess = event => {
    if (event.target.style.backgroundColor == colorToGuess) {
        alert("Success!");
    } else {
        alert("Sorry, try again!");
    }
}

// Default export
export default respondToGuess;