"use strict"

const _ = require("lodash");

class Account {
  constructor(id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this._id;
  }

  get name() {
    let result = this._name;
    result = result.trim();
    result = result[0].toUpperCase() + result.slice(1).toLowerCase();
    return result;
  }

  set name(val) {
    this._name = val.trim();
    this._name =
    this._name[0].toUpperCase() + this._name.slice(1).toLowerCase();
  }

  get balance() {
    return `${this._balance} $`;
  }

  set balance(sum) {
    if (typeof sum !== "number") {
      throw new Error("Invalid input");
    } else {
      this._balance = sum;
    }
  }

  credit(amount) {
    this._balance += amount;

    return `${this._balance} $`;
  }

  debit(amount) {
    if (amount < this._balance) {
      this._balance -= amount;

      return `${this._balance} $`;
    } else {
      return "Amount exceeded balance.";
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount < this._balance) {
      this._balance -= amount;
      anotherAccount.balance = amount;
      return `${this._balance} $`;
    } else {
      return "Amount exceeded balance.";
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (_.isEqual(accountFirst, accountSecond)) {
      return true;
    }

    return false;
  }

  toString() {
    return `${this._id} balance is ${this._balance} $`;
  }
}

const smith = new Account(1233, "Smith", 15000);

const bob = new Account(1344, "Bob", 36000);