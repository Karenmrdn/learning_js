"use strict";

/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

const sum = (...args) => args.reduce((sum, num) => sum + num);

console.log(sum(1, 3)); // 4

console.log(sum(10, 20, 5)); // 35

console.log(sum(2, 5, 80, 1, 10, 12)); // 110
