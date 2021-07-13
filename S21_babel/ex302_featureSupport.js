"use strict";

/* TASK 1 */
// function checkTheFeature() {
//   try {
//     eval("`Test of supported feature`");
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// if (checkTheFeature()) {
//   console.log("Template literals are supported");
// } else {
//   console.log("Template literals are not supported");
// }

/* TASK 2 */
function checkTheFeature() {
  try {
    eval("`Test of supported feature`");
  } catch (e) {
    return false;
  }
  return true;
}

function insertScript(type) {
  let el = document.createElement("script");
  el.src = type + ".js";
  document.body.appendChild(el);
}

if (checkTheFeature()) {
  insertScript("es6");
} else {
  insertScript("es5");
}
