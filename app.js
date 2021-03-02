//Player 1
const p1Button = document.querySelector("#p1Button");
const p1Display = document.querySelector("#p1Display");
let p1Score = 0;

//Player 2
const p2Button = document.querySelector("#p2Button");
const p2Display = document.querySelector("#p2Display");
let p2Score = 0;


//Play to
const winningScoreSelect = document.querySelector("#playTo");
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

//we can keep adding points until it one of the player score reach winningScore. After than isGameOver is set to true which disabling possibility to add more points
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

//Reset button
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", reset);

//function that resets Scores and scores display
function reset() {
    isGameOver = false; //set isGameOver to deufalt state which is true
    p1Score = 0; //reset Player 1's score and display
    p1Display.textContent = 0;
    p1Display.classList.remove("winner", "loser");
    p2Score = 0; //reset Player 2's score and display
    p2Display.textContent = 0;
    p2Display.classList.remove("winner", "loser");
}


p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }
});