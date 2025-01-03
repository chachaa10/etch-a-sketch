const gridInput = document.querySelector("#gridInput");
const gridContainer = document.querySelector("#gridContainer");
const gridItems = gridContainer.querySelectorAll(".grid-item");

// Get references to the buttons
const colorInput = document.querySelector("#color");
const brushBtn = document.querySelector("#brush");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");

// Initialize grid
gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;

function updateCopyright() {
	const copyright = document.querySelector("#copyright");
	copyright.textContent = `Copyright © ${new Date().getFullYear()} by Chalex`;
}
updateCopyright();

function updateGridSizeDisplay(size) {
	const gridSize = document.querySelector("#gridSize");
	gridSize.textContent = `${size} x ${size}`;
}

function createGrid(size) {
	gridContainer.innerHTML = ""; // Clear the grid
	gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("grid-item");
		gridContainer.appendChild(gridItem);
	}
}

gridInput.addEventListener("input", (e) => {
	const size = e.target.value;
	updateGridSizeDisplay(size);
	gridInput.attributes.value.value = size;

	createGrid(size);
});

// TODO: Add funtionality to update the color of the grid items
