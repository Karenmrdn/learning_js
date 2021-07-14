const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

/* MY SOLUTION */
// const checkIfArraysAreEqual = (a, b) => {
//   if (a.length !== b.length) {
//     return false;
//   }

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }

//   return true;
// };

/* AUTHOR'S SOLUTION */
const checkIfArraysAreEqual = (arr1, arr2) =>
  arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

console.log(a === b);
console.log("");
console.log(checkIfArraysAreEqual(a, b));
console.log(checkIfArraysAreEqual(a, c));
console.log(checkIfArraysAreEqual(a, d));
