"use strict";

/* TASK 1 */
// const b = 2;
// let d = 15;

// function myFunc1(a) {
//   let b;
//   let d = 10;
//   myFunc2(b);
// }

// function myFunc2(a) {
//   let c = 5;
//   console.log(a, b, c, d);
// }

// myFunc1();  // undefined 2 5 15

/* TASK 2 */
// function myFunction(){
//   a = 2;
//   return a;
// }

// console.log(myFunction());  // ERROR cause of 'use strict'

/* TASK 3 */
setTimeout(function myFn() {
  console.log("Hello");
}, 2000);
myFn(); // ERROR