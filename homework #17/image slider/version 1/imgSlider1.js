"use strict"

const images = document.querySelector(".content-box__item--top");

const leftBtn = document.querySelector(".item-button--left");

const rightBtn = document.querySelector(".item-button--right");

let x = 0;

leftBtn.addEventListener("click", function () {      
    images.children[x].style.display = "none";

    x === 0 ? x = images.children.length - 1 : x--;

    images.children[x].style.display = "block";
});
         
rightBtn.addEventListener("click", function () {
    images.children[x].style.display = "none";

    x >= images.children.length - 1 ? x = 0 : x++;

    images.children[x].style.display = "block"; 
});

const slideImages = (function () {
    setInterval(function () {
        if (x < images.children.length) {
            if (x === 0) {
                images.lastElementChild.style.display = "none";
            } else {
                images.children[x - 1].style.display = "none";
            }

            images.children[x].style.display = "block";

            x++;
        } else {
            x = 0;
        }
    }, 2000);
})();