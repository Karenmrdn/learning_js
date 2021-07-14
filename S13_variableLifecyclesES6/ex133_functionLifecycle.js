"use strict";

/* Function declaration - together declared, initialized and assigned(compilation)
Function expression - declared(compilation), together initialized and assigned(execution) */

/* EXAMPLE 1. FUNCTION DECLARATION */
console.log(sayHello);

sayHello();

function sayHello() {
  console.log("Hello");
}

sayHello();

/* EXAMPLE 2. FUNCTION EXPRESSION */
// console.log(sum(3, 4)); // ERROR: sum is not defined

const sum = function (a, b) {
  return a + b;
};

console.log(sum(3, 4));

/* Ex. 2. Var Function expression  */
// console.log(sum2(3, 4)); // ERROR: sum2 is not a function

var sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(3, 4));
