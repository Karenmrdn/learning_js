"use strict";

/* CHALLENGE 5 - Ternary Operator

Change contents of the isNumber function
using ternary operator.
*/

function isNumber(a) {
  let result;
  typeof a === "number"
    ? (result = "That's number")
    : (result = "That's not a number");
  return result;
}

console.log(isNumber(10));
// That's number

console.log(isNumber("Hey there"));
// That's not a number

console.log(isNumber(true));
// That's not a number
