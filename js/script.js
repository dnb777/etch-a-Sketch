const gridContainer = document.querySelector("#grid");
const btnResize = document.querySelector(".resize");

createGrid(16);

function createGrid(squaresPerRow){
    total = squaresPerRow * squaresPerRow;
    
    for (let i = 0; i < total; i++){
        const div = document.createElement("div");

        div.style.cssText = 
        `flex: 0 0 calc(100% / ${squaresPerRow}); 
        border: 1px solid rgb(236, 233, 233);
        aspect-ratio: 1`;

        gridContainer.appendChild(div);
        
        div.addEventListener("mouseenter", (e) => {
            e.target.classList.add("paint");
        })
    }
}


btnResize.addEventListener("click", () => {
    const size = prompt("Choose the size of the grid", 16);

    if (size >= 1000){
        alert("To big! choose something smaller");    
    }else {
        resetGrid();
        createGrid(size);
    }
})


function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}