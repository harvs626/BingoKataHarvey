const prompt = require('prompt-sync')();
const _ = require('lodash');
const { BingoCard } = require("./bingo-card-generator");

function startGame() {
    console.log("Welcome to a game of Bingo Kata")
    console.log("Let's start by generating a bunch of bingo cards")
    let numCards = null;
    while(!numCards) {
        numCards = Number(prompt("How many cards do you want to build?"))
        if (isNaN(numCards) || !_.isPositive(numCards)) {
            console.log("Please enter a valid positive number")
            numCards = null;
        }
    }

    // generate cards
    const cards = _.times(numCards, () => new BingoCard());

    const actionMap = {
        "X": "End Game",
        "P": "print bingo cards",
        "N": "call a bingo number",
        "C": "check a given card",
        "B": "check if any cards hav a bingo"
    }

    const displayActionMap = () => {
        console.log("Please choose one of these actions:");
        _.each(actionMap, (val, key) => {
            console.log(`Enter ${key} to ${val}`)
        })

    }

    displayActionMap();
    let action = null;
    while(!action === "X") {
        let action = _.toUpper(prompt("what action do you want to perform?"))
        if (!_.includes(_.keys(actionMap), action)) {
            console.log("The action is not acceptable");
            displayActionMap();
            continue;
        }
        switch(action) {
            case "P":
                // todo
                break;
            case "N":
                // todo
                break;
            case "C":
                // todo
                break;
            case "B":
                // todo
                break;
        }
    }
}