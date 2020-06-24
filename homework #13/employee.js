"use strict"

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get email() {
    const email = `${this.firstName}.${this.lastName}@company.com`.toLowerCase();

    return email;
  }

  toString() {
    return `Employee - ${this.firstName}`;
  }
};

const alexander = new Employee("Alexander", "Clooney");