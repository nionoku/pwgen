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
        }
    }
})

function showToast(message) {
    const toast = document.querySelector('.toast')
    toast.innerHTML = message
    toast.className = toast.className + ' show'
    
    setTimeout(() => {
        toast.className = toast.className.replace(' show', '')
        toast.innerHTML = ''
    }, 2800)
}

function copyToClipboard() {
    // TODO реализовать функцию копирования в буфер обмена
    // console.log('Copied!')
}