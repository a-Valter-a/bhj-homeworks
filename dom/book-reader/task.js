const book = document.getElementById("book");

book.querySelectorAll(".font-size").forEach(control => {
  control.addEventListener("click", event => {
    event.preventDefault();

    book.querySelectorAll(".font-size").forEach(item => {
      item.classList.remove("font-size_active");
    });
    control.classList.add("font-size_active");

    book.classList.remove("book_fs-small", "book_fs-big");

    const size = control.dataset.size;
    if (size === "small") {
      book.classList.add("book_fs-small");
    } else if (size === "big") {
      book.classList.add("book_fs-big");
    }
  });
});

book.querySelectorAll("[data-text-color]").forEach(control => {
  control.addEventListener("click", event => {
    event.preventDefault();

    book.querySelectorAll("[data-text-color]").forEach(item => {
      item.classList.remove("color_active");
    });
    control.classList.add("color_active");

    book.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black");
    book.classList.add(`book_color-${control.dataset.textColor}`);
  });
});

book.querySelectorAll("[data-bg-color]").forEach(control => {
  control.addEventListener("click", event => {
    event.preventDefault();

    book.querySelectorAll("[data-bg-color]").forEach(item => {
      item.classList.remove("color_active");
    });
    control.classList.add("color_active");

    book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");
    book.classList.add(`book_bg-${control.dataset.bgColor}`);
  });
});
