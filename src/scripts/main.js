const app = new Vue({
    el: "#app",
    data: {
        test: "Hello world",
        address: '',
        login: '',
        salt: '',
        generated: 'Your password here',
        hasHidden: true
    },
    computed: {
        
    }
})

function copyToClipboard() {
    console.log("Copied!")
}