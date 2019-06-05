const Chai = require('chai')
const StringDecorator = require("../src/scripts/StringDecorator")

describe("StringDecorator testing", () => {
    describe("appendSpecialCharacter testing", () => {
        const stringDecorator = new StringDecorator()
        const decoratingString = "as4f5a4fa8wa78w7g8aw7g8a"

        it("Check correctly appendSpecialCharacter", (done) => {
            Chai.assert.equal(stringDecorator.appendSpecialCharacter(decoratingString), "!" + decoratingString)
            done()
        })

        it ("Check appendSpecialCharacter on empty string", (done) => {
            Chai.assert.equal(stringDecorator.appendSpecialCharacter(""), "!")
            done()
        })
    })
})