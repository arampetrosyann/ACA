"use strict"

const isValueIncluded = function (object, value) {
  for (let key in object) {
    if (object[key] === value) return true;
  }

  return false;
}

console.log(isValueIncluded({ user: "Steve", name: "Jobs", age: 25 }, 25))
