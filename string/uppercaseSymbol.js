"use strict"

const symbolToUppercase = function (word, digit) {
  let newWord = "";

  for (let index = 0; index < word.length; index++) {
    let symbol = word[index];

    if (index === digit) {
      newWord += symbol.toUpperCase();
    } else {
      newWord += symbol;
    }
  }

  return newWord;
}

console.log(symbolToUppercase("lampard", 4));
