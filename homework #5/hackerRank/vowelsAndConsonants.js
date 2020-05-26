"use strict"

const isVowel = function (letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}

const vowelsAndConsonants = function (s) {
  let strConsonants = "";

  let strVowels = "";

  let final = "";

  for (let index = 0; index < s.length; index++) {
    let letter = s[index].toLowerCase();

    if (isVowel(letter)) strVowels += `${letter}\n`;
    else strConsonants += `${letter}\n`;
  }

  final = strVowels + strConsonants;

  return final;
}

console.log(vowelsAndConsonants("javascriptloops"));