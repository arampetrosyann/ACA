"use strict"

import { normName, normEmail } from "./normalize.js";

const inName = document.querySelector(".form input[name='name']");

const inEmail = document.querySelector(".form input[name='email']");

const form = document.querySelector(".form");

form.addEventListener("submit", function () {
  const name = normName(inName.value);

  const email = normEmail(inEmail.value);

  let userObj = {
    name: name,
    email: email,
  };

  const jsonData = JSON.stringify(userObj);

  alert(jsonData);
});