"use strict"

const image = document.querySelector(".img");

const leftBtn = document.querySelector(".item-button--left");

const rightBtn = document.querySelector(".item-button--right");

const imgList = ["./images/img-1.jpg", "./images/img-2.jpg","./images/img-3.jpg","./images/img-4.jpg"];

let indOfImage = 0;

leftBtn.addEventListener("click", function () {
    indOfImage === 0 ? indOfImage = imgList.length - 1 : indOfImage--;

    image.src = imgList[indOfImage];
});

rightBtn.addEventListener("click", function () {
    indOfImage < imgList.length - 1 ? indOfImage++ : indOfImage = 0;

    image.src = imgList[indOfImage];
});

const slideImages = (function () {    
    setInterval(function () {
        if (indOfImage < imgList.length - 1) {    
            indOfImage++;
        } else {
            indOfImage = 0;
        }

        image.src = imgList[indOfImage];
    }, 2000)
})();