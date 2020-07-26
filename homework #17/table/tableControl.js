"use strict"

import { isValidStr, isValidNum } from "./validation.js";

const name = document.querySelector(".table-foot input[name='name']");

const age = document.querySelector(".table-foot input[name='age']");

const grade = document.querySelector(".table-foot input[name='grade']");

const tableBody = document.querySelector(".table-body");

const ageSort = document.querySelector(".sort-age");

const inputs = age.parentElement.parentElement;

inputs.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        if (!isValidStr(name.value) || !isValidNum(age.value) || !isValidNum(grade.value)) {
            return;
        }
    
        const newPerson = {
            name: name.value,
            age: age.value,
            grade: grade.value,
        };
    
        const newRow = document.createElement("tr");
    
        for (const key in newPerson) {
            const rowData = document.createElement("td");
    
            rowData.append(newPerson[key]);
    
            newRow.append(rowData);
        }
    
        tableBody.append(newRow);

        console.log(tableBody.children)
    }
});

const sortingAges = (function () {
    let clickSum = 0;

    ageSort.addEventListener("click", function () {
        clickSum = 1;
    });
})();