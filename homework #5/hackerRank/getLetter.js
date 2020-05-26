"use strict"

const getLetter = function (s) {
  let letter;

  const firstSymbol = s[0].toLowerCase();

  switch (firstSymbol) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";

      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";

      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";

      break;

    default:
      letter = "D";
  }

  return letter;
}

console.log(getLetter("ground"));