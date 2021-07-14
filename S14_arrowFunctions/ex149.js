"use strict";

/* We cannot use arrow function as function-constructor and
as a creators of function-constructor prototype methods */
function GroceryItem(name, kind) {
  this.name = name;
  this.kind = kind;
}

GroceryItem.prototype.info = function () {
  console.log(`${this.name} is a ${this.kind}`);
};
/* We cannot use arrow function here either because
arrow function will use 'this' of outer scope. In these
case 'this' would be the Window object */

const apple = new GroceryItem("Apple", "fruit");
console.log(apple);
apple.info();

const broccoli = new GroceryItem("Broccoli", "vegetable");
console.log(broccoli);
broccoli.info();

