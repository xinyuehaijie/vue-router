import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Login from '@/components/login'
import Doc from '@/view/backend/doc'
import Project from '@/view/backend/project'
import Workbench from '@/view/backend/workbench'
import Layout from '@/view/layout'

Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"is-active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/management",
      name:"Management",
      component:Layout,
      children:[
        {
          path:"/doc",
          component:Doc,
          meta:{
            login:true
          }
        },
        {
          path:"/workbench",
          component:Workbench,
          meta:{
            login:true
          }
        },
        {
          path:"/project",
          component:Project
        },
      ]
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:'/',
      component:Home
    }
  ]
})
