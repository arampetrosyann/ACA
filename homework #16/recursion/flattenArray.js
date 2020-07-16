"use strict"

const flattenArray = function (array) {
  const newArr = [];

  const flatten = function (ind, arr) {
    if (ind === arr.length) {
      return newArr;
    }

    if (Array.isArray(arr[ind])) {
      flatten(0, arr[ind]);
    } else {
      newArr.push(arr[ind]);
    }

    return flatten(ind + 1, arr);
  }

  return flatten(0, array);
}

console.log(flattenArray([1, [23, 24, [33, 34]], 5]));