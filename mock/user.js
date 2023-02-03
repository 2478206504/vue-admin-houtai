const tokens = {
  admin: {
    token: 'super'
  },
  admin2: {
    token: 'vip'
  },
  admin3: {
    token: "user"
  }
}

const users = {
  'super': {
    roles: ['admin'],
    introduction: '超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'vip': {
    roles: ['admin2'],
    introduction: 'vip用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'vip Editor'
  },
  'user': {
    roles: ['admin3'],
    introduction: '用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'user Admin'
  },
}

module.exports = [
  // 用户登录
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const {
        username
      } = config.body
      const token = tokens[username]

      // 数据错误
      if (!token) {
        return {
          code: 60204,
          message: '你的账号或者密码出现错误'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // 获取用户信息
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const {
        token
      } = config.query
      const info = users[token]
      // mock数据错误的时候
      if (!info) {
        return {
          code: 50008,
          message: '你的账号或者密码出现错误'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // 用户退出
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
