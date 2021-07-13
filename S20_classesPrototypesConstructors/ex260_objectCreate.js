"use strict";

/* 'Object.create' creates new object and sets its
'__proto__' equal to the object passed as an argument  */

/* We start this object with capital letter,
because it will be a prototype for another object */
const Parent = {
  type: "Parent",
  showTypeInfo() {
    console.log(`Hello from ${this.type}`);
  },
  modifyType(newType) {
    this.type = newType;
  },
};

console.log(Parent.type);
Parent.showTypeInfo();

console.log(Parent.prototype); // undefined
console.log(Parent.__proto__); // Object.prototype

const child = Object.create(Parent);

console.log(child.__proto__ === Parent); // true

child.type = "Child";

child.showTypeInfo();

child.modifyType("Modified child");

child.showTypeInfo();
