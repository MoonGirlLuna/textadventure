const userInput = document.getElementById("userInput");
var currentLocation;
let gameOver;

function main() {
    currentLocation = Object.keys(locations)[0]
    printBold(locations[currentLocation].onEntry)
}

main()

userInput.onkeypress = function (event) {
    if (event.keyCode == 13) {
        printText(userInput.value)
        commandInput()
        userInput.value = ""
    }
}

function printText(text) {
    let p = document.createElement("p");
    const div = document.getElementById("userText");
    div.appendChild(p)
    p.innerHTML = text

    let scroll = document.getElementById("userText");
    scroll.scrollTop = scroll.scrollHeight;
}

function printBold(text) {
    printText(text.bold())
}

function look() {
    if (userInput.value.toLowerCase() === "look") {
        printBold(Object.keys(locations[currentLocation].objects).join(", "))
    }
}

function listLocation() {
    if (userInput.value.toLowerCase() === "location") {
        printBold(currentLocation)
    }
}

function win() {
    if (userInput.value.toLowerCase() === "win") {
        printBold("You Won! Refresh to play again!")
        document.getElementById("userInput").disabled = true;
    }
}

function isgameOver() {
    if (gameOver === true) {
        printBold("Game Over. Refresh to play again!")
        document.getElementById("userInput").disabled = true;
    }
}

function listCommands() {
    if (userInput.value.toLowerCase() === "commands") {
        printBold(Object.keys(locations[currentLocation].visibleVerbs).join(", "))
}
}