"use strict"

const makeArrayConsecutive2 = function (arr) {
  const minValue = Math.min(...arr);

  const maxValue = Math.max(...arr);

  let addStatues = 0;

  for (let i = minValue; i < maxValue; i++) {
    if (!arr.includes(i)) addStatues++;
  }

  return addStatues;
}

console.log(makeArrayConsecutive2([1, 2, 3, 6, 7, 10]));