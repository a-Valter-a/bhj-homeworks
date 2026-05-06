const deadSpan = document.getElementById("dead");
const lostSpan = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;

const getHole = (index) => document.getElementById(`hole${index}`);

const updateDisplay = () => {
    deadSpan.textContent = deadCount;
    lostSpan.textContent = lostCount;
};

const resetGame = () => {
    deadCount = 0;
    lostCount = 0;
    updateDisplay();
};

const checkWin = () => {
    if (deadCount === 10) {
        alert("Поздравляем! Вы убили 10 кротов и победили!");
        resetGame();
    }
};

const checkLose = () => {
    if (lostCount === 5) {
        alert("Вы проиграли! 5 промахов. Игра начинается заново.");
        resetGame();
    }
};

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener("click", () => {
        if (hole.classList.contains("hole_has-mole")) {
            deadCount++;
            updateDisplay();
            checkWin();
        } else {
            lostCount++;
            updateDisplay();
            checkLose();
        }
    });
}
