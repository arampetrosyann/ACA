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
  {
    username: "Nikol Pashinyan",
    lang: "ARM",
  },
];

const getUserNames = function (arr) {
  const arrOfUserNames = arr.map((user) => user["username"]);

  return arrOfUserNames;
}

console.log(getUserNames(users));