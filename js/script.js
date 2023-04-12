'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todo: [],
            newToDo: ''
        }
    },
    methods: {
        addTodo() {
            const data = {
                newToDo: this.newToDo
            };
            axios.post('server.php', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
                .then((response) => {
                    this.todo = response.data;
                })
        },
        
    },
    created() {
        axios.get('server.php')
        .then((response) => {
            this.todo = response.data;
            console.log(response.data)
        })
    },
    
}).mount('#app')