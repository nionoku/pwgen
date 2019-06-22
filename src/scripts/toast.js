'use strict'

class Toast {
    constructor(id) {
        this.toast = document.querySelector(`${id}.toast`)
    }

    show(message) {
        this.toast.innerHTML = message
        this.toast.className = this.toast.className + ' show'

        this.hideActionTimeout = setTimeout(() => {
            this.toast.className = this.toast.className.replace(' show', '')
            this.toast.innerHTML = ''
        }, 2800)
    }
}

module.exports = Toast