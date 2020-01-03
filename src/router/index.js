import Vue from 'vue'
import Router from 'vue-router'
import App from "../App";
import Nav from "../components/Header/Nav";
import Edit from "../components/Edit/Edit";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'App'},
    },{
      path: '/main',
      name:'App',
      component: App
    },{
      path:'/nav',
      name:'Nav',
      component:Nav
    },
    {
      path:'/postedit',
      name:'Edit',
      component:Edit
    }
  ]
})
