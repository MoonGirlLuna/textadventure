let locations =
{
    "Computer Room": {
        "objects": {
            "Computer": {
                "interactable": true
            },
            "Northern Door": {
                "interactable": true,
                    "gotoroom": "hallway"
            }
        },
        "verbs": {
            "go north": function(inventory, currentLocation, etc) {
              printBold("uwu");
            },
            "go east": function(inventory, currentLocation, etc) {
              printBold("uwuwu");
            }
          },
        "onEntry": "You are in a dark room. With only a COMPUTER, and a monitor dimly illuminating the room. Type LOOK to see your surroundings."
    },



    "hallway": {
        "objects": {
            "Northern Door": {
                "interactable": true
            },
            "Western Door": {
                "interactable": false
            },
            "Vase": {
                "interactable": true,
                    "contains": {
                    "key": {
                        "grabable": true
                    }
                }
            }
        },
        "onEntry": "You have entered a brightly lit hallway. In the hallway you notice a VASE and two doors. One to the east and one to the north."
    }
}