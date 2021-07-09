inventory = []

function checkInventory() {
    if (userInput.value.toLowerCase() === "inventory"){
        if (inventory.length === 0) {
          printBold("You have nothing.")
        } else {
          printBold(inventory.join(", "));
        }
      }
}


function pickUp() {
    
}