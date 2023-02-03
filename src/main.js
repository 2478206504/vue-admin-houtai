import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // 引入的是element-ui的英文包
import locale from 'element-ui/lib/locale/lang/zh-CN' //引入的是element-ui的中文包

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import {
  mapActions
} from 'vuex'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import * as echarts from 'echarts'; //引入echarts
Vue.prototype.$echarts = echarts;

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const {
    mockXHR
  } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, {
  locale
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// router.beforeEach((to, from, next) => {
//   if (store.getters.token) { // 判断是否有token
//     if (to.path === '/login') {
//       next({
//         path: '/'
//       });
//     } else {
//       // store.getters.roles.length === 0
//       if (true) { // 判断当前用户是否已拉取完user_info信息
//         console.log(store.dispatch('user.getInfo'));
//         // const a = ...mapActions("user/getInfo");
//         store.dispatch('user/getInfo').then(res => { // 拉取info
//           console.log(res);
//           const roles = res.data.role;
//           store.dispatch('GenerateRoutes', {
//             roles
//           }).then(() => { // 生成可访问的路由表
//             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             next({
//               ...to,
//               replace: true
//             }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//           })
//         }).catch(err => {
//           console.log(err);
//         });
//       } else {
//         next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next();
//     } else {
//       next('/login'); // 否则全部重定向到登录页
//     }
//   }
// });
