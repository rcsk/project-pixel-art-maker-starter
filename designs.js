var sizeSubmit = document.querySelector("#sizePicker");

// Control Submit Query Button
sizeSubmit.onsubmit = function(evt) {
	pixelCanvas.innerHTML = "";
	const gridHeight = document.querySelector("#inputHeight");
	const gridWidth = document.querySelector("#inputWidth");
	makeGrid(gridHeight.value, gridWidth.value);
    evt.preventDefault();
}

/**
* Grid Construction by taking in the user selectable desired height
* and width of the grid.
* @description Builds a Grid
* @param {value} height - The user selectable desired height of grid
* @param {value} width - The user selectable desired width of grid
*/
function makeGrid(height, width) {
	// Row Creation
    for (x = 1; x <= height; x++) {
    	var row = document.createElement("tr");
    	pixelCanvas.appendChild(row);
    	// Column Creation
    	for (y = 1; y <= width; y++) {
    		var cell = document.createElement("td");
    		row.appendChild(cell);
    		// Add Event Listener for Color Changing
    		const box = document.querySelectorAll("td");
    		for (var i = 0; i < box.length; i++) {
    			box[i].addEventListener("click", function(event) {
    				const color = document.querySelector("#colorPicker");
    				event.target.style.backgroundColor = color.value;
    			});
    		}
    	}
    }
};