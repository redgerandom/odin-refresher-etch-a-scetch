// Select the container with the class "reset"
const resetButton = document.querySelector('#reset');

const gridContainer = document.querySelector('#grid-container');

function creatGrid() {
    let div = document.createElement('div');
    div.classList.add('square');
    gridContainer.appendChild(div);
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        gridContainer.appendChild(div);
    }
}

creatGrid();

document.addEventListener('DOMContentLoaded', () => {
    creatGrid();
});