"use strict"

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(val) {
    if (!Number.isFinite(val)) {
      throw new Error("Please enter a number");
    }

    this._radius = val;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle with a radius ${this.radius}`;
  }
};

const circle = new Circle(4.4);