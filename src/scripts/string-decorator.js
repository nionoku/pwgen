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
    lastWordToUpperCase() {
        const lastWord = this.initial.match(/[a-z]/g)
        const lastWordIndex = this.initial.lastIndexOf(lastWord[lastWord.length - 1])

        this.initial = this.initial.substring(0, lastWordIndex) 
            + this.initial.substr(lastWordIndex, 1).toUpperCase() 
            + this.initial.substr(lastWordIndex + 1)

        return this
    }

    result() {
        return this.initial
    }
}

module.exports = StringDecorator