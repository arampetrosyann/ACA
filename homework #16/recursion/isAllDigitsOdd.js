"use strict"

const isAllDigitsOdd = function (num) {
  if (num === 0) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  return isAllDigitsOdd(parseInt(num / 10));
}

console.log(isAllDigitsOdd(7791));