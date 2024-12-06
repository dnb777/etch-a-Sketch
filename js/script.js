const gridContainer = document.querySelector("#grid");
const btnContainer = document.querySelector("#button-container");

createGrid(16);
paintSquare();

function createGrid(squaresPerRow){
    total = squaresPerRow * squaresPerRow;
    
    for (let i = 0; i < total; i++){
        const div = document.createElement("div");

        div.style.cssText = 
        `flex: 0 0 calc(100% / ${squaresPerRow}); 
        border: 1px solid rgb(236, 233, 233);
        aspect-ratio: 1`;

        gridContainer.appendChild(div);
    }
    paintSquare();
}

btnContainer.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case 'resize':
            const size = prompt("Choose the size of the grid", 16);

            if (size >= 1000){
            alert("To big! choose something smaller");    
            }else {
            resetGrid();
            createGrid(size);
            }
        break;

        case 'rainbow':
            paintSquare(randomRgb);
            break;
        
        case 'eraser':
            paintSquare(() => 'white');
            break;
    }
})


function paintSquare(colorFunction = () => "black") {
    gridContainer.querySelectorAll("div").forEach((div) => {
        const newDiv = div.cloneNode(true);
        newDiv.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = colorFunction();
        });
        div.replaceWith(newDiv);
    });
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function randomRgb(){
    return `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)})`;
}