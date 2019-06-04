class PasswordGenerator {
    stringFromCharDecompos(...strings) {
        return "any"
    }

    getArrayOfSplitStrings(...strings) {
        return strings
            .map(it => it.split(''))
    }
}

module.exports = PasswordGenerator