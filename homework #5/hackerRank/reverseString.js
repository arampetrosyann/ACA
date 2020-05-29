"use strict"

const reverseString = function (str) {
  let result = str;

  try {
    const reverseStr = str.split("").reverse().join("");

    result = reverseStr;
  } catch (err) {
    console.error(err.message);
  } finally {
    return result;
  }
}

console.log(reverseString('Delon'));