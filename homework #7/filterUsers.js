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
  const onlyEng = function (user) {
    return user["lang"].toLowerCase() === "eng";
  }

  const engArr = arr.filter(onlyEng);

  return engArr;
}

console.log(filterUsers(users));