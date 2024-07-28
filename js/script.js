// Select the container div
const container = document.getElementById('container');

// Function to create the grid
function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';

    // Set the grid item size
    const gridItemSize = 960 / size;

    // Create the grid items
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;

        // Add event listener for mouseover to change background color
        gridItem.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            gridItem.style.backgroundColor = randomColor;
        });

        container.appendChild(gridItem);
    }
}

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to prompt for new grid size and create a new grid
function resizeGrid() {
    let newSize = parseInt(prompt("Enter the number of squares per side (max 100):"));
    
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a number between 1 and 100.");
    }
}

// Add event listener to the resize button
document.getElementById('resizeButton').addEventListener('click', resizeGrid);