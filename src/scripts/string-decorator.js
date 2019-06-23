'use strict'

class StringDecorator {
    constructor(string) {
        this.initial = string
    }

    /**
     * Метод добавляет в начало строки восклицательный знак
     */
    appendSpecialCharacter() {
        this.initial = `!${this.initial}`
        return this
    }

    /**
     * Метод заменяет последнюю букву в строке на прописную версию
     */
    lastLetterToUpperCase() {
        const lastLetter = this.initial.match(/[a-z]/g)
        const lastLetterIndex = this.initial.lastIndexOf(lastLetter[lastLetter.length - 1])

        this.initial = this.initial.substring(0, lastLetterIndex) 
            + this.initial.substr(lastLetterIndex, 1).toUpperCase() 
            + this.initial.substr(lastLetterIndex + 1)

        return this
    }

    result() {
        return this.initial
    }
}

module.exports = StringDecorator