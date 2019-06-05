const MD5 = require('./MD5')

class PasswordGenerator {
    /**
     * Метод укорачивает длину хэша до заданного
     * @param {string} hash хэш пароля
     * @param {number} length выходная длина хэша, четное значение
     */
    hashShorter(hash, length) {
        if (length % 2 != 0)
            throw Error("length odd number")

        // hash.length - 8 - поскольку минимальная длина пароля - 8 символов
        if (length < 0 || length > hash.length - 8)
            throw Error("length < 0 or > max length")

        return hash.substr(Math.ceil((hash.length - length) / 2), length)
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
     * @param  {...any} strings массив входных строк
     */
    stringFromCharDecompos(...strings) {
        let stringFromCharDecompose = '';

        for (let j = 0; j < this.getMaxLengthOfStrings(...strings); j++) {
            for (let i = 0; i < strings.length; i++) {
                stringFromCharDecompose += (strings[i][j] != null) ? strings[i][j] : ''
            }
        }

        return stringFromCharDecompose;
    }

    /**
     * Метод возвращает размер самой длинной строки
     * @param  {...any} strings массив входных строк
     */
    getMaxLengthOfStrings(...strings) {
        return Math.max(...strings.map(it => it.length))
    }

    /**
     * Метод возвращает массивы символов каждой строки 
     * @param  {...any} strings массив входных строк
     */
    getArrayOfSplitStrings(...strings) {
        return strings
            .map(it => it.split(''))
    }
}

module.exports = PasswordGenerator