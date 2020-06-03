"use strict"

const parseInteger = function (arr) {
  const toInteger = function (value) {
    if (isNaN(parseInt(value))) return null;
    else return parseInt(value);
  }

  const intArr = arr.map(toInteger);

  return intArr;
}

console.log(parseInteger(["1", "px", "2323"]));