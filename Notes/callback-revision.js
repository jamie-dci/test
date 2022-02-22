// * CALLBACK REVISION

// ? What is a callback function?

// A callback function is a function passed into *another* function as an argument.

const callbackFunction = () => {};
const myFunction = (callback) => {};
// callbackFunction is here being used as an argument for myFunction
myFunction(callbackFunction);

// When we do this, we can execute the callback function AFTER the first function has finished executing its logic.
// ? A way to remember this idea:
// * Like when you ask someone to find for you (e.g. in a phone call), and they say they will CALL BACK when they find what you're looking for.

// A function which accepts another function as an argument is called a "higher-order" function.
// The higher-order or "caller" function contains the logic for when the callback function gets executed.

// ==================================================

// ? Why do we need callback functions?

const getInformation = () => {
    console.log("1. I don't have the information yet - I will go and get it from the server.");
    setTimeout(() => {
        console.log("2. I have now got the information you asked for.");
    }, 2000)    // 2 second delay
}

const useInformation = () => {
    console.log("3. I am now using the information I got from the server.");
}

// getInformation();
// useInformation();

// In the above example, the information only came back AFTER we tried to use it!
// This could cause a real problem, e.g. if we are waiting for data from a server...

// ? What should happen instead?

// 1. Call getInformation().
// 2. Wait for getInformation() to finish doing everything it needs to.
// 3. Call useInformation().
// * We can do this by passing the second function to the first function as a callback!

// * Rewriting the above functions:

const getInformationWithCallback = callback => {
    console.log("1. I don't have the information yet - I will go and get it from the server.");
    // Simulate a delay using setTimeout()
    setTimeout(() => {
        console.log("2. I have now got the information you asked for.");
        callback();
    }, 2000)    // 2 second delay
}

const useInformationWithCallback = () => {
    console.log("3. I am now using the information I got from the server.");
}

// Higher-order function / "caller" function
//            ^                 Callback function
//            ^                         ^
getInformationWithCallback(useInformationWithCallback);

// * Pretend workflow:
// 1. Ask the server for some information
// 2. Server takes 2 seconds to respond with the information
// 3. We receive the data, and only then call the callback function to use the data.