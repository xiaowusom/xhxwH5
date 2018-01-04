import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/pages/test1'
import doorCard from '@/pages/doorCard'
import management from '@/pages/management'
import authorization from '@/pages/authorization'
import project from '@/pages/project'
import entranceGuard from '@/pages/entranceGuard'
import activateCard from '@/pages/activateCard'
import projectEmpower from '@/pages/projectEmpower'
import callerInvite from '@/pages/callerInvite'
import doorEmpower from '@/pages/doorEmpower'
import callerNodepad from '@/pages/callerNodepad'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test1',
      component: test1
    },
    {
      path: '/doorCard',
      name: 'doorCard',
      component: doorCard
    },
    {
      path: '/management',
      name: 'management',
      component: management
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: authorization
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/entranceGuard',
      name: 'entranceGuard',
      component: entranceGuard
    },{
      path: '/activateCard',
      name: 'activateCard',
      component: activateCard
    },
    //二维码访客邀请
    {
      path: '/projectEmpower',
      name: 'projectEmpower',
      component: projectEmpower
    },
    {
      path: '/callerInvite',
      name: 'callerInvite',
      component: callerInvite
    },
    {
      path: '/doorEmpower',
      name: 'doorEmpower',
      component: doorEmpower
    },
    {
      path: '/callerNodepad',
      name: 'callerNodepad',
      component: callerNodepad
    },
  ]
})
