const addTotalCount = function (num, box) {
    let headingCount = document.createElement("h4");

    headingCount.style.textAlign = "center";

    headingCount.style.margin = "0";

    headingCount.style.color = "rgb(47, 39, 135)";

    headingCount.textContent = `Total count of results: ${num}`;

    box.append(headingCount);
}

export default addTotalCount;