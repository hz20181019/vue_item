import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('./views/Home.vue')//路由懒加载 
    },
    {
      path: '/list',
      name: 'list',
      component:()=>import('./views/List.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component:()=>import('./views/Detail.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component:()=>import('./views/Profile.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component:()=>import('./views/Cart.vue')
    },
    //配置vant
    {
      path: '/vant',
      name: 'vant',
      component:()=>import('./views/Vant.vue')
    },
    // 重定向 后面可以任意输入还会回到首页
    {
      path:"/*",
      redirect:"/"
    }
    

   
  ]
})