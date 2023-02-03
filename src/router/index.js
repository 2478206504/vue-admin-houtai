/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },

  {
    path: '/',
    redirect: "dashboard",
    component: Layout,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '系统首页',
        icon: 'dashboard'
      }
    }, ]
  },
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: 'table',
  //   meta: {
  //     title: "表格相关",
  //     icon: 'form'
  //   },
  //   children: [{
  //     path: 'changyong',
  //     name: 'Changyong',
  //     component: () => import('@/views/tables/changyong/index.vue'),
  //     meta: {
  //       title: '常用表格',
  //     },
  //   }, {
  //     path: 'daochu',
  //     name: 'Daochu',
  //     component: () => import('@/views/tables/daochu/index.vue'),
  //     meta: {
  //       title: '导出表格',
  //     },
  //   }, {
  //     path: 'daoru',
  //     name: 'Daoru',
  //     component: () => import('@/views/tables/daoru/index.vue'),
  //     meta: {
  //       title: '导入表格',
  //     },
  //   }, ]
  // },
  // {
  //   path: '/tabs',
  //   component: Layout,
  //   // component: () => import('@/views/tags/index.vue'),
  //   children: [{
  //     path: 'tabs',
  //     name: 'tags',
  //     component: () => import('@/views/tags/index.vue'),
  //     meta: {
  //       title: 'Tab选项卡',
  //       icon: 'tab'
  //     },
  //   }]
  // },
  // {
  //   path: "/forms",
  //   component: Layout,
  //   meta: {
  //     title: "表单相关",
  //     icon: "table"
  //   },
  //   children: [{
  //       path: 'jiben',
  //       component: () => import('@/views/forms/jiben/index.vue'),
  //       meta: {
  //         title: "基本表单",
  //       }
  //     },
  //     {
  //       path: 'upload',
  //       component: () => import('@/views/forms/upload/index.vue'),
  //       meta: {
  //         title: "上传表单",
  //         // icon: "dashboard"
  //       }
  //     },
  //     {
  //       path: 'fuw',
  //       name: "fff",
  //       component: () => import('@/views/forms/fuwenben/index.vue'),
  //       meta: {
  //         title: "富文本编辑器",
  //         // icon: "dashboard"
  //       }
  //     },
  //     {
  //       path: 'mark',
  //       component: () => import('@/views/forms/mark/index.vue'),
  //       meta: {
  //         title: "markdown编辑器",
  //         // icon: "dashboard"
  //       }
  //     }

  //   ]
  // },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [{
  //     path: 'icons',
  //     name: 'icons',
  //     component: () => import('@/views/Icon/index.vue'),
  //     meta: {
  //       title: 'Icon图标',
  //       icon: 'icon'
  //     },
  //   }]
  // },
  // {
  //   path: '/quanx',
  //   component: Layout,
  //   children: [{
  //     path: 'qqqq',
  //     name: 'qqq',
  //     component: () => import('@/views/quanxian/index.vue'),
  //     meta: {
  //       title: '权限管理',
  //       icon: 'password'
  //     },
  //   }]
  // },
]
//异步理由:不同的用户（角色），需要过滤筛选出的路由，称之为异步路由
//有的用户可以看见测试管理、有的看不见
export const asyncRoutes = [{
    path: '/icon',
    component: Layout,
    children: [{
      path: 'icons',
      name: 'icons',
      component: () => import('@/views/Icon/index.vue'),
      meta: {
        title: 'Icon图标',
        icon: 'icon',
        role: ['admin', 'super_editor']
      },
    }]
  },
  {
    path: '/quanx',
    component: Layout,
    children: [{
      path: 'qqqq',
      name: 'qqq',
      component: () => import('@/views/quanxian/index.vue'),
      meta: {
        title: '权限管理',
        icon: 'password'
      },
    }]
  },
  {
    path: '/table',
    component: Layout,
    redirect: 'table',
    meta: {
      title: "表格相关",
      icon: 'form'
    },
    children: [{
      path: 'changyong',
      name: 'Changyong',
      component: () => import('@/views/tables/changyong/index.vue'),
      meta: {
        title: '常用表格',
      },
    }, {
      path: 'daochu',
      name: 'Daochu',
      component: () => import('@/views/tables/daochu/index.vue'),
      meta: {
        title: '导出表格',
      },
    }, {
      path: 'daoru',
      name: 'Daoru',
      component: () => import('@/views/tables/daoru/index.vue'),
      meta: {
        title: '导入表格',
      },
    }, ]
  },
  {
    path: '/tabs',
    component: Layout,
    // component: () => import('@/views/tags/index.vue'),
    children: [{
      path: 'tabs',
      name: 'tags',
      component: () => import('@/views/tags/index.vue'),
      meta: {
        title: 'Tab选项卡',
        icon: 'tab'
      },
    }]
  },
  {
    path: "/forms",
    component: Layout,
    meta: {
      title: "表单相关",
      icon: "table"
    },
    children: [{
        path: 'jiben',
        component: () => import('@/views/forms/jiben/index.vue'),
        meta: {
          title: "基本表单",
        }
      },
      {
        path: 'upload',
        component: () => import('@/views/forms/upload/index.vue'),
        meta: {
          title: "上传表单",
          // icon: "dashboard"
        }
      },
      {
        path: 'fuw',
        name: "fff",
        component: () => import('@/views/forms/fuwenben/index.vue'),
        meta: {
          title: "富文本编辑器",
          // icon: "dashboard"
        }
      },
      {
        path: 'mark',
        component: () => import('@/views/forms/mark/index.vue'),
        meta: {
          title: "markdown编辑器",
          // icon: "dashboard"
        }
      }

    ]
  },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
