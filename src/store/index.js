import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelCadastro: false
  },
  mutations: {
    abrirModelCadastro (state, value) {
      state.modelCadastro = value
    }
  }
})
