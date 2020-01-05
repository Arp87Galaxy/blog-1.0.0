// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import Axios from 'axios'
import marked from 'marked'
import lodash from 'lodash'
import './assets/less/style.less'
import './assets/css/blog-ui-common.css'


import Input from "./components/commons/Input";
import Button from "./components/commons/Button";



import App from './App'
import MenuComponent from "./components/Menu/MenuComponent"
import Header from "./components/Header/Header";
import Hgroup from "./components/Header/Hgroup";
import Nav from "./components/Header/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Section from "./components/Main/Section";
import Aside from "./components/Main/Aside";
import Article from "./components/Main/Article";
import Edit from "./components/Edit/Edit";
import DetailArticle from "./components/DetailArticle/DetailArticle";

// Axios.defaults.baseURL='http://192.168.5.111:8888/'

Vue.prototype.$https=Axios
Vue.config.productionTip = false
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)





Vue.component(MenuComponent.name,MenuComponent)
Vue.component(Header.name,Header)
Vue.component(Hgroup.name,Hgroup)
Vue.component(Nav.name,Nav)
Vue.component(Footer.name,Footer)
Vue.component(Main.name,Main)
Vue.component(Aside.name,Aside)
Vue.component(Section.name,Section)
Vue.component(Article.name,Article)
Vue.component(Edit.name,Edit)
Vue.component(DetailArticle.name,DetailArticle)

/* eslint-disable no-new */
new Vue({
  el: '#page',
  router,
  components: { App },
  template: `
                   <App/>  
    `
})
