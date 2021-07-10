inventory = []

function checkInventory() {
  if (userInput.value.toLowerCase() === "inventory") {
    if (inventory.length === 0) {
      printBold("You have nothing.")
    } else {
      printBold(inventory.join(", "));
    }
  }
}


function pickUp() {
  let target;
  if (userInput.value.toLowerCase().startsWith("pick up ")) {
    target = userInput.value.substring("pick up ".length)
  } else if (userInput.value.toLowerCase().startsWith("grab ")) {
    target = userInput.value.substring("grab ".length)
  }
  if (locations[currentLocation].collectables[target]) {
    inventory.push(target)
    printBold("You pick up the " + target)
    delete locations[currentLocation].collectables[target]
  } else {
    printBold("Nothing to pick up!")
  }
}