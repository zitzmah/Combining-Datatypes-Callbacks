/****************************************** */
//Section 2: Combining Data Types
/****************************************** */

const crayonBox = {
    colors: ["Marshmallow White", "Raspberry Ripple", "Lemon Zest", "Bubblegum Burst", "Forest Fern", "Cotton Candy Cloud"],
}

const bottle = {
    cap: {
        material: "metal",
        color: "blue",
    }
}

console.log(bottle.cap.color)

const receipt = [
    cereal = {
        name: "cheerios",
        price: 3
    },
    dishSoap = {
        name: "dawn",
        price: 5
    },
    tea = {
        name: "celestial seasonings",
        price: 5
    },
]

console.log(receipt[1].name)

const apartmentBuilding = [["Olivia Bennett", "Ethan Hayes", "Isabella Lopez", "Mason Carter", "Ava Mitchell", "Jackson Reed", "Sophia Anderson", "Caleb Parker", "Amelia Turner", "Lucas Morgan"], 5, "brick", 750]

console.log(apartmentBuilding[0][5])

/********************************************** */
//Combine objects, arrays, and functions more than one level deep
/********************************************** */

knit = () => {
    return {
        item: "scarf",
        size: "6 ft"
    }
}
console.log(knit().item)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
crayonSelector = () => {
    return {
        color: ["Sunset Orange", "Sky Blue", "Meadow Green"],
    }
}
console.log(crayonSelector().color[1])

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
powerButton = () => {
    return {
        options: () => {
            console.log("select a song")
        }
    }
}

powerButton().options()

/*********************************************** */
//MODEL A VENDING MACHINE
/************************************************ */

const vendingMachine = {
    snacks: [
        { name: "chips", price: 5 },
        { name: "cookies", price: 5 },
        { name: "candy", price: 5 }
    ],
    vend: (num) => {
        if (num >= 0 && num < 3) {
            return (vendingMachine.snacks[num].name)
        } else {
            console.log("sorry, not available")
        }
    }
}

console.log(vendingMachine.vend(0))
