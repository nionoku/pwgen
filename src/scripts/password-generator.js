const MD5 = require('./lib/MD5')

class PasswordGenerator {
    constructor(passwordLength, ...baseStrings) {
        this.passwordLength = passwordLength;
        this.baseStrings = baseStrings;
    }
    /**
     * Метод генерирует пароль на основе входных строк
     */
    generate() {
        const mixOfString = this.stringFromCharDecompos(this.baseStrings)
        const stringHashingResult = this.getStringHashing(mixOfString)
        return this.shortenString(stringHashingResult)
    }

    /**
     * Метод укорачивает длину строки до заданной
     * @param {string} original хэш пароля
     */
    shortenString(original) {
        if (this.passwordLength % 2 != 0)
            throw Error("passwordLength odd number")

        // hash.length - 8 - поскольку минимальная длина пароля - 8 символов
        if (this.passwordLength < 0 || this.passwordLength > original.length - 8)
            throw Error("passwordLength < 0 or > max length")

        return original.substr(Math.ceil((original.length - this.passwordLength) / 2), this.passwordLength)
    }

    /**
     * Метод возвращает хэш от входной строки
     * @param {string} stringForHashing хэшируемая строка
     */
    getStringHashing(stringForHashing) {
        return MD5(stringForHashing);
    }

    /**
     * Метод возвращает строку формата [первый символ первой строки][первый символ второй строки]...
     * ...[второй символ первой строки][второй символ второй строки]...
     */
    stringFromCharDecompos() {
        let stringFromCharDecompose = '';

        for (let j = 0; j < this.getMaxLengthOfStrings(...this.baseStrings); j++) {
            for (let i = 0; i < this.baseStrings.length; i++) {
                stringFromCharDecompose += (this.baseStrings[i][j] != null) 
                    ? this.baseStrings[i][j]
                    : ''
            }
        }

        return stringFromCharDecompose;
    }

    /**
     * Метод возвращает размер самой длинной входной строки
     */
    getMaxLengthOfStrings() {
        return Math.max(...this.baseStrings.map(it => it.length))
    }

    /**
     * Метод возвращает массивы символов каждой входной строки 
     */
    getArrayOfSplitStrings() {
        return this.baseStrings
            .map(it => it.split(''))
    }
}

module.exports = PasswordGenerator