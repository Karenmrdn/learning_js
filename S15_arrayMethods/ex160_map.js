"use strict";

/* We do not mutate input array in map method */

/* EXAMPLE 1 */
// const numbers = [1, 3, 4, 5];

// const squaredNumbers = numbers.map((element, index) => {
//   console.log(`Element at the index ${index} is ${element}`);
//   return element ** 2;
// });

// console.log(squaredNumbers);
// console.log(numbers);

/* TASK 1 */
const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
];

const posts = postsJSON.map((post) => JSON.parse(post));

const posts2 = postsJSON.map(JSON.parse);
/* We can use this short variant only with functions that
expect the parameters we need. In these case JSON.parse
expects two parameters: object and function. We always
pass element and index using map method, so JSON.parse
will ignore second parameter (index) because it's not a function */

console.log(postsJSON);
console.log(posts);
console.log(posts2);
