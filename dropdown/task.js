const selectorButton = document.querySelector(".dropdown__value")

function addSelectListOnElement(element) {
    const listElement = document.querySelector(".dropdown__list")
    element.addEventListener("click", function (ev) {
        listElement.classList.toggle("dropdown__list_active")
        const dropdownLinks = document.getElementsByClassName("dropdown__link")

        for (dropdownLink of dropdownLinks) {
            dropdownLink.addEventListener("click", (ev) =>{
                ev.preventDefault()
                const newValue = String(ev.target.textContent)
                element.textContent = newValue
                listElement.classList.remove("dropdown__list_active")
            })
        }
    })
}
addSelectListOnElement(selectorButton)