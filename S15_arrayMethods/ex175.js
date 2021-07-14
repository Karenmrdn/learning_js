"use strict";

const transport = ["Bus", "Car", "Bicycle", "Airplane"];

function findTheElement(inputArray, searchElement) {
  return inputArray.some((element) => element === searchElement);
}

console.log(findTheElement(transport, 'Car'));
console.log(findTheElement(transport, 'Phone'));
console.log(findTheElement(transport, 'Airplane'));
