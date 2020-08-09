"use strict";

import createBookBox from "./helpers/booxBox.helper.js";

import addTotalCount from "./helpers/totalCount.helper.js";

import validateUrl from "./helpers/validateUrl.helper.js";

const booksBox = document.querySelector(".books-box");

const spinner = document.querySelector(".spinner");

const searchBtn = document.querySelector(".box-form__btn");

const inputBook = document.querySelector(".box-form__input");

const createPagination = function (count, box) {
  const div = document.createElement("div");

  div.classList.add("pagination");

  const pagesNum = Math.ceil(count / 100);

  for (let ind = 1; ind <= pagesNum; ind++) {
    const spanBtn = document.createElement("span");

    spanBtn.classList.add("pagination__number");

    spanBtn.innerText = ind;

    spanBtn.addEventListener("click", () => {
      const page = spanBtn.innerText;

      render(inputBook.value, page);
    });

    div.append(spanBtn);
  }

  box.append(div);
};

const render = function (value, page = null) {
  if (!validateUrl(value)) {
    return;
  }

  booksBox.innerHTML = "";

  spinner.style.display = "inline-block";

  fetch(
    `http://openlibrary.org/search.json?q=${validateUrl(value)}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => {
      spinner.style.display = "none";

      addTotalCount(json.numFound, booksBox);

      json.docs.forEach(
        ({ title_suggest, author_name, first_publish_year, subject }) => {
          createBookBox(
            {
              title_suggest,
              author_name,
              first_publish_year,
              subject,
            },
            booksBox
          );
        }
      );
      if (json.numFound) {
        createPagination(json.numFound, booksBox);
      }
    })
    .catch((error) => {
      spinner.style.display = "none";

      booksBox.innerText = "Something went wrong! \n" + error.message;
    });
};

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  render(inputBook.value);
});