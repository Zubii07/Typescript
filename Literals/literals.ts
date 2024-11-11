/*
In TypeScript, literals refer to specific values that are directly written into the code. These values can be of any data type, such as strings, numbers, booleans, etc. TypeScript has special literal types that allow you to define values more strictly than just using the general data types. */

// String Literal Types:
let color: "red" | "blue" | "green";  // Only these 3 strings are allowed
color = "blue";  // Correct
// color = "yellow";   Error: Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'.


// Numeric Literal Types:
let num: 5 | 10 | 15;  // Only these 3 numbers are allowed
num = 10;  // Correct
// num = 20;   Error: Type '20' is not assignable to type '5 | 10 | 15'.

// Boolean Literal Types:
let isActive: true;  // Only the value `true` is allowed
// isActive = false;  // Error: Type 'false' is not assignable to type 'true'.


