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
    username: "Elon Musk",
    lang: "eng",
  },
  {
    username: "Egor Kreed",
    lang: "RU",
  },
];

const filterUsers = function (arr) {
  const removeRu = function (user) {
    return user["lang"].toLowerCase() !== "ru";
  }

  const engArr = arr.filter(removeRu);

  return engArr;
}

console.log(filterUsers(users));