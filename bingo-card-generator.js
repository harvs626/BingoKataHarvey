
const _ = require("lodash")
const CARDSIZE = 5*5;

/****
 * The Bingo card class will represent a bingo card entity.
 * This will have state and keep track of which numbers have been called.
 */
class BingoCard {

    /****
     * This constructor will initialize the numbers generated
     * We generate random numbers and this should be O(N).
     * where N is the number of squares we have in the card.
     */
    constructor() {
        // initialize an array of 5 arrays (1 per column)

        const generate5Random = (lowerBound, upperBound) => {
            return _.shuffle(_.range(lowerBound, upperBound+1)).slice(0, 5)
        }

        this.numbers = new Set([
            ...generate5Random(1, 15),
            ...generate5Random(16, 30),
            ...generate5Random(31, 45),
            ...generate5Random(46, 60),
            ...generate5Random(61, 75)
        ])

        // adding another collection to keep track of marked Numbers
        this.markedNumbers = new Set();
    }

    /***
     * This function will mark a number and keep track if the card
     * has this number.
     * 
     * input: num (Number): the number to check if we have it.
     * 
     * returns: a boolean value, True if we have that number, false if not.
     */
    markNumber(num) {
        if(this.numbers.has(num)) {
            this.markedNumbers.add(num);
            return true;
        }
        return false;
    }

    /****
     * Function will check to see if we have a bingo (all numbers marked)
     * 
     * returns: A boolean value. True if we have all numbers marked. False if not.
     */
    isBingo() {
        return this.markedNumbers.size === CARDSIZE;
    }

    /***
     * Function to stringify the given card. This function will
     * format the card and separate them by the different letters.
     */
    toString() {

        const markedNumbers = this.markedNumbers;
        const numbers = [...this.numbers];

        const printLines = ["B", "I", "N", "G", "O"].map( (col, index) => {
            const lowIndex = index*5;
            const columnNumbers = numbers.slice(lowIndex, lowIndex+5);
            const formatColumnNumbers = columnNumbers.map( num => markedNumbers.has(num) ? `-${num}-\t` : `${num}\t`);
            return `${col}:\t  ${formatColumnNumbers.join(" ")}`
        })

        return printLines.join("\n");
    }

    /***
     * Function to print the given card to the console.
     */
    printCard() {
        console.log(this.toString());
    }
}


module.exports = {
    BingoCard
}