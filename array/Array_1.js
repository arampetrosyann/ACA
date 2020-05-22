"use strict"

const filterRange = function (arr, startLimit, endLimit) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    let elementOfArr = arr[index];

    if (elementOfArr >= startLimit && elementOfArr <= endLimit) {
      newArr.push(elementOfArr);
    }
  }

  return newArr;
}

console.log(filterRange([-10, -8, 0, 10, 20], -100, 15));