/*let name = localStorage.getItem("name");
let dream = localStorage.getItem("dream");
let like = localStorage.getItem("like");
console.log(name);
console.log(dream);
console.log(like);

let code = localStorage.getItem("code");
console.log(code);*/

let saveButton = document.getElementById("saveButton");
let textAreaElement = document.getElementById("message");
saveButton.onclick = function() {
    let userEnterdText = textAreaElement.value;
    localStorage.setItem("userEnterdText", userEnterdText);
}

let storedUserInputValue = localStorage.getItem("userEnterdText");
if (storedUserInputValue === null) {
    textAreaElement.value = "";
} else {
    textAreaElement.value = storedUserInputValue;
}