"use strict"

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

const getUsernameLengths = function (arr) {
  const getLength = function (user) {
    const lengthOfUsername = user["username"].length;

    return lengthOfUsername;
  }

  const arrOfNameLengths = arr.map(getLength);

  return arrOfNameLengths;
}

console.log(getUsernameLengths(users));