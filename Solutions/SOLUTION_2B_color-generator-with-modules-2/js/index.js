import { button } from "./variables.js";
import addBoxes from "./add-boxes.js";
import init from "./init.js";

// Add an event listener to listen for clicks on the "Add colors" button
// When the button is clicked, the "addColorBoxes" function will execute
button.addEventListener("click", addBoxes);

// Add 3 boxes to the page before load 
init();