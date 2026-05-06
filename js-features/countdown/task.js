const timeCount = document.querySelector("#timer");
let count = parseInt(timeCount.textContent);
const intervalId = setInterval(() => {
    count--;
    timeCount.textContent = count;
    if (count === 0) {
        clearInterval(intervalId);
        console.log(alert("Вы победили в конкурсе!"));
    }
}, 1000);
