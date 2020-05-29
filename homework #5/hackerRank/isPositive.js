"use strict"

const isPositive = function (numb) {
  try {
    if (numb > 0) {
      return "YES";
    } else if (numb === 0) {
      throw "Zero Error";
    } else {
      throw "Negative Error";
    }
  } catch (err) {
    return err;
  }
}

console.log(isPositive(-20));