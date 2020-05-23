"use strict"

const toSubsets = function (arr) {
  let newArray = [];

  for (let index = 0; index < arr.length; index += 3) {
    let subset = arr.slice(index, index + 3);

    newArray.push(subset);
  }

  return newArray;
}

console.log(toSubsets([1, 2, 3, 4, 5, 6, 7]));