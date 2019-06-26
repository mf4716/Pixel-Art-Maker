// Select color input
// Function to change color of the grid cell selected
function chooseCellColor() {
	this.style.backgroundColor = document.getElementById("colorPicker").value;
}

// Select size input
// When size is submitted by the user, call makeGrid()
const gridButton = document.getElementById('createClearGrid');
gridButton.addEventListener("click", makeGrid); // Event listener to create Grid after clicking Create / Reset Grid button
gridButton.addEventListener("mouseover", function(event){ // Event listener to change button text color on mouse over
	event.target.style.color = "red";
	// reset the color after a short delay
	setTimeout(function() {
		event.target.style.color = "";
  }, 1500);
}, false);

// Function to create and clear grid
function makeGrid() {

// Your code goes here!
    
	alert("Setting (and clearing) Grid to desired size!"); // Page acknolwedgement that user clicked button to Create and Clear Grid 
    event.preventDefault(); // Prevents default action of submitting form data to action, which would result in erasing the canvas altogether 
	
	// Variable declaration for height, width, and drawing the grid canvas 
	const userHeight = document.getElementById("inputHeight").value;
    const userWidth = document.getElementById("inputWidth").value;
    const canvas = document.getElementById("pixelCanvas"); 
    
	canvas.innerText=""; // Clear and create an empty table when createClearGrid button clicked
    
	// Draw grid, and paint grid cell color
    for (let numRows=0; numRows<userHeight; ++numRows) { // Loop to draw number of new rows to add until inputHeight is reached
        const newRow = canvas.insertRow(-1); 
        for (let cellWidth=0; cellWidth<userWidth; ++cellWidth) { // Nested Loop to draw number of cells to add until inputWidth is reached
            const newCell = newRow.insertCell(-1);
            newCell.onclick = chooseCellColor;  // Call function to change cell color when color is selected
        }
    }
}
