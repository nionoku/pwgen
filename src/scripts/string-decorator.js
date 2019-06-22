class StringDecorator {
    /**
     * Метод добавляет в начало строки восклицательный знак
     * @param {string} string входная строка
     */
    static appendSpecialCharacter(string) {
        return `!${string}`;
    }
}

module.exports = StringDecorator