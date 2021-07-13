"use strict";

/* TASK 1 */
// class Product {
//   constructor(props) {
//     this.price = props.price;
//   }

//   priceInfo() {
//     console.log(`Price of the product is ${this.price}`);
//   }
// }

// class ElectricDevice extends Product {
//   constructor(props) {
//     super(props);
//     this.energyEfficiencyClass = props.energyEfficiencyClass;
//   }

//   energyInfo() {
//     console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
//   }
// }

// class TV extends ElectricDevice {
//   constructor(props) {
//     super(props);
//     this.model = props.model;
//     this.diagonal = props.diagonal;
//   }
// }

// const propsForMyTv = {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
// };

// const myTV = new TV(propsForMyTv);

// /**
//  * VERIFICATION
//  */
// console.log(myTV);
// /* {
//     model: "A1620",
//     price: 1200,
//     energyEfficiencyClass: "A+",
//     diagonal: 42,
//     __proto__: ...
//   } */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

// myTV.priceInfo(); // Price of the product is 1200

// console.log(myTV instanceof TV); // true
// console.log(myTV instanceof ElectricDevice); // true
// console.log(myTV instanceof Product); // true
// console.log(myTV instanceof Object); // true

/* TASK 2 */
/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */
// class ExtendArray extends Array {
//   sum() {
//     return this.reduce((sum, el) => sum + el);
//   }

//   filterOnlyNumbers() {
//     return this.filter((el) => typeof el === "number");
//   }
// }

// const extendedArrayInstance = new ExtendArray(5, 6, 1);
// console.log(extendedArrayInstance.sum());

// const extendedArrayInstance2 = new ExtendArray(
//   1,
//   true,
//   false,
//   [],
//   17,
//   22,
//   0,
//   null
// );
// console.log(extendedArrayInstance2.filterOnlyNumbers());

/* EXAMPLE 3 */
/**
 * CHALLENGE 7-5: TASK
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "push" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "push"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "push" instead of "customPush"?
 * Try this.
 */
class CustomArray extends Array {
  push(newElement) {
    this[this.length] = newElement;
    console.log(`New element ${newElement} was just added to the array`);
    return this;
  }
}

const customArrayInstance = new CustomArray(2, 5, 3);

customArrayInstance.push(8);

console.log(customArrayInstance);
// console.log(customArrayInstance.length);
