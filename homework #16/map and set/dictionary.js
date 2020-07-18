"use strict"

const _ = require("lodash");

class Dictionary extends Map {
  constructor(inArr) {
    if (_.isNull(inArr) || _.isUndefined(inArr)) {
      inArr = [];
    } else if (!_.isObjectLike(inArr)) {
      throw new Error("Invalid input");
    } else if (!_.isArray(inArr)) {
      inArr = Object.entries(inArr);
    }

    super(inArr);
  }

  getElem(key) {
    const value = this.get(key);

    return value;
  }

  addElem(key, val) {
    let value = val;

    if (this.has(key)) {
      value = new Dictionary.Collection([val]);

      value.concat(this.getElem(key));
    }

    this.set(key, value);
  }

  getCountByKey(key) {
    if (this.getElem(key) instanceof Dictionary.Collection) {
      const value = this.getElem(key);

      return value.size;
    }

    return 1;
  }

  remove(key) {
    let isExist = false;

    if (this.has(key)) {
      isExist = true;

      this.delete(key);
    }

    return isExist;
  }

  toString() {
    return `dict`;
  }
}

Dictionary.Collection = class Collection extends Set {
  constructor(arr) {
    super(arr);
  }

  remove(value) {
    let isExist = false;

    if (this.has(value)) {
      isExist = true;

      this.delete(value);
    }

    return isExist;
  }

  concat(value) {
    let secSet = value;

    if (!(value instanceof Dictionary.Collection)) {
      secSet = new Dictionary.Collection([value]);
    }

    for (let item of secSet.values()) {
      this.add(item);
    }
  }

  toString() {
    return `coll`;
  }
}

const dict = new Dictionary({ num1: 10, num2: 20 });

console.log(dict);