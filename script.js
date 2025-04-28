const mainCont = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "row");

    mainCont.appendChild(outerDiv);
}

const rowList = document.querySelectorAll(".row");

rowList.forEach((row) => {
    for (let i = 0; i < 16; i++) {
        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","column");

        row.appendChild(innerDiv);
    }
})
