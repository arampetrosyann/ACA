"use strict"

const stepArray = function (number1, number2, step = 1) {
  let arr = [];

  if (number1 > number2) return "invalid format";

  if (step === 0) step = 1;

  for (let i = number1; i <= number2; i += step) {
    arr.push(i);
  }

  return arr;
}

console.log(stepArray(1, 10, 3));