"use strict";

/* Variables will be declared, initialized and
assigned all together */

/* EXAMPLE 1. Order */
// Order matters in array destructuring
// let [a, b, c] = [5, 2, 7];
// // a = 5, b = 2, c = 7

// // Order doesn't matter in object destructuring
// let { x, y, z } = { x: 3, y: 8, z: 1 };
// // x = 3, y = 8, z = 1

// let { z, x, y } = { x: 2, y: 4, z: 6 };
// // x = 2, y = 4, z = 6

/* EXAMPLE 2. Reassignment */
// const arr = [1, 2, 3];

// let a, b, c;

// [a, b, c] = arr;

// console.log(a, b, c);

// const anotherArr = [4, 5, 6];

// [a, b, c] = anotherArr;

// console.log(a, b, c);

/* EXAMPLE 3. Default value */
// const arr = [1, 2];

// const [a, b, c, d = 4] = arr;

// console.log(a, b, c, d);

/* EXAMPLE 4. Skip element */
// const arr = [1, 2, 3, 4, 5];
// const [, , a, , b] = arr;
// console.log(a, b);

/* EXAMPLE 5. REST-operator */
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(a, b, c);

/* EXAMPLE 6. Creation of new array without mutation of original one */
// let arr = [1, 2, 3];
// const [, ...anotherArr] = arr;
// console.log("arr", arr); // not mutated
// console.log("anotherArr", anotherArr);

// [, ...arr] = arr;
// console.log("arr", arr); // mutated

/* EXAMPLE 7. Variable values swap */
// let x = 5;
// let y = 10;
// [x, y] = [y, x];
// console.log(x, y);

/* EXAMPLE 8. Destructuring in the function */
// const posts = [
//   ["Post 1", 10],
//   ["Post 2", 20],
// ];

// posts.forEach(([title, value]) => {
//   console.log(title, value);
// });

/* EXAMPLE 9. Nested array destructuring */
// const arr = [1, 2, [3, 4]];
// const [a, b, [c, d]] = arr;
// console.log(a, b, c, d);

/* TASK 1 */
// const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
//   console.log(minQty); // 8
//   console.log(maxQty); // 29
//   console.log(defaultQty); // 0
//   return maxQty - minQty; // returns 21
// };

// const qtyRange = [8, 29];

// processQuantities(qtyRange);

/* TASK 2 */
/*
Create a function "minMax" that will accept any quantity of the arguments.

This function should return array of two elements:
1. First element in the array is minimal value among all arguments
2. Second element in the array is maximal value among all arguments

Use destructuring to parse results of the function calls.
*/
/* MY FUNCTION */
// const minMax = (...args) => [Math.min(...args), Math.max(...args)];

/* AUTHOR'S FUNCTION */
const minMax = (...args) => [
  args.reduce((min, num) => (num < min ? num : min)),
  args.reduce((max, num) => (num > max ? num : max)),
];

let min, max;
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103

