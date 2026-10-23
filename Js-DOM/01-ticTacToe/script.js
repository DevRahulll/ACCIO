// players enter their name
// The board appears with Player 1 =>  X
// Turns Switches everytime
// js check 8 possible winning combinations: 3 rows, 3 colums and two diagonals
// when win by player their name appears and board disabled.
// IF 9 cells are fill without a winner , its draw then
// Play again reset the game

const playerForm = document.getElementById("submit");
const formSection = document.getElementById("player-form");
const gameSection = document.getElementById("game");

const player1Input = document.getElementById("player-1");
const player2Input = document.getElementById("player-2");

const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");
// console.log(cells);
const restartBtn = document.getElementById("restart");

let players = [];
let currentPlayer = 0;
let board = Array(9).fill("");
let gameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

playerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const player1 = player1Input.value.trim();
    const player2 = player2Input.value.trim();

    if (!player1 || !player2) {
        alert("Both player should Exist");
        return;
    }

    players = [
        { name: player1, symbol: "X" },
        { name: player2, symbol: "O" },
    ];

    formSection.hidden = true;
    gameSection.hidden = false;

    resetGame();
});

function resetGame() {
    board = Array(9).fill("");
    currentPlayer = 0;
    gameOver = false;

    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.disabled = false;
    });

    message.textContent = `${players[0].name}, turns`;
}

restartBtn.addEventListener("click", resetGame);

function disableBoard() {
    cells.forEach(function (cell) {
        cell.disabled = true;
    });
}

function checkWinner() {
    return winningCombinations.some(function (combination) {
        const [a, b, c] = combination;

        return (
            board[a] !== "" && board[a] === board[b] && board[b] === board[c]
        );
    });
}

cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        const index = Number(cell.id) - 1;

        if (gameOver || board[index] !== "") {
            return;
        }

        const player = players[currentPlayer];
        console.log(player);

        board[index] = player.symbol;
        cell.textContent = player.symbol;
        cell.disabled = true;

        //check if current player won
        if (checkWinner()) {
            message.textContent = `${player.name} WON 🏆`;
            alert(`${player.name} WON 🏆`);
            gameOver = true;
            disableBoard();
            return;
        }

        // draw check
        if (
            board.every(function (value) {
                return value !== "";
            })
        ) {
            message.textContent = "It's a draw";
            gameOver = true;
            return;
        }

        // switch turns;

        currentPlayer = 1 - currentPlayer;

        message.textContent = `${players[currentPlayer].name} turns`;
    });
});
