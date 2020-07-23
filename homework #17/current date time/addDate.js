"use strict"

const btn = document.querySelector(".button");

const date = document.querySelector(".date");

const addDate = function () {
    const dateNow = new Date();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const dateTime = `${dateNow.getDate()}-${months[dateNow.getMonth()]}-${dateNow.getFullYear()}`;

    date.innerText = dateTime;
}

btn.addEventListener("click", addDate);