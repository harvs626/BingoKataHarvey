
const _ = require("lodash")
const CARDSIZE = 5*5;

class BingoCard {
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

    markNumber(num) {
        if(this.numbers.has(num)) {
            this.markedNumbers.add(num);
            return true;
        }
        return false;
    }

    isBingo() {
        return this.markedNumbers.size === CARDSIZE;
    }
}


module.exports = {
    BingoCard
}