import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    alias: ['/modules'],
    name: 'Modules',
    title: 'Учебные модули',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modules.vue')
  },
  {
    path: '/modules/:id',
    alias: ['/modules/new-module'],
    name: 'ModuleMainPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModuleMainPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
