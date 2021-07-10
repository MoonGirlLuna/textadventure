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
    } else if (input === 'commands') {
        listCommands()
    } else if (input.startsWith("pick up ") || input.startsWith("grab ")) {
        pickUp()
    } else {
        verbHandler()
    }
}

function verbHandler() {
    let visibleVerbs = Object.keys(locations[currentLocation].visibleVerbs)
    let hiddenVerbs = Object.keys(locations[currentLocation].hiddenVerbs)
    if (visibleVerbs.includes(userInput.value.toLowerCase())) {
        let verb = locations[currentLocation].visibleVerbs[userInput.value.toLowerCase()]
        if (typeof verb === "string") {
            locations[currentLocation].visibleVerbs[verb]()
        } else {
            verb()
        }
    } else if (hiddenVerbs.includes(userInput.value.toLowerCase())) {
        let verb = locations[currentLocation].hiddenVerbs[userInput.value.toLowerCase()]
        if (typeof verb === "string") {
            locations[currentLocation].hiddenVerbs[verb]()
        } else {
            verb()
        }
    } else {
        printBold("Invalid Action.")
    }
}
