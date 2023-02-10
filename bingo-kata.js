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
                console.log("which card did you want to check?")
                console.log(`enter a number between 1 and ${numCards} inclusive.`)
                const cardIndex = Number(prompt());
                if (isNaN(cardIndex) || cardIndex <= 0 || cardIndex > cards.length) {
                    console.log("invalid card. Try again");
                } else {
                    const card = cards[cardIndex-1];
                    card.printCard()
                    console.log(
                        "We called numbers: ", 
                        bingoCaller.getCalledNumbers()
                    );
                    if (card.isBingo()) {
                        console.log("This card is a bingo!");
                    }
                    else {
                        console.log(
                            "card has these numbers marked: ",
                            [...card.markedNumbers]
                        )
                        console.log(
                            "card still needs these numbers: ",
                            _.filter([...card.numbers], num => !card.markedNumbers.has(num))
                        )
                    }
                }
                break;
            case "B":
                let count = 0;
                _.each(cards, (card, index) => {
                    if(card.isBingo()) {
                        console.log(`Card ${index+1} is a bingo!`)
                        count += 1;
                    }
                })
                if (count) {
                    console.log(`We have ${count} cards that have a bingo`)
                } else {
                    console.log("No Bingos!")
                }
                break;
        }
    }
}

startGame();