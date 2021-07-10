let locations =
{
    "Computer Room": {
        "objects": {
            "Computer": {
            },
            "Northern Door": {
                "open": false
            }
        },
        "visibleVerbs": {
            "go north": function () {
                if (locations[currentLocation].objects["Northern Door"].open) {
                    currentLocation = "Hallway"
                    printBold(locations["Hallway"].onEntry)
                } else {
                    printBold("The door is closed.")
                }
            },
            "open door": function () {
                locations[currentLocation].objects["Northern Door"].open = true
                printBold("The door is now open.")
            },
            "use computer": function () {
                printBold("Nothing displays on the monitor but a blue screen of death.")
            }
        },
        "hiddenVerbs": {

        },
        "collectables": {

        },
        "onEntry": "You are in a dark room. With only a COMPUTER, and a monitor dimly illuminating the room. There is also a closed DOOR to your NORTH. Type LOOK to see your surroundings. Type COMMANDS to see a list of commands you can use in your current location."
    },



    "Hallway": {
        "objects": {
            "North Door": {
                "locked": true
            },
            "West Door": {
            },
            "Vase": {
            }
        },
        "visibleVerbs": {
            "go north": function () {
                printBold("The Door is closed.")
            },
            "open door": function () {
                printBold("West door or North Door?")
            },
            "open north door": function () {
                if (locations["Hallway"].objects["North Door"].locked === true) {
                    printBold("This door appears to be locked.")
                }
            },
            "open west door": function () {
                currentLocation = "Western Hallway"
                printBold("The door opens.")
                printBold(locations["Western Hallway"].onEntry)

            },
        },
        "hiddenVerbs": {
            "use vase": function () {
                if (locations[currentLocation].collectables["key"] != undefined) {
                           printBold("You find a key inside the vase.")
                           locations[currentLocation].collectables["key"] = true
           } else {
             printBold("The vase is empty.")
           }
              },
        },
            "interact vase": "use vase",

        "onEntry": "You have entered a brightly lit hallway. In the hallway you notice a VASE and two doors. One to the east and one to the north.",
        "collectables": {
            "key": false
        }
    }
}