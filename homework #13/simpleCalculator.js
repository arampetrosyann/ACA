"use strict"

class Calculator {
  static checkValidation(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      throw new Error("Please enter a number");
    }
  }

  add(firstNum, secondNum) {
    Calculator.checkValidation(firstNum, secondNum);

    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    Calculator.checkValidation(firstNum, secondNum);

    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    Calculator.checkValidation(firstNum, secondNum);

    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    Calculator.checkValidation(firstNum, secondNum);

    return firstNum / secondNum;
  }
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));