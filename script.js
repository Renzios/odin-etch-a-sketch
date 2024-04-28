const container = document.querySelector(".container");

let size = prompt("Size");

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

const squares = document.querySelectorAll(".square");

let color = prompt("Color");

squares.forEach((square) => {
    square.addEventListener("mouseenter", () => square.style.backgroundColor = color);
});