const prompt = require('prompt-sync')();
const _ = require('lodash');
const { BingoCard } = require("./bingo-card-generator");
const { BingoNumberCaller } = require("./bingo-card-caller");

function startGame() {
    console.log("Welcome to a game of Bingo Kata")
    console.log("Let's start by generating a bunch of bingo cards")
    let numCards = null;
    while(!numCards) {
        numCards = Number(prompt("How many cards do you want to build? "))
        if (isNaN(numCards) || numCards <= 0) {
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
        console.log("Please choose one of these actions: ");
        _.each(actionMap, (val, key) => {
            console.log(`Enter ${key} to ${val}`)
        })

    }

    // initialize a bingo caller
    const bingoCaller = new BingoNumberCaller();

    displayActionMap();
    let action = null;
    while(action !== "X") {
        action = _.toUpper(prompt("what action do you want to perform? "))
        console.log("action : ", action)

        if (!_.includes(_.keys(actionMap), action)) {
            console.log("The action is not acceptable. Try again!");
            displayActionMap();
            continue;
        }

        // add a helper function to print all cards
        const printCards = () => _.each(cards, (card, index) => {
            console.log("Card ", index+1);
            card.printCard();
        })
        switch(action) {
            case "P":
                printCards();
                break;
            case "N":
                // extract the number
                const number = bingoCaller.callNext();
                console.log("Next number is: ", number)
                // mark the number on the corresponding bingo cards
                _.each(cards, (card, index) => {
                    card.markNumber(number);
                    if(card.isBingo()) {
                        console.log(`Card ${index+1} calls bingo!`)
                    }
                })
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

startGame();