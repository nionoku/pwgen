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
        if (!this.isShow) {
            this.isShow = true

            this.toast.innerHTML = message
            this.toast.classList.add('show')

            setTimeout(() => {
                this.hide()

                this.isShow = false
            }, 2800)
        }
    }

    hide() {
        this.toast.classList.remove('show')
        this.toast.innerHTML = ''
    }
}

module.exports = Toast