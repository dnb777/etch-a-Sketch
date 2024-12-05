const gridContainer = document.querySelector("#grid");

function createGrid(squaresPerRow){
    total = squaresPerRow * squaresPerRow;
    
    for (let i = 0; i < total; i++){
        const div = document.createElement("div");

        div.style.cssText = 
        `flex: 0 0 calc(100% / ${squaresPerRow}); 
        border: 1px solid black;
        aspect-ratio: 1`;

        gridContainer.appendChild(div);
        
        div.addEventListener("mouseenter", (e) => {
            e.target.classList.add("paint");
        })
    }
}

createGrid(32);


