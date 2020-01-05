<template>
  <div id="page" class="">
    <Header>
      <Hgroup></Hgroup>
      <Nav></Nav>
    </Header>
    <router-view></router-view>
    <!--    <router-link target="_blank" to="/nav">ssssss</router-link>-->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{

        }
    },

}
</script>

<style>
  html{
    width: 100%;
    height: 100%;
  }
  body{
    position: relative;
    width: 100%;
    height: 100%;
  }
  #page{
    position: absolute;
    width: auto;
    left: 0;
    top: 0;
    right: 0;
    /*display: inline-block;*/
    /*width: 100%;*/
    height: 100%;
    /*z-index: 1;*/
    background-color: white;
    margin-top: 50px;
    margin-right: 15% !important;
    margin-left: 15% !important;
  }
  .container-fluid{
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
  }

</style>
