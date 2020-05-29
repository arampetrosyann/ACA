"use strict"

const getSecondLargest = function (nums) {
  const maxValue = Math.max(...nums);

  let secondMax = nums[0];

  for (const value of nums) {
    if (value > secondMax && value !== maxValue) {
      secondMax = value;
    }
  }

  return secondMax;
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));