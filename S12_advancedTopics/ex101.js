"use strict";

/* TASK 1 */
// const arr = [];

// arr.push(1);
// arr.push(null);
// arr.push('valueString');
// arr.push(true);

// arr.pop();

// console.log(arr);

/* TASK 2 */
// const arr = [];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true

// const obj = {};
// console.log(obj instanceof Array); // false
// console.log(obj instanceof Object); // true

// const str = "";
// console.log(str instanceof String); // false

// const number = 5;
// console.log(number instanceof Number); // false
// /* !!! CONCLUSION: we need to use typeof for primitives
// and instanceof for objects */

/* TASK 3 */
// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 2, 3);
// console.log(arr1);
// console.log(arr2);
// /* Looks the same in console */

// const str1 = "abc";
// const str2 = new String("abc");
// console.log(str1); // string value
// console.log(str2); // String object
// /* Does not look the same in console */

// console.log(str1 instanceof String); // false
// console.log(str1 instanceof Object); // false
// console.log(typeof str1); // string
// console.log(str2 instanceof String); // true
// console.log(str2 instanceof Object); // true
// console.log(typeof str2); // object

// console.log(str2.toUpperCase()); /* We are calling method of it's prototype */
// console.log(str1.toUpperCase()); /* JS clever enough to convert str1 to String object and then use String prototype method */

/* TASK 4 */
let obj1 = { a: 10, b: true };
let obj2 = new Object({ a: 10, b: true });
console.log(obj1);
console.log(obj2);
/* same result in console */

let func1 = function (a) {
  console.log(a);
};
console.dir(func1);
console.log(func1("Hello"));
console.log(func1 instanceof Function); // true
console.log(func1 instanceof Object); // true

let func2 = new Function("a", "console.log(a);");
console.log(func2("Hello"));
console.dir(func2);
console.log(func2 instanceof Function); // true
console.log(func2 instanceof Object); // true