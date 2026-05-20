
const dropdowns = document.querySelectorAll(".dropdown")
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target
        const dropdownList = dropdown.querySelector(".dropdown__list")
        if(target.closest(".dropdown__item")) {
            const value = dropdown.querySelector(".dropdown__value");
            if(target.classList.contains('dropdown__link')){
                value.textContent = target.textContent
            }else {
                const link = target.querySelector(".dropdown__link"); 
                value.textContent = target.textContent
            }
        }
        dropdownList.classList.toggle("dropdown__list_active")
    })
})


