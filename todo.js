let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckedbox";
document.body.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "myCheckbox");
labelElement.textContent = "Internship";
document.body.appendChild(labelElement);