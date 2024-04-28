createGrid(16);
changeColor("black");

function createGrid(size) {
    const container = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for (let j = 0; j < size; j++) {   
            const column = document.createElement("div");
            column.classList.add("square");
            row.appendChild(column);
        }
    }
}

function changeColor(color) {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => square.style.backgroundColor = color);
    });    
}