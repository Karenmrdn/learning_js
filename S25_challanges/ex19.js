"use strict";

/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

Object.prototype.e = 9999;

// Write code here
const sumObjectValues = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
};

console.log(sumObjectValues(nums));
//42
