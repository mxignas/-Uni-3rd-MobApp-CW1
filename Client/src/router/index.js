import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ]
})
