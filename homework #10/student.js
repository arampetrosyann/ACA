"use strict"

const _ = require("lodash");

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    let changes = this._firstName;
    changes = changes.trim();
    changes = changes[0].toUpperCase() + changes.slice(1).toLowerCase();
    return changes;
  }

  set firstName(name) {
    this._firstName = name.trim();
    this._firstName =
      this._firstName[0].toUpperCase() + this._firstName.slice(1).toLowerCase();
  }

  get lastName() {
    let changes = this._lastName;
    changes = changes.trim();
    changes = changes[0].toUpperCase() + changes.slice(1).toLowerCase();
    return changes;
  }

  set lastName(sname) {
    this._lastName = sname.trim();
    this._lastName =
      this._lastName[0].toUpperCase() + this._lastName.slice(1).toLowerCase();
  }

  get gender() {
    const changes = this._gender.trim().toLowerCase();
    return changes;
  }

  set gender(feminine) {
    const newGender = feminine.trim().toLowerCase();
    if (newGender === "male" || newGender == "female") {
      this._gender = newGender;
    } else throw new Error("Invalid input");
  }

  get age() {
    return `${this._age} y.o.`;
  }

  set age(val) {
    if (typeof val === "number") {
      this._age = val;
    } else throw new Error("Invalid input");
  }

  toString() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age);
    this._program = program;
    this._year = year;
    this._fee = fee;
    this.passedExams = program.map((programName) => ({
      name: programName,
      grade: 0,
    }));
  }

  get program() {
    return this._program;
  }

  set program(val) {
    if (_.isArray(val)) {
      this._program = val;
    } else throw new Error("Invalid input");
  }

  get year() {
    return `${this._year} y`;
  }

  set year(num) {
    if (_.isNumber(num)) {
      this._year = num;
    } else throw new Error("Invalid input");
  }

  get fee() {
    return `${this._fee} $`;
  }

  set fee(sum) {
    if (_.isNumber(sum)) {
      this._year = sum;
    } else throw new Error("Invalid input");
  }

  passExam(programName, grade) {
    this.passedExams = this.passedExams.map((program) => {
      if (program.name === programName) {
        return {
          name: programName,
          grade: grade,
        };
      }
      return program;
    });

    const isAllPassed = this.passedExams.every((program) => program.grade > 50);

    if (isAllPassed) {
      this._year = this._year + 1;
    }
  }

  toString() {
    return `Student ${this._firstName} ${this._lastName}: ${this._fee} $`;
  }
}

const studentJim = new Student(
  "Jim",
  "Morrison",
  "male",
  19,
  ["math", "english", "history"],
  2020,
  6000
);