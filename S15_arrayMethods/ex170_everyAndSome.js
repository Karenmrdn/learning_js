"use strict";

/* !!! Both 'every' and 'some' methods can work only with
arrays of primitive types */

/* 'every' returns true when callback function
returns truthy value for EVERY element of an input array,
and it returns false if any of the callback functions returned false */

/* 'some' returns true when callback function
returns truthy value for ANY element of an input array,
and it returns false if all of the callback functions returned false */

/* EXAMPLE 1 */
// const numbers = [1, -2, 3, 4, 5];

// const isPositiveNumber = (element) =>
//   typeof element === "number" && element > 0;

// const positiveCheckEvery = numbers.every(isPositiveNumber);
// const positiveCheckSome = numbers.some(isPositiveNumber);

// console.log(positiveCheckEvery);
// console.log(positiveCheckSome);

/* EXAMPLE 2 */
// const items = [
//   { name: "PC", quantity: 10 },
//   { name: "Phone", quantity: 3 },
//   { name: "Headphones", quantity: 15 },
// ];

// if (items.every((item) => item.quantity > 5)) {
//   console.log("All the items are available");
// } else if (
//   items.every((item) => item.quantity > 0) &&
//   items.some((item) => item.quantity > 5)
// ) {
//   console.log("Some items may be sold soon");
// } else if (items.some((item) => item.quantity === 0)) {
//   console.log("Some items are already sold out");
// }

/* TASK 1 */
const a = [5, "abc", 10, 1];
const b = [5, 10, 14, 16, 16, 19, 22];
const c = [150, 132, 111, 99, 87, 87];
const d = [1, 22, 3, 100, 5];

const arrayCheck = (inputArray) => {
  if (inputArray.some((elem) => typeof elem !== "number")) {
    return "Some elements are not numbers";
  } else if (
    inputArray.every((elem, index, array) =>
      index > 0 ? elem >= array[index - 1] : true
    )
  ) {
    return "Array is sorted in ascending order";
  } else if (
    inputArray.every((elem, index, array) =>
      index > 0 ? elem <= array[index - 1] : true
    )
  ) {
    return "Array is sorted in descending order";
  } else {
    return "Array is not sorted";
  }
};

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));
console.log(arrayCheck(d));
