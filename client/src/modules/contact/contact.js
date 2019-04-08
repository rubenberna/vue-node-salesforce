import api from './api'
import { searchOffice } from '@/components/_helpers/findOffice'

const state = {
  contact: null
}

const getters = {
  contact: state => state.contact
}

const actions = {
  async searchID({ commit, dispatch }, dplanId) {
    commit('setContact', null)
    dispatch('changeLoading', true, { root: true })
    const contact =  await api.searchID(dplanId)
    if (contact) {
      commit('setContact', contact)
      dispatch('getOffice', contact.RegioId__c)
      if (contact.Signed_Contract__c) {
        dispatch('findContract', contact.External_Id__c)
      }
    }
    setTimeout(function() { dispatch('changeLoading', false, { root: true })}, 1500)
  },
  clear({commit, dispatch}) {
    commit('setContact', null)
    commit('setSigned', false, {root: true})
    commit('setAutograph', null, {root: true})
    commit('setCurrContract', null, {root: true})
    dispatch('createFlash', {msg: 'Gebruikersgegevens gewist', type: 'warning'}, {root: true})
  },
  getOffice({ commit }, id) {
    const name = searchOffice(id)
    const office = name
    commit('setOffice', office)
  }
}

const mutations = {
  setContact: (state, contact) => {
    state.contact = contact
  },
  setOffice: (state, office) => {
    state.contact.office = office
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
