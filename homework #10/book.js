"use strict"

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name[0].toUpperCase() + this._name.slice(1).toLowerCase();
  }

  get email() {
    return this._email.trim().toLowerCase();
  }

  get gender() {
    return this._gender[0].toUpperCase() + this._gender.slice(1).toLowerCase();
  }

  toString() {
    return `Author: ${this._name}\ncontact: ${this._email}`;
  }
};

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  set title(name) {
    let newName = name.trim();
    newName = newName[0].toUpperCase() + newName.slice(1).toLowerCase();
    this._title = newName;
  }

  get author() {
    return this._author;
  }

  set author(data) {
    this._author = data;
  }

  get price() {
    return `${this._price} $`;
  }

  set price(sum) {
    if (typeof sum !== "number") {
      throw new Error("Invalid input");
    } else {
      this._price = Number(sum);
    }
  }

  get quantity() {
    return `${this._quantity} qt`;
  }

  set quantity(sum) {
    if (typeof sum !== "number") {
      throw new Error("Invalid input");
    } else {
      this._quantity = Number(sum);
    }
  }

  getProfit() {
    return `${this._quantity * this._price}$`;
  }

  toString() {
    return `The "${this._title}" book costs ${this._price}$`;
  }
};

const scottFitzgerald = new Author("Scott Fitzgerald", "scottfit@gmail.com", "Male");

const theGreatGatsby = new Book("The Great Gatsby", scottFitzgerald, 22, 130);