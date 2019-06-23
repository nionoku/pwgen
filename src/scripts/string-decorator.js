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
     * Метод заменяет первую букву в строке на прописную версию
     */
    firstWordToUpperCase() {
        const firstWord = this.initial.substr(1, this.initial.length - 2).match(/[a-z]/)
        const firstWordIndex = this.initial.indexOf(firstWord)

        this.initial = this.initial.substring(0, firstWordIndex) 
            + this.initial.substr(firstWordIndex, 1).toUpperCase() 
            + this.initial.substr(firstWordIndex + 1)

        return this
    }

    result() {
        return this.initial
    }
}

module.exports = StringDecorator