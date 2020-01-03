<template>
  <input class="nonmal" type="text" vule="132" placeholder="placeholder">

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
    height: 25px;
    border-radius: 0px;
    margin:0px;
    padding:0px;
    color:#6B6854;
    font:18px "Trebuchet MS", Arial, Helvetica, sans-serif;
  }
</style>
