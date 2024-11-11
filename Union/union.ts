/*In TypeScript, a union is a way to define a variable that can hold multiple types. Using union types, you can specify that a variable, parameter, or return value can be one of several different types, providing flexibility while keeping type safety. 


Declaring Union Types
To declare a union type, use the pipe (|) symbol to separate the different types.eg */

let value: string | number;
value = "Hello"; // valid
value = 42;      // also valid
// value = true; // invalid, as boolean is not allowed



//Example: Function with Union Types
function printId(id: string | number) {
    console.log("ID:", id);
}

printId("ABC123"); // Output: ID: ABC123
printId(789);      // Output: ID: 789


// Union Types with Arrays

let data: (string | number)[] = ["Alice", 30, "Bob", 25];






