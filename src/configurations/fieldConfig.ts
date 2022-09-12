import {Directions} from "../types/directions";

//There are configs and constants
const oneOfThree = 20
const twoOfThree = 40
const wholeNumber = 60

//Aligns connectable directions to each symbol (NOT IN USE FOR NOW)
const puzzlesConfig = {
    "╻": {
        connectsDirections: [Directions.up],
    },
    "╹": {
        connectsDirections: [Directions.down],
    },
    "╺": {
        connectsDirections: [Directions.left],

    },
    "╸": {
        connectsDirections: [Directions.right],
    },


    "┗": {
        connectsDirections: [Directions.down, Directions.left],
    },
    "┏": {
        connectsDirections: [Directions.up, Directions.left],
    },
    "┓": {
        connectsDirections: [Directions.up, Directions.right],
    },
    "┛": {
        connectsDirections: [Directions.right, Directions.down],
    },


    "┫": {
        connectsDirections: [Directions.down, Directions.up, Directions.right],
    },
    "┻": {
        connectsDirections: [Directions.down, Directions.left, Directions.right],
    },
    "┣": {
        connectsDirections: [Directions.down, Directions.up, Directions.left],
    },
    "┳": {
        connectsDirections: [Directions.up, Directions.right, Directions.left],
    },

    "╋": {
        connectsDirections: [Directions.up, Directions.down, Directions.right, Directions.left],
    },

    "━": {
        connectsDirections: [Directions.right, Directions.left],
    },

    "┃": {
        connectsDirections: [Directions.up, Directions.down],
    },
}

export {Directions, oneOfThree, twoOfThree, wholeNumber, puzzlesConfig}