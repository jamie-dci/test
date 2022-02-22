import colorGenerator from "./setup.js";

// Array variable containing the HTML "square" elements
// * This is a "named" export
export const squares = document.querySelectorAll(".square");

// Variable for the "color-display" span
export const colorDisplay = document.querySelector("#color-display");

// Create an array containing the 6 colors we will use as the box background colors
export const colorsArray = [
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator(),
    colorGenerator()
];

// Generate random number between 0 and 5
const randomIndex = Math.floor(Math.random() * 6);

// Choose a random color in the array to be the one the user has to guess
export const colorToGuess = colorsArray[randomIndex];