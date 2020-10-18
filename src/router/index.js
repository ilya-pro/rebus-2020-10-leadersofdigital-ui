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
    path: '/modules/:id', // '/modules/new-module'
    //redirect: '/modules/:id/common',
    //redirect: { name: 'ModuleMainPage', params: { id: ':id', detail: 'common' } },
    redirect: to => {
      return to.path + '/common'
    }
  },
  {
    path: '/modules/:id/:detail', // '/modules/new-module'
    //alias: ['/modules/:id/:detail'], ///modules/:id/common', '/modules/:id/scheme'
    name: 'ModuleMainPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModuleMainPage.vue')
  },
  {
    path: '/modules/:id/task/:taskId', // '/modules/:id/task/new-task'
    name: 'TaskPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskPage.vue')
  },
  {
    path: '/modules/:id/level/:levelId', // '/modules/:id/level/new-level'
    name: 'LevelPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LevelPage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
