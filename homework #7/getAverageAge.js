"use strict"

const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      age: 56,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      age: 54,
    },
  ];
  
  const getAverageAge = function (arr) {
    const calcAverageAge = function (total, value, index, arr) {
      total += value["age"];
  
      if (index === arr.length - 1) {
        return total / arr.length;
      } else {
        return total;
      }
    }
  
    const result = arr.reduce(calcAverageAge, 0);
  
    return result;
  }
  
  console.log(getAverageAge(users));