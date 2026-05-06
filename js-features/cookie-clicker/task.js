const cookie = document.querySelector("#cookie");
const clickerCounter = document.querySelector("#clicker__counter");
let clicks = 0;
let isBigCookie = false;
const handlerClick = function () {
    clicks++;
    clickerCounter.textContent = clicks;

    if (isBigCookie) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
    isBigCookie = !isBigCookie;
};
addEventListener("click", handlerClick);
