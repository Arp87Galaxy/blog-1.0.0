<template>
  <hgroup>
    <h3>ArpGalaxy--周末的个人博客</h3>
    <h5>ArpGalaxy,阿尔普87星系是一个合并星系,此个人博客记载了博主的个人的成长像arp87一样，慢慢兼并知识。
      展现了博主积累技术和经验的过程，以归档的形式和笔记的形式展现给大家</h5>
  </hgroup>
</template>
<script>
  export default {
      name:'Hgroup',
      data(){
          return{

          }
      }
  }
</script>
<style>
hgroup{
  position: relative;
}
  h3{
    font-size: 24px;
  }
  h5{
    font-size: 14px !important;
  }
  h3,h5{
    font-family: inherit;
    font-weight: 500 ;
    line-height: 1.1;
    color: inherit;
  }
</style>
