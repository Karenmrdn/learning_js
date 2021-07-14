"use strict";

/* Find returns only one element or undefined.
If the 'find' method finds required element, then it will
return this element immediately and break the process. If
'find' won't find required element, it will return undefined */

/* EXAMPLE 1 */
// const arr = [10, [], {}, "abc", true, 15];

// const result = arr.find((element) => {
//   console.log(element);
//   return typeof element === "string";
// });

/* TASK 1 */
const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

const findSinglePost = (id, postsArray) => {
  return postsArray.find((elem) => elem.postId === id);
};

console.log(findSinglePost(5131, posts));
console.log(findSinglePost(5, posts));
