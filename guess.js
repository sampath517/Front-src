let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function clickOn() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "to high Try again";
        gameResult.style.background = "blue";
    } else
    if (guessedNumber < randomNumber) {
        gameResult.textContent = "to low Try again";
        gameResult.style.background = "blue";
    } else
    if (guessedNumber === randomNumber) {
        gameResult.textContent = "congrulations correct";
        gameResult.style.background = "green";
    } else {
        gameResult.textContent = "please enter vaild number";
        gameResult.style.background = "red";

    }
}