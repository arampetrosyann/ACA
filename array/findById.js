"use strict"

const findById = function (arr, idNumber) {
  for (let index = 0; index < arr.length; index++) {
    let objectOfArr = arr[index];

    if (objectOfArr["id"] === idNumber) {
      console.log(objectOfArr);

      return;
    }
  }

  console.log("No data");
}

findById(
  [
    { id: 1, title: "react" },
    { id: 2, title: "angular" },
    { id: 3, title: "vue" },
    { id: 4, title: "node" },
  ],
  2
);
