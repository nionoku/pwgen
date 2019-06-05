const MD5 = require('./MD5')

class PasswordGenerator {
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