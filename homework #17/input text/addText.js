"use strict"

const textInput = document.querySelector(".box-form__input");

const textBox = document.querySelector(".box-text");

textInput.addEventListener("input", function () {
  textBox.textContent = textInput.value;
});