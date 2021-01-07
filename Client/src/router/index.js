import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Checkout from '@/components/Checkout'
import LessonsList from '@/components/LessonsList'

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
    {
      path: '/LessonsList',
      name: 'LessonsList',
      component: LessonsList
    },
  ]
})
