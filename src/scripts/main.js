'use strict'

const app = new Vue({
    el: '#app',
    data() {
        return {
            address: '',
            login: '',
            salt: '',
            generated: 'GGG',
            hasSecretHidden: true,
            hasPasswordHidden: true
        }
    },
    methods: {
        generatePassword() {
            // TODO реализовать функцию генерирования пароля
            // this.generated = [this.address, this.login, this.salt].join(':')
        },

        copyToClipboard() {
            // TODO реализовать функцию копирования в буфер обмена
            showToast('Copied!')
        }
    }
})

const toast = new Toast({ context: document, id: '#copied-notification' })

function showToast(message) {
    toast.show(message)
}