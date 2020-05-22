"use strict"

const myJoin = function (arr, separator = ",") {
  let arrString = "";

  const lastElement = arr[arr.length - 1];

  for (let index = 0; index < arr.length; index++) {
    let arrElement = arr[index];

    if (arrElement !== lastElement) {
      arrString += `${arrElement}${separator}`;
    } else {
      arrString += `${arrElement}`;
    }
  }

  return arrString;
}

console.log(myJoin(["Banana", "Orange", "Apple", "Mango"], "_"));