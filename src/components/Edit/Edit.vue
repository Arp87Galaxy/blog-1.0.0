<template>

  <div class="editpage">
<!--    <Header>-->
<!--      <Hgroup></Hgroup>-->
<!--      <Nav></Nav>-->
<!--    </Header>-->
    <div class="button">
      <input v-model="articleTitle" placeholder="标题"></input>
      <input v-model='overview' placeholder="概述"></input>
      <label id='label1'  for="category">分类：</label>
      <select v-model="category" id="category">
        <option value="计算机网络">计算机网络</option>
        <option value="Linux">Linux</option>
        <option value="数据结构">数据结构</option>
        <option value="C语言">C语言</option>
        <option value="其他">其他</option>

      </select>

      <button @click="commitArticle()">提交</button>
    </div>
    <div id="editor">
      <textarea :value="textarea" @input="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>

  </div>
</template>

<script>
    import marked from 'marked'
    import lodash from 'lodash'
    export default {
        name: "Edit",
        data(){
            return{
                articleTitle: '',
                overview:'',
                category:'',
                textarea:'',
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.textarea, { sanitize: true })
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.textarea = e.target.value
            }, 300),
            commitArticle(){
                this.$https({
                    method:'post',
                    url:'http://192.168.5.111:8888/v1/article',
                    data:{
                        textarea:this.textarea,
                        articleTitle:this.articleTitle,
                        overview:this.overview,
                        category:this.category
                    },
                    // param:{
                    //     textarea:this.textarea,
                    //     articleTitle:this.articleTitle,
                    //     overview:this.overview,
                    //     category:this.category
                    // }
                }).then((data)=>{
                    alert(data)
                }).catch((err)=>{
                    alert(err)

                })
            }
        }
    }
</script>

<style>
  .editpage{
    position: relative;
  }


  #label1{
    position: relative;
    width: 60px;
    height: 100%;
  }
   .editpage{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,1);
    text-align: center ;
  }
  .button{
    position: relative;
    height: 30px;
    padding-top:50px ;
    padding-bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    text-align: center ;
  }
  #editor {
    margin: 0;
    height: 80%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    overflow-y:scroll ;
    overflow-x:hidden ;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    /*background-color: rgba(0,0,0,0.3);*/
    float: left;
    padding: 0;
  }
  #editor div{
    float: right;
  }
  textarea {
    border: none;
    border-right: 1px solid 	black;
    padding-right: 12px;
    resize: none;
    outline: none;
    background-color: rgba(0,0,0,0.1);
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
  }

  code {
    color: #f66;
  }

</style>
