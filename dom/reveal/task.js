const reveals = Array.from(document.querySelectorAll(".reveal"));

function checkReveals() {
  reveals.forEach(reveal => {
    const {top, bottom} = reveal.getBoundingClientRect();
    const isVisible = top < window.innerHeight && bottom > 0;

    if (isVisible) {
      reveal.classList.add("reveal_active");
    }
  });
}

window.addEventListener("scroll", checkReveals);
checkReveals();
