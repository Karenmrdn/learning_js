"use strict";

/* MY SOLUTION */
// const btn = document.querySelector(".btn");

// let count = 0;
// btn.addEventListener("click", () => {
//   count++;
//   btn.innerHTML = `Button clicked ${count} times`;
//   console.log('Button was clicked');
// });

/* SOLUTION FROM THE AUTHOR */
const createButton = (title) => {
  const btn = document.createElement("button");
  let count = 0;

  btn.innerHTML = title;

  btn.onclick = function() {    /* We cannot use arrow func here because 'this' will be Window then */
    count++;
    this.innerHTML = `Button was clicker ${count} times`;
    console.log('Button was clicked');
  }; 

  document.body.appendChild(btn);
};

createButton("Author's button");
createButton("New author's button");
/* Every button counter will be independent
because we use closure here */

