'use strict'

const app = new Vue({
    el: '#app',
    data() {
        return {
            address: '',
            login: '',
            salt: '',
            generated: 'GGG',
            hasHidden: true
        }
    },
    methods: {
        generatePassword() {
            // TODO реализовать функцию генерирования пароля
            // this.generated = [this.address, this.login, this.salt].join(':')
        },

        copyToClipboard() {
            // TODO реализовать функцию копирования в буфер обмена
            showToast('Copied!');
        }
    }
})

function showToast(message) {
    const copiedToast = new Toast('#copied-notification')
    copiedToast.show(message)
}