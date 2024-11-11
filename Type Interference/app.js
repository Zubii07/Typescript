/*In TypeScript, type inference means that the language can figure out the type of a variable or expression automatically without you needing to specify it. It makes your code simpler because TypeScript often "guesses" the type based on the value or context. Here’s how it works: */
/*1-Variable Inference: When you create a variable with a value, TypeScript will assume its type based on that value. */
var nam = "John"; // TypeScript knows `name` is a `string`
/* 2-Function Return Type Inference: TypeScript can figure out what type a function returns based on what the function actually returns.*/
function add(x, y) {
    return x + y; // TypeScript sees this returns a `number`
}
/* 3-Contextual Typing: When you use a variable in a specific context, like a loop or callback, TypeScript can often guess its type from the situation.*/
var numbers = [1, 2, 3];
numbers.forEach(function (num) { return console.log(num); }); // `num` is known to be a `number`
/*4-Mixed Types in Arrays: If an array has different types, TypeScript will combine them into a "union" type.*/
var mixedArray = [1, "hello"]; // TypeScript infers `(string | number)[]`
