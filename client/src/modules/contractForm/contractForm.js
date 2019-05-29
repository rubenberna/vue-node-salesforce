const state = {
  contractForm: {
    checkBoxOne: false,
    checkBoxTwo: false,
    checkBoxThree: false,
    typedName: null,
    signature: null,
    ipAddress: null,
    signed: false
  }
}

const getters = {
  contractForm: state => state.contractForm
}

const actions = {
  updateForm({ commit }, { name, inputValue}) {    
    const change = {}
    change[name] = inputValue
    commit('setForm', change )
  },
  clearForm({ commit }) {
    commit('')
  }
}

const mutations = {
  setForm: (state, change ) => {
    state.contractForm = { ...state.contractForm, ...change}
  },
  resetForm: (state) => {
    state.contractForm = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
