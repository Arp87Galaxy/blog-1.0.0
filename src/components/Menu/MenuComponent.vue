<template>


</template>
<script>
  export default {
      name:'MenuComponent',
      data() {
          return {
              menuList:{}
          };
      },
      methods: {
          handleSelect(key, keyPath) {
              console.log(key, keyPath);
          },
          getMenuList(){
              this.$https.get('http://127.0.0.1:8000/menu/v1/find').then((data)=>{
                      console.log(data.data);
                     this.menuList = data.data;
              }).catch((err)=>{
                    alert(err)
              })
          }
      },
      created() {
          this.getMenuList();
      }
  }
</script>
<style>

</style>
