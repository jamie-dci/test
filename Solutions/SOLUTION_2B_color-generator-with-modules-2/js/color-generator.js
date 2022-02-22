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

export default colorGenerator;