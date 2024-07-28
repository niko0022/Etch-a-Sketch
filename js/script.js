const container = document.getElementById("container");

function createDivs(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
}

createDivs(16)