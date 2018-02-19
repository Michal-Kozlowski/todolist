<template>
    <div>
        <ul class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4" >
            <transition-group name="animation" mode="out-in">
                <li v-for="(todo, index) in todos" 
                    :class="{inactive: todo.inactive}" 
                    @click="active(index)" 
                    :key="index">
                        {{todo.text}}           
                        <i class='fa fa-check' @click.stop="complete(index)"></i>
                </li>
            </transition-group>
        </ul>
        <h2 class="col-xs-12">Done:</h2>
        <ul class="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4">
            <transition-group name="animation" mode="out-in">
                <li v-for="(done, index) in dones" 
                    class="done" 
                    @click="notComplete(index)" 
                    :key="index">
                        {{done.text}}           
                        <i class='fa fa-trash' @click.stop="remove(index)"></i>
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            todos(){
                return this.$store.getters.todos
            },
            dones(){
                return this.$store.getters.dones
            }
        },
        methods: {
            active(index) {
                this.$store.dispatch('active', index);
            },
            complete(index) {
                this.$store.dispatch('complete', index);
            },
            notComplete(index) {
                this.$store.dispatch('notComplete', index);
            },
            remove(index) {
                this.$store.dispatch('remove', index);
            }
        }
    }
</script>

<style scoped>
    ul {
        padding: 0;
        margin-top: 30px;
    }

    h2 {
        margin-top: 80px;
    }

    .inactive {
        text-decoration: line-through;
        color: #999;
    }

    .done {
        color: #999;
    }

    .animation-enter-active {
        animation: bounce-in .5s;
    }

    .animation-leave-active {
        animation: fade-out 300ms forwards;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>