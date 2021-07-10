"use strict";

/* We cannot use 'arguments' with arrow functions */

function sum() {
  console.log(arguments);
  console.log(Array.isArray(arguments));

  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);
  console.log(Array.isArray(argumentsArray));
}
sum(1, 2, 3);

/* We can use rest operator instead of 'arguments' and it is 
even better solution because we will immediately get an array */
const sum2 = (...argumentsRest) => {
  console.log(argumentsRest);
  console.log(Array.isArray(argumentsRest));
  
  console.log(arguments); // Error: arguments is not defined
};
sum2(1, 2);
