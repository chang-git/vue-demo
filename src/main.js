// 入口文件
console.log('OK')
//导入vue
import Vue from "vue";

//导入路由的包
import VueRouter from "vue-router";
  //安装路由
  Vue.use(VueRouter);

import VueResource from "vue-resource";
Vue.use(VueResource);

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
// 按需导入 Mint-UI 中的组件   
import { Header,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//导入自己的router
import router from './router.js';

//导入app根组件
import app from './App.vue'
 var vm = new Vue({
     el:'#app',
     render: c => c(app),
     router 
 })

//
