const triggerButton = document.getElementById("trigger");
const daysUntilList = document.getElementById("days-until");

const christmas = {
    date: new Date(2021,12,25),
    name: "Christmas"
}

const newYear = {
    date: new Date(2022,01,01),
    name: "New Year"
}

const valentines = {
    date: new Date(2022,02,14),
    name: "Valentines Day"
}

let daysUntilArr = [];
let eventsArr = [christmas, newYear, valentines];

function getDaysUntil() {
    let today = new Date();

    eventsArr.forEach(event => {
        daysUntilArr.push(parseInt((event.date - today) / (24*3600*1000)).toString());
    })
}

function appendToList() {
    getDaysUntil();

    let frag = document.createDocumentFragment();

    daysUntilArr.forEach((days, i) => {
        let li = document.createElement("li");
        li.textContent = `${days} days until ${eventsArr[i].name}`;
        frag.append(li);
    })
    daysUntilList.append(frag);

    daysUntilArr = []; 
}

triggerButton.addEventListener("click", appendToList);