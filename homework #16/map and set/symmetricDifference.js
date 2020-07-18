"use strict"

const symmetricDifference = function (setA, setB) {
  const newSet = new Set([...setA]);

  for (const value of setB.values()) {
    if (setA.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
  }

  return newSet;
}

console.log(symmetricDifference(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])));