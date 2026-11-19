document.querySelectorAll(".rotator").forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll(".rotator__case"));
  let activeIndex = cases.findIndex(item => item.classList.contains("rotator__case_active"));

  if (activeIndex === -1) {
    activeIndex = 0;
    cases[0].classList.add("rotator__case_active");
  }

  function rotate() {
    const current = cases[activeIndex];
    current.classList.remove("rotator__case_active");

    activeIndex = (activeIndex + 1) % cases.length;
    const next = cases[activeIndex];

    next.classList.add("rotator__case_active");
    next.style.color = next.dataset.color || "";

    const speed = Number(next.dataset.speed) || 1000;
    setTimeout(rotate, speed);
  }

  const active = cases[activeIndex];
  active.style.color = active.dataset.color || "";
  const startSpeed = Number(active.dataset.speed) || 1000;
  setTimeout(rotate, startSpeed);
});
