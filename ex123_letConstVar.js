"use strict";

/* VAR - declared and initialized(compilation), assigned(execution) 
LET - declared(compilation), initialized and assigned(execution)
CONST - declared(compilation), together initialized and assigned(execution) */

/* TASK 1 */
const numbers1 = [23, 87, 110, 11, 20, 5, 34];
const numbers2 = [11, 21, 31];

const onlyOddNumbers = function (arr) {
  const oddNumbers = [];
  let evenNumbersQty = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    arr[i] % 2 ? oddNumbers.push(arr[i]) : evenNumbersQty++;
  }

  if (evenNumbersQty === 0) {
    let info = "Array contains only odd numbers";
    console.log(info);
  } else {
    let info = "There are " + evenNumbersQty + " even numbers";
    console.log(info);
  }

  return {
    oddNumbers,
    evenNumbersQty,
  };
};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));


