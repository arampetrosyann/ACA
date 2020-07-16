"use strict"

const removeFirstElem = function (arr) {
  const newArr = [];

  const removing = function (ind) {
    if (ind >= arr.length) {
      return newArr;
    }

    newArr.push(arr[ind]);

    return removing(ind + 1);
  }

  return removing(1);
}

console.log(removeFirstElem([false, 78, undefined, 0, 1]));