const addBoxStyles = function (box) {
    box.style.display = "flex";
  
    box.style.flexDirection = "column";
  
    box.style.color = "rgb(0, 0, 0)";
  
    box.style.borderTop = "2px solid rgb(31, 9, 8)";
  
    box.style.borderBottom = "2px solid rgb(31, 9, 8)";
  
    box.style.margin = "5px";
  
    box.style.padding = "3px";
  
    return box;
}

const createBookBox = function (book, box) {
    let div = document.createElement("div");
  
    div = addBoxStyles(div);
  
    for (const item of Object.values(book)) {
      const p = document.createElement("p");
  
      if (!item) {
        p.textContent = "Information is missing";
      } else if (Array.isArray(item)) {
        let shortItem = item;
  
        if (item.length > 5) {
          shortItem = item.slice(0, 5);
        }
  
        p.textContent = shortItem.join(", ");
      } else {
        p.textContent = item;
      }
  
      div.append(p);
    }

    const bookTitle = div.firstElementChild;

    bookTitle.style.fontWeight = "bold";

    bookTitle.style.color = "rgb(59, 5, 14)";
  
    box.append(div);
}

export default createBookBox;