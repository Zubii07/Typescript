/* In TypeScript, a tuple is a type of array with a fixed number of elements, where each element can have a specific type. Tuples allow you to define an array with a precise structure, unlike regular arrays where all elements must be of the same type.*/
// Declaring a tuple type with two elements: a string and a number
var person;
// Assigning values to the tuple
person = ["Alice", 30]; // Valid
// person = [30, "Alice"]; // Invalid, as the types are out of order
console.log(person[0]); // Outputs: "Alice"
console.log(person[1]); // Outputs: 30
// Example of Tuples in Real-world Usage
var coordinates = [40.7128, -74.0060];
// Or if you want to store information about an API response:
var response = [200, "OK"];
