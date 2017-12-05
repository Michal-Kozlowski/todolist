<template>
    <div id="app">
        <h1>to do list <i class="fa fa-check-square-o"></i></h1>
        <app-new></app-new>      
        <app-list></app-list>
    </div>
</template>

<script>
    import New from './components/New.vue';
    import List from './components/List.vue';

    export default {
        components: {
            appNew: New,
            appList: List
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
