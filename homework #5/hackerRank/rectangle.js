"use strict"

const getArea = function (length, width) {
  let area = length * width;

  return area;
}

const getPerimeter = function (length, width) {
  let perimeter = 2 * (length + width);

  return perimeter;
}

console.log(getArea(3, 4.5), getPerimeter(5, 9));