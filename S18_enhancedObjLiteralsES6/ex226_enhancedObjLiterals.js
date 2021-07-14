"use strict";

/* EXAMPLE 1 */
// let personName = "Mike";
// let personAge = 19;

// const person = {
//   personName,
//   personAge,
//   info() {
//     console.log(
//       `My name is ${this.personName} and I am ${this.personAge} years old`
//     );
//   },
//   [personAge]: true /* Computed prop name */,
//   //   newVariable // ERROR. newVariable is not defined
// };

// console.log(person);

/* EXAMPLE 2. Computed property name */
// const BG_COLOR_PROP = "bgColor";

// const btn = {
//   title: "Button 1",
//   [BG_COLOR_PROP]: "blue",
// };

// const list = {
//   options: ["Option1", "Option2"],
//   [BG_COLOR_PROP]: "grey",
// };

// console.log(btn);
// console.log(list);

// console.log(btn.bgColor);
// console.log(btn['bgColor']);
// console.log(btn[BG_COLOR_PROP]);

/* TASK 1 */
/*
Modify object that is returned by "photoGallery" function using:
1. Shorthand property names
2. Shorthand method names
3. Computed property names. You need to add one computed property.

Also correct all mistakes.

Log messages in the console must be exactly the same as at the end of this challenge.
*/

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

const photoGallery = (title, dimensions, date) => {
  return {
    title,
    dimensions,
    date,
    [testDimension1]: true,
    info() {
      console.log(`Dimensions of the photo "${title}" are ${dimensions}`);
    },
    publishInfo() {
      console.log(
        `Photo ${title} was published ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} seconds ago`
      );
    },
  };
};

const photo1 = photoGallery("My dog", "1920x1080", new Date());

photo1.info();
/* Dimensions of the photo "My dog" are 1920x1080 */

setTimeout(() => photo1.publishInfo(), 2000);
/* Photo "My dog" was published 2 seconds ago */

/* QUESTION: Why "publishInfo" method still has access to the parameters (for example "date") of the "photoGallery" function? */

console.log(photo1[testDimension1]); // true
console.log(photo1[testDimension2]); // undefined
