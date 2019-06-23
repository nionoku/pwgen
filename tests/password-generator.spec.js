const Chai = require('chai')
const PasswordGenerator = require("../src/scripts/password-generator")

describe("PasswordGenerator testing", () => {
    const site = "http://google.com"
    const username = "any-username"
    const salt = "Any memorable string"

    describe("getArrayOfSplitStrings testing", () => {
        it("Length of getArrayOfSplitStrings", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            Chai.assert.equal(passwordGenerator.getArrayOfSplitStrings().length, 3)
            done()
        })

        it("Check correctly getArrayOfSplitStrings", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username)
            Chai.assert.deepEqual(passwordGenerator.getArrayOfSplitStrings(), [site.split(''), username.split('')])
            done()
        })
    })

    describe("getMaxLengthOfStrings testing", () => {
        it("Check correctly getMaxLengthOfStrings", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            Chai.assert.equal(passwordGenerator.getMaxLengthOfStrings(), salt.length)
            done()
        })
    })

    describe("stringFromCharDecompos testing", () => {
        it("Length of stringFromCharDecompos", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            Chai.assert.equal(
                passwordGenerator.stringFromCharDecompos().length,
                site.length + username.length + salt.length
            )
            done()
        })

        it("Check correctly stringFromCharDecompos", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
            Chai.assert.equal(stringFromCharDecompos.substring(0, 3), site[0] + username[0] + salt[0])
            done()
        })
    })

    describe("getStringHashing testing", () => {
        it("Check correctly getStringHashing", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
            Chai.assert.equal(passwordGenerator.getStringHashing(stringFromCharDecompos), "58a7ea7265771bc7f808129025e00883")
            done()
        })
    })

    describe("shortenString testing", () => {
        it("Check correctly shortenString", (done) => {
            const passLenght = 8
            const passwordGenerator = new PasswordGenerator(passLenght, site, username, salt)
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
            const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)

            Chai.assert.equal(passwordGenerator.shortenString(stringHash), stringHash.substr(12, passLenght))
            done()
        })

        it("Check odd lenght in shortenString", (done) => {
            const passwordGenerator = new PasswordGenerator(15, site, username, salt)
            const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
            const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)

            Chai.assert.throws(() => {
                passwordGenerator.shortenString(stringHash), stringHash.substr(8, 16)
            }, "passwordLength odd number")
            done()
        })

        it("Check max lenght in shortenString", (done) => {
            Chai.assert.throws(() => {
                const passwordGenerator = new PasswordGenerator(-2, site, username, salt)
                const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
                const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)

                passwordGenerator.shortenString(stringHash), stringHash.substr(8, 16)
            }, "passwordLength < 0 or > max length")

            Chai.assert.throws(() => {
                const passwordGenerator = new PasswordGenerator(34, site, username, salt)
                const stringFromCharDecompos = passwordGenerator.stringFromCharDecompos()
                const stringHash = passwordGenerator.getStringHashing(stringFromCharDecompos)
                
                passwordGenerator.shortenString(stringHash), stringHash.substr(8, 16)
            }, "passwordLength < 0 or > max length")
            done()
        })
    })

    describe("generate testing", () => {
        it("Check correctly generate", (done) => {
            const passwordGenerator = new PasswordGenerator(8, site, username, salt)
            const pass = passwordGenerator.generate()

            Chai.assert.equal(pass, "!bc7F808")
            done()
        })
    })
})