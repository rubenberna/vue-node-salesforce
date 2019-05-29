import moment from 'moment'
import api from './api'

const state = {
  contracts: null,
  signed: false,
  currContract: null,
  deletedContract: null
}

const getters = {
  contracts: state => state.contracts,
  signed: state => state.signed,
  currContract: state => state.currContract
}

const actions = {
  async getContracts({ commit }) {
    const response = await api.getContracts();
    commit('setContracts', response)
  },
  async createContract({ commit, rootState }) {
    const { contact } = rootState.contact
    const { contractForm } = rootState.contractForm
    
    const finalContract = {
      name: contact.Name,
      email: contact.Email,
      externalId: contact.External_Id__c,
      regioId: contact.RegioId__c || 'not provided',
      office: contact.office.name || 'EasyLife',
      signature: contractForm.signature,
      signedAt: new Date(),
      ipAddress: contractForm.ipAddress || 'not provided',
      contractVersion: '1',
      typedName: contractForm.typedName,
      signedTime: moment(Date.now()).format('h:mm:ss a'),
      street: contact.MailingAddress.street || 'not provided',
      postalCode: contact.MailingAddress.postalCode || 'not provided',
      city: contact.MailingAddress.city || 'not provided',
      id: contact.Id
    }
    api.addContract(finalContract)
  },
  async findContract({ commit }, id) {
    const response = await api.findContract(id)
    commit('setCurrContract', response)
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
