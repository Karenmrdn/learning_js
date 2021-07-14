"use strict";

/* !!! Arrow function don't have own 'this'.
!!! 'this' in arrow functions is always statically 
defined by the surrounding lexical scope */

/* EXAMPLE 1 */
// const num1 = {
//   value: 100,
//   info: function info() {
//     return this.value;
//   },
// };
// console.log(num1.info());   // 100

// const num2 = {
//   value: 100,
//   info: () => {
//     return this.value;
//   },
// };
// console.log(num2.info());   // undefined
/* !!! Arrow functions don't have own 'this', so
in current case 'this' refers to outer scope and 
outer scope for num2 is Window */

/* EXAMPLE 2 */
// const num = {
//   value: 100,
//   //   info: function info() {
//   //     return this.value;   // still undefined in 'strict mode'
//   //   },
//   info: () => {
//     return this.value; // newNum object
//   },
// };

// const newNum = { value: 5 };

// console.log(num.info.call(newNum));
/* We cannot use bind, call and apply with arrow functions
because arrow functions don't have own this */

/* EXAMPLE 3 */
const str = {
  value: "Delayed greeting",
  greet1: function () {
    setTimeout(function () {
      console.log(this.value);  // undefined
    }, 1000); /* Regular callback function will always lose 'this' here */
  },
  greet2: function () {
    setTimeout(() => {
      console.log(this.value);  // Delayed greeting
    }, 1000); /* Arrow callback function will use outer 'this' ('this' of str) */
  },
};
str.greet1();
str.greet2();
