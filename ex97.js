"use strict";

/* TASK 1 */
// const myObj = {
//   key1: true,
//   key5: 10,
//   key3: "abc",
//   key4: null,
//   key10: NaN,
// };

// for (let key in myObj) {
//   if (key === "key1" || key === "key3") {
//     console.log(myObj[key]);
//   }
// }

/* TASK 2 */
// const numbers = [2355, 7235, 8135, 1726, 2561, 8351];
// let generatedNumber;

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function isUnique(number) {
//   let result;
//   numbers.includes(number) ? (result = false) : (result = true);
//   return result;
// }

// do {
//   generatedNumber = getRandomInt(1000, 9999);
//   console.log("New randomly generated number is " + generatedNumber);
// } while (!isUnique(generatedNumber));

// numbers.push(generatedNumber);
// console.log("Here is the final array " + numbers);

/* TASK 3 */
// const person = {
//   name: "Mike",
//   age: 30,
//   city: "London",
// };

// Object.prototype.country = "England";

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

/* TASK 4 */
// function checkIfArrayIsEmpty(array) {
//   return array.length ? "Array is not empty" : "Array is empty";
// }
// console.log(checkIfArrayIsEmpty([1, 2]));
// console.log(checkIfArrayIsEmpty([]));
