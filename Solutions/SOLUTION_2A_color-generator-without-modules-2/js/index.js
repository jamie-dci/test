// Variables for the HTML elements we will be targeting
const colorList = document.querySelector("#colors");
const input = document.querySelector("#amount")
const button = document.querySelector("#create-boxes");

// Generate a random number between 0 and 255
const getRandomColorValue = () => {
    // Generate random number between 0 and 255
    let rgbColor = Math.floor(Math.random() * 256);
    // Return the random number
    return rgbColor;
}

// Generate a random RGB color
const colorGenerator = () => {    
    // Generate random R, G and B values
    let red = getRandomColorValue();
    let green = getRandomColorValue();
    let blue = getRandomColorValue();

    // Create and return the RGB string
    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
}

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

// Remove a ".color-box" div from the HTML DOM when its "X" span is clicked
const removeBox = event => {
    // When a span is clicked, find the "closest" element with the ".color-box" class
    // This will always be the parent div of the span which was clicked
    const item = event.target.closest(".color-box");
    // Remove the found ".color-box" div as a child of the ".colors" div
    colorList.removeChild(item);
}

// Create 3 boxes and add them to the page before load
const init = () => {
    addBoxes();
}

// Add an event listener to listen for clicks on the "Add colors" button
// When the button is clicked, the "addBoxes" function will execute
button.addEventListener("click", addBoxes);

// Add 3 boxes to the page before load 
init();