//  Tabs and contents
const tabsElements =  Array.of(...document.getElementsByClassName("tab"))
const contentArray = Array.of(...document.getElementsByClassName("tab__content"))

// Active tab and content
let activeTab = document.getElementsByClassName("tab_active")[0]
let activeContetn = document.getElementsByClassName("tab__content")[0]

// add listeners
for (tab of tabsElements) {
    tab.addEventListener("click", (event) => {
        if (!event.target.className.includes("tab_active")){
            const indexOfTab = tabsElements.indexOf(tab)
            activeContetn.classList.toggle("tab__content_active")
            activeTab.classList.toggle("tab_active")
            contentArray[indexOfTab].classList.toggle("tab__content_active")
        }
    })
}