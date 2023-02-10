const { BingoNumberCaller, MAX_BINGO_NUMBER } = require("./bingo-card-caller")
const _ = require('lodash')

describe("Test BingoNumberCaller", () => {
    const bingoCaller = new BingoNumberCaller();
    test("Should have a bingoStack of right size", () => {
        expect(bingoCaller.bingoStack).toHaveLength(MAX_BINGO_NUMBER)
    })

    const calledNumbers = new Set();
    test("BingoNumberCaller should call distinct numbers 75 times", () => {
        for(i =0; i < MAX_BINGO_NUMBER; i++) {
            const currentNumber = bingoCaller.callNext();
            expect(currentNumber).toBeLessThanOrEqual(MAX_BINGO_NUMBER);
            expect(currentNumber).toBeGreaterThan(0);
            expect(calledNumbers).not.toContain(currentNumber);
            calledNumbers.add(currentNumber);
        }
    })

    test("getCalledNumbers should equal the set of called numbers", () => {
        expect([...calledNumbers]).toEqual(bingoCaller.getCalledNumbers())
    })
})
