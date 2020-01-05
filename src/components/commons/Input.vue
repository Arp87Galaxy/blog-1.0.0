<template>
    <input class="nonmal" type="text"  placeholder="placeholder">
</template>

<script>
    export default {
        name: "Input",
        data(){
            return{
            }
        },
        methods:{

        },
        created() {
            console.log('input created')
        }
    }
</script>

<style>
  .nonmal{
    width: 300px;
    height: 100%;
    border-radius: 0px;
    border: 0;
    /*border-right: 2px solid black;*/

    margin:0 0 0 10px;
    padding: 0;

    color:#6B6854;
    font:18px "Trebuchet MS", Arial, Helvetica, sans-serif;
    float: left;
  }
</style>
