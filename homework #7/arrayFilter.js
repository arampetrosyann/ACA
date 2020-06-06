"use strict"

const numbers = [1, 10, 20, 30, 40];

const arrayFilter = function (arr, func) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];

    if (func(element, index, arr)) newArr.push(element);
  }

  return newArr;
}

console.log(arrayFilter(numbers, (x) => x > 16));