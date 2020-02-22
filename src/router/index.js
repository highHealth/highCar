import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Ctype from '@/components/pages/Ctype'
import News from '@/components/pages/News'
import Support from '@/components/pages/Map.vue'
import Map from '@/components/pages/Map.vue'   // 售后和地图页
import login from '@/components/pages/login/Login.vue'
import demo1 from '@/components/pages/Demo1.vue'
import js from '@/components/pages/Jieshao.vue'
import data from '@/components/pages/Detailed.vue'
import mu from '@/components/pages/Mu.vue'
import nd from '@/components/pages/NData.vue'
import OfficialWX from '@/components/pages/OfficialWX.vue'  // 官方微信
import BrandStory from '@/components/pages/BrandStory.vue'  // 品牌文化
import Login from '@/components/pages/login/Login.vue'      // 登陆
import Registr from '@/components/pages/login/Registr.vue'  // 注册
import error from '@/components/pages/404.vue'  // 404

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
      path: '/js/Car/',
      component:js
    },
    {
      path:'/data/:carid',
      name: 'data',
      component:data
    },
    {
      path:'/nd/:newsid',
      name: 'nd',
      component:nd
    },
    {
      path:'/mu',
      name: 'mu',
      component:mu
    },
    {
      path:'/login',
      name: 'Login',
      component:Login
    },
    {
      path:'/registr',
      name: 'Registr',
      component:Registr
    },
    {
      path:'/demo1',
      name: 'demo1',
      component:demo1
    },
    {
      path:'/officialWX',
      name: 'OfficialWX',
      component:OfficialWX
    },
    {
      path:'/brandStory',
      name: 'BrandStory',
      component:BrandStory
    },
    {
      path:'/error',
      component:error
    },
    {
      path: '*', // 404 页面
      redirect:'/error'
    }
  ]
})
