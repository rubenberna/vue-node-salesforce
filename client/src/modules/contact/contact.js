import api from './api'
import otherApi from '../contracts/api'
import { searchOffice } from '@/components/_helpers/findOffice'

const state = {
  contact: null,
  all: null,
}

const getters = {
  contact: state => state.contact,
  allDB: state => state.all,
}

const actions = {
  async searchID({ commit, dispatch }, dplanId) {
    commit('setContact', null)
    dispatch('changeLoading', true, { root: true })
    const contact =  await api.searchID(dplanId)    
    if (contact !== 'not_found') {
      commit('setContact', contact)
      if (contact.language_lead__c) {
        dispatch('getLocale', contact.language_lead__c, { root: true })
      } 
      dispatch('getOffice', contact.RegioId__c)
    }
    setTimeout(function() { dispatch('changeLoading', false, { root: true })}, 1500)
  },
  clear({commit, dispatch}) {
    commit('setContact', null)
    commit('setCurrContract', null, {root: true})
    dispatch('createFlash', {msg: 'Gebruikersgegevens gewist', type: 'warning'}, {root: true})
  },
  getOffice({ commit }, id) {
    const name = searchOffice(id)
    const office = name
    commit('setOffice', office)
  },
  async getAll({ commit }) {
    const response = await otherApi.getContracts()
    commit('setAll', response)
  }
}

const mutations = {
  setContact: (state, contact) => {
    state.contact = contact
  },
  setOffice: (state, office) => {
    state.contact.office = office
  },
  setAll: (state, list) => {
    state.all = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
