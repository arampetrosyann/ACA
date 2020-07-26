"use strict"

import isHex from "./hexValidation.js";

const parBoxes = document.querySelector(".content-box--top").children;

const textColorIn = document.querySelector(
  ".form__item input[name='text-color']"
);

const bgColorIn = document.querySelector(".form__item input[name='bg-color']");

const appBtn = document.querySelector(".item-button");

appBtn.addEventListener("click", function () {
  if (isHex(textColorIn.value) && isHex(bgColorIn.value)) {
    Array.from(parBoxes).forEach((element) => {
      element.style.color = textColorIn.value;
      element.style.backgroundColor = bgColorIn.value;
    });
  }
});