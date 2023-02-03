import {
  login,
  logout,
  getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter,
  asyncRoutes
} from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: ""
  }
}
const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLS: (state, roles) => {
    state.roles = roles
  },
    //最终计算出的异步路由
    SET_RESULTASYNCROUTES:(state,asyncRoutes)=>{
      //vuex保存当前用户的异步路由，注意，一个用户需要展示完成路由：常量、异步、任意路由
      state.resultAsyncRoutes = asyncRoutes;
      //计算出当前用户需要展示所有路由
      state.resultAllRputes = constantRoutes.concat(state.resultAsyncRoutes,anyRoutes);
      //给路由器添加新的路由
       router.addRoutes(state.resultAllRputes)
   }
}

const actions = {
  // 登录相关的函数
  async login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    const data = await login({
      username: username.trim(),
      password: password
    });
    if (data.code == 20000) {
      commit('SET_TOKEN', data.data.token)
      setToken(data.data.token)
    }
  },

  // 获取相关消息的操作
  async getInfo({
    commit,
    state
  }) {
    const response = await getInfo(state.token);
    const {
      data
    } = response;
    if (!data) {
      return new Error("暂无当前用户信息")
    }
    const {
      name,
      avatar,
      roles
    } = data
    commit('SET_NAME', name)
    commit('SET_AVATAR', avatar)
    commit('SET_ROLS', roles[0])
    commit('SET_RESULTASYNCROUTES',computedAsyncRoutes(cloneDeep(asyncRoutes),data.routes));
  },

  // 退出相关的函数
  async logout({
    commit,
    state
  }) {
    const data = await logout(state.token);
    if (data.code == 20000) {
      removeToken() // 必须先清除token的值再进行退出
      resetRouter()
      commit('RESET_STATE')
    }
  },

  // 清除token的操作
  async resetToken({
    commit
  }) {
    removeToken()
    commit('RESET_STATE')
  }
}
//定义一个函数：两个数组进行对比，对比出当前用户到底显示哪些异步路由
const computedAsyncRoutes = (asyncRoutes,routes)=>{
  //过滤出当前用户【超级管理|普通员工】需要展示的异步路由
 return asyncRoutes.filter(item=>{
      //数组当中没有这个元素返回索引值-1，如果有这个元素返回的索引值一定不是-1 
     if(routes.indexOf(item.name)!=-1){
       //递归:别忘记还有2、3、4、5、6级路由
       if(item.children&&item.children.length){
           item.children = computedAsyncRoutes(item.children,routes);
       }
       return true;
     }
  })
}
const getters = {
  roles(state) {
    return state.roles;
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
