"use strict"

const factorial = function (number) {
  let value = 1;

  while (number > 0) {
    value = number * value;

    number--;
  }

  return value;
}

console.log(factorial(4));