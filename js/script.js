'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todo: [],
        }
    },
    created() {
        axios.get('server.php')
        .then((response) => {
            this.todo = response.data;
            console.log(response.data)
        })
    },
    
}).mount('#app')