<template>

  <div class="editpage container-fluid">
    <Header>
      <Hgroup></Hgroup>
      <Nav></Nav>
    </Header>
    <div class="button">
      <Input placeholder="标题"></Input>
      <Input placeholder="概述"></Input>
      <Input placeholder="分类"></Input>
    </div>
    <div id="editor">


      <textarea :value="input" @input="update"></textarea>
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
                input: '# hello'
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, { sanitize: true })
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.input = e.target.value
            }, 300)
        }
    }
</script>

<style>
  html, body, .editpage{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    text-align: center ;
  }
  .button{
    position: relative;
    padding-top:50px ;
    padding-bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    text-align: center ;
  }
  #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    /*background-color: rgba(0,0,0,0.3);*/
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid 	black;
    resize: none;
    outline: none;
    background-color: rgba(0,0,0,0.1);
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }

</style>
