"use strict"

const removeByLetter = function (arr, letter) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    let word = arr[index];

    let firstLetter = word[0];

    if (firstLetter.toUpperCase() !== letter.toUpperCase()) {
      newArr.push(word);
    }
  }
  return newArr;
}

console.log(
  removeByLetter(["Godfather", "Game of Thrones", "Social Network"], "g")
);
