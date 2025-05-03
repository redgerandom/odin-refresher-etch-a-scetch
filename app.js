const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    let newSize = prompt('Enter new grid size (1-100):');
    if (newSize < 1 || newSize > 256) {
        alert('Please enter a number between 1 and 256.');
        return;
    }
createNewGrid(newSize)
});

function createNewGrid(newSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < newSize * newSize; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(div);
    }
}



function createGrid() {
    
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(div);
    }
}

createGrid();
