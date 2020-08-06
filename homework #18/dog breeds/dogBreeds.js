"use strict"

const dogBreeds = document.querySelector(".dog-breeds");

const imageBox = document.querySelector(".content-image-box");

const createImage = function (src, breed) {
  const image = document.createElement("img");

  image.src = src;

  image.alt = breed;

  image.style.maxWidth = "100%";

  image.style.maxHeight = "100%";

  imageBox.append(image);
}

const getImageOfBreed = function (breed) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((response) => response.json())
    .then((datas) => {
      createImage(datas.message, breed);
    })
    .catch((error) => {
      imageBox.innerText = "Something went wrong! \n" + error.message;
    });
}

dogBreeds.addEventListener("change", (event) => {
  imageBox.innerHTML = "";

  getImageOfBreed(event.target.value);
});