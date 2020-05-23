"use strict"

let _ = require("lodash");

let users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

const lodashFind = function (collection, value) {
  for (const element of collection) {
    let objToArray = Object.entries(element);

    for (let item of objToArray) {
      if (_.isEqual(value, item)) return element;
    }
  }
}

console.log(lodashFind(users, ["age", 40]));