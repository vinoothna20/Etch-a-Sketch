const mainCont = document.querySelector("#container");

const headerCont = document.createElement("div");
headerCont.setAttribute("id", "header");

const heading = document.createElement("h1");
heading.innerText = "Sketch Pad";

const gridSizeBtn = document.createElement("button");
gridSizeBtn.innerText = "Change Grid Size";
gridSizeBtn.style.backgroundColor = "aquamarine";

const clearBtn = document.createElement("button");
clearBtn.innerText = "Clear Grid";
clearBtn.style.backgroundColor = "yellow";

const noteMsg = document.createElement("p");
noteMsg.innerText = "Note: You can remove the background color of a square by making 10 intractions or by clicking on it. Njoy Sketching...";

headerCont.append(heading, gridSizeBtn, clearBtn, noteMsg);

document.body.insertBefore(headerCont, mainCont);

gridSizeBtn.addEventListener("click", handleGridSize);

let gridSize = 16;

clearBtn.addEventListener("click", () => {
   

    handleGrid(gridSize);
})

handleGrid(gridSize);

function handleGridSize() {
    gridSize = prompt("Enter number of squares per row");

    if (gridSize > 100 || gridSize < 1) {
        alert("Enter a number between 1 and 100. Otherwise our sketch pad may crash :(");
    } else {
        handleGrid(gridSize);
    }
}

function handleGrid(num) {
    mainCont.innerHTML = "";

    let squareCount = 0

    let interactionCounter = [];

    let squareBgOpacity;

    for (let i = 0; i < num; i++) {
        const outerDiv = document.createElement("div");
        outerDiv.setAttribute("class", "row");

        mainCont.appendChild(outerDiv);
    }

    const rowList = document.querySelectorAll(".row");

    rowList.forEach((row) => {
        for (let i = 0; i < num; i++) {
            const innerDiv = document.createElement("div");
            innerDiv.setAttribute("class", "column");
            innerDiv.setAttribute("id", squareCount);

            row.appendChild(innerDiv);

            interactionCounter.push({ id: squareCount, count: 0 })

            squareCount++;
        }
    })

    const squareGridList = document.querySelectorAll(".column");

    squareGridList.forEach((square) => {
        square.addEventListener("mouseover", addDivBg);

        square.addEventListener("click", (e) => {
            square.style.backgroundColor = "white";
            let obj = interactionCounter.find((item) => item.id === Number(e.target.id));

            if (obj) obj.count = 0;

            square.style.opacity = "";
        })

        function addDivBg(e) {
            let obj = interactionCounter.find((item) => item.id === Number(e.target.id));

            if (obj) obj.count++;

            if (obj.count > 10) {
                obj.count = 1;
            }

            if (obj.count === 0 || obj.count === 10) {
                square.style.backgroundColor = "white";
                squareBgOpacity = 100;
            } else if (obj.count === 1) {
                square.style.backgroundColor = getRandomColor();
            }

            if (obj.count === 9) {
                squareBgOpacity = getRandomNumber(10, 19);
            } else if (obj.count === 8) {
                squareBgOpacity = getRandomNumber(20, 29);
            } else if (obj.count === 7) {
                squareBgOpacity = getRandomNumber(30, 39);
            } else if (obj.count === 6) {
                squareBgOpacity = getRandomNumber(40, 49);
            } else if (obj.count === 5) {
                squareBgOpacity = getRandomNumber(50, 59);
            } else if (obj.count === 4) {
                squareBgOpacity = getRandomNumber(60, 69);
            } else if (obj.count === 3) {
                squareBgOpacity = getRandomNumber(70, 79);
            } else if (obj.count === 2) {
                squareBgOpacity = getRandomNumber(80, 89);
            }

            square.style.opacity = `${squareBgOpacity}%`;

        }

    })



}

function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomColor() {
    let temp = [];
    i = 0;

    while (i < 3) {
        temp.push(getRandomNumber(0, 255));
        i++;
    }

    return `rgb(${temp.join(",")})`;
}






