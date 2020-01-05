<template>
 <button class="btn-default">
   <slot></slot>
 </button>
</template>

<script>
    export default {
        name: "Button",
        data(){
            return{
                placeholder:'请输入',
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
  .btn-default{
    display: block;
    position: relative;
    border-radius: 0;
    border: 0px;
    padding: 0;
    background-color: #F5DEB3;
    width: 50px;
    height:30px;
  }
</style>
