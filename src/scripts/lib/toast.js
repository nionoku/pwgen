'use strict'

class Toast {
    constructor({ context, id }) {
        if (context == null)
            throw Error('context is undefined')

        if (id == null)
            throw Error('id is required param')

        this.toast = context.querySelector(`${id}.toast`)
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