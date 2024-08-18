let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
bgContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);
let Arrays = ["Milk", "Cake", "pizza", "Drink", "Ice cream", ];
for (let Array of Arrays) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = Array;
    listContainerEl.appendChild(listItemEl);
}

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "deliveryMode";
bgContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

let btnEl = document.createElement("button");
btnEl.classList.add("btn", "btn-success");
btnEl.textContent = "Proceed To Pay";
bgContainerEl.appendChild(btnEl);