"use strict";

/* Filter do not mutate input array */

const numbers = [10, 25, 56, 100, 5];

const filteredNumbers = numbers.filter((number) => number > 20);

console.log(filteredNumbers);