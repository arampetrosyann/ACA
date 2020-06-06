"use strict"

const numbers = [1, 10, 20, 30, 40];

const arrayReduce = function (arr, func, start = arr[0]) {
  let acc = start;

  let index = 0;

  if (start === arr[0]) index = 1;

  for (index; index < arr.length; index++) {
    let element = arr[index];

    acc = func(acc, element, index, arr);
  }

  return acc;
}

console.log(arrayReduce(numbers, (total, num) => total + num));