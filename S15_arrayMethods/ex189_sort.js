"use strict";

/* 'sort' mutates input array */

/* Different JS-engines use different sorting algorithms, but each
algorithm performs comparison of pairs of elements, that is why
callback in 'sort' method expects two parameters, that represents
each pair of the elements. If callback function return value
< 0  -  firstElem, secondElem
= 0  -  firstElem, secondElem (order doesn't change)
> 0  -  secondElem, firstElem */

/* Default 'sort' method, if we don't pass any argument to it,
uses it's default callback function, which works this way:
it takes two passed parameters and converts each element to string,
and after that it compares strings:
firstElem.toString() compares with secondElem.toString() */

/* Google Chrome uses stable Inserting Sort when quantity of element <= 10,
and unstable Quick Sort for more elements.
Firefox always uses stable Insertion Sort */

// const numbers = [10, 5, 79, 27, 50, 14, 27];
// const numbers2 = [10, 5, 79, 27, 50, 14, 27];

// numbers.sort();
// console.log("default sort result", numbers);

// numbers.sort((a, b) => a - b);
// console.log("custom sort result", numbers);

/* TASK 1 */
// const products = [
//   {
//     title: "Phone case",
//     price: 23,
//     quantity: 2,
//     category: "Accessories",
//   },
//   {
//     title: "Android phone",
//     price: 150,
//     quantity: 1,
//     category: "Phones",
//   },
//   {
//     title: "Headphones",
//     price: 78,
//     quantity: 1,
//     category: "Accessories",
//   },
//   {
//     title: "Sport Watch",
//     price: 55,
//     quantity: 2,
//     category: "Watches",
//   },
// ];

// const sortProductsByPrice = (products) => {
//     products.sort((a, b) => a.price - b.price);
//     return products;
// };

// sortProductsByPrice(products);

// console.log(products);

/* TASK 2 */
const persons = [
  {
    name: "Andy",
    friendsQty: 10,
    index: 1,
  },
  {
    name: "Mike",
    friendsQty: 5,
    index: 2,
  },
  {
    name: "Sophia",
    friendsQty: 10,
    index: 3,
  },
  {
    name: "Joshua",
    friendsQty: 3,
    index: 4,
  },
  {
    name: "John",
    friendsQty: 10,
    index: 5,
  },
  {
    name: "Gabriela",
    friendsQty: 8,
    index: 6,
  },
  {
    name: "Tyler",
    friendsQty: 7,
    index: 7,
  },
  {
    name: "Dylan",
    friendsQty: 2,
    index: 8,
  },
  {
    name: "Sarah",
    friendsQty: 5,
    index: 9,
  },
  {
    name: "Alexa",
    friendsQty: 10,
    index: 10,
  },
  {
    name: "Henry",
    friendsQty: 10,
    index: 11,
  },
  {
    name: "Arianna",
    friendsQty: 10,
    index: 12,
  },
];

let count = 0;

function sortPersonsByFriendsQty(persons) {
  persons.sort((a, b) => {
    count++;
    console.log(a.name, b.name);
    return a.friendsQty - b.friendsQty;
  });
  return persons;
}

console.log(sortPersonsByFriendsQty(persons));
console.log(count);
