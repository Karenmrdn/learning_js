"use strict";

/* let {num: newNum = 10} = {num: 5};
num - object property name (always first)
newNum - new variable name, 10 - it's default value */

/* EXAMPLE 1. Assignment */
// const obj = { a: 10, b: true };
// let a, b;
// ({ a, b } = obj); /* !!! We cannot do so without parentheses */
// console.log(a, b);

/* EXAMPLE 2. Non-object value destructuring */
// const val = null;
// const { a, b } = val || {};
// console.log(a, b);

/* EXAMPLE 3. Change order of the properties */
// const obj = { a: 10, b: true };
// const { b, a } = obj;
// console.log(a, b);
// /* Order won't change in object destructuring */

/* EXAMPLE 4. REST-operator in object destructuring */
// const obj = { a: 10, b: true, c: [], d: "abc", e: 20 };

// Object.prototype.newProp = 1;

// const { a, d, ...rest } = obj;
// console.log(a, d, rest);
// /* 'rest' won't contain prototype objects or methods,
// it will contain only rest props of own props of these object */

/* EXAMPLE 5. Non-existing props */
// const obj = { a: 10, b: true };

// const { a, b, c } = obj;
// console.log(a, b, c);

/* EXAMPLE 6. New variable names and default value */
// const obj = { a: 10, b: true };

// const { a: newA, b: newB, c: newC = "default C" } = obj;
// console.log(newA, newB, newC);
// // console.log(a, b); // ERROR. These variables are not defined

/* EXAMPLE 7. Nested object destructuring */
// const obj = {
//   a: 1,
//   b: 2,
//   nestedObj: { c: 3, d: 4 },
// };

// const {
//   a,
//   b,
//   nestedObj: { c, d },
// } = obj;

// console.log(a, b, c, d);

/* TASK 1 */
// /*
// Modify "personInfo" function to match console.log output at the end of the challenge.

// Object that is returned by "personInfo" function must contain only shorthand property names.
// */

// const personInfo = ({
//   name,
//   age,
//   location: { country, city },
//   friendsQty = 0,
//   recordCreatedAt = new Date().getFullYear(),
// }) => {
//   return {
//     name,
//     personAge: age,
//     origin: country,
//     homeCity: city,
//     friendsQty,
//     recordCreatedAt,
//   };
// };

// const person = {
//   name: "Alice",
//   age: 19,
//   location: {
//     country: "England",
//     city: "London",
//   },
// };

// console.log(personInfo(person));
// /*
//   {
//     name: "Alice",
//     personAge: 19,
//     origin: "England",
//     homeCity: "London",
//     friendsQty: 0,
//     recordCreatedAt: *current year*
//   }
//   */

/* TASK 2 */
// /*
// Create "processPosts" function that will return new array of posts.

// Notice that some property names in each post are modified and each postId is incremented by 1000.

// Original array of posts should not be mutated.
// */
// function processPosts(posts) {
//   return posts.map(
//     ({ postId, author: postAuthor, commentsQty: postCommentsQty = 0 }) => ({
//       postId: postId * 10,
//       postAuthor,
//       postCommentsQty,
//     })
//   );
// }

// const posts = [
//   {
//     postId: 234,
//     author: "robd",
//     commentsQty: 5,
//   },
//   {
//     postId: 823,
//     author: "sady",
//   },
//   {
//     postId: 161,
//     author: "merryl",
//     commentsQty: 8,
//   },
// ];

// console.log(...processPosts(posts));
// /*
//   [
//     {
//       postId: 1234,
//       postAuthor: "robd",
//       postCommentsQty: 5
//     },
//     {
//       postId: 1823,
//       postAuthor: "sady",
//       postCommentsQty: 0
//     },
//     {
//       postId: 1161,
//       postAuthor: "merryl",
//       postCommentsQty: 8
//     }
//   ]
//   */

// console.log(...posts); // original array of posts

/* TASK 3 */ /* I haven't done these task by myself */
/*
Use object destructuring with rest object properties to quickly remove specific properties from the object.

Ensure that variables that will be used for destructuring of the deleted properties will not be accessible after the destructuring operation.
*/
let person = {
  _id: "5ad8cefcc0971792dacb3f1f",
  index: 4,
  processed: false,
  cart: ["item1", "item2", "item3"],
  email: "slarsen@test.com",
  name: "Samantha Larsen",
  cartId: 435,
};

{
  let _id, processed, cart;

  ({ _id, processed, cart, ...person } = person);
}

console.log(person);
/*
  {
    index: 4, 
    email: "slarsen@test.com",
    name: "Samantha Larsen",
    cartId: 435
  }
  */
