const prompt = require('prompt-sync')();
const _ = require('lodash');

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

}