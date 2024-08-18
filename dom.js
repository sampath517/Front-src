let h1Element = document.createElement('h1');
h1Element.textContent = "Web techologies";
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);


let btnElement = document.createElement('button');
btnElement.textContent = "change heading";
btnElement.onclick = function() {
    h1Element.textContent = "4.0 technologies";
    h1Element.classList.add("heading");
    btnElement.classList.add("button");


};
document.getElementById('myContainer').appendChild(btnElement);
let removeStylesBtnElement = document.createElement("button");
removeStylesBtnElement.textContent = "Remove Styles";

document.getElementById("myContainer").appendChild(removeStylesBtnElement);

removeStylesBtnElement.onclick = function() {
    h1Element.classList.remove("heading");
};