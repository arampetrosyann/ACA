"use strict"

const validateStr = function (input) {
  let str = input.trim();

  str = str[0].toUpperCase() + str.slice(1).toLowerCase();

  return str;
}

const checkNumber = function (input) {
  if (!Number.isFinite(input)) {
    throw new Error("Please enter a number.");
  }
}

class IceCream {
  static flavours = [
    "Plain",
    "Vanilla",
    "Chocolatechip",
    "Strawberry",
    "Chocolate",
  ];

  constructor(flavor, numSprinkles) {
    if (!IceCream.flavours.includes(validateStr(flavor))) {
      throw new Error("Such flavor does not exist.");
    }

    this._flavor = flavor;
    this._numSprinkles = numSprinkles;
  }

  get flavor() {
    return validateStr(this._flavor);
  }

  set flavor(value) {
    this._flavor = validateStr(value);
  }

  get numSprinkles() {
    return this._numSprinkles;
  }

  set numSprinkles(value) {
    checkNumber(value);

    this._numSprinkles = value;
  }

  toString() {
    return `${this.flavor} ice Cream`;
  }
};

const sweetestIceCream = function (frozenYogurtsArray) {
  let max = 0;

  for (const ice of frozenYogurtsArray) {
    let sum = 0;

    switch (ice.flavor) {
      case IceCream.flavours[1]:
        sum += 5;

        break;
      case IceCream.flavours[2]:
        sum += 5;

        break;
      case IceCream.flavours[3]:
        sum += 10;

        break;
      case IceCream.flavours[4]:
        sum += 10;

        break;
    }

    sum += ice.numSprinkles;

    if (sum > max) max = sum;
  }

  return max;
}

const ice1 = new IceCream("Plain", 10);

const ice2 = new IceCream("Strawberry", 7);

const ice3 = new IceCream("Chocolate", 3);

console.log(sweetestIceCream([ice1, ice2, ice3]));