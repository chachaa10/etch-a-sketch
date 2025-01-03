const copyright = document.querySelector("#copyright");
copyright.textContent = `Copyright © ${new Date().getFullYear()} by Chalex`;

const gridSize = document.querySelector("#gridSize");
const gridInput = document.querySelector("#gridInput");

gridInput.addEventListener("input", (e) => {
	// grid.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
	// grid.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`;

    console.log(e.target.value);
    
    gridSize.textContent = `${e.target.value} x ${e.target.value}`;
});

