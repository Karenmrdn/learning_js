"use strict";

/* !!! Promises help us solve the callback hell problem */

/* EXAMPLE 1. Callbacks */
// const button = document.querySelector("button");
// const p = document.querySelector("p");

// const onBtnClick = (e) => {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => console.log(posData),
//     (error) => console.log(error)
//   );
//   /* It is async func */

//   console.log('Getting position...');
// };

// button.addEventListener("click", onBtnClick);

/* EXAMPLE 2. Promises */
// const button = document.querySelector("button");
// const p = document.querySelector("p");

// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved!"); // We can pass here any type of data
//     }, duration);
//   });
//   return promise;
// };

// const onBtnClick = (e) => {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => setTimer(1000).then((data) => console.log(data, posData)),
//     (error) => console.log(error)
//   );

//   console.log('Getting position...');
// };

// button.addEventListener("click", onBtnClick);

/* EXAMPLE 3. Promise chaining */
// const button = document.querySelector("button");
// const p = document.querySelector("p");

// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Timer resolved!"); // We can pass here any type of data
//     }, duration);
//   });
//   return promise;
// };

// const getPosition = () => {
//   const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (posData) => resolve(posData),
//       (error) => console.log(error)
//     );
//   });
//   return promise;
// };

// const onBtnClick = (e) => {
//   let positionData;
//   getPosition()
//     .then((posData) => {
//       positionData = posData;
//       return setTimer(1000); // we can return not only promises but kind of data
//       /* by returning smth from function, we set promise back to 'pending' */
//     })
//     .then((data) => console.log(data, positionData));

//   console.log("Getting position...");
// };

// button.addEventListener("click", onBtnClick);

/* EXAMPLE 4. Promise chaining + reject */
/* We have two ways of handling reject:
1. By passing function as second parameter to 'then' (not the best 
solution, because code will be more block-like)
2. By adding a single 'catch' to 'then' chain ('then' blocks after 'catch' will be executed).
!!! Position of 'catch' in promise chain matters.
!!! 'catch' does not cancel entire promise-chain.
If 'then' rejects, every next 'then' will be skipped
till it reaches 'catch' and after that 'then' will go on. */
const button = document.querySelector("button");
const p = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timer resolved!"); // We can pass here any type of data
    }, duration);
  });
  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (posData) => resolve(posData),
      (error) => reject(error)
    );
  });
  return promise;
};

const onBtnClick = (e) => {
  let positionData;
  getPosition()
    .then(
      (posData) => {
        positionData = posData;
        return setTimer(1000); // we can return not only promises but kind of data
        /* by returning smth from function, we set promise back to 'pending' */
      } /* ,
      (error) => console.log(error) */
      /* First way of handling reject */
    )
    .then((data) => console.log(data, positionData))
    .catch((err) => {
      console.log(err);
      return "new data to pass to next 'then'";
    });

  console.log("Getting position...");
};

button.addEventListener("click", onBtnClick);
/* !!! 1. If we place 'catch' in the end of the chain, it will mean
that this 'catch' will catch reject of any 'then'. Every
'then' in-between rejected 'then' and 'catch' will be skipped.
2. If our 'catch' placed after rejected 'then' and there are more
'thens' after this 'catch', it will mean that our 'catch' will catch
rejected 'then' and every 'then' after 'catch' will be executed as normal. */

/* ADDITIONAL INFO. 'Finally' */
/* When you have another then() block after a catch() or then() block, 
the promise re-enters PENDING mode (keep in mind: then() and catch() 
always return a new promise - either not resolving to anything or 
resolving to what you return inside of then()). Only if there are 
no more then() blocks left, it enters a new, final mode: SETTLED.

Once SETTLED, you can use a special block - finally() - to do final cleanup work. 
finally() is reached no matter if you resolved or rejected before. */
