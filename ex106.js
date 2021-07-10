"use strict";

function func() {
  console.log(this);
}
func(); // undefined cause of 'use strict'

const person = {
  name: "Alice",
  age: 20,
  greeting: function () {
    console.log(this);
    console.log("My name is " + this.name);
  },
};
person.greeting();
greeting();