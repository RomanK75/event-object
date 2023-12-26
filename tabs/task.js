//  Tabs and contents
const tabsElements =  Array.of(...document.getElementsByClassName("tab"))
const contentArray = Array.of(...document.getElementsByClassName("tab__content"))


// add listeners
for (tab of tabsElements) {
    tab.addEventListener("click", (event) => {
        if (!event.target.className.includes("tab_active")){
            let activeTab = document.getElementsByClassName("tab_active")[0]
            let activeContetn = document.getElementsByClassName("tab__content_active")[0]
            const indexOfTab = tabsElements.indexOf(event.target)
            console.log(indexOfTab)
            activeContetn.classList.remove("tab__content_active")
            activeTab.classList.remove("tab_active")
            contentArray[indexOfTab].classList.add("tab__content_active")
            tabsElements[indexOfTab].classList.add("tab_active")
        }
    })
}