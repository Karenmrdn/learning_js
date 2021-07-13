"use strict";

/* !!! Each function in JS is equal to its constructor */

/* EXAMPLE 1 */
/* Each function in JS (accept arrow function)
has 'prototype' prop and can be used as a constructor function
Prototype chain: CivilPlane.prototype -> Object.prototype -> null */
// // function CivilPlane() {}
// const CivilPlane = function () {};

// console.log(CivilPlane.prototype);

// console.log(CivilPlane.prototype.constructor === CivilPlane);
// /* !!! Each function in JS is equal to its constructor */

// console.log(CivilPlane.prototype.__proto__ === Object.prototype);

// console.log(CivilPlane.prototype.__proto__.__proto__ === null);

/* EXAMPLE 2 */
/* Create new instance of the prototype using 'new' syntax:
1. Function constructor is called
2. New object {} is created
3. __proto__ is added
4. New props are added (optional)
5. Object is returned by constructor function */
// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
// }

// const propsForSmallPlane = {
//   numberOfSeats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// console.log(smallPlane);

// console.log(smallPlane.__proto__ === CivilPlane.prototype);

/* EXAMPLE 3 */
// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
// }

// /* We cannot use arrow function for prototype methods */
// CivilPlane.prototype.seatsInfo = function () {
//   console.log("this - ", this);
//   console.log(`Number of seats in the plane is ${this.numberOfSeats}`);
// };

// CivilPlane.prototype.modifySeatsQty = function (newSeatsQty) {
//   this.numberOfSeats = newSeatsQty;
// };

// const propsForSmallPlane = {
//   numberOfSeats: 4,
// };
// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargeSmall = {
//   numberOfSeats: 250,
// };
// const largePlane = new CivilPlane(propsForLargeSmall);

// smallPlane.seatsInfo();

// smallPlane.modifySeatsQty(10);

// smallPlane.seatsInfo();

/* EXAMPLE 4 */
function Airplane(props) {
  this.wingspan = props.wingspan;
  this.maxRangeOfFlight = props.maxRangeOfFlight;
}
Airplane.prototype.showAirplaneInfo = function () {
  console.log(
    `Wingspan is ${this.wingspan}, and max range of flight is ${this.maxRangeOfFlight}`
  );
};

function  CivilPlane(props) {
  Airplane.call(this, props);
  this.numberOfSeats = props.numberOfSeats;
}

CivilPlane.prototype = Object.create(Airplane.prototype);
console.log(CivilPlane.prototype.__proto__ === Airplane.prototype); // true

/* !!! Each function in JS is equal to its constructor
We deleted constructor by Object.create usage, so we
need to add constructor */
console.log(CivilPlane.prototype.constructor === CivilPlane); // false

CivilPlane.prototype.constructor = CivilPlane;
console.log(CivilPlane.prototype.constructor === CivilPlane); // now it is true

/* We cannot use arrow function for prototype methods */
CivilPlane.prototype.seatsInfo = function () {
  console.log("this - ", this);
  console.log(`Number of seats in the plane is ${this.numberOfSeats}`);
};
CivilPlane.prototype.modifySeatsQty = function (newSeatsQty) {
  this.numberOfSeats = newSeatsQty;
};

const propsForSmallPlane = {
  numberOfSeats: 4,
  wingspan: 20,
  maxRangeOfFlight: 1000,
};
const smallPlane = new CivilPlane(propsForSmallPlane);

const propsForLargeSmall = {
  numberOfSeats: 250,
  wingspan: 60,
  maxRangeOfFlight: 3000,
};
const largePlane = new CivilPlane(propsForLargeSmall);
