const Chai = require('chai')

describe("PasswordGenerator testing", () => {
    const PasswordGenerator = require("../src/scripts/PasswordGenerator")

    const site = "http://google.com"
    const username = "any-username"
    const salt = "Any memorable string"

    const passwordGenerator = new PasswordGenerator()

    describe("getArrayOfSplitStrings testing", () => {
        it("Length of getArrayOfSplitStrings", (done) => {
            Chai.assert.equal(passwordGenerator.getArrayOfSplitStrings(site, username, salt).length, 3)
            done()
        })

        it ("Check correctly getArrayOfSplitStrings", (done) => {
            Chai.assert.deepEqual(passwordGenerator.getArrayOfSplitStrings(site, username), [ site.split(''), username.split('') ])
            done()
        })
    })

    describe("stringFromCharDecompos testing", () => {
        it("Length of stringFromCharDecompos", (done) => {
            Chai.assert.equal(passwordGenerator.stringFromCharDecompos(site, username, salt).length, 3)
            done()
        })

        it ("Check correctly stringFromCharDecompos", (done) => {
            Chai.assert.equal(passwordGenerator.stringFromCharDecompos(site, username, salt), "any")
            // Chai.assert.deepEqual(passwordGenerator.getArrayOfSplitStrings(username), [ username.split('') ])
            done()
        })
    })
})