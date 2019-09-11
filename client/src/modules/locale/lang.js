import i18n from '@/plugins/i18n';

const state = {
  locale: window.navigator.language === 'fr' ? 'fr' : 'nl'
}

const getters = {
  locale: state => state.locale
}

const actions = {
  getLocale({ commit }, lang) {
    commit('setLocale', lang)
    i18n.locale = lang
  },
  changeLocale({ commit }, language) {
    commit('setLocale', language.toLowerCase())
    i18n.locale = language.toLowerCase()
  }
}

const mutations = {
  setLocale: (state, lang) => {
    state.locale = lang
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
