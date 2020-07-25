"use strict"

const btn = document.querySelector(".item-btn");

const inText = document.querySelector(".box-form input[name='text']");

const inTime = document.querySelector(".box-form input[name='time']");

const list = document.querySelector(".list");

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");

  const text = inText.value;

  if (!text) {
    return;
  }

  const time = inTime.value;

  newItem.classList.add("list__item");

  newItem.innerText = `${text} ${time}`;

  newItem.addEventListener("click", function (ev) {
    const indexOfItem = Array.prototype.indexOf.call(list.childNodes, newItem);

    for (let i = 0; i < indexOfItem; i++) {
      if (!list.childNodes[i].hasAttribute("style")) {
        alert("You haven't done your previous plan(s)");

        return;
      }
    }

    if (newItem.hasAttribute("style")) {
      newItem.removeAttribute("style");
    } else {
      newItem.style.textDecoration = "line-through";
    }
  });

  list.append(newItem);
});