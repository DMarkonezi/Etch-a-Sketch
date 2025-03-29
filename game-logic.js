let startingGridDimension = 16;

function createGrid(dimension) {
    const gridDiv = document.querySelector("#game-grid");

    // Fastest way to delete all html code inside the div, which includes any grid previously created
    gridDiv.innerHTML = "";

    const tileSize = Math.floor((640 - (dimension - 2)) / dimension);

    for (let i = 0; i < dimension; i++) {

        const gridRowDiv = document.createElement("div");
        gridRowDiv.id = "row" + i.toString();
        gridRowDiv.style.display = "flex";
        gridRowDiv.style.flexDirection = "row";

        for (let j = 0; j < dimension; j++) {
            const gridRowElement = document.createElement("div");
            gridRowElement.id = i.toString() + j.toString();
            gridRowElement.style.border = "1px solid black";
            gridRowElement.style.backgroundColor = "white";
            gridRowElement.style.width = gridRowElement.style.height = tileSize.toString() + "px";
            gridRowElement.classList.add("gridTile");

            gridRowElement.addEventListener("mouseover", () => {
                console.log(gridRowElement.id);
                gridRowElement.style.backgroundColor = "red";
            });

            gridRowDiv.appendChild(gridRowElement);
        }

        gridDiv.appendChild(gridRowDiv);
    }
}

createGrid(startingGridDimension); // Initial grid setup

const button = document.querySelector("#dimensionChangerButton")

button.addEventListener("click", () => {
    let newDimension = prompt("What is the new dimension of the grid?");
    newDimension = Number(newDimension); // Convert input to a number

    if (!isNaN(newDimension) && newDimension > 0) { // Ensure it's a valid positive number
        createGrid(newDimension);
    } else {
        alert("Please enter a valid number.");
    }
});

