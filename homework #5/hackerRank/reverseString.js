"use strict"

const reverseString = function (str) {
  try {
    const reverseStr = str.split("").reverse().join("");

    return reverseStr;
  } catch (err) {
    console.error(err.message);
    return str;
  }
}

console.log(reverseString("Delon"));