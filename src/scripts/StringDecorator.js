class StringDecorator {
    /**
     * Метод добавляет в начало строки восклицательный знак
     * @param {string} string входная строка
     */
    appendSpecialCharacter(string) {
        return `!${string}`;
    }

    
}

module.exports = StringDecorator