<template>
  <div id="header" class="container-fluid header">
    <slot></slot>
  </div>

</template>
<script>
  export default {
      name:'Header',
      data(){
          return{

          }

      }
  }
</script>
<style>
#header{
  position: relative;;
}
Nav{
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
</style>
