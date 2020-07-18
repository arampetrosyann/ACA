"use strict"

const difference = function (setA, setB) {
  const newSet = new Set();

  for (const value of setA.values()) {
    if (!setB.has(value)) {
      newSet.add(value);
    }
  }

  return newSet;
}

console.log(difference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])));