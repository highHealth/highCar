import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Ctype from '@/components/pages/Ctype'
import Music from '@/components/pages/Music'
import Support from '@/components/pages/Support.vue'

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
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/support',
      name: 'Support',
      component: Support
    }
  ]
})
