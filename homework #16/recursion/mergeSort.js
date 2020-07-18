"use strict"

const merge = function (arr1, arr2) {
  const sortArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortArr.push(arr1.shift());
    } else {
      sortArr.push(arr2.shift());
    }
  }

  const result = sortArr.concat(arr1, arr2);

  return result;
}

const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const midIndex = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, midIndex));

  const rightArr = mergeSort(arr.slice(midIndex));

  return merge(leftArr, rightArr);
}

console.log(mergeSort([45, 5, 8, 2, 35, 1, 21]));