"use strict"

const image = document.querySelector(".img");

const leftBtn = document.querySelector(".item-button--left");

const rightBtn = document.querySelector(".item-button--right");

const imgList = [
  "./images/img-1.jpg",
  "./images/img-2.jpg",
  "./images/img-3.jpg",
  "./images/img-4.jpg",
];

let indOfImg = 0;

leftBtn.addEventListener("click", function () {
    indOfImg === 0 ? (indOfImg = imgList.length - 1) : indOfImg--;

  image.src = imgList[indOfImg];
});

rightBtn.addEventListener("click", function () {
    indOfImg < imgList.length - 1 ? indOfImg++ : (indOfImg = 0);

  image.src = imgList[indOfImg];
});

const slideImages = (function () {
  setInterval(function () {
    if (indOfImg < imgList.length - 1) {
        indOfImg++;
    } else {
        indOfImg = 0;
    }

    image.src = imgList[indOfImg];
  }, 2000);
})();