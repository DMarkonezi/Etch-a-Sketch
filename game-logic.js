let gridDimension = 16;

function createGrid(dimension) {
    const gridDiv = document.querySelector("#game-grid");

    if (gridDiv.children.length != 0) {
        for (let i = 0; i < gridDiv.children.length; i++) {
            for (let j = 0; j < gridDiv.children[i].length; j++) {
                gridDiv.removeChild(gridDiv.children[i]);
            }
        }
    }

    for (let i = 0; i < dimension; i++) {

        const gridRowDiv = document.createElement("div");
        gridRowDiv.id = "row" + i.toString();
        gridRowDiv.style.display = "flex";
        gridRowDiv.style.flexDirection = "row";

        for (let j = 0; j < dimension; j++) {
            const gridRowElement = document.createElement("div");
            gridRowElement.id = i.toString() + j.toString();
            gridRowElement.style.border = "1px solid black";
            gridRowElement.style.width = "30px";
            gridRowElement.style.height = "30px";
            gridRowDiv.appendChild(gridRowElement);
        }

        gridDiv.appendChild(gridRowDiv);
    }
}

createGrid(gridDimension);