const Chai = require('chai')
const PasswordGenerator = require("../src/scripts/PasswordGenerator")

describe("PasswordGenerator testing", () => {
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

    describe("getMaxLengthOfStrings testing", () => {
        it("Check correctly getMaxLengthOfStrings", (done) => {
            Chai.assert.equal(passwordGenerator.getMaxLengthOfStrings(site, username, salt), salt.length)
            done()
        })
    })

    describe("stringFromCharDecompos testing", () => {
        it("Length of stringFromCharDecompos", (done) => {
            Chai.assert.equal(
                passwordGenerator.stringFromCharDecompos(site, username, salt).length, 
                site.length + username.length + salt.length
            )
            done()
        })

        it ("Check correctly stringFromCharDecompos", (done) => {
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos(site, username, salt)
            Chai.assert.equal(stringFromCharDecompos.substring(0, 3), site[0] + username[0] + salt[0])
            done()
        })
    })

    describe("getStringHashing testing", () => {
        it("Check correctly getStringHashing", (done) => {
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos(site, username, salt)
            Chai.assert.equal(passwordGenerator.getStringHashing(stringFromCharDecompos), "58a7ea7265771bc7f808129025e00883")
            done()
        })
    })

    describe("hashShorter testing", () => {
        it("Check correctly hashShorter", (done) => {
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos(site, username, salt)
            const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)
            Chai.assert.equal(passwordGenerator.hashShorter(stringHash, 16), stringHash.substr(8, 16))
            done()
        })

        it("Check odd lenght in hashShorter", (done) => {
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos(site, username, salt)
            const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)

            Chai.assert.throws(() => {
                passwordGenerator.hashShorter(stringHash, 15), stringHash.substr(8, 16)
            }, "length odd number")
            done()
        })

        it("Check max lenght in hashShorter", (done) => {
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos(site, username, salt)
            const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)

            Chai.assert.throws(() => {
                passwordGenerator.hashShorter(stringHash, -2), stringHash.substr(8, 16)
            }, "length < 0 or > max length")

            Chai.assert.throws(() => {
                passwordGenerator.hashShorter(stringHash, stringHash.length), stringHash.substr(8, 16)
            }, "length < 0 or > max length")
            done()
        })
    })
})