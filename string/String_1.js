"use strict"

const twoDigitCombination = function () {
  let arrayOfNumbers = [];

  let finalResult = "";

  for (let index = 0; index < 100; index++) {
    let number = index < 10 ? "0" + index : index;

    arrayOfNumbers.push(number);
  }

  finalResult = arrayOfNumbers.join(",");

  return finalResult;
}

console.log(twoDigitCombination());