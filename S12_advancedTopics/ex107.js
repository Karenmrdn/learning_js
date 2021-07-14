"use strict";

/* CALL and APPLY */
// const person1 = {
//   city: "New York",
//   name: "Bob",
//   info: function (age) {
//     console.log(`${this.name} lives in ${this.city}. ${this.name} is ${age} years old`);
//   },
// };

// const person2 = {
//   city: "Paris",
//   name: "Alice",
// };

// person1.info(20);

// person1.info.call(person2, 30);
// person1.info.apply(person2, [35])

/* BIND */
// const obj = {
//   a: 10,
//   b: null,
// };

// function func(a, b) {
//   console.log(a + b);
//   console.log(this);
// }

// const func1 = func.bind(obj, 10, 3);
// func1();

// const func2 = func.bind(obj, 10);
// func2(3);

// const func3 = func.bind(obj);
// func3(10, 3);