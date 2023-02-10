const _ = require("lodash")
const MAX_BINGO_NUMBER = 75

class BingoCardCaller {
    constructor() {
        // initialize a called numbers array of none.
        this.calledNumbers = [];
        // Generate a bingo queue that is random and shuffled
        // generating this ahead of time will take N space, but
        // keep the operation of calling the next number in O(1)
        this.bingoQueue = _.shuffle(_.range(1, MAX_BINGO_NUMBER+1))
    }

    getCalledNumbers() {
        return this.calledNumbers;
    }

    callNext() {
        if (this.bingoQueue.length === 0) {
            console.log("No more numbers")
            return null
        }
        const nextNumber = this.bingoQueue.pop()
        this.calledNumbers.push(nextNumber);
        return nextNumber;
    }
}

module.exports = {
    BingoCardCaller
}