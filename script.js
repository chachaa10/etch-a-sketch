const gridInput = document.querySelector("#gridInput");
const gridContainer = document.querySelector("#gridContainer");

// Get references to the buttons
const colorInput = document.querySelector("#color");
const brushBtn = document.querySelector("#brush");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");

function updateCopyright() {
	const copyright = document.querySelector("#copyright");
	copyright.textContent = `Copyright © ${new Date().getFullYear()} by Chalex`;
}
updateCopyright();

function initGrid() {
	createGrid(16);
}
initGrid();

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
		gridContainer.append(gridItem);
	}
}

gridInput.addEventListener("input", (e) => {
	const size = e.target.value;
	gridInput.attributes.value.value = size;

	updateGridSizeDisplay(size);
	createGrid(size);
});

// TODO: Add funtionality to update the color of the grid items
