const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid();
});


function createGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(div);
    }
}

createGrid();
