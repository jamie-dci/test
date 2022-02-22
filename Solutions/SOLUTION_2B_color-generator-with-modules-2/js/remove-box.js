import { colorList } from "./variables.js";

// Remove a ".color-box" div from the HTML DOM when its "X" span is clicked
const removeBox = event => {
    // When a span is clicked, find the "closest" element with the ".color-box" class
    // This will always be the parent div of the span which was clicked
    const item = event.target.closest(".color-box");
    // Remove the found ".color-box" div as a child of the ".colors" div
    colorList.removeChild(item);
}

export default removeBox;