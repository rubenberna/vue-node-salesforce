import api from './api'

const state = {
  contracts: null,
  signed: false,
  autograph: null,
  currContract: null,
  deletedContract: null
}

const getters = {
  contracts: state => state.contracts,
  signed: state => state.signed,
  autograph: state => state.autograph,
  currContract: state => state.currContract
}

const actions = {
  async getContracts({ commit }) {
    const response = await api.getContracts();
    commit('setContracts', response)
  },
  storeSignature({commit}, signature) {
    commit('setAutograph', signature)
  },
  async createContract({ commit }, finalContract) {
    commit("setSigned", true);
    api.addContract(finalContract)
  },
  async findContract({commit}, id) {
    const response = await api.findContract(id)
    commit('setCurrContract', response)
  },
  sendEmail({commit}, payload) {
    const response = api.sendEmail(payload);
    console.log(response);
  },
  // Add/update email to Salesforce
  addEmail({ rootState }, email) {
    const contact = {
      id: rootState.contact.contact.Id,
      email: email
    }
    api.addEmail(contact)
  },
  async deleteContract({commit}, id) {
    const response = await api.delete(id)
    commit( 'setDeletedContract', response )
  }
}

const mutations = {
  setContracts: (state, list) => {
    state.contracts = list
  },
  setSigned: (state, boolean) => {
    state.signed = boolean
  },
  setAutograph: (state, data) => {
    state.autograph = data
  },
  setCurrContract: (state, contract) => {
    state.currContract = contract
  },
  setDeletedContract: (state, contract) => {
    state.deletedContract = contract
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
