"use strict";

function addCustomGlobalMethod(globalObject) {
  globalObject.customMethod = function () {
    console.log("Greeting from the custom method");
  };
}
addCustomGlobalMethod(this);

this.customMethod();
customMethod();
