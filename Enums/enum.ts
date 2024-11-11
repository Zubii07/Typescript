/* In TypeScript, an enum (short for "enumeration") is a way to define a set of named constants, making it easier to manage related values in a readable and structured way. Enums are useful when you have a group of related values, such as status codes, days of the week, directions, etc.*/

enum role{
    admin,manager,staff
}
console.warn(role.admin);

/* 1. Numeric Enums
In a numeric enum, each member is assigned a number, starting from 0 by default. You can set the starting value to a different number, and subsequent values will increment from there.
enum Direction {
    North,  // 0
    East,   // 1
    South,  // 2
    West    // 3
}

console.log(Direction.North); // Output: 0
console.log(Direction.West);  // Output: 3 */



/* 2. String Enums
In a string enum, each member has to be initialized with a string value. Unlike numeric enums, string enums don’t auto-increment; you must specify the value for each member.*/

enum Direction {
    North = "NORTH",
    East = "EAST",
    South = "SOUTH",
    West = "WEST"
}

console.log(Direction.North); // Output: "NORTH"
console.log(Direction.West);  // Output: "WEST"

