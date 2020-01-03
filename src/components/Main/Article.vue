<template>
  <div>
    <article v-for="(article,index) in articlelist" class=" container-fluid">
      <header >
        <a class="" href="" >[{{ article.articleCategory }}]</a>
        <h3 >
          <a target="_blank" href="" title="【技术开发】谷歌验证码 ReCaptcha 破解教程，简单方便从零开始。">
            {{ article.articleTitle }}
          </a>
        </h3>
      </header>
      <div class="focus">
        <a target="_blank" href="">
          <img src="https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/timg-5.jpeg&amp;h=123&amp;w=200&amp;q=90&amp;zc=1&amp;ct=1" alt="【技术开发】谷歌验证码 ReCaptcha 破解教程，简单方便从零开始。">
        </a>
        <span class="note">
          {{ article.articleOverview }}
        </span>
      </div>
      <div class="auth-span">
        <p>
        <span class="muted">
          崔庆才
        </span>
          <span class="muted">
          2019-12-27 8:55
        </span>
          <span class="muted">
          302浏览
        </span>
          <span class="muted">
          0评论
        </span>
          <span class="muted">
          2喜欢
        </span>
        </p>
      </div>
    </article>

  </div>

</template>
<script>
  export default {
      name:'Article',
      data(){
          return{
              articlelist:[],
          }
      },
      methods:{
          getArticles(){
              this.$https.get('http://192.168.5.111:8888/v1/articles/').then((articlelist)=>{
                  console.log(articlelist.data)
                  this.articlelist=articlelist.data;
                  console.log(this.articlelist)
              }).catch((err)=>{

              })
          }
      },
      created() {
          this.getArticles();
      }
  }
</script>
<style>
  article{
    position: relative;
    padding: 15px;
    height: 200px;
    border-bottom: 1px solid #e7e7e7 ;
  }
  .focus{
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 10px;
    /*display: block;*/
    /*left: 0;*/
  }
  .focus > span{
    position: relative;
    padding-right:20px ;
  }
.focus > a{
  position: relative;
  display: inline-block !important;
  /*width: 35%;*/
  padding-left: 10px;
  /*padding: 10px;*/
  /*float: right;*/
  /*top: 0;*/

}
  .note{
    position: relative;
    display: inline-block !important;
    float: right;
    padding: 10px;
    width: 60%;
    /*top: 0;*/
  }
  article header{
    position: relative;
    padding: 10px;
  }
  article a{
    text-decoration: none;
    color: black;
  }
  article a:hover{
    color: green;
  }
  header > h3{
    margin: 0;
    display: inline-block;

  }
header > a{
  font-size: 20px;
  padding-right: 20px ;
  display: inline-block;
}

  .auth-span{
    display:inline-block;
    position: relative;
    bottom: 10px;
    width: 100%;
  }
  .auth-span p{
    position: relative;

    float: right;
    /*padding: 3px;*/
    margin: 0px;
    text-align: center;
  }
  .muted{
    padding-left:10px ;
    padding-right:10px ;
  }
</style>
