"use strict"

const toSubsets = function (arr) {
  let newArray = [];

  for (let indexArr = 0; indexArr < arr.length; ) {
    let subset = [];

    for (let indexSub = 0; indexSub < 3 && indexArr < arr.length; indexSub++) {
      subset.push(arr[indexArr]);

      indexArr++;
    }

    newArray.push(subset);
  }

  return newArray;
}

console.log(toSubsets([1, 2, 3, 4, 5, 6, 7]));