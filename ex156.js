"use strict";

/* forEach always returns undefined */

/* TASK 1 */
const myCities = ["London", "New York", "Singapore"];

const arrayInfo = (element, index) =>
  `${element} is located at the index ${index} in the myCities array`;

myCities.forEach((element, index) => console.log(arrayInfo(element, index)));

console.log("");
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i], i));
}
