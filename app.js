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
    gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;

    for (let i = 0; i < newSize * newSize; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        gridContainer.appendChild(div);
    }
}

createNewGrid(16);



function black() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
    
}

// select the button

const blackButton = document.querySelector('#fillAll');

blackButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = 'black';
    });
})

const randomButton = document.querySelector('#randomAll');
randomButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = randomColor();
    });
})

let randomColor = () => {
let letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

