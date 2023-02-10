const { BingoNumberCaller, MAX_BINGO_NUMBER } = require("./bingo-card-caller")
const { BingoCard } = require("./bingo-card-generator")
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

describe("Test BingoCard", () => {
    test("Mark number should mark a contained bingo number", () => {
        const card = new BingoCard();
        const { value } = card.numbers.values().next()
        card.markNumber(value);

        expect(card.markedNumbers.has(value))
    })
    
    test("Mark number should not mark a non-existing card number", () => {
        const card = new BingoCard()
        const non_exisitng_num = _.find(
            _.range(1, MAX_BINGO_NUMBER),
            num => ![...card.numbers].includes(num)
        )

        card.markNumber(non_exisitng_num);
        expect([...card.markedNumbers]).not.toContain(non_exisitng_num)
    })

    test("Card with all numbers marked should be a bingo", () => {
        const card = new BingoCard();
        expect(!card.isBingo())
        card.markedNumbers = card.numbers;
        expect(card.isBingo())
    })

})