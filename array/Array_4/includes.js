"use strict"

const myIncludes = function (arr, element) {
  for (let index = 0; index < arr.length; index++) {
    let arrElement = arr[index];

    if (arrElement === element) return true;
  }

  return false;
}

console.log(myIncludes(["Banana", "Orange", "Apple", "Mango"], "Apple"));