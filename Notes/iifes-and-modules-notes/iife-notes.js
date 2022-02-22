// * Immediately-Invoked Function Expressions (IIFEs)

// We have already seen how to use ES6 modules to split code up into different "units".
// This is useful for efficient organization, and to keep the code in each module private.
// If you need to use some functionality from one of your modules, you can "export" it, and "import" it where it is needed.
// Before ES6, a popular way to do this was through IIFEs

// ? 1. What is an IIFE?

// An IIFE is an "Immediately-Invoked Function Expression" - "a function which is invoked (called) immediately".
// An IIFE is an anonymous function which is both created and called at the same time.
// This means you cannot call it again later.
// This isn't really a "module" pattern, in the modern, ES6 sense...
// ... but what it does is act as "enclosure pattern" - designed to keep code private, away from the rest of the program.

// ? 2. Why use an IIFE before ES6?

// Before ES6, JS had only GLOBAL and FUNCTION scope.
// This means that any variable or function declared outside a function would have GLOBAL scope
//  - It could be seen and CHANGED from anywhere in your program!
// This would mean that a lot of things would have global scope which didn't need it.
// This is known as "polluting the global scope".

// In ES5, you could get a problem by adding several <script> tags linked to different JS file:

// * In a HTML doc:
// * Here, file2 would have access to everything inside file1!
{/* <script src="file1.js"></script>
<script src="file2.js"></script> */}

// * Problem: if you declare a variable or function in one file, another file could overwrite is accidentally!

// ============================================================

// ? 3. How could we use an IIFE in ES5 to solve this problem?

// An IIFE could solve this problem!
// It is a single function which wraps the content of a file:

// * Example 1: file.js

// 1. Create an anonymous function
// 2. Wrap it with parentheses ()
// 3. Call the function

// * Example 1: Syntax
(function() {
    // Contents...
})();

// * Example 2: With file contents
// Start file.js =============
(function() {
    function sayHello() {
        console.log("Hello!");
    }

    var myName = "Jamie";
    console.log(myName);
    sayHello();
})();
// End file.js =============

// ? What is the logic behind using an IIFE in this way?

// We create and call a function AT THE SAME TIME containing all the logic for file.js
// * By being inside a function, the contents of the whole file have FUNCTION scope, not GLOBAL scope!
// These contents now cannot be accessed from anywhere else in the program - they do not "pullute the global scope".

// ? Why use an anonymous function?

// Because it is then not possible to refer to (or find) that function from anywhere else inside our program.

// * To sum up: this pattern "mirrors" (to an extent) the idea of ES6 modules with private content.

// * It is also possible to write IIFEs using ES6 "arrow" functions:
// However, this is less common:
//  - ES6 added several improvements to avoid polluting the global scope
//  - Especially the ES6 "Modules" syntax, which makes modulaizing our projects simple and modern!

// IIFE syntax using ES6 "arrow" function
(() => {
    // Content of a file
})();