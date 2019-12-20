'use strict'

const app = new Vue({
    el: '#app',
    data() {
        return {
            address: '',
            login: '',
            salt: '',
            generated: '',
            hasSecretHidden: true,
            hasPasswordHidden: true
        }
    },
    computed: {
        generated: function() {
            return this.generated
        }
    },
    methods: {
        generatePassword() {
            if (this.address.length + this.login.length + this.salt.length > 0) {
                const pwgen = new PasswordGenerator(12, this.address, this.login, this.salt)
                this.generated = pwgen.generate()
            } else {
                this.generated = ''
            }
        },

        copyToClipboard() {
            clipboard.writeText(this.generated)
            showToast('Copied!')
        }
    }
})

const toast = new Toast({ context: document, id: '#copied-notification' })

function showToast(message) {
    toast.show(message)
}