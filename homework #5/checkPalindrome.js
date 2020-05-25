"use strict"

const isPalindrome = function (str) {
  const reverseStr = str.split("").reverse().join("");

  if (reverseStr == str) return true;
  else return false;
}

console.log(isPalindrome("abccba"));