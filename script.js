const body = document.querySelector("body");

const button = document.querySelector("button");
button.addEventListener("click", () => {
    body.removeChild(body.lastElementChild);
    createGrid(getSize());
    setColor("black");
});

createGrid(16);
setColor("black");

function getSize() {
    let size;

    do {
        size = prompt("Size (1 - 100)");
    } while (size < 1 || size > 100);

    return size;
}

function createGrid(size) {
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for (let j = 0; j < size; j++) {   
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

function setColor(color) {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => square.style.backgroundColor = color);
    });    
}