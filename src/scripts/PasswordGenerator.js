class PasswordGenerator {
    stringFromCharDecompos(...strings) {
        return 'any'
        // return this.getArrayOfSplitStrings(...strings)
        //     .map((it, transparentIndex) => it.map(item => item[transparentIndex]))
        //     .join(':')
    }

    getMaxLengthOfStrings(...strings) {
        return Math.max(...strings.map(it => it.length))
    }

    getArrayOfSplitStrings(...strings) {
        return strings
            .map(it => it.split(''))
    }
}

module.exports = PasswordGenerator