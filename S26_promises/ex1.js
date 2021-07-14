"use strict";

const button = document.querySelector("button");
const p = document.querySelector("p");

const onBtnClick = (e) => {
  navigator.geolocation.getCurrentPosition(
    (posData) => console.log(posData),
    (error) => console.log(error)
  );
  /* It is async func */

  console.log('Getting position...');
};

button.addEventListener("click", onBtnClick);
