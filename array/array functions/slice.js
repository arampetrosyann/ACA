"use strict"

const mySlice = function (arr, start = 0, end = arr.length) {
  let newArr = [];

  if (start < 0) start = arr.length + start;

  if (end < 0) end = arr.length + end;

  for (let index = 0; index < arr.length; index++) {
    let elementOfArr = arr[index];

    if (index >= start && index < end) {
      newArr.push(elementOfArr);
    }
  }

  return newArr;
}

console.log(mySlice(["A", "B", "C", "D", "E", "F", "G"], -6, -2));
