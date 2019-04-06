import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
    }]
  }

]

export default new Router({
  base: '/JHJC',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/supplierManager',
    component: Layout,
    redirect: '/supplierManager/index',
    meta: {
      icon: 'table',
      roles: ['buyer', 'supplier']
    },
    children: [
      {
        path: 'index',
        name: 'supplierManager',
        component: () => import('@/views/supplierManager/index'),
        meta: { title: 'supplierManager', icon: 'form' }
      }
    ]
  },
  {
    path: '/buyerTable',
    component: Layout,
    name: 'Table',
    meta: {
      icon: 'table',
      roles: ['buyer']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/buyerTable'),
        name: 'orderManger',
        meta: { title: 'orderManger' }
      }
    ]
  },
  {
    path: '/supplierTable',
    component: Layout,
    // redirect: '/table/index',
    name: 'Table',
    meta: {
      icon: 'table',
      roles: ['supplier']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/supplierTable'),
        meta: { title: 'orderManger' }
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
