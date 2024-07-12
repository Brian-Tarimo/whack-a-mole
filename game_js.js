const squares = document.querySelectorAll('.square');
const scoreDisplay = document.getElementById('score');
let score = 0;
let molePosition;
let hitPosition;
let timerId;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    molePosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === molePosition) {
            score++;
            scoreDisplay.textContent = score;
            molePosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();
