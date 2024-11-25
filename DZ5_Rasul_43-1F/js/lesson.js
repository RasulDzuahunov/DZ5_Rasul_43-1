// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentTab = 0

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = 'none'
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block'
    tabs[id].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent ()
showTabContent ()
setInterval(switchTab, 3000)



tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                currentTab = tabIndex
                showTabContent(tabIndex)
            }
        }) 
    }
}

//converter

const rates = {
    somToUsd: 0.011, 
    usdToSom: 90.91, 
    usdToEur: 0.9,   
    eurToUsd: 1.11,  
};

const somInput = document.getElementById("som");
const usdInput = document.getElementById("usd");
const eurInput = document.getElementById("eur");


function convertFromSom(value) {
    usdInput.value = (value * rates.somToUsd).toFixed(2);
    eurInput.value = (value * rates.somToUsd * rates.usdToEur).toFixed(2);
}

function convertFromUsd(value) {
    somInput.value = (value * rates.usdToSom).toFixed(2);
    eurInput.value = (value * rates.usdToEur).toFixed(2);
}

function convertFromEur(value) {
    usdInput.value = (value * rates.eurToUsd).toFixed(2);
    somInput.value = (value * rates.eurToUsd * rates.usdToSom).toFixed(2);
}


somInput.addEventListener("input", () => {
    if (somInput.value) convertFromSom(parseFloat(somInput.value));
});

usdInput.addEventListener("input", () => {
    if (usdInput.value) convertFromUsd(parseFloat(usdInput.value));
});

eurInput.addEventListener("input", () => {
    if (eurInput.value) convertFromEur(parseFloat(eurInput.value));
});
