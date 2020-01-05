import Vue from 'vue'
import Router from 'vue-router'
import App from "../App";
import Nav from "../components/Header/Nav";
import Edit from "../components/Edit/Edit";
import DetailArticle from "../components/DetailArticle/DetailArticle";
import Main from "../components/Main/Main";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:'Main',
      component: Main
    },{
      path:'/nav',
      name:'Nav',
      component:Nav
    },
    {
      path:'/post_edit',
      name:'Edit',
      component:Edit
    },
    {
      path:'/detail_article',
      name:'DetailArticle',
      component:DetailArticle
    }
  ]
})
