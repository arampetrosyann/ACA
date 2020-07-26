"use strict";

const images = document.querySelector(".content-box__item--top");

const leftBtn = document.querySelector(".item-button--left");

const rightBtn = document.querySelector(".item-button--right");

let indOfChild = 0;

leftBtn.addEventListener("click", function () {
  images.children[indOfChild].style.display = "none";

  if (indOfChild === 0) {
    indOfChild = images.children.length - 1;
  } else {
    indOfChild--;
  }

  images.children[indOfChild].style.display = "block";
});

rightBtn.addEventListener("click", function () {
  images.children[indOfChild].style.display = "none";

  if (indOfChild >= images.children.length - 1) {
    indOfChild = 0;
  } else {
    indOfChild++;
  }

  images.children[indOfChild].style.display = "block";
});

const slideImages = (function () {
  setInterval(function () {
    if (indOfChild < images.children.length) {
      if (indOfChild === 0) {
        images.lastElementChild.style.display = "none";
      } else {
        images.children[indOfChild - 1].style.display = "none";
      }

      images.children[indOfChild].style.display = "block";

      indOfChild++;
    } else {
      indOfChild = 0;
    }
  }, 2000);
})();