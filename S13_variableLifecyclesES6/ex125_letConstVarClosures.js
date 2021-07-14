"use strict";

/* TASK 2 */
/**
 * CHALLENGE 1-2 TASK
 *
 * Find all menu elements by selector ".nav-link"
 * or by className "nav-link".
 *
 *  Use "for" loop to iterate through all menu items
 * Inside of the loop add "onclick" event handler to
 * each menu item.
 *
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all
 * menu elements
 * 2. Add "active" class to the clicked menu element
 * 3. Log to the console message with the name
 * of the clicked menu item
 */

const elements = document.querySelectorAll(".nav-link");
const LEN = elements.length;

/* !!! WE CANNOT USE VAR HERE BECAUSE IT WON'T CREATE
NEW VARIABLE FOR EACH ITERATION */
for (let i = 0; i < LEN; i++) {
  elements[i].onclick = () => {
    for (let j = 0; j < LEN; j++) {
      elements[j].classList.remove(
        "active"
      ); /* I didn't think that we need to use second for loop here */
    }

    elements[i].classList.add("active");
    console.log(elements[i].classList);
  };
}
