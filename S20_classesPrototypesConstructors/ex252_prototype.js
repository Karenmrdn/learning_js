// "use strict";

/* !!! We must not to reassign __proto__ prop. */

/* __proto__ can be either object or null */

/* [[Prototype]] is a hidden prop, that JS uses
to navigate through prototype-chain */

/* Every function in JS (except arrow function)
is a constructor function */

/* Each method is located only in one place - in prototype */

const a = [1, 2, 3, 4];
a.__proto__ === Array.prototype; // true
a.__proto__.__proto__ === Object.prototype; // true
a.__proto__.__proto__.__proto__ === null; // true

const b = "some string";
b.__proto__ === String.prototype; // true
b.__proto__.__proto__ === Object.prototype; // true
b.__proto__.__proto__.__proto__ === null; // true

const c = 5;
c.__proto__ === Number.prototype; // true
c.__proto__.__proto__ === Object.prototype; // true
c.__proto__.__proto__.__proto__ === null; // true

/* It doesn't matter how we have created a function:
with function keyword or with arrow syntax - 
__proto__ of this function will be Function.prototype.
But there is small difference: function (created with keyword)
will have `prototype` prop, and arrow function won't. It means
that we cannot create instance of anonymous function expression */
function func() {
  console.log("Hello world");
}
const func2 = () => {
  console.log("Hello world");
};
console.dir(func);
console.dir(func2);
func.__proto__ === Function.prototype; // true
func.__proto__.__proto__ === Object.prototype; // true
func.__proto__.__proto__.__proto__ === null; // true
