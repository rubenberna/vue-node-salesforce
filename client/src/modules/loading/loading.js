const state = {
  status: false
}

const getters = {
  loading: state => state.status
}

const actions = {
  changeLoading({ commit }, boolean) {
    commit('setStatus', boolean)
  }
}

const mutations = {
  setStatus: (state, boolean) => {
    state.status = boolean
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
