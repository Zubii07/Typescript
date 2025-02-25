/*  You can create an array that only holds a specific type of data, like numbers or strings, which helps catch errors in your code. */

// 1. Declaring  Array
   let numbers: number[] = [1, 2, 3, 4]; // An array of numbers
   let names: string[] = ["Alice", "Bob", "Charlie"]; // An array of strings

// 2. Adding Elements
   numbers.push(5); // Adds 5 to the end of the array

// 3. Accessing Elements
   console.log(numbers[0]); // Output: 1

// 4. Looping Through an Array
   // You can use a for loop, for...of loop, or forEach:
    for (let number of numbers) {
       console.log(number);
}

numbers.forEach((number) => console.log(number));

// 5. Mixed Arrays
    //If you want an array that holds multiple types (like numbers and strings), you can use a union type:
    let mixedArray: (number | string)[] = [1, "Alice", 2, "Bob"];

// 6. Array of Objects
type Person = {
    name: string;
    age: number;
};

let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];



// Examples:
type Student = {
    name: string;
    grade: number;
};

let students: Student[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 }
];

students.push({ name: "Charlie", grade: 92 });

students.forEach((student) => {
    console.log(`${student.name} has a grade of ${student.grade}`);
});




   
   


 
