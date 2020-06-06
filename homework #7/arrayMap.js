"use strict"

const numbers = [1, 10, 20, 30, 40];

const arrayMap = function (arr, func) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];

    newArr.push(func(element, index, arr));
  }

  return newArr;
}

console.log(arrayMap(numbers, (x) => x ** 2));