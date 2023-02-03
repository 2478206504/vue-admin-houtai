const state = {
  quanxian: JSON.parse(localStorage.getItem('quanxian')) || [],
  // quanxian:[]
}

const actions = {
  updataQuanxian: ({
    state
  }, [a, b]) => {
    const {
      quanxian
    } = state
    quanxian[b] = a;
    localStorage.setItem('quanxian', JSON.stringify(Object.assign({}, quanxian)))
  },
}
const getters = {
  abcd(state) {
      return JSON.parse(JSON.stringify(state.quanxian))
      // return 1;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters
}
