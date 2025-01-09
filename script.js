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
createGrid(16);

function changeGridSize() {
	gridInput.addEventListener("change", (e) => {
		const size = e.target.value;
		gridInput.attributes.value.value = size;

		updateGridSizeDisplay(size);
		createGrid(size);

		let color = colorInput.value;
		getColor();
		colorGrid(color);
	});
}
changeGridSize();

function getColor() {
	colorInput.addEventListener("change", (e) => {
		let color = e.target.value;

		colorGrid(color);
	});
}
getColor();

function colorGrid(color) {
	const gridItems = gridContainer.querySelectorAll(".grid-item");
	gridItems.forEach((item) => {
		item.addEventListener("mouseover", (e) => {
			if (e.buttons === 1) {
				// Only color when the left mouse button is held
				item.style.backgroundColor = color;
			}
		});

		item.addEventListener("mousedown", () => {
			item.style.backgroundColor = color;
		});
	});
}
colorGrid(colorInput.value);

rainbowBtn.addEventListener("click", () => {
	createGrid(gridInput.value);
	rainbowMode();
});

function randomColor() {
	return Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0");
}

function rainbowMode() {
	const gridItems = gridContainer.querySelectorAll(".grid-item");

	gridItems.forEach((item) => {
		item.addEventListener("mouseover", (e) => {
			if (e.buttons === 1) {
				// Only apply when the left mouse button is held
				item.style.backgroundColor = `#${randomColor()}`;
			}
		});

		item.addEventListener("mousedown", () => {
			item.style.backgroundColor = `#${randomColor()}`;
		});
	});
}

