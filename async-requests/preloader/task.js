const loader = document.getElementById("loader");
const items = document.getElementById("items");

function renderValutes(valutes) {
  items.innerHTML = "";

  Object.values(valutes).forEach(valute => {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `
      <div class="item__code">
        ${valute.CharCode}
      </div>
      <div class="item__value">
        ${valute.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;
    items.append(item);
  });
}

const cached = localStorage.getItem("valutes");
if (cached) {
  renderValutes(JSON.parse(cached));
  loader.classList.remove("loader_active");
}

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("load", () => {
  const valutes = xhr.response.response.Valute;
  localStorage.setItem("valutes", JSON.stringify(valutes));
  renderValutes(valutes);
  loader.classList.remove("loader_active");
});
