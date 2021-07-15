/* Async/await helps us to make promises code
look like synchronous code */
/* We can use async/await only in functions */
/* 'async' keyword wraps all content of our function
into one big promise.
'await' waits for the promise to resolve or reject and new 
line will be executed only after that */
/* !!! Async/await doesn't change the way JS works, 
it just transforms  this code behind the scenes and
therefore we just have a different look */

/* EXAMPLE 1 */
/* Code with promises */
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
//       (error) => reject(error)
//     );
//   });
//   return promise;
// };

// const onBtnClick = (e) => {
//   let positionData;
//   await getPosition()
//     .then(
//       (posData) => {
//         positionData = posData;
//         return setTimer(1000); // we can return not only promises but kind of data
//         /* by returning smth from function, we set promise back to 'pending' */
//       } /* ,
//       (error) => console.log(error) */
//       /* First way of handling reject */
//     )
//     .then((data) => console.log(data, positionData))
//     .catch((err) => {
//       console.log(err);
//       return "new data to pass to next 'then'";
//     });

//   console.log("Getting position...");
// };

// button.addEventListener("click", onBtnClick);

/* Code with async/await */
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

const onBtnClick = async (e) => {
//   let positionData;
  const posData = await getPosition();
  const timerData = await setTimer(2000);
  console.log(timerData, posData);
    // .then(
    //   (posData) => {
    //     positionData = posData;
    //     return setTimer(1000); // we can return not only promises but kind of data
    //     /* by returning smth from function, we set promise back to 'pending' */
    //   } /* ,
    //   (error) => console.log(error) */
    //   /* First way of handling reject */
    // )
    // .then((data) => console.log(data, positionData))
    // .catch((err) => {
    //   console.log(err);
    //   return "new data to pass to next 'then'";
    // });

  console.log("Getting position...");
};

button.addEventListener("click", onBtnClick);