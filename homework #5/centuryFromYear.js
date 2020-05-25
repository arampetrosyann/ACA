"use strict"

const centuryFromYear = function (year) {
  if (year < 0) return "invalid input";

  let century = (year / 100) | 0;

  if (year / 100 > century) return century + 1;
  else return century;
}

console.log(centuryFromYear(2020));