"use strict"

const myFill = function (arr, value, start = 0, end = arr.length) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    let elementOfArr = arr[index];

    if (index >= start && index < end) {
      newArr.push(value);
    } else {
      newArr.push(elementOfArr);
    }
  }

  return newArr;
}

console.log(myFill(["A", "B", "C", "D", "E"], "Hello", 1, 4));