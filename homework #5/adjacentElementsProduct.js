"use strict"

const adjacentElementsProduct = function (arr) {
  let result = arr[0] * arr[1];

  for (let index = 0; index < arr.length; index++) {
    const nextAdjacent = arr[index + 1] * arr[index + 2];

    if (nextAdjacent > result) result = nextAdjacent;
  }

  return result;
}

console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));