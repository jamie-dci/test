# Random Color Generator

This is an exercise to practice several of the things you have learned so far during this module.
## Instructions:

Create a color generator webpage. The page should generate a certain number of "color boxes" with random background colors.. 
 1. Create a function to generate a random RGB color code
 2. Create a function to add a new "color box" to your DOM. The function should: 
 >- create a new element
 >- give it at least one `class` (you can use this with CSS to create default styles)
 >- set its `backgroundColor` to a random color, using the function in part (1)
 >- set its `textContent` to the random color you generated. **Note:** ignore that in the example below HEX colors are used - we will be using RGB colors!  
 >- and finally, add it to the DOM as a child element of another element.
 3. Your function should also create a `span` with a `textContent` of "X", which can be used later to delete the "color box" you just created. You can add the `span` as a child of the "color-box", and use CSS styles to position it within its parent.
 4. Next, create a `button` and an `input` inside the `div` with class "input-container". When the `button` is clicked, it will use the function you just made to create the number of color boxes that is the value of the `input`.
 5. Create a new function to handle the **removing** of a color box, which takes the **event object** as an argument. You can use the event object to find out which `span` the user clicked on, which will help you to remove its parent element from the DOM. **Hint:** remember that you can use JS to delete the **closest** element to the one that was clicked - look back over your notes if you need a reminder of how to do this!
 6. Add event listeners to listen for when you (1) click to delete a color box, and (2) click to add new color boxes to the page.
 7. Test your page, to make sure all the previous code is working as expected. 
 8. **Bonus:** Create and call a function called `init()` that generates 3 color boxes when your page first loads.
 9. **Bonus:** If you have time, try to restructure your JavaScript code into **modules**!


**Example once your program is running properly:**

 
 ![preview](./demo.gif)