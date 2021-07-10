"use strict";

/* !!! 'includes' won't work properly with object as well as 'every' and 'some' */

/* EXAMPLE 1 */
// const arr = [10, "abc", true, undefined, null, [1, 2], {}];

// console.log(arr.includes(10));
// console.log(arr.includes("abc"));
// console.log(arr.includes(true));
// console.log(arr.includes(undefined));
// console.log(arr.includes(null));
// console.log(arr.includes([1, 2]));
// console.log(arr.includes({}));

/* !!! TASK 1 */ /* ZHEST' */
// const tags = [
//   ["javascript", "es6"],
//   ["css", "flexbox"],
//   ["html", "web-browser"],
// ];

// const fruits = [
//   { name: "orange", quantity: 10 },
//   { name: "banana", quantity: 5 },
//   { name: "apple", quantity: 25 },
// ];

// const primitiveTypesArray = [25, "x", true, undefined, null];

// function checkIfElementsAreIncluded(searchElement, array) {
//   if (typeof searchElement !== "object") {
//     return array.includes(searchElement);
//   }

//   return array
//     .map((element) => JSON.stringify(element))
//     .includes(JSON.stringify(searchElement));
//   //   console.log(array.map((element) => JSON.stringify(element)));
// }

// console.log(checkIfElementsAreIncluded(["css", "flexbox"], tags)); // true
// console.log(checkIfElementsAreIncluded(["flexbox", "css"], tags)); // false
// console.log(
//   checkIfElementsAreIncluded({ name: "apple", quantity: 25 }, fruits)
// ); // true
// console.log(checkIfElementsAreIncluded({ name: "banana" }, fruits)); // false
// console.log(checkIfElementsAreIncluded(25, primitiveTypesArray));

/* TASK 2 */
const numbers = [123, 50, 27];

function pushIfUnique(inputArray, newElement) {
  if (inputArray.includes(newElement)) {
    console.log(`${newElement} is already in the array`);
  } else {
    inputArray.push(newElement);
  }
}

pushIfUnique(numbers, 50);
console.log(numbers);

pushIfUnique(numbers, 80);
console.log(numbers);

pushIfUnique(numbers, 80);
console.log(numbers);

pushIfUnique(numbers, 77);
console.log(numbers);
