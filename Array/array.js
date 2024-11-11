/*  You can create an array that only holds a specific type of data, like numbers or strings, which helps catch errors in your code. */
// 1. Declaring an Array
var numbers = [1, 2, 3, 4]; // An array of numbers
var names = ["Alice", "Bob", "Charlie"]; // An array of strings
// 2. Adding Elements
numbers.push(5); // Adds 5 to the end of the array
// 3. Accessing Elements
console.log(numbers[0]); // Output: 1
// 4. Looping Through an Array
// You can use a for loop, for...of loop, or forEach:
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    console.log(number);
}
numbers.forEach(function (number) { return console.log(number); });
// 5. Mixed Arrays
//If you want an array that holds multiple types (like numbers and strings), you can use a union type:
var mixedArray = [1, "Alice", 2, "Bob"];
var people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
var students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 }
];
students.push({ name: "Charlie", grade: 92 });
students.forEach(function (student) {
    console.log("".concat(student.name, " has a grade of ").concat(student.grade));
});
