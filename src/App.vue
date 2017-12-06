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
      font-family: Audiowide;
      font-size: 24px;
      background: #3E5151;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #DECBA4, #3E5151);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #DECBA4, #3E5151);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }

    h1 {
      font-size: 2em;
    }

    h1, h2 {
      font-weight: 700;
      color: black;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 40px;
      text-shadow: 2px 5px 10px #444; }

    .input, li {
      font-size: 24px;
      background-color: #ddd;
      border: 1px #333 solid;
      padding: 4px 8px;
      box-shadow: -4px 4px 5px #555; }

    li { 
      list-style-type: none;  
      cursor: pointer;
    }
      li:active {
        transform: translate(-1px, 1px);
        box-shadow: -4px 4px 5px transparent; }

    form {
      text-align: center; }

    .fa-trash, .fa-check {
      float: right;
      padding: 5px 3px 0 0;
      color: #bbb; }
      .fa-trash:hover {
        color: #bc2a0d; }
      .fa-check:hover {
        color: #32c425; }
</style>
