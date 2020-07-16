"use strict"

const minPositiveNumber = function (arr) {
  const findNumber = function (minNum, arr) {
    if (arr.length === 0) {
      if (minNum < 0) {
        return -1;
      } else {
        return minNum;
      }
    }

    if (arr[0] < minNum && arr[0] >= 0) {
      minNum = arr[0];
    }

    return findNumber(minNum, arr.slice(1));
  }

  return findNumber(arr[0], arr);
}

console.log(minPositiveNumber([45, -9, 15, 5, -78]));