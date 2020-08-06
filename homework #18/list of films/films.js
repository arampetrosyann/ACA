"use strict"

const filmsContent = document.querySelector(".content-films");

const createFilmBox = function (film) {
  const div = document.createElement("div");

  div.classList.add("film-box");

  const titlesArray = ["Title:", "Description:", "Director:", "Release Date:"];

  let indexOfArray = 0;

  for (const key in film) {
    const section = document.createElement("section");

    const p = document.createElement("p");

    section.classList.add("film-box__item");

    p.classList.add("about-film");

    p.textContent = film[key];

    section.innerText = titlesArray[indexOfArray];

    section.append(p);

    div.append(section);

    indexOfArray++;
  }

  filmsContent.append(div);
}

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((datas) => {
    datas.forEach(({ title, description, director, release_date }) => {
      createFilmBox({ title, description, director, release_date });
    });
  })
  .catch((error) => {
    filmsContent.innerText = "Something went wrong! \n" + error.message;
  });