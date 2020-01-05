<template>
  <nav class="container-fluid">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="a-nav">
      <ul class="a-nav-ul">
        <li v-for="(menu,index) in menuList" ><a  :class="{active:index==active_index}" :name="menu.routename" @click="setActive($event,index)" >{{ menu.name }}</a></li>
      </ul>
      <form class="navbar-form navbar-left pull-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="">Submit</button>
      </form>
      <div class="container-fluid">

      </div>
    </div><!-- /.navbar-collapse -->
  </nav><!-- /.container-fluid -->
</template>
<script>
  import Edit from "../Edit/Edit";

  export default {
      name:'Nav',
      data(){
          return{
              menuList:[{name:'首页',routename:'/'},{name:'服务器'},{name:'Linux'},{name:'数据库'},{name:'支持'},{name:'编辑器',routename:'Edit'}],
              active_index:0,
          }
      },
      methods:{
          getTarget(a){
              console.log(a)
          },
          setActive(e,index){
              this.active_index=index
              // console.log(e.target.name)
              this.$router.push({name:''+e.target.name})

          }
      }
  }
</script>
<style>
  nav{
    position: relative;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-color: #e7e7e7;
    border-right: 0;
    border-left: 0;
    text-align: center;
  }
  .a-nav-ul{
    float: left;
    padding-right: 15px;
    padding-left: 15px;
    border-color: #e7e7e7;
    /*position: relative;*/
    min-height: 50px;
    margin: 0;
    /*margin-top:1px ;*/
  }
  ul.a-nav-ul{
    list-style: none;
  }
  .a-nav-ul > li{
    position: relative;
    min-height: 50px;
    display: block;
    float: left;
  }
  .a-nav-ul >li> a{
    position: relative;
    display: block;
    /*height: 100%;*/
    padding: 15px 15px;
    line-height: 20px;
    background-color: transparent;
    color: #777;
    text-decoration: none;
  }
  .a-nav > form{
      float: right;
  }
  .a-nav > form > div{
    float: left;
  }
  .form-group > button{
    float: right;
  }



  .a-nav-ul > li > a:hover{
    font-size: 18px !important;
    color: black !important;
  }
  .active{
    font-size: 18px !important;
    color: black !important;
    background-color: #e7e7e7 !important;
  }
</style>
