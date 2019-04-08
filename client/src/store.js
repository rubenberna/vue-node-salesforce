import Vue from 'vue'
import Vuex from 'vuex'
import contracts from '@/modules/contracts/contracts'
import contact from '@/modules/contact/contact'
import flash from '@/modules/flash/flash'
import loading from '@/modules/loading/loading'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contracts,
    contact,
    flash,
    loading,
  },
  //persist state for page reload
  plugins: [createPersistedState({
    paths: []
    })
  ],
})
