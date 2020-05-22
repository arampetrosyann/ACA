"use strict"

const findSize = function (obj) {
  let size = 0;

  for (const key in obj) size++;

  return size ? size : "Empty";
}

console.log(findSize({ name: "Steve", lastname: "Jobs" }));
