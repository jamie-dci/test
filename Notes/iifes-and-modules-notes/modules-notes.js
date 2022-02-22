// * JAVASCRIPT MODULES

// We do not usually want all our JS code to be in the same file (e.g. "index.js").
// If our files are too long, it can take longer to make changes, or bug fix.
// It can be quicker (and less annoying!) if we know where to look...

// * Modules can help with this - we put different "parts" of our project into different files.
// E.g. A car is made of different "parts" which all work together, to make the whole machine function.
// * A key idea is that each file should have a single purpose - don't mix parts of your code which do different things!

// ================================================================

// * Importing and Exporting

// 1. When we put some functionality in a separate file, it is important to be able to EXPORT it.
// This means that the functionality is made available to other files, so they can use it.

// 2. The way the other file can use the exported functionality is to IMPORT it.
// * Like a country, Ireland EXPORTS things it makes (e.g. whiskey)...
// * ... and IMPORTS things it needs (e.g. wine).
// We can export anything from a file - functions, classes, variables etc.

// ===============================================================

// * 1. How To Add Modules To Our Project

// A. Add "type='module'" to the <script> tag.
<script src="file.js" type="module"></script>

// * 2. How to export something from a file:

// A. Named export:
export const myVariable = "Hello";

// B- Default export:
const myVariable2 = "world";
export default myVariable2;

// * 3. How to import something from another file:

// A. Named exports:
import { myVariable } from "file.js";

// B. Default export:
import myVariable2 from "file.js";

// C. Import all exports from a module using an alias
import * as imports from "file.js"