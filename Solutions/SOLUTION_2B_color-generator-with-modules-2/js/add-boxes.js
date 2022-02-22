import { colorList, input } from "./variables.js";
import colorGenerator from "./color-generator.js";
import removeBox from "./remove-box.js";

// Add the number of new boxes to the page specified in the HTML input
// If the input has a non-number value, no new boxes will be added to the page
const addBoxes = () => {
    let numberOfBoxes; 
    
    // If the user inputs a number value to the input, this is the number of boxes to create
    // Else (if the user inputs a non-number value), create 0 boxes
    if (!isNaN(input.value)) {
        numberOfBoxes = input.value;
    } else {
        numberOfBoxes = 0;
    }

    // If the user entered a number in the input, create that number of boxes and add them to the HTML DOM
    for (let i = 0; i < numberOfBoxes; i++) {
        // Create a new ".color-box" div
        let newItem = document.createElement("div");
        let newColor = colorGenerator();

        newItem.classList.add("color-box");
        newItem.style.backgroundColor = newColor;

        newItem.textContent = `${newColor}`;

        // Create a new "X" span 
        const newSpan = document.createElement("span");
        newSpan.classList.add("delete");
        newSpan.textContent = "x";
        // Add an event listener to the span
        // When it is clicked, it will delete its parent box
        newSpan.addEventListener("click", removeBox);
        // Add the span as a child of the new ".color-box" div
        newItem.appendChild(newSpan);

        // Add the new ".color-box" div as a child of the ".colors" div
        colorList.appendChild(newItem);
    }
}

export default addBoxes;