//Player 1
const p1Button = document.querySelector("#p1Button");
const p1Display = document.querySelector("#p1Display");
let p1Score = 0;

//Player 2
const p2Button = document.querySelector("#p2Button");
const p2Display = document.querySelector("#p2Display");
let p2Score = 0;

//Reset Scores
const resetButton = document.querySelector("#resetButton");

//we can keep adding points until it reach winningScore value
let winningScore = 5;

p1Button.addEventListener("click", function () {
    if (p1Score !== winningScore) {
        p1Score += 1;
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (p2Score !== winningScore) {
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
});