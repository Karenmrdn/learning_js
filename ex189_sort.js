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

/* Google Chrome uses Inserting Sort when quantity of element <= 10 */

const numbers = [10, 5, 79, 27, 50, 14, 27];
const numbers2 = [10, 5, 79, 27, 50, 14, 27];

numbers.sort();
console.log("default sort result", numbers);

numbers.sort((a, b) => a - b);
console.log("custom sort result", numbers);
