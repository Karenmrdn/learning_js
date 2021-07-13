"use strict";

/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

let obj = {
  x: 5,
  y: 20,
  z: 3,
};

const mult = ({ x, y, z }) => x * y * z;

console.log(mult(obj));
// 300
