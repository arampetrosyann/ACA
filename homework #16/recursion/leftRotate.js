"use strict"

const leftRotate = function (arr, numb) {
  const newArr = [];

  let n = numb;

  if (numb < 0) {
    n = arr.length - Math.abs(n);
  }

  const rotation = function (ind, n) {
    if (ind === arr.length) {
      return newArr;
    }

    if (ind < n) {
      newArr.push(arr[ind]);
    } else {
      newArr.unshift(arr[arr.length + n - ind - 1]);
    }

    return rotation(ind + 1, n);
  }

  return rotation(0, n);
}

console.log(leftRotate(["a", "b", "c", "d", "e", "f", "g", "h"], -2));