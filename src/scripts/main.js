const app = new Vue({
    el: "#app",
    data() {
        return {
            address: '',
            login: '',
            salt: '',
            generated: 'Your password here',
            hasHidden: true
        }
    },
    methods: {
        generatePassword() {
            // TODO реализовать функцию генерирования пароля
            // this.generated = [this.address, this.login, this.salt].join(":")
        }
    }
})

function copyToClipboard() {
    // TODO реализовать функцию копирования в буфер обмена
    // console.log("Copied!")
}