const _ = require("lodash")
const MAX_BINGO_NUMBER = 75

/***
 * BingoNumberCaller is a class that will represent the machine that will
 * print out random numbers.
 */
class BingoNumberCaller {
    /***
     * This constructor will generate an array and shuffle it randomly
     * with an O(N) operation where N is the length of the array (75)
     */
    constructor() {
        // initialize a called numbers array of none.
        this.calledNumbers = [];
        // Generate a bingo queue that is random and shuffled
        // generating this ahead of time will take N space, but
        // keep the operation of calling the next number in O(1)
        this.bingoStack = _.shuffle(_.range(1, MAX_BINGO_NUMBER+1))
    }

    /***
     * This function will return of the numbers that have been called.
     * 
     * @returns an array of the numbers that have been called
     */
    getCalledNumbers() {
        return this.calledNumbers;
    }

    /***
     * This function will call the next function. Since we have already
     * randomly generated an array in initialization this function should be
     * O(1) operation.
     * 
     * Returns: a number, or null if we have exhausted
     * the list of distinct numbers.
     */
    callNext() {
        if (this.bingoStack.length === 0) {
            console.log("No more numbers")
            return null
        }
        const nextNumber = this.bingoStack.pop()
        this.calledNumbers.push(nextNumber);
        return nextNumber;
    }
}

module.exports = {
    BingoNumberCaller
}