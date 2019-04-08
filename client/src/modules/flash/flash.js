const state = {
  flash: {}
}

const getters = {
  flashSticker: state => state.flash
}

const actions = {
  createFlash({ commit }, flash) {
    commit('setFlash', null)
    commit('setFlash', flash)
  }
}

const mutations = {
  setFlash: (state, flash) => {
    state.flash = flash
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
