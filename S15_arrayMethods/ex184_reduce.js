"use strict";

/* 'reduce' always returns a single value (it can be number, object,
array etc.) */

/* If we won't pass the second parameter (default accumulator 
value) to the 'reduce', we will get only 3 iterations instead of 4,
because first number value will be set as the default accumulator value */

/* EXAMPLE 1 */
// const numbers = [5, 10, 3, 15];

// const sum = (inputArray) =>
//   inputArray.reduce((accumulator, number) => {
//     console.log(`accumulator ${accumulator}, number ${number}`);
//     return accumulator + number;
//   }, 0);

// console.log(sum(numbers));

/* EXAMPLE 2 */
// const persons = [
//   { name: "Veronica", age: 25 },
//   { name: "John", age: 21 },
//   { name: "Mike", age: 27 },
// ];

// const createArrayOfPersonNames = (arrayOfPersons) =>
//   arrayOfPersons.reduce((names, person) => {
//     names.push(person.name);
//     return names;
//   }, []);
// /* If we won't pass the second parameter as a array,
// we will get an error, because we cannot use push on object */

// console.log(createArrayOfPersonNames(persons));

/* EXAMPLE 3 */
// const fruits = ["banana", "orange", "apple", "apple", "orange", "mango"];

// const returnUniqueArray = (inputArray) =>
//   inputArray.reduce((uniqueElements, fruit) => {
//     if (!uniqueElements.includes(fruit)) {
//       uniqueElements.push(fruit);
//     }
//     return uniqueElements;
//   }, []);

// console.log(returnUniqueArray(fruits));

/* TASK 1 */ /* SHOCK BUT I DID IT BY MYSELF */
/* const posts = [
  { title: "Some title", postId: 3421, comments: 25 },
  { title: "New title", postId: 8364, comments: 3 },
  { title: "Moo", postId: 5421, comments: 12 },
];

const getPopularPostsIds = (posts, minimalCommentsQty) =>
  posts.reduce((postIds, post) => {
    if (post.comments >= minimalCommentsQty) {
      postIds.push(post.postId);
    }
    return postIds;
  }, []);

console.log(getPopularPostsIds(posts, 12)); */

/* TASK 2 */ /* AND ONCE AGAIN */
const products = [
  { title: "Phone case", price: 23, quantity: 2, category: "Accessories" },
  { title: "Android phone", price: 150, quantity: 1, category: "Phones" },
  { title: "Headphones", price: 78, quantity: 1, category: "Accessories" },
  { title: "Sport watch", price: 55, quantity: 2, category: "Watches" },
];

/* MY SOLUTION */
// const getCategoryProductQty = (products) =>
//   products.reduce((categoryQuantities, product) => {
//     if (!categoryQuantities[product.category]) {
//       categoryQuantities[product.category] = product.quantity;
//     } else {
//       categoryQuantities[product.category] += product.quantity;
//     }
//     return categoryQuantities;
//   }, {});

// console.log(getCategoryProductQty(products));

/* AUTHOR'S SOLUTION */
const getCategoryProductQty = (products) =>
  products.reduce((categoryQuantities, product) => {
    categoryQuantities[product.category] =
      (categoryQuantities[product.category] || 0) + product.quantity;
    return categoryQuantities;
  }, {});

console.log(getCategoryProductQty(products));
