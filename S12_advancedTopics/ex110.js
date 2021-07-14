// "use strict";

/* OPTION 1 */
(function (globalObject) {
  globalObject.customMethod = function () {
    console.log("Greeting from the custom method");
  };
})(this);

/* OPTION 2 */
(function () {
  this.customMethod = function () {
    console.log("Greeting from the custom method");
  };
})();
/* Works only without 'use strict' */

this.customMethod();
window.customMethod();
customMethod();
