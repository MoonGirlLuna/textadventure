function commandInput() {
    let input = userInput.value.toLocaleLowerCase()
    if (input === "inventory") {
        checkInventory()
    } else if (input === "look") {
        look()
    } else if (input === "location") {
        listLocation()
    } else if (input === 'win') {
        win()
    } else {
        verbHandler()
    }
}

function verbHandler() {
    let verbs = Object.keys(locations[currentLocation].verbs)
    if (verbs.includes(userInput.value.toLowerCase())) {
      // Something
    } else {
      printBold("Invalid Action.")
    }
}
