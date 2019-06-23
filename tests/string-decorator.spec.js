const Chai = require('chai')
const StringDecorator = require("../src/scripts/string-decorator")

describe("StringDecorator testing", () => {
    describe("appendSpecialCharacter testing", () => {

        it("Check correctly appendSpecialCharacter", (done) => {
            const initialString = 'as4f5a4fa8wa78w7g8aw7g8a'
            const stringDecorator = new StringDecorator(initialString)
            const decoratingString = stringDecorator
                .appendSpecialCharacter()
                .result()

            Chai.assert.equal(decoratingString, "!" + initialString)
            done()
        })

        it("Check appendSpecialCharacter on empty string", (done) => {
            const stringDecorator = new StringDecorator('')
            const decoratingString = stringDecorator
                .appendSpecialCharacter()
                .result()

            Chai.assert.equal(decoratingString, "!")
            done()
        })
    })

    describe("firstWordToUpperCase testing", () => {

        it("Check correctly firstWordToUpperCase", (done) => {
            const stringDecorator = new StringDecorator('a45asd78awd')
            const decoratingString = stringDecorator
                .lastLetterToUpperCase()
                .result()

            Chai.assert.equal(decoratingString, 'a45asd78awD')
            done()
        })

        it("Check appendSpecialCharacter on empty string", (done) => {
            const stringDecorator = new StringDecorator('')
            const decoratingString = stringDecorator
                .appendSpecialCharacter()
                .result()

            Chai.assert.equal(decoratingString, "!")
            done()
        })
    })
})