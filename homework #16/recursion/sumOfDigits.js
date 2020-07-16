"use strict"

const sumOfDigits = function (numb) {
  let sum = 0;

  const calcSum = function (n) {
    if (n === 0 && (sum <= -10 || sum >= 10)) {
      return sumOfDigits(sum);
    } else if (n === 0) {
      return sum;
    }

    sum += n % 10;

    return calcSum(parseInt(n / 10));
  }

  return calcSum(numb);
}

console.log(sumOfDigits(908876));