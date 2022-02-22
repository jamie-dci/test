// Function to generate a random number between 0 and 255
const generateRandomColor = () => {
    // Generate random number between 0 and 255
    let rgbColor = Math.floor(Math.random() * 256);
    // Return the random number
    return rgbColor;
}

// Function to generate a random RGB color
const colorGenerator = () => {
    let red = generateRandomColor();
    let green = generateRandomColor();
    let blue = generateRandomColor();

    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
}

// Export the function as a DEFAULT export
// * You can only have one default export per file
export default colorGenerator;