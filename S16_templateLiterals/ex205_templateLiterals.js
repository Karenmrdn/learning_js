"use strict";

/* EXAMPLE 1 */
// const personName = "Sophia";
// const personAge = 20;

// const checkAge = (strings, personName, personAge) => {
//   console.log(strings, personName, personAge);
//   return personAge >= 18
//     ? `${personName} is adult`
//     : `${personName} is underage`;
// };

// console.log(checkAge`${personName} is ${personAge} years old`);

/* TASK 1 */
// function templateLiteral(num) {
//   return `Number is  ${num}.
// This number is ${num >= 10 ? "greater or equal" : "less"} than 10.
// Square root of this number is ${Math.pow(num, 0.5)}`;
// }

// const myNumber = 9;
// console.log(templateLiteral(myNumber));

// const myAnotherNumber = 25;
// console.log(templateLiteral(myAnotherNumber));

/* TASK 2 */ /* SHOCK! I DID THAT IN 5 MINUTES */
/* Create a function "taggedTemplate" that will return a regular string (not template literal).
Use appropriate method of the function definition and needed amount of arguments.
Use all knowledge gained in the previous sections.
IMPORTANT: Input template literal may have *ANY* quantity of the expressions. 
NOTE: If you are stuck - hints down below!
*/
/* MY SOLUTION */
function taggedTemplate(strings, ...variables) {
  let result = "";

  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + (variables[i] ?? "");
  }

  return result;
}

/* AUTHOR'S  SOLUTION */
// function taggedTemplate(arrayOfStrings) {
//   const vals = Array.from(arguments).slice(1);
//   // console.log(arrayOfStrings);
//   // console.log(vals);
//   return arrayOfStrings.reduce(
//     (concatStr, str, index) =>
//       concatStr + str + (vals[index] !== undefined ? vals[index] : ""),
//     ""
//   );
// }

// FIRST test case
const a = 10;
const b = 5;
const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${
  a + b
}`;

console.log(sum); /* Sum of the two variables a(10) and b(5) is 15 */

// SECOND test case
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

console.log(friendsInfo); /* Alice and Bob are friends! */
