"use strict"

const PI = Math.PI;

const getArea = function (radius) {
  return PI * radius ** 2;
}

const getPerimeter = function (radius) {
  return 2 * PI * radius;
}

console.log(getArea(2), getPerimeter(3));