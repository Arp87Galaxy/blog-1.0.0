<template>
  <input type="text" vule="132" :placeholder="{placeholder}">
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

</style>
