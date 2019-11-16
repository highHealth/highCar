import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Ctype from '@/components/pages/Ctype'
import News from '@/components/pages/News'
import Support from '@/components/pages/Support.vue'
import Map from '@/components/pages/Map.vue'
import js from '@/components/pages/Jieshao.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    }
  ]
})
