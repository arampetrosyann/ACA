"use strict"

const getViolatedIndex = function (arr) {
  const findViolatedIndex = function (ind) {
    if (ind === arr.length - 1) {
      return -1;
    }

    if (arr[ind] > arr[ind + 1]) {
      return ind + 1;
    }

    return findViolatedIndex(ind + 1);
  }

  return findViolatedIndex(0);
}

console.log(getViolatedIndex([-9, -4, -4, 3, 12, 4, 5]));