const container = document.getElementById("container");

function createDivs(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.add('hovered');
            const randomColor = getRandomColor();
            gridItem.style.backgroundColor = randomColor;

        });
        container.appendChild(gridItem);
    } 
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

createDivs(16);