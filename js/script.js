const gridContainer = document.querySelector("#grid");

function createGrid(n){
    for (let i = 0; i < (n * n); i++){
        let div = document.createElement("div");
        div.classList = "square";
        gridContainer.appendChild(div);
    }
}

createGrid(16);