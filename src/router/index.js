import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Ctype from '@/components/pages/Ctype'
import News from '@/components/pages/News'
import Support from '@/components/pages/Map.vue'
import Map from '@/components/pages/Map.vue'
import login from '@/components/pages/login/Login.vue'
import demo1 from '@/components/pages/Demo1.vue'
import js from '@/components/pages/Jieshao.vue'
import data from '@/components/pages/Detailed.vue'
import mu from '@/components/pages/Mu.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type',
      name: 'Ctype',
      component: Ctype
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/js/:name',
      name: 'js',
      component: js
    },
    {
      path:'/data/:carid',
      name: 'data',
      component:data
    },
    {
      path:'/mu',
      name: 'mu',
      component:mu
    },
    {
      path:'/login',
      name: 'login',
      component:login
    },
    {
      path:'/demo1',
      name: 'demo1',
      component:demo1
    }
  ]
})
