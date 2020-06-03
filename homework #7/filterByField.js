"use strict"

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
  {
    username: "George Bush",
    isAstronaut: false,
  }
];

const filterByField = function (arr) {
  const arrByField = arr.filter((user) => user["isAstronaut"]);

  return arrByField;
}

console.log(filterByField(users));