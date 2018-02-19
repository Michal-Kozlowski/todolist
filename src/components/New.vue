<template>
    <div>
        <input 
            class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 input" 
            type="text" 
            v-model="todo"
            autofocus
            @keydown.enter="addTodo" 
            placeholder="What to do?">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todo: ''
            }
        },
        methods: {
            addTodo() {
                if(this.todo){
                    const newTodo = { text: this.todo, inactive: false, done: false };
                    this.$store.dispatch('addTodo', newTodo);
                    this.todo = '';
                }               
            }
        }
    }
</script>