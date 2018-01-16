import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Login from '@/components/login'
import Doc from '@/view/backend/doc'
import Project from '@/view/backend/project'
import Workbench from '@/view/backend/workbench'
import Layout from '@/view/layout'

Vue.use(Router)

var router =  new Router({
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
          component:Doc
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
          component:Project,
          meta:{
            login:true
          }
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

router.beforeEach(function(to,from,aaa){
    var path = to.path;
    if(to.meta.login){
      let info = router.app.$local.fetch("miaov");
      if(info.isLogin == undefined){
        router.push({
          path:"/login",
          query:{
            redirect:path.substr(1)
          }
        });
      }
    }
    aaa();
})

export default router
