// * Quick Callback Practice Exercise
// 1. Create a function below these instructions called "orderTakeaway" to simulate ordering a takeaway meal. 
// 2. First, the function should log the string: "Thank you for your order - we will prepare it and send it as soon as it is ready!" to the console.
// 3. Then after a delay of three seconds, the function should log the string: "Takeaway delivered!" to the console.
// 4. Next create a second function called "eatTakeaway".
// 5. The second function should print the line "I am eating the takeaway!" to the console.
// 6. Try to use the second function as a callback, so you only eat the takeaway AFTER it is delivered.
// 7. You can check if this has worked in the VS Code terminal (not the browser!) by using "node <filename>".

const orderTakeaway = callback => {
    console.log("Thank you for your order - we will prepare it and send it as soon as it is ready!");

    setTimeout(() => {
        console.log("Takeaway delivered!");
        setTimeout(() => {
            callback();
        }, 3000);
    }, 3000)
}

const eatTakeaway = () => {
    console.log("I am eating the takeaway!");
}

orderTakeaway(eatTakeaway);