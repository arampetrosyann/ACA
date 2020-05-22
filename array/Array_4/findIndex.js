"use strict"

const numbers = [4, 12, 17, 19, 29, 2];

const isOdd = function (currentValue, index, array) {
  return currentValue % 2 === 1;
}

const myFindIndex = function (array, definedFunction) {
  for (let index = 0; index < array.length; index++) {
    if (definedFunction(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

console.log(myFindIndex(numbers, isOdd));